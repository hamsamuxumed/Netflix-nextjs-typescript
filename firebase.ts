// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCzhWjsieWTBzPpnEuSuvE5LY57S7oq2Ns',
  authDomain: 'netflix-cloneyy.firebaseapp.com',
  projectId: 'netflix-cloneyy',
  storageBucket: 'netflix-cloneyy.appspot.com',
  messagingSenderId: '391544794163',
  appId: '1:391544794163:web:94f3e1186a4dcd03090746',
}

// Initialize Firebase

// checking if app in not already initialized
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()

const db = getFirestore()

const auth = getAuth()

export default app

export { auth, db }
