import Banner from "@/components/Banner";
import SectionName from "@/components/SectionName";
import OurTeam from "@/components/aboutpage/OurTeam";
import OurValues from "@/components/aboutpage/OurValues";
import Image from "next/image";
import React from "react";
import { FaArrowRight } from "react-icons/fa6";

const data = [
  {
    id: 1,
    text: "Transforming Digital Landscapes, One Innovation",
  },
  {
    id: 2,
    text: "Pioneering Digital Excellence for Impact",
  },
  {
    id: 3,
    text: "Unleashing Possibilities in the Digital Realm",
  },
];
const About = () => {
  return (
    <main
      className="w-full mb-20 pt-[119px]"
      style={{
        backgroundImage:
          "linear-gradient(180deg, #1E1E1E 12.88%, rgba(0, 0, 0, 0) 100%)",
        backgroundSize: "100% 860px",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* HEADER */}
      <div className="w-full lg:mb-[60px] text-center ">
        <h1 className="text-2xl md:text-[50px] font-monument mb-3.5">
          About <span className="text-accent">Us</span>
        </h1>
        <p className="font-medium lg:text-lg">
          Any question or remarks? React out to us!
        </p>
      </div>
      {/* WHO WE ARE */}
      <div className="w-full mt-20 pb-5 relative lg:mb-[73px]">
        <SectionName>who we are</SectionName>
        <div className="flex md:w-[90%] w-[85%] mx-auto">
          {/* <svg
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
          </svg> */}
          <div className="w-full lg:flex">
            <h1 className="text-2xl md:text-5xl leading-[1.32] md:leading-[1.32] font-monument lg:w-[55%]">
              We offer several <span className="text-accent">Services</span> for
              you
            </h1>
            <hr className="my-3" />
            <div className="flex w-full justify-between items-center lg:block lg:w-[45%]">
              <p className="line-clamp-3 text-xs md:text-lg font-medium w-4/6 lg:w-full lg:mb-5">
                Lorem ipsum dolor sit amet consectetur. Lacus orci cursus ut
                magnis quam ullamcorper eget leo. Sed diam lacus ultrices
                egestas elit ultrices nisl vitae.
              </p>
              <button className="rounded-full bg-white-20 px-3 py-2 md:py-3.5 md:px-4 flex items-center text-[7px] md:text-sm font-medium text-nowrap shadow transition duration-200 ease-in-out transform hover:bg-white/10 active:scale-95">
                Explore Our Service
                <span className="ml-1.5 nd:ml-3">
                  <FaArrowRight />
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* CARD */}
      <div
        className="mx-auto max-w-7xl w-[90%] mb-[61px] rounded-t-[20px] overflow-hidden"
        style={{
          background:
            "linear-gradient(180deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0) 100%)",
        }}
      >
        <div className="relative w-full h-[259px] mb-5 ">
          <Image
            src={"/aboutus.png"}
            fill
            alt="about"
            className="object-cover"
            style={{ objectFit: "cover" }}
          />
          {/* OVERLAY OVER IMAGE */}
          <div
            className="absolute top-0 left-0 right-0 bottom-0"
            style={{
              background:
                "linear-gradient(180deg, rgba(0,0,0,0.8) 2.67%, rgba(0,0,0,0.48)) 100%",
            }}
          ></div>
        </div>
        <div className="lg:flex lg:gap-12 px-8 max-w-7xl mx-auto">
          <div className="min-w-[300px]">
            <h2 className="font-monument text-xl md:text-4xl text-center mb-6">
              Our Vision
            </h2>
            <p className="font-medium text-xs md:text-sm text-justify">
              To be a leading digital agency, empowering businesses with
              innovative solutions that transcend the digital realm. We envision
              a future where our strategic insights, creative brilliance, and
              technological expertise converge to drive unparalleled success for
              our clients.
            </p>
          </div>
          <div className="mt-8 lg:mt-0">
            <h2 className="font-monument text-xl md:text-4xl text-center mb-6">
              Our Mission
            </h2>
            <div className="flex  justify-center gap-5 md:gap-7 lg:gap-11 relative">
              {data.map((item) => (
                <div
                  className="flex items-center bg-white-20 w-[203px] px-[18px] py-6 gap-3 rounded-lg"
                  key={item.id}
                >
                  <div
                    style={{
                      width: "28px",
                      height: "28px",
                      background: "#FFF2ED",
                      flex: "none",
                    }}
                    className="hidden md:flex"
                  ></div>
                  <p className="font-medium text-xs md:text-sm">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* END OF CARD */}
      <OurValues />
      <OurTeam />
      <Banner />
    </main>
  );
};

export default About;
