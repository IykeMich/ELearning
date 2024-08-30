import Link from 'next/link'
import React from 'react'
import IoMdMenu, { IoIosMenu } from 'react-icons/io'

const NavbarLinks = [
    { id: 1, title: "Home", path: "/" },
    { id: 2, title: "Services", path: "#" },
    { id: 3, title: "About Us", path: "#" },
    { id: 4, title: "Our Team", path: "#" },
    { id: 5, title: "Contact Us", path: "#" },
  ]

const Navbar = () => {
  return (
    <nav className="relative z-20">
    <div className="container py-10 flex justify-between items-center">
        {/* Logo */}
        <div className="font-bold text-2xl">
            <h1> The Coding Journey </h1>
        </div>

        {/* Links */}
        <div className="hidden lg:block">
            <ul className="flex items-center gap-3">
                {NavbarLinks.map((link) => (
                    <li key={link.id}>
                        <Link href={link.path} 
                        className='inline-block py-2 px-3 hover:text-secondary relative group'>
                        <div className="w-2 h-2 bg-secondary absolute mt-2 rounded-full
                        left-1/2 -translate-x-1/2 top-1/2 bottom-0 group-hover:block hidden">
                        </div>
                            {link.title}
                        </Link>
                    </li>
                ))}
                <button className='primary-btn'>
                    Sign In
                </button>
            </ul>
        </div>

        {/* Hamburger for mobile screebs */}
        <div className="lg:hidden">
            <IoIosMenu className='text-4xl' />
        </div>
    </div>
    </nav>
  )
}

export default Navbar