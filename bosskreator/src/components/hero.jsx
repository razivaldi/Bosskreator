import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="w-full h-screen bg-cover bg-center" style={{ backgroundImage: 'url("/hero.png")' }}>
      <div className="h-screen text-center flex flex-col justify-around pt-24 md:pt-0">
        <div className="w-[80%] lg:w-[90%] mx-auto md:mt-48">
          <h1 className="text-3xl leading-[1.1] md:text-6xl mb-7 md:leading-[1.1] font-monument">Turning Ideas into Intuitive Digital Experiences.</h1>
          <p className="mx-auto md:w-[90%] line-clamp-3 font-medium text-lg">Lorem ipsum dolor sit amet consectetur. Lacus orci cursus ut magnis quam ullamcorper eget leo. Sed diam lacus ultrices egestas elit ultrices nisl vitae.</p>
        </div>
        <div className="w-full ">
          <p className=" text-center text-lg w-[90%] mb-5 md:mb-10 font-medium mx-auto">Lacus orci cursus ut magnis quam ullamcorper eget leo:</p>
          <div className="h-[50px] w-[80%] mx-auto relative">
            <Image src="/frame1.png" alt="partner" fill className="object-cover" />
          </div>
        </div>
      </div>
    </div>
  )
};

export default Hero;
