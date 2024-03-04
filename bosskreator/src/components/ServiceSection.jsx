import React from "react";
import SectionName from "./SectionName";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa6";


const data = [
  {
    number: "01",
    title: "Development",
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio cum quia, veritatis distinctio fugit impedit magni commodi rerum dolorum earum aliquid illum consectetur a dicta nam possimus necessitatibus in laborum?"
  },
  {
    number: "01",
    title: "Development",
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio cum quia, veritatis distinctio fugit impedit magni commodi rerum dolorum earum aliquid illum consectetur a dicta nam possimus necessitatibus in laborum?"
  },
  {
    number: "01",
    title: "Development",
    description: 'Lorem ipsum dolor sit amet consectetur. Scelerisque massa scelerisque cursus venenatis posuere volutpat. Morbi libero sit posuere ipsum. Vitae diam auctor at imperdiet faucibus sit.'
  }
];

const ServiceSection = () => {
  return (
    <>
      <div className="w-full mt-20 lg:mb-10 pb-5 relative">
        <SectionName title='services' />
        <div className="flex w-[90%] mx-auto">
          <div className="relative w-4 h-40 mx-3 md:w-8 md:h-72 lg:hidden">
            <Image src={"/ScrollAcc.png"} fill alt="" />
          </div>
          <div className="w-full lg:flex">
            <h1 className="text-2xl md:text-5xl leading-[1.32] md:leading-[1.32] font-monument lg:w-[55%]">We offer several <span className="text-accent">Services</span> for you</h1>
            <hr className="my-3" />
            <div className="flex w-full justify-between items-center lg:block lg:w-[45%]">
              <p className="line-clamp-3 text-xs md:text-lg font-medium w-4/6 lg:w-full lg:mb-5">Lorem ipsum dolor sit amet consectetur. Lacus orci cursus ut magnis quam ullamcorper eget leo. Sed diam lacus ultrices egestas elit ultrices nisl vitae.</p>
              <button className="rounded-full bg-white-20 px-3 py-2 md:py-3.5 md:px-4 flex items-center text-[7px] md:text-sm font-medium text-nowrap shadow transition duration-200 ease-in-out transform hover:bg-white/10 active:scale-95">Explore Our Service<span className="ml-1.5 nd:ml-3"><FaArrowRight /></span></button>
            </div>
          </div>
        </div>
      </div>
      {/* BOTTOM SECTION */}
      <div className="mx-auto lg:flex lg:flex-row-reverse items-center w-full">
        <div className="lg:w-[45%] flex items-baseline justify-center lg:justify-start">
          <div className="relative w-[16rem] md:w-[32rem] h-[16rem] md:h-[32rem] pl-3 md:pl-0">
            <span className="relative mx-auto block w-[95%] h-[110%] -translate-y-[4.5%] -z-10 rounded-3xl bg-[#1A1A1A]/80"></span>
            <Image src={'/phone.png'} alt="" fill />
          </div>
          <div className="relative w-4 h-40 mx-3 md:w-8 md:h-72 rotate-180">
            <Image src={"/ScrollAcc.png"} fill alt="" />
          </div>
        </div>
        <div className="lg:w-[55%] mt-10 lg:mt-0">
          {data.map((item, index) => (
            <div key={index} className="hover:lg:pl-24 hover:md:pl-20 hover:pl-16 hover:bg-zinc-900 px-14 py-5 lg:pl-20 first:rounded-tr-xl last:rounded-br-xl">
              <p className="text-[9px] md:text-lg font-medium">{item.number}</p>
              <h2 className="text-lg md:text-4xl py-3 font-monument">{item.title}</h2>
              <p className="text-[7px] md:text-sm font-medium w-[90%]">{item.description}</p>
            </div>
          ))}
        </div>
      </div>

    </>
  )
};

export default ServiceSection;
