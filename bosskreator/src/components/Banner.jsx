import React from "react";
import { FaArrowRight } from "react-icons/fa6";
import { motion } from "framer-motion";
import Link from "next/link";

const Banner = () => {
  return (
    <section className="mb-20">
      <motion.div
        whileInView={{ opacity: 1, scale: 1 }}
        initial={{ opacity: 0, scale: 0.5 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        style={{ backgroundImage: "url(/code.jpg)" }}
        className="w-[90%] mx-auto text-black bg-cover relative z-10"
      >
        <div className="w-full h-full text-center bg-[rgba(255,255,255,0.82)] flex justify-center items-center gap-6 flex-col py-14 px-4 md:py-20 md:px-16 lg:px-20 rounded-xl">
          <h1 className="text-2xl md:text-4xl leading-[1.1] font-monument">
            Turning Ideas into Intuitive Digital Experiences.
          </h1>
          <p className="text-sm font-medium mb-3 lg:w-4/6">
            Lorem ipsum dolor sit amet consectetur. Lacus orci cursus ut magnis
            quam ullamcorper eget leo. Sed diam lacus ultrices egestas elit
            ultrices nisl vitae.
          </p>
          <Link href="/contact">
            <button className="text-sm rounded-full flex items-center font-medium bg-[#111111] text-white py-4 px-[18px] shadow transition duration-200 ease-in-out transform hover:bg-[#171717]/90 active:scale-95">
              Contact Us
              <span className="ml-3">
                <FaArrowRight />
              </span>
            </button>
          </Link>
        </div>
      </motion.div>
    </section>
  );
};

export default Banner;
