import React from "react";
import Accordion from "./Accordion";
import Image from "next/image";
import SectionName from "../SectionName";

export default function OurValues () {
  return (
    <section className="relative mb-[101px]">
      <SectionName>our values</SectionName>
      <div className="w-[83%] md:w-[90%] lg:flex mx-auto gap-6 justify-center">
        <div className="w-full md:w-[700px] mx-auto">
          <h1 className="font-monument text-2xl md:text-[50px] leading-[1.1] mb-3.5">
            Unveiling the Pillars of Our
            <span className="text-accent"> Digital Foundation</span>
          </h1>
          <p className="mb-5 font-medium lg:text-lg">
          Highlight the importance of a robust digital foundation for business growth and sustainability. Briefly explain how digital technologies are revolutionizing the way we work and communicate.
          </p>
          <Accordion />
        </div>
        <div className="relative mx-auto w-[16rem] md:w-[32rem] h-[16rem] md:h-[32rem] pl-3 md:pl-0">
          <Image
            src={"/phone.png"}
            fill
            style={{ objectFit: "cover", borderRadius: "20px" }}
            sizes="(max-width: 1200px) 50vw, 100vw"
          />
        </div>
      </div>
    </section>
  );
};

