import React from "react";
import SectionName from "../SectionName";
import Image from "next/image";

const data = [
  {
    id: 1,
    url: '/maria.png',
  },
  {
    id: 2,
    url: '/bryan.png',
  },
  {
    id: 3,
    url: '/thomi.png',
  },
  {
    id: 4,
    url: '/yefi.png',
  },
]
const OurTeam = () => {
  return (
    <section className="relative mb-14">
      <SectionName>our team</SectionName>
      <div className="w-[90%] mx-auto">
        <h1 className="font-monument lg:text-[50px] leading-[1.1] text-center mb-14">Meet the <span className="text-accent">Minds</span> Behind Our Digital Mastery</h1>
        <div className="flex gap-11 justify-center">
          {data.map(({ id, url }) => (
            <div key={id} className="h-[298px] w-[284px] relative" style={{ borderRadius: '20px', overflow: 'hidden' }}>
              <Image src={url} fill className="object-cover" alt="team" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
};

export default OurTeam;
