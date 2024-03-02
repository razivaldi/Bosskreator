import React from "react";
import Navbar from "./Navbar";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="w-full">
      <div className="hero min-h-screen" style={{ backgroundImage: 'url("/hero.png")' }}>
        <Navbar />
        <div className="hero-content mt-24 text-center">
          <div className="w-[80%]">
            <h1 className="mb-5 text-5xl md:text-6xl font-bold">Turning Ideas into Intuitive Digital Experiences.</h1>
            <p className="mb-10 lg:mb-20">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
            <p className="mb-16">Lacus orci cursus ut magnis quam ullamcorper eget leo:</p>
            <Image src="/frame1.png" alt="partner" width={1500} height={1000} />
          </div>
        </div>
      </div>
    </div>
  )
};

export default Hero;
