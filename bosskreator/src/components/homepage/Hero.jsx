import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import InfiniteSlider from "./InfiniteSlider";
import background from "../../../public/hero.png";

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
    <section className="w-full relative h-screen -z-10">
      <Image
        src={background}
        fill
        sizes="100vw"
        alt="background"
        placeholder="blur"
        quality={100}
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
            "Innovate. Elevate. Dominate: Unleash Your Brand's Potential with Us!"
          </motion.h1>
          <motion.p
            variants={childVariants}
            className="mx-auto md:w-[90%] line-clamp-3 font-medium text-lg"
          >
            Step into our realm where innovation thrives, elevating brands to new heights and dominating markets with unparalleled creativity. We're not just a marketing agency; we're the architects of your brand's success story
          </motion.p>
        </div>
        <div className="w-full">
          <motion.p
            variants={childVariants}
            className=" text-center text-lg w-[90%] mb-5 md:mb-10 font-medium mx-auto"
          >
            Find Us:
          </motion.p>
          {/* LOGO SECTION */}
          <motion.div variants={childVariants}>
            <InfiniteSlider />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
