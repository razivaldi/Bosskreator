import Image from "next/image";
import React from "react";
import { FaArrowRight } from "react-icons/fa6";
import SectionName from "./SectionName";

const AboutUsSection = () => {
  return (
    <div className="w-full my-20 relative">
      <SectionName title='about us' />
      <div className="flex w-[90%] lg:mx-auto pl-12 lg:pl-0 gap-2">
        <div>
          <Image src={"/ScrollAcc.png"} width={25} height={400} alt="" />
        </div>
        <div className="w-full lg:p-6">
          <h1 className="text-3xl xl:text-6xl font-semibold mb-4">More Than Code: Building Relationships, <span className="text-titleAccent">Delivering Solutions</span>.</h1>
          <hr />
          <div className="flex w-full justify-between items-center mt-5">
            <p className="line-clamp-3 w-4/6">Lorem ipsum dolor sit amet consectetur. Lacus orci cursus ut magnis quam ullamcorper eget leo. Sed diam lacus ultrices egestas elit ultrices nisl vitae.</p>
            <button className="btn rounded-full btn-sm btn-ghost btn-active">Contact Us<span><FaArrowRight /></span></button>
          </div>
        </div>
      </div>
    </div>
  )
};

export default AboutUsSection;
