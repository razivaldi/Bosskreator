import Image from "next/image";
import React from "react";
import { FaArrowRight } from "react-icons/fa6";
import SectionName from "./SectionName";

const AboutUsSection = () => {
  return (
    <div className="w-full my-20 relative">
      <SectionName title='about us' />
      <div className="flex w-[90%] mx-auto">
        <div className="relative w-4 h-40 mx-3 md:w-8 md:h-72">
          <Image src={"/ScrollAcc.png"} fill alt="" />
        </div>
        <div className="w-full">
          <h1 className="text-2xl md:text-5xl leading-[1.32] md:leading-[1.32] font-monument">More Than Code: Building Relationships, <span className="text-accent">Delivering Solutions</span>.</h1>
          <hr className="my-3" />
          <div className="flex w-full justify-between items-center">
            <p className="line-clamp-3 text-xs md:text-lg font-medium w-4/6">Lorem ipsum dolor sit amet consectetur. Lacus orci cursus ut magnis quam ullamcorper eget leo. Sed diam lacus ultrices egestas elit ultrices nisl vitae.</p>
            <button className="rounded-full bg-white-20 px-3 py-2 md:py-3.5 md:px-4 flex items-center text-[7px] md:text-sm font-medium shadow transition duration-200 ease-in-out transform hover:bg-white/10 active:scale-95">Contact Us<span className="ml-1.5 nd:ml-3"><FaArrowRight /></span></button>
          </div>
        </div>
      </div>
    </div>
  )
};

export default AboutUsSection;
