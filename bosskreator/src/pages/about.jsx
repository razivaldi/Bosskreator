import Banner from "@/components/Banner";
import OurTeam from "@/components/aboutpage/OurTeam";
import OurValues from "@/components/aboutpage/OurValues";
import WhoWeAre from "@/components/aboutpage/WhoWeAre";
import React from "react";

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
      <WhoWeAre />
      <OurValues />
      <OurTeam />
      <Banner />
    </main>
  );
};

export default About;
