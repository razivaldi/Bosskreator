import React from "react";
import SectionName from "../SectionName";
import Image from "next/image";

const data = [
  {
    id: 1,
    url: "/maria.png",
  },
  {
    id: 2,
    url: "/bryan.png",
  },
  {
    id: 3,
    url: "/thomi.png",
  },
  {
    id: 4,
    url: "/yefi.png",
  },
];
const OurTeam = () => {
  return (
    <section className="relative mb-14">
      <SectionName>our team</SectionName>
      <div className="w-[90%] mx-auto">
        <h1 className="font-monument text-xl md:text-[50px] leading-[1.1] text-center mb-14">
          Meet the <span className="text-accent">Minds</span> Behind Our Digital
          Mastery
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-11">
          {data.map(({ id, url }) => (
            <div
              key={id}
              className="aspect-square sm:w-full h-[298px] relative mx-auto"
              style={{ borderRadius: "20px", overflow: "hidden" }}
            >
              <Image
                src={url}
                fill
                className="object-cover"
                alt={""}
                sizes="(100vw, 100vh)"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurTeam;
