import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { motion } from "framer-motion";

const menuItems = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "About Us",
    path: "/about",
  },
  {
    title: "Product",
    path: "/product",
  },
];

const sidebarVariants = {
  open: {
    x: "0px",
    transition: {
      duration: 0.2,
    },
  },
  closed: {
    x: "100%",
    transition: {
      duration: 0.5,
    },
  },
};

const sideBarItemsVariants = {
  open: {
    x: 0,
    opacity: 1,
    transition: {
      delay: 0.2,
    },
  },
  closed: {
    x: "50px",
    opacity: 0,
  },
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
    document.body.classList.toggle("sidebar-open");
  };

  return (
    <nav className="w-full md:h-[87px] h-[77px] flex absolute">
      <div className="mx-auto top-0 w-[90%] flex justify-between items-center">
        <div
          style={{ zIndex: 15 }}
          className="relative inline-block w-[123px] h-[30px]"
        >
          <Image
            src="https://ik.imagekit.io/m1akscp5q/Boss%20Kreator%20logo.png?updatedAt=1709446059844"
            fill
            alt="logo"
            style={{ objectFit: "cover" }}
            quality={100}
            sizes="(100vw, 100vh)"
          />
        </div>
        <div className="hidden md:flex">
          <ul className="flex md:gap-x-10 lg:gap-x-20">
            {menuItems.map((item, index) => (
              <li key={index}>
                <Link
                  href={item.path}
                  className="block rounded-full px-4 py-2.5 hover:bg-white/10 text-sm font-medium active:scale-95 transition duration-200 ease-in-out transform"
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex ">
          <Link href="/contact">
            <button className="text-sm rounded-full hidden md:block px-4 py-2.5 bg-white-20 transition duration-200 ease-in-out transform hover:bg-white/10 active:scale-95">
              Contact Us
            </button>
          </Link>
          <div>
            <button
              className="relative md:hidden hover:bg-white-20 p-1 rounded shadow transition duration-200 ease-in-out transform active:scale-95"
              style={{ zIndex: 20 }}
              onClick={toggleSidebar}
            >
              {isOpen ? (
                <svg
                  className="fill-current relative"
                  style={{ zIndex: 110 }}
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 512 512"
                >
                  <polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
                </svg>
              ) : (
                <svg
                  className="fill-current relative"
                  style={{ zIndex: 100 }}
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 512 512"
                >
                  <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
                </svg>
              )}
            </button>
            {/* RESPONSIVE MENU */}
            <motion.div
              variants={sidebarVariants}
              initial={false}
              animate={isOpen ? "open" : "closed"}
              className={`top-0 left-0 px-2 fixed w-screen h-full bg-gradient-to-t from-black to-zinc-800 lg:hidden`}
              style={{ zIndex: 10 }}
            >
              <div className="mt-20 text-lg">
                {menuItems.map((item, index) => (
                  <motion.div
                    variants={sideBarItemsVariants}
                    animate={isOpen ? "open" : "closed"}
                    key={index}
                  >
                    <Link
                      href={item.path}
                      onClick={toggleSidebar}
                      className="block rounded pl-7 my-2 py-2 px-4 text-sm hover:bg-white-20"
                    >
                      {item.title}
                    </Link>
                  </motion.div>
                ))}
                <motion.div
                  variants={sideBarItemsVariants}
                  animate={isOpen ? "open" : "closed"}
                >
                  <Link
                    href={"/contact"}
                    onClick={toggleSidebar}
                    className="block rounded pl-7 my-2 py-2 px-4 text-sm hover:bg-white-20"
                  >
                    Contact Us
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
