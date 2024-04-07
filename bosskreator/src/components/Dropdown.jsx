import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa6";
import Link from "next/link";

const links = [
  {
    name:"Development",
    href:"/service/development",
  },
  {
    name:"design",
    href:"/service/design",
  },
  {
    name:"brand strategy",
    href:"/service/brand-strategy",
  },
]

export default function Dropdown() {
  const [open, setOpen] = useState(false);
  
  return (
    <div className="relative inline-flex">
      <button
        type="button"
        className="inline-flex items-center gap-x-2 rounded-full px-4 py-2.5 hover:bg-white/10 text-sm font-medium active:scale-95 transition duration-200 ease-in-out transform"
        onClick={() => setOpen(!open)}
      >
        Service
        <FaChevronDown/>
      </button>

      <div
        className={`w-52 bg-[#1A1A1A] shadow-md rounded-lg space-y-1 p-2 mt-10 absolute z-10 ${open? "block": "hidden"}`}
        onMouseLeave={() => setOpen(false)}
      >
        {links.map((item, index) => (
           <Link
           key={index}
           className="flex items-center py-2 px-3 rounded-lg text-sm text-nowrap capitalize hover:bg-white/10"
           href={item.href}
         >
           {item.name}
         </Link>
        ))}
      </div>
    </div>
  );
}
