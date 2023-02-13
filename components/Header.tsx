import { useEffect, useState } from 'react'
import { BellIcon, SearchIcon } from '@heroicons/react/solid'
import Link from 'next/link'
import useAuth from '../hooks/useAuth'
export const Header = () => {
  const [isScrolled, setScrolled] = useState(false)
  const { logout } = useAuth()

  // window scroll feature
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])
  return (
    <header className={`${isScrolled && 'bg-[#141414]'}`}>
      <div className="flex items-center space-x-2 md:space-x-10">
        <img
          src="https://rb.gy/ulxxee"
          width={100}
          height={100}
          className="cursor-pointer object-contain"
          alt="Netflix logo"
        />

        <ul className="hidden space-x-4 md:flex">
          <li className="headerLinks">Home</li>
          <li className="headerLinks">Series</li>
          <li className="headerLinks">Films</li>
          <li className="headerLinks">New & Popular</li>
          <li className="headerLinks">My List </li>
        </ul>
      </div>
      <div className="item-center txt-sm flex space-x-4 font-light">
        <SearchIcon className="hidden h-6 w-6 sm:inline" />
        <p className="hidden lg:inline">Kids</p>
        <BellIcon className=" h-6 w-6 " />
        {/* <Link href="/accounts"> */}
        <img
          onClick={() => logout()}
          src="https://rb.gy/g1pwyx"
          alt="pic of user avi"
          className="cursor-pointer rounded"
        />
        {/* </Link> */}
      </div>
    </header>
  )
}
