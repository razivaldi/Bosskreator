import React from "react";
import SectionName from "./SectionName";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa6";

const data = [
  {
    image: '/client.png',
    title: 'Client-Centric Approach',
    desc: 'Emphasize a client-focused mentality, showcasing how you prioritize understanding and meeting clients needs. Include testimonials or client success stories to add credibility'
  },
  {
    image: '/client.png',
    title: 'Client-Centric Approach',
    desc: 'Emphasize a client-focused mentality, showcasing how you prioritize understanding and meeting clients needs. Include testimonials or client success stories to add credibility'
  },
  {
    image: '/client.png',
    title: 'Client-Centric Approach',
    desc: 'Emphasize a client-focused mentality, showcasing how you prioritize understanding and meeting clients needs. Include testimonials or client success stories to add credibility'
  },
  {
    image: '/client.png',
    title: 'Client-Centric Approach',
    desc: 'Emphasize a client-focused mentality, showcasing how you prioritize understanding and meeting clients needs. Include testimonials or client success stories to add credibility'
  }
]

const WhyUs = () => {
  return (
    <div className="w-full my-20 relative">
      <SectionName title='why us' />
      <div className="w-[85%] mx-auto mb-10">
        <div className="w-full lg:p-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold mb-4 text-center">More Than Code: Building Relationships, <span className="text-titleAccent">Delivering Solutions</span>.</h1>
          <hr />
          <div className="flex w-full justify-between items-center mt-5">
            <p className="line-clamp-3 w-4/6">Lorem ipsum dolor sit amet consectetur. Lacus orci cursus ut magnis quam ullamcorper eget leo. Sed diam lacus ultrices egestas elit ultrices nisl vitae.</p>
            <button className="btn rounded-full btn-sm btn-ghost btn-active">Contact Us<span><FaArrowRight /></span></button>
          </div>
        </div>
      </div>
      <div className="grid w-[90%] justify-items-center items-center justify-center lg:grid-cols-2 mx-auto gap-8 flex-wrap">
        {data.map((item, index) => (
          <div key={index} className="card card-compact bg-gradient-to-b from-zinc-900 to-black mx-10 shadow-xl">
            <figure><Image src={item.image} alt="" width={1000} height={500} /></figure>
            <div className="card-body">
              <h2 className="my-3 text-4xl lg:text-5xl">{item.title}</h2>
              <p className="text-xs md:text-base">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
};

export default WhyUs;
