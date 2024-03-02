import React from "react";
import { FaArrowRight } from "react-icons/fa6";

const Banner = () => {
  return (
    <section className="mb-20">
      <div className="w-[80%] mx-auto text-black bg-[url('/code.jpg')] bg-cover relative z-10">
        <div className="w-full h-full text-center bg-[rgba(255,255,255,0.82)] flex justify-center items-center gap-6 flex-col p-6 lg:p-20 rounded-xl">
          <h1 className="text-4xl lg:text-6xl font-bold">Turning Ideas into Intuitive Digital Experiences.</h1>
          <p>Lorem ipsum dolor sit amet consectetur. Lacus orci cursus ut magnis quam ullamcorper eget leo. Sed diam lacus ultrices egestas elit ultrices nisl vitae.</p>
          <button className="rounded-full btn text-white">Contact Us<span><FaArrowRight /></span></button>
        </div>
      </div>
    </section>
  )
};

export default Banner;
