import React, { useState } from "react";
import SectionName from "@/components/SectionName";
import { FiPlusCircle } from "react-icons/fi";
import { motion } from "framer-motion";

const accordion = [
  {
    title: "Is there a free trial available?",
    desc: "Yes, you can try us for free for 30 days. If you want, we'll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
  },
  {
    title: "Can I change my plan later?",
    desc: "Yes, you can try us for free for 30 days. If you want, we'll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
  },
  {
    title: "What is your cancellation policy?",
    desc: "Yes, you can try us for free for 30 days. If you want, we'll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
  },
  {
    title: "Can other info be added to an invoice?",
    desc: "Yes, you can try us for free for 30 days. If you want, we'll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
  },
  {
    title: "How does billing work?",
    desc: "Yes, you can try us for free for 30 days. If you want, we'll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
  },
  {
    title: "How do I change my account email?",
    desc: "Yes, you can try us for free for 30 days. If you want, we'll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
  },
];

const variants = {
  open: {
    height: "auto",
    opacity: 1,
    marginTop: 10,
    transition: { duration: 0.5 },
  },
  closed: {
    height: 0,
    opacity: 0,
    marginTop: 0,
    transition: { duration: 0.5 },
  },
};

const Support = () => {
  const [active, setActive] = useState(null);

  return (
    <section className="w-full my-10 md:my-24">
      <div className="w-full mx-auto relative">
        <SectionName>support</SectionName>
        <div className="w-[80%] md:w-[90%] mx-auto">
          <h1 className="font-monument text-2xl text-center md:text-left md:text-[50px] leading-[1.32] mb-5">
            Frequently <span className="text-accent">Asked</span> Questions
          </h1>
          <p className="text-lg text-justify">
            Everything you need to know about the product and billing. Can't
            find the answer you're looking for? Please chat to our friendly
            team.
          </p>
        </div>
        {/* ACCORDION */}
        <div className="w-[85%] md:w-[90%] mx-auto flex items-stretch">
          <div className="lg:columns-2 space-y-4 mt-14 w-full">
            {accordion.map((item, i) => (
              <div
                key={i}
                className="bg-[#191919] overflow-hidden rounded-2xl py-8 hover:cursor-pointer break-inside-avoid-column"
                onClick={() => setActive(active === i ? null : i)}
              >
                <div className="w-full px-8 font-medium text-sm md:text-lg inline-flex items-center justify-between">
                  {item.title}
                  <motion.span
                    initial={{ rotate: 0 }}
                    animate={{ rotate: active === i ? 135 : 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <FiPlusCircle className="text-2xl" />
                  </motion.span>
                </div>
                <motion.p
                  key={i}
                  variants={variants}
                  animate={active === i ? "open" : "closed"}
                  className="px-8 text-sm md:text-base"
                >
                  {item.desc}
                </motion.p>
              </div>
            ))}
          </div>
          <svg
            className="w-4 ml-2 md:ml-10 md:w-8 mt-14"
            width="30"
            height="305"
            viewBox="0 0 30 305"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M30 289.842C30 289.842 24.3834 293.084 21.484 295.984C18.5845 298.883 15.3418 304.5 15.3418 304.5C15.3418 304.5 12.0991 298.883 9.19964 295.984C6.30016 293.084 0.683608 289.842 0.683608 289.842C0.683608 289.842 6.30016 286.599 9.19964 283.7C12.0991 280.8 15.3418 275.184 15.3418 275.184C15.3418 275.184 18.5845 280.8 21.484 283.7C24.3834 286.599 30 289.842 30 289.842Z"
              fill="#A3A3A3"
            />
            <path
              d="M15.4999 255.184L14 163.551L15.5 0.550781L17 163.551L15.4999 255.184Z"
              fill="#E5E5E5"
            />
          </svg>
        </div>
        <div className="w-[80%] md:w-[90%] mx-auto mt-5 md:flex justify-between">
          <div>
            <p className="font-semibold text-sm md:text-xl">
              Still have questions?
            </p>
            <p className="text-sm md:text-lg my-4">
              Can't find the answer you're looking for? Please chat to our
              friendly team.
            </p>
          </div>
          <button className="px-4 py-3 md:px-8 md:py-4 text-sm md:text-base mx-auto bg-accent text-white rounded-full mr-16">
            Get in Touch
          </button>
        </div>
      </div>
    </section>
  );
};

export default Support;
