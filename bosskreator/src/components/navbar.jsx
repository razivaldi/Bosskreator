import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const menuItems = [
  {
    title: "Home",
    path: "/"
  },
  {
    title: "About",
    path: "/about"
  },
  {
    title: "Product",
    path: "/product"
  }
]

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="navbar absolute top-0 w-[90%]">
      <div className="navbar-start">
        <Link href='/'>
          <Image src="/logo.png" alt="logo" width={100} height={100} priority />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal gap-x-20">
          {menuItems.map((item, index) => (
            <li key={index}><Link href={item.path}>{item.title}</Link></li>
          ))}
        </ul>
      </div>
      <div className="navbar-end">
        <Link href='/'>
          <button className="btn btn-sm btn-ghost btn-active rounded-full hidden lg:block">Contact Us</button>
        </Link>
        <div className="dropdown dropdown-end">
          <button className="btn btn-ghost lg:hidden" onClick={() => setIsOpen(!isOpen)}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </button>
          {isOpen ? (<ul className="mt-3 z-[1] p-2 absolute menu  right-0 shadow bg-base-100 rounded-box w-52">
            {menuItems.map((item, index) => (
              <li key={index}><Link href={item.path}>{item.title}</Link></li>
            ))}
            <li><Link href={'/contact'}>Contact Us</Link></li>
          </ul>)
            : null
          }
        </div>
      </div>
    </div>
  )
};

export default Navbar;
