import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import InfiniteSlider from "./InfiniteSlider";

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.5,
    },
  },
};

const childVariants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
    },
  },
};

export default function Hero() {
  return (
    <section className="w-full h-screen relative -z-10">
      <Image
        src="/hero.png"
        fill
        sizes="100vw"
        alt="hero image"
        priority
        style={{ objectFit: "cover", zIndex: -1 }}
      />
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="h-screen text-center flex flex-col justify-around pt-24 md:pt-0"
      >
        <div className="w-[80%] lg:w-[90%] mx-auto md:mt-48">
          <motion.h1
            variants={childVariants}
            className="text-3xl leading-[1.1] md:text-6xl mb-7 md:leading-[1.1] font-monument"
          >
            Turning Ideas into Intuitive Digital Experiences.
          </motion.h1>
          <motion.p
            variants={childVariants}
            className="mx-auto md:w-[90%] line-clamp-3 font-medium text-lg"
          >
            Lorem ipsum dolor sit amet consectetur. Lacus orci cursus ut magnis
            quam ullamcorper eget leo. Sed diam lacus ultrices egestas elit
            ultrices nisl vitae.
          </motion.p>
        </div>
        <div className="w-full">
          <motion.p
            variants={childVariants}
            className=" text-center text-lg w-[90%] mb-5 md:mb-10 font-medium mx-auto"
          >
            Lacus orci cursus ut magnis quam ullamcorper eget leo:
          </motion.p>
          {/* LOGO SECTION */}
          <motion.div variants={childVariants}>
            <InfiniteSlider/>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
