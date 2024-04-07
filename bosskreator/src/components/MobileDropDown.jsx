import { motion } from "framer-motion";
import { useState } from "react";
import { FaChevronDown } from "react-icons/fa6";
import Link from "next/link";

const data = [
  {
    name: "development",
    href: "/service/development",
  },
  {
    name: "design",
    href: "/service/design",
  },
  {
    name: "brand strategy",
    href: "/service/brand-strategy",
  }
];



const variants = {
  open: {
    height: "auto",
    opacity: 1,
    marginTop: 10,
    transition: { duration: 0.5 },
  },
  closed: {
    height: 0,
    opacity: 0,
    marginTop: 0,
    transition: { duration: 0.5 },
  },
};

export default function MobileDropDown({ toggleSidebar }) {
  const [active, setActive] = useState(false);

  return (
    <div className="">
      <div
        className="overflow-hidden"
        onClick={() => setActive(!active)}
      >
        <div className="text-sm inline-flex items-center gap-x-3">
          Service
          <motion.span
            initial={{ rotate: 0 }}
            animate={{ rotate: active ? 180 : 0 }}
            transition={{ duration: 0.5 }}
          >
            <FaChevronDown />
          </motion.span>
        </div>
        <motion.ul
          variants={variants}
          animate={active ? "open" : "closed"}
          className="text-sm md:text-base"
        >
          {data.map((item, i) => (
            <li key={i}>
              <Link href={item.href} onClick={() => toggleSidebar()} className="py-2 px-4 block hover:bg-white/10 rounded capitalize">{item.name}</Link>
            </li>
          ))}
        </motion.ul>
      </div>
    </div>
  );
}
