import React from "react";
import SectionName from "../SectionName";
import Image from "next/image";
import { FaChevronRight } from "react-icons/fa";
import { motion } from "framer-motion";
import Link from "next/link";

const data = [
  {
    image: "/client.png",
    title: "Client-Centric Approach",
    desc: "Emphasize a client-focused mentality, showcasing how you prioritize understanding and meeting clients needs. Include testimonials or client success stories to add credibility",
    href: "/article/design",
  },
  {
    image: "/client.png",
    title: "Client-Centric Approach",
    desc: "Emphasize a client-focused mentality, showcasing how you prioritize understanding and meeting clients needs. Include testimonials or client success stories to add credibility",
    href: "/article/brand-strategy",
  },
  {
    image: "/client.png",
    title: "Expertise and Experience",
    desc: "Emphasize a client-focused mentality, showcasing how you prioritize understanding and meeting clients needs. Include testimonials or client success stories to add credibility",
    href: "/article/development",
  },
  {
    image: "/client.png",
    title: "Continuous Improvement",
    desc: "Emphasize a client-focused mentality, showcasing how you prioritize understanding and meeting clients needs. Include testimonials or client success stories to add credibility",
    href: "/article/web-dev",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const WhyUs = () => {
  return (
    <motion.div
      className="w-full md:my-20 relative"
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      viewport={{ once: true }}
    >
      <div className="w-full mb-9 relative">
        <SectionName>why us</SectionName>
        <div className="flex w-[90%] mx-auto">
          <svg
            width="15"
            height="152"
            viewBox="0 0 15 152"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-4 h-40 mx-3 md:hidden"
          >
            <path
              d="M0 7.3291C0 7.3291 2.80828 5.70776 4.25802 4.25802C5.70776 2.80828 7.3291 3.45164e-06 7.3291 3.45164e-06C7.3291 3.45164e-06 8.95044 2.80828 10.4002 4.25802C11.8499 5.70776 14.6582 7.3291 14.6582 7.3291C14.6582 7.3291 11.8499 8.95044 10.4002 10.4002C8.95044 11.8499 7.3291 14.6582 7.3291 14.6582C7.3291 14.6582 5.70776 11.8499 4.25802 10.4002C2.80828 8.95044 0 7.3291 0 7.3291Z"
              fill="#A3A3A3"
            />
            <path
              d="M7.25003 24.6582L8 70.4746L7.25 151.975L6.5 70.4746L7.25003 24.6582Z"
              fill="#E5E5E5"
            />
          </svg>
          <div className="w-full">
            <h1 className="text-2xl md:text-5xl leading-[1.32] md:leading-[1.32] lg:leading-[1.32] font-monument lg:text-center lg:px-8">
              More Than Code: Building Relationships,{" "}
              <span className="text-accent">Delivering Solutions</span>.
            </h1>
            <hr className="my-3 md:my-10" />
            {/* <div className="flex w-full justify-between items-center"> */}
            <p className="text-xs md:text-lg font-medium w-full">
              Lorem ipsum dolor sit amet consectetur. Lacus orci cursus ut
              magnis quam ullamcorper eget leo. Sed diam lacus ultrices egestas
              elit ultrices nisl vitae.
            </p>
            {/* <button className="rounded-full bg-white-20 px-3 py-2 md:py-3.5 md:px-4 flex items-center text-[7px] md:text-sm font-medium shadow transition duration-200 ease-in-out transform hover:bg-white/10 active:scale-95">Learn More<span className="ml-1.5 nd:ml-3"><FaArrowRight /></span></button> */}
            {/* </div> */}
          </div>
        </div>
      </div>
      {/* CARD CONTAINER */}
      <div className="w-full mb-20">
        <div className="grid w-[80%] lg:w-[90%] justify-items-center items-center justify-center lg:grid-cols-2 mx-auto gap-11 md:gap-y-[92px]">
          {data.map((item, index) => (
            <Link href={item.href} key={index} className="group">
              <motion.div
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.5 }}
                key={index}
                className="rounded-[10px] md:rounded-[20px] overflow-hidden min-h-[200px] md:min-h-[400px] hover:scale-[1.03] transition-transform transform ease-in-out"
              >
                <div className="w-full h-[100px] md:h-[200px] relative inset-0 bg-black opacity-50">
                  <Image
                    src={item.image}
                    alt={item.title}
                    sizes="100vh"
                    fill
                    className="object-cover group-hover:scale-[1.02] transition-transform transform ease-in-out"
                  />
                </div>
                <div className=" *:w-[90%] *:mx-auto px-5 pt-2.5 md:pt-5 h-fit bg-gradient-to-t from-black to-zinc-900/50">
                  <h2 className="text-lg md:text-4xl font-monument">
                    {item.title}
                  </h2>
                  <p className="text-[7px] py-1.5 md:pt-4 md:text-sm font-medium">
                    {item.desc}
                  </p>
                  <p className="flex items-center text-accentx">
                    Read More
                    <span className="ml-3">
                      <FaChevronRight />
                    </span>
                  </p>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default WhyUs;
