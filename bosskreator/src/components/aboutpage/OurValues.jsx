import React from "react";
import Accordion from "./Accordion";
import Image from "next/image";
import SectionName from "../SectionName";

const OurValues = () => {
  return (
    <section className="relative mb-[101px]">
      <SectionName>our values</SectionName>
      <div className="w-[83%] md:w-[90%] lg:flex mx-auto gap-6 justify-center">
        <div className="w-full md:w-[700px] mx-auto">
          <h1 className="font-monument md:text-[50px] leading-[1.1] mb-3.5">
            Unveiling the Pillars of Our{" "}
            <span className="text-accent">Digital Foundation</span>
          </h1>
          <p className="mb-5 font-medium lg:text-lg">
            Lorem ipsum dolor sit amet consectetur. Lacus orci cursus ut magnis
            quam ullamcorper eget leo. Sed diam lacus ultrices egestas elit
            ultrices nisl vitae.
          </p>
          <Accordion />
        </div>
        <div className="relative mx-auto w-[16rem] md:w-[32rem] h-[16rem] md:h-[32rem] pl-3 md:pl-0">
          <Image
            src={"/phone.png"}
            alt=""
            fill
            style={{ objectFit: "cover", borderRadius: "20px" }}
            sizes="50vw"
          />
        </div>
      </div>
    </section>
  );
};

export default OurValues;
