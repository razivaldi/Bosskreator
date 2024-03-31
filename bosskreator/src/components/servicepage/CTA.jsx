import React from "react";
import { ImQuotesLeft, ImQuotesRight } from "react-icons/im";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import Image from "next/image";

const CTA = () => {
  return (
    <section className="w-[90%] mx-auto bg-[#090918] p-8 md:p-16 rounded-2xl my-10 md:my-28">
      <h2 className="inline-flex mb-8 text-center font-medium text-xl md:text-4xl">
        <span>
          <ImQuotesLeft />
        </span>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
        voluptate expedita culpa! Facilis a ducimus,
        <span>
          <ImQuotesRight />
        </span>
      </h2>
      <div className="flex justify-center items-center gap-2 md:gap-12">
        <button className="h-10 w-10 md:h-12 md:w-12 bg-white-20 rounded-full flex justify-center items-center">
          <FaArrowLeft />
        </button>
        <div className="flex flex-col items-center">
          <div className="w-14 h-14 rounded-full overflow-hidden relative mb-4">
            <Image
              src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              fill
              sizes="33vw"
              style={{ objectFit: "cover" }}
              alt="person"
            />
          </div>
          <p>Fleur Cook</p>
          <p>Web Developer, Sisyphus</p>
        </div>
        <button className="h-10 w-10 md:h-12 md:w-12 bg-white-20 rounded-full flex justify-center items-center">
          <FaArrowRight />
        </button>
      </div>
    </section>
  );
};

export default CTA;
