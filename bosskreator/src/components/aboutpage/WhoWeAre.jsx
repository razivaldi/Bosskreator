import {
  FaArrowRight,
  FaChartSimple,
} from "react-icons/fa6";
import { LuHeartHandshake } from "react-icons/lu";
import { IoDiamond } from "react-icons/io5";

import SectionName from "../SectionName";
import Image from "next/image";
import Link from "next/link";

const data = [
  {
    id: 1,
    text: "Become a Leader in the Digital Marketing Industry",
    icon: <FaChartSimple />,
  },
  {
    id: 2,
    text: "Provide High Quality Services",
    icon: <IoDiamond />,
  },
  {
    id: 3,
    text: "Building Long Term Relationships with Clients",
    icon: <LuHeartHandshake />,
  },
];

export default function WhoWeAre() {
  return (
    <>
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
                Boss Kreator is a digital marketing company committed to
                providing innovative and effective marketing solutions to our
                clients. We offer a variety of services, including social media
                strategy, digital advertising, content creation and performance
                analysis, to help businesses achieve their goals in the digital
                space.
              </p>
              <Link
                href={"/service/A"}
                className="rounded-full w-fit bg-white-20 px-3 py-2 md:py-3.5 md:px-4 flex items-center text-[7px] md:text-sm font-medium text-nowrap shadow transition duration-200 ease-in-out hover:bg-white/10 active:scale-95"
              >
                Learn More
                <span className="ml-1.5 nd:ml-3">
                  <FaArrowRight />
                </span>
              </Link>
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
          <div className="w-fit basis-5/12">
            <h2 className="font-monument text-xl md:text-4xl text-center mb-6">
              Our Vision
            </h2>
            <p className="font-medium text-xs md:text-base text-justify">
              To be a leading digital agency, empowering businesses with
              innovative solutions that transcend the digital realm. We envision
              a future where our strategic insights, creative brilliance, and
              technological expertise converge to drive unparalleled success for
              our clients.
            </p>
          </div>
          <div className="mt-8 lg:mt-0 basis-7/12">
            <h2 className="font-monument text-xl md:text-4xl text-center mb-6">
              Our Mission
            </h2>
            <div className="grid lg:grid-cols-3 justify-center gap-5 md:gap-7 xl:gap-11 ">
              {data.map((item) => (
                <div
                  className="flex items-center justify-center h-full bg-white-20 px-[18px] py-6 gap-3 rounded-lg"
                  key={item.id}
                >
                  <span className="text-2xl">{item.icon}</span>
                  <p className="font-medium text-xs md:text-sm ">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
