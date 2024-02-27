import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="navbar absolute top-0 w-[80%]">
      <div className="navbar-start">
        <Link href='/'>
          <Image src="/logo.png" alt="logo" width={100} height={100} />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal">
          <li className="mr-10"><Link href="/">Home</Link></li>
          <li><Link href="/">About</Link></li>
          <li className="ml-10"><Link href="/">Product</Link></li>
        </ul>
      </div>
      <div className="navbar-end">
        <Link href='/'>
          <button className="btn btn-sm btn-ghost btn-active rounded-full hidden lg:block">Contact Us</button>
        </Link>
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/">About</Link></li>
            <li><Link href="/">Product</Link></li>
          </ul>
        </div>
      </div>
    </div>
  )
};

export default Navbar;
