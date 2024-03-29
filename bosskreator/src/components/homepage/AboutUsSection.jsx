import React from "react";
import { FaArrowRight } from "react-icons/fa6";
import SectionName from "../SectionName";
import { motion } from "framer-motion"

const AboutUsSection = () => {
  return (
    <motion.div className="w-full my-16 md:my-20 relative" initial={{ opacity: 0, y: 100 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }} viewport={{ once: true }}>
      <SectionName>about us</SectionName>
      <div className="flex md:w-[90%] w-[85%] mx-auto">
        <svg className="w-4 h-40 mr-1.5 md:w-8 md:h-72 md:mr-6" viewBox="0 0 30 304" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 14.6582C0 14.6582 5.61655 11.4155 8.51603 8.51604C11.4155 5.61656 14.6582 6.90328e-06 14.6582 6.90328e-06C14.6582 6.90328e-06 17.9009 5.61656 20.8004 8.51604C23.6998 11.4155 29.3164 14.6582 29.3164 14.6582C29.3164 14.6582 23.6998 17.9009 20.8004 20.8004C17.9009 23.6998 14.6582 29.3164 14.6582 29.3164C14.6582 29.3164 11.4155 23.6998 8.51603 20.8004C5.61655 17.9009 0 14.6582 0 14.6582Z" fill="#A3A3A3" />
          <path d="M14.5001 49.3164L16 140.949L14.5 303.949L13 140.949L14.5001 49.3164Z" fill="#E5E5E5" />
        </svg>
        <div className="w-full">
          <h1 className="text-2xl md:text-5xl leading-[1.32] md:leading-[1.32] font-monument md:w-[88%]">More Than Code: Building Relationships, <span className="text-accent">Delivering Solutions</span>.</h1>
          <hr className="my-3" />
          <div className="flex w-full justify-between items-center">
            <p className="line-clamp-3 text-xs md:text-lg font-medium w-4/6">Lorem ipsum dolor sit amet consectetur. Lacus orci cursus ut magnis quam ullamcorper eget leo. Sed diam lacus ultrices egestas elit ultrices nisl vitae.</p>
            <button className="rounded-full bg-white-20 px-3 py-2 md:py-3.5 md:px-4 flex items-center text-[7px] md:text-sm font-medium shadow transition duration-200 ease-in-out transform hover:bg-white/10 active:scale-95">Contact Us<span className="ml-1.5 nd:ml-3"><FaArrowRight /></span></button>
          </div>
        </div>
      </div>
    </motion.div>
  )
};

export default AboutUsSection;
