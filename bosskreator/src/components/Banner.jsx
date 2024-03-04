import React from "react";
import { FaArrowRight } from "react-icons/fa6";

const Banner = () => {
  return (
    <section className="mb-20">
      <div className="w-[90%] mx-auto text-black bg-[url('/code.jpg')] bg-cover relative z-10">
        <div className="w-full h-full text-center bg-[rgba(255,255,255,0.82)] flex justify-center items-center gap-6 flex-col py-14 px-4 md:py-20 md:px-16 lg:px-20 rounded-xl">
          <h1 className="text-2xl md:text-4xl leading-[1.1] font-monument">Turning Ideas into Intuitive Digital Experiences.</h1>
          <p className="text-sm font-medium mb-3 lg:w-1/2">Lorem ipsum dolor sit amet consectetur. Lacus orci cursus ut magnis quam ullamcorper eget leo. Sed diam lacus ultrices egestas elit ultrices nisl vitae.</p>
          <button className="text-sm rounded-full flex items-center font-medium bg-[#111111] text-white py-4 px-[18px] shadow transition duration-200 ease-in-out transform hover:bg-[#171717]/90 active:scale-95">Contact Us<span className="ml-3"><FaArrowRight /></span></button>
        </div>
      </div>
    </section>
  )
};

export default Banner;
