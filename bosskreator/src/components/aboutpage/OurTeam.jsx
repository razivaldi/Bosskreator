import React from "react";
import SectionName from "../SectionName";
import Image from "next/image";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa6";

const data = [
  {
    id: 1,
    url: "/maria.png",
    name: "Maria",
    position: "Founder",
  },
  {
    id: 2,
    url: "/bryan.png",
    name: "Bryan",
    position: "Digital Marketing",
  },
  {
    id: 3,
    url: "/thomi.png",
    name: "Thomi",
    position: "UI/UX Designer",
  },
  {
    id: 4,
    url: "/yefi.png",
    name: "Yefi",
    position: "Frontend Developer",
  },
];
export default function OurTeam () {
  return (
    <section className="relative mb-14">
      <SectionName>our team</SectionName>
      <div className="w-[90%] mx-auto">
        <h1 className="font-monument text-2xl md:text-[50px] leading-[1.1] text-center mb-14">
          Meet the <span className="text-accent">Minds</span> Behind Our Digital
          Mastery
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-11">
          {data.map(({ id, url, name, position }) => (
            <div
              key={id}
              className="aspect-square sm:w-full h-[298px] relative mx-auto group"
              style={{ borderRadius: "20px", overflow: "hidden" }}
            >
              <Image
                src={url}
                fill
                className="object-cover"
                alt={name}  
                quality={100}
                sizes="(max-width: 768px) 100vw), 50vw"
              />
              <span className="group-hover:opacity-100 opacity-0 absolute w-full h-full bg-neutral-800/30"></span>
              <div className="absolute w-full text-center bottom-5 p-3 bg-[#212121] opacity-0 transition-opacity group-hover:opacity-100">
                <p className="text-accent">{position}</p>
                <p>{name}</p>
                <div className="flex justify-center items-center gap-4 mt-3">
                  <FaInstagram />
                  <FaFacebook />
                  <FaLinkedin />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
