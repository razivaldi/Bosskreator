import React, { useState } from "react";
import SectionName from "../SectionName";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa6";
import { motion } from "framer-motion";
import Link from "next/link";

const data = [
  {
    number: "01",
    title: "Development",
    href: "/service/development",
    description:
      "Experience Innovation at Boss Kreator: Where Growth Meets Vision. Explore our latest developments and cutting-edge solutions designed to propel your business forward in the digital landscape.",
    image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=1955&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    number: "02",
    title: "Design",
    href: "/service/design",
    description:
      "Crafting Digital Excellence: Unveil the Artistry of Design at Boss Kreator. From captivating visuals to seamless user experiences, discover how our design expertise transforms ideas into impactful digital realities.",
    image: "https://images.unsplash.com/photo-1545235617-9465d2a55698?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8dWklMjB1eHxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    number: "03",
    title: "Brand Strategy",
    href: "/service/brand-strategy",
    description:
      "Strategize Your Success: Uncover the Power of Branding with Boss Kreator. Explore how our tailored brand strategies ignite growth, resonance, and distinction in the digital sphere.",
    image: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

export default function ServiceSection () {
  const [defaultImage, setDefaultImage] = useState("/phone.png");

  return (
    <motion.div
      className="w-full mb-8 md:mb-20 relative"
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      viewport={{ once: true }}
    >
      <div className="w-full lg:mb-10 pb-5 relative">
        <SectionName>services</SectionName>
        <div className="flex md:w-[90%] w-[85%] mx-auto">
          <svg
            className="w-4 h-40 mr-1.5 md:w-8 md:h-72 lg:hidden"
            viewBox="0 0 30 304"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 14.6582C0 14.6582 5.61655 11.4155 8.51603 8.51604C11.4155 5.61656 14.6582 6.90328e-06 14.6582 6.90328e-06C14.6582 6.90328e-06 17.9009 5.61656 20.8004 8.51604C23.6998 11.4155 29.3164 14.6582 29.3164 14.6582C29.3164 14.6582 23.6998 17.9009 20.8004 20.8004C17.9009 23.6998 14.6582 29.3164 14.6582 29.3164C14.6582 29.3164 11.4155 23.6998 8.51603 20.8004C5.61655 17.9009 0 14.6582 0 14.6582Z"
              fill="#A3A3A3"
            />
            <path
              d="M14.5001 49.3164L16 140.949L14.5 303.949L13 140.949L14.5001 49.3164Z"
              fill="#E5E5E5"
            />
          </svg>
          <div className="w-full lg:flex">
            <h1 className="text-2xl md:text-5xl leading-[1.32] md:leading-[1.32] font-monument lg:w-[55%]">
              We offer several <span className="text-accent">Services</span> for
              you
            </h1>
            <hr className="my-3" />
            <div className="flex w-full justify-between items-center lg:block lg:w-[45%]">
              <p className="line-clamp-3 text-xs md:text-lg font-medium w-4/6 lg:w-full lg:mb-5">
              Elevate Your Presence: Unveiling Boss Kreator's Dynamic Services. Discover our comprehensive range of innovative solutions tailored to amplify your digital presence and drive success in the online world.
              </p>
              <Link
                href={"/service/development"}
                className="rounded-full bg-white-20 px-3 py-2 md:py-3.5 md:px-4 inline-flex items-center text-[7px] md:text-sm font-medium text-nowrap shadow transition duration-200 ease-in-out transform hover:bg-white/10 active:scale-95"
              >
                Explore Our Service
                <span className="ml-1.5 nd:ml-3">
                  <FaArrowRight />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* BOTTOM SECTION */}
      <div className="mx-auto lg:flex lg:flex-row-reverse items-center w-full">
        <div className="lg:w-[45%] flex items-baseline justify-center lg:justify-start">
          <div className="relative w-[16rem] md:w-[32rem] h-[16rem] md:h-[32rem] pl-3 md:pl-0 transition-opacity duration-500 ease-in-out">
            <span className="relative mx-auto block w-[94%] h-[110%] -translate-y-[4%] -z-10 rounded-[20px] bg-[#1A1A1A]/80"></span>
            <Image
              src={defaultImage}
              alt="services"
              fill
              sizes="(100vw, 100vh)"
              style={{ objectFit: "cover", borderRadius: "20px" }}
            />
          </div>
          <svg
            className="w-4 h-40 mr-1.5 md:w-8 md:h-72 ml-8"
            viewBox="0 0 30 397"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M30 381.842C30 381.842 24.3834 385.084 21.484 387.984C18.5845 390.883 15.3418 396.5 15.3418 396.5C15.3418 396.5 12.0991 390.883 9.19964 387.984C6.30016 385.084 0.683608 381.842 0.683608 381.842C0.683608 381.842 6.30016 378.599 9.19964 375.7C12.0991 372.8 15.3418 367.184 15.3418 367.184C15.3418 367.184 18.5845 372.8 21.484 375.7C24.3834 378.599 30 381.842 30 381.842Z"
              fill="#A3A3A3"
            />
            <path
              d="M15.4999 347.184L14 255.551L15.5 92.5508L17 255.551L15.4999 347.184Z"
              fill="#E5E5E5"
            />
          </svg>
        </div>
        <div className="lg:w-[55%] mt-10 lg:mt-0">
          {data.map((item, index) => (
            <Link href={item.href} key={index}>
              <div
                key={index}
                className="hover:lg:pl-24 hover:md:pl-20 hover:pl-16 hover:bg-zinc-900 px-14 py-5 lg:pl-20 first:rounded-tr-xl last:rounded-br-xl transition-all duration-300 ease-in-out"
                onMouseEnter={() => setDefaultImage(item.image)}
              >
                <p className="text-[9px] md:text-lg font-medium">
                  {item.number}
                </p>
                <h2 className="text-lg md:text-4xl py-3 font-monument">
                  {item.title}
                </h2>
                <p className="text-[7px] md:text-sm font-medium w-[90%]">
                  {item.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </motion.div>
  );
};