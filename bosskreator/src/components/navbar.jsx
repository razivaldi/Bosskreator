import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { motion } from "framer-motion";

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

const sidebarVariants = {
  open: {
    x: 0,
    transition: {
      duration: 0.2
    }
  },
  closed: {
    x: "100vw"
  }
}

const sideBarItemsVariants = {
  open: {
    x: 0,
    opacity: 1,
    transition: {
      delay: 0.2
    }
  },
  closed: {
    x: '50px',
    opacity: 0
  }
}

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleSidebar = () => {
    setIsOpen(!isOpen)
    document.body.classList.toggle('sidebar-open');
  }

  return (
    <div className="navbar absolute top-0 w-[90%]">
      <div className="navbar-start">
        <Link href='/' style={{ zIndex: 999, position: "relative" }}>
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
        <div className="">
          <button className="btn relative btn-ghost lg:hidden " style={{ zIndex: 20 }} onClick={toggleSidebar}>
            {isOpen ? (
              <svg className="fill-current relative" style={{ zIndex: 110 }} xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512"><polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" /></svg>
            ) : (
              <svg className="fill-current relative" style={{ zIndex: 100 }} xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512"><path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" /></svg>
            )}
          </button>
          {/* RESPONSIVE MENU */}
          <motion.div variants={sidebarVariants} animate={isOpen ? "open" : "closed"} className="top-0 left-0 px-2 fixed w-screen h-screen bg-gradient-to-t from-black to-zinc-800" style={{ zIndex: 10 }}>
            <ul className="menu rounded-box mt-14 text-lg" >
              {menuItems.map((item, index) => (
                <motion.li variants={sideBarItemsVariants} animate={isOpen ? "open" : "closed"} key={index}><Link href={item.path} className="p-5">{item.title}</Link></motion.li>
              ))}
              <motion.li variants={sideBarItemsVariants} animate={isOpen ? "open" : "closed"}><Link href={'/contact'} className="p-5">Contact Us</Link></motion.li>
            </ul>
          </motion.div>
        </div>
      </div>
    </div >
  )
};

export default Navbar;
