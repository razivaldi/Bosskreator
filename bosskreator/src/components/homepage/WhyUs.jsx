import React from "react";
import SectionName from "../SectionName";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa6";
import { motion } from "framer-motion"

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
    title: 'Expertise and Experience',
    desc: 'Emphasize a client-focused mentality, showcasing how you prioritize understanding and meeting clients needs. Include testimonials or client success stories to add credibility'
  },
  {
    image: '/client.png',
    title: 'Continuous Improvement',
    desc: 'Emphasize a client-focused mentality, showcasing how you prioritize understanding and meeting clients needs. Include testimonials or client success stories to add credibility'
  }
]

const WhyUs = () => {
  return (
    <motion.div className="w-full my-20 relative" initial={{ opacity: 0, y: 100 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }} viewport={{ once: true }}>
      <div className="w-full mt-20 mb-9 relative">
        <SectionName>why us</SectionName>
        <div className="flex w-[90%] mx-auto">
          <div className="relative w-4 h-40 mx-3 md:w-8 md:h-72 lg:hidden">
            <Image src={"/ScrollAcc.png"} fill alt="" />
          </div>
          <div className="w-full">
            <h1 className="text-2xl md:text-5xl leading-[1.32] md:leading-[1.32] lg:leading-[1.32] font-monument lg:text-center lg:px-8">More Than Code: Building Relationships, <span className="text-accent">Delivering Solutions</span>.</h1>
            <hr className="my-3 md:my-10" />
            <div className="flex w-full justify-between items-center">
              <p className="line-clamp-3 text-xs md:text-lg font-medium w-4/6">Lorem ipsum dolor sit amet consectetur. Lacus orci cursus ut magnis quam ullamcorper eget leo. Sed diam lacus ultrices egestas elit ultrices nisl vitae.</p>
              <button className="rounded-full bg-white-20 px-3 py-2 md:py-3.5 md:px-4 flex items-center text-[7px] md:text-sm font-medium shadow transition duration-200 ease-in-out transform hover:bg-white/10 active:scale-95">Learn More<span className="ml-1.5 nd:ml-3"><FaArrowRight /></span></button>
            </div>
          </div>
        </div>
      </div>
      {/* CARD CONTAINER */}
      <div className="w-full mb-20">
        <div className="grid w-[80%] lg:w-[90%] justify-items-center items-center justify-center lg:grid-cols-2 mx-auto gap-11 md:gap-y-[92px]">
          {data.map((item, index) => (
            <div key={index} className="rounded-[10px] md:rounded-[20px] overflow-hidden min-h-[200px] md:min-h-[400px] hover:scale-[1.03] transition-transform transform ease-in-out">
              <div className="w-full h-[100px] md:h-[200px] relative inset-0 bg-black opacity-50">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className=" *:w-[90%] *:mx-auto px-5 pt-2.5 md:pt-5 h-fit bg-gradient-to-t from-black to-zinc-900/50">
                <h2 className="text-lg md:text-4xl font-monument">{item.title}</h2>
                <p className="text-[7px] py-1.5 md:py-4 md:text-sm font-medium">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  )
};

export default WhyUs;
