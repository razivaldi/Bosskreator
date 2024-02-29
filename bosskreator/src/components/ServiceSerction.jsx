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
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio cum quia, veritatis distinctio fugit impedit magni commodi rerum dolorum earum aliquid illum consectetur a dicta nam possimus necessitatibus in laborum?"
  }
];

const ServiceSection = () => {
  return (
    <div className="w-full my-20 relative">
      <SectionName title='services' />
      <div className="flex w-[90%] lg:mx-auto pl-12 lg:pl-0 gap-2">
        <div className="w-full lg:p-6 lg:flex">
          <h1 className="text-3xl md:text-4xl xl:text-6xl font-semibold mb-4 lg:w-1/2">We offer several <span className="text-titleAccent">Services</span> for you</h1>
          <hr />
          <div className="flex w-full justify-between items-center mt-5 lg:flex-col lg:w-1/2 lg:items-start">
            <p className="line-clamp-3 w-4/6 ">Lorem ipsum dolor sit amet consectetur. Lacus orci cursus ut magnis quam ullamcorper eget leo. Sed diam lacus ultrices egestas elit ultrices nisl vitae.</p>
            <button className="btn rounded-full btn-sm btn-ghost btn-active">Explore Our Service<span><FaArrowRight /></span></button>
          </div>
        </div>
      </div>
      <div className="mx-auto lg:flex lg:flex-row-reverse items-center mt-10">
        <div className="w-full flex items-baseline gap-3 justify-center lg:justify-start lg:mr-8">
          <div>
            <Image src={'/phone.png'} alt="" width={1000} height={1000} className="w-[300px] md:w-[400px] lg:w-[500px] pl-3 md:pl-0" />
          </div>
          <div>
            <Image src={"/ScrollAcc.png"} width={30} height={1000} alt="" className="rotate-180 lg:w-[40px]" />
          </div>
        </div>
        <div>
          {data.map((item, index) => (
            <div key={index} className="even:pl-20 even:bg-zinc-900 px-10 py-4">
              <p>{item.number}</p>
              <h1 className="text-3xl font-semibold py-2">{item.title}</h1>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>)
};

export default ServiceSection;
