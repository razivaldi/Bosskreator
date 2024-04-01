import React from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import CardPrice from "@/components/servicepage/CardPrice";
import SectionName from "@/components/SectionName";

const data = [
  {
    name: "Bronze Package",
    price: "500 rb",
    list: [
      "20 Design Content Feed & Story",
      "Design with Caption & Hashtag",
      "Fresh Content everyday",
      "Free unlimited revisions",
    ],
  },
  {
    name: "Silver Package",
    price: "800 rb",
    list: [
      "30 Design Content Feed & Story",
      "3 Feed Videos",
      "Design with Caption & Hashtag",
      "Fresh Content everyday",
      "Free unlimited revisions",
      "Basic Content strategy consultation",
    ],
  },
  {
    name: "Gold Package",
    price: "1.5 Jt",
    list: [
      "Monthly work ship with us!",
      "Unlimited design for your business",
      "10 Free feed videos",
      "Design with Caption and hashtag",
      "We help you to handle your instagram business!",
      "Free Unlimited revision.",
    ],
  },
];

const Pricing = () => {
  return (
    <section className="w-full relative bg-[#191919] pt-8">
      <div className="w-full relative">
        <SectionName>pricing</SectionName>
        <h1 className="font-monument text-2xl md:text-[50px] leading-[1.32] text-center w-4/5 md:w-8/12 mx-auto">
          We&apos;ve got a <span className="text-accent">plan</span> that&apos;s
          <span className="text-accent"> perfect</span> for you
        </h1>
        <div className="md:flex justify-between mt-5 w-[80%] md:w-[90%] mx-auto ">
          <p className="w-fit md:w-[740px] font-medium text-sm md:text-lg">
            Lorem ipsum dolor sit amet consectetur. Lacus orci cursus ut magnis
            quam ullamcorper eget leo. Sed diam lacus ultrices egestas elit
            ultrices nisl vitae.
          </p>
          <button className="mt-2 md:mt-0 text-xs md:text-base mx-auto self-center flex items-center font-medium text-nowrap bg-white-20 text-white py-3 px-4 md:py-4 md:px-[18px] shadow transition duration-200 ease-in-out transform hover:bg-[#171717]/90 active:scale-95 rounded-[30px]">
            Contact Us
            <span className="ml-3">
              <FaArrowRight />
            </span>
          </button>
        </div>
      </div>
      <div className="w-[80%] md:w-[88%] mx-auto pb-8">
        <div className="py-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:items-stretch">
          {data.map((item) => (
            <CardPrice key={item.name} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
