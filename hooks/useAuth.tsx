import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  User,
  signOut,
} from 'firebase/auth'
import { useRouter } from 'next/router'
import { createContext, useContext, useState, useEffect, useMemo } from 'react'
import { auth } from '../firebase'

interface AuthProviderProps {
  children: React.ReactNode
}

interface IAuth {
  user: User | null
  signIn: (email: string, password: string) => Promise<void>
  signOut: (email: string, password: string) => Promise<void>
  logout: () => Promise<void>
  loading: boolean
  error: string | null
}

const AuthContext = createContext<IAuth>({
  user: null,
  signIn: async () => {},
  signOut: async () => {},
  logout: async () => {},
  loading: false,
  error: null,
})

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const router = useRouter()
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [initialLoading, setInitialLoading] = useState(true)

  useEffect(
    () =>
      onAuthStateChanged(auth, (user) => {
        if (user) {
          setUser(user)
          setLoading(false)
        } else {
          setUser(null)
          setLoading(true)
          router.push('/login')
        }

        setInitialLoading(false)
      }),
    [auth]
  )

  const signUp = async (email: string, password: string) => {
    setLoading(true)
    await createUserWithEmailAndPassword(auth, email, password)
      .then((userCredentials) => {
        setUser(userCredentials.user)
        router.push('/')
        setLoading(false)
      })
      .catch((error) => alert(error.message))
      .finally(() => setLoading(false))
  }

  const signIn = async (email: string, password: string) => {
    setLoading(true)
    await signInWithEmailAndPassword(auth, email, password)
      .then((userCredentials) => {
        setUser(userCredentials.user)
        router.push('/')
        setLoading(false)
      })
      .catch((error) => alert(error.message))
      .finally(() => setLoading(false))
  }

  const logout = async () => {
    setLoading(true)

    signOut(auth)
      .then(() => {
        setUser(null)
        setLoading(false)
      })
      .catch((error) => alert(error.message))
      .finally(() => setLoading(false))
  }

  const memoedValue = useMemo(
    () => ({
      user,
      signIn,
      signOut,
      logout,
      error,
      loading,
    }),
    [user, loading, error]
  )

  return (
    <AuthContext.Provider value={memoedValue}>
      {!initialLoading && children}
    </AuthContext.Provider>
  )
}

export default function useAuth() {
  return useContext(AuthContext)
}
