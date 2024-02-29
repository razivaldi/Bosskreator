import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

const menuItems = [
  {
    title: "Services",
    links: [
      { text: "Branding", href: "/" },
      { text: "Design", href: "/" },
      { text: "Marketing", href: "/" },
      { text: "Advertisement", href: "/" }
    ]
  },
  {
    title: "Company",
    links: [
      { text: "About us", href: "/" },
      { text: "Contact", href: "/" },
      { text: "Jobs", href: "/" },
      { text: "Press kit", href: "/" }
    ]
  },
  {
    title: "Legal",
    links: [
      { text: "Terms of use", href: "/" },
      { text: "Privacy policy", href: "/" },
      { text: "Cookie policy", href: "/" }
    ]
  }
];


const Footer = () => {
  return (
    <div className="bg-[#0f0f0f] relative">
      <span className="absolute w-[500px] h-[500px] bg-[#171717] -top-40 -left-40 " style={{ borderRadius: "38%", transform: "rotate(30deg)" }}></span>
      <div className="w-[90%] p-10 mx-auto text-white flex flex-wrap flex-row justify-around -z-10">
        <div className="md:w-[60%] text-center lg:text-left lg:w-[40%] z-0">
          <Image src="/logo.png" alt="logo" width={200} height={200} />
          <p className="text-sm py-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi illo temporibus magnam ducimus quas cumque sequi delectus molestias, quod repudiandae.</p>
          <div className="flex gap-4 text-2xl justify-center lg:justify-start">
            <Link href={"/"}><FaFacebook /></Link>
            <Link href={"/"}><FaInstagram /></Link>
            <Link href={"/"}><FaLinkedin /></Link>
          </div>
        </div>
        <div className="flex gap-x-28 flex-wrap mt-10 lg:mt-0 z-10">
          {menuItems.map((section, index) => (
            <div key={index}>
              <h6 className="text-2xl font-medium py-2">{section.title}</h6>
              {section.links.map((link, idx) => (
                <Link key={idx} href={link.href} className="link link-hover text-gray-300 text-sm block text-nowrap py-1">{link.text}</Link>
              ))}
            </div>
          ))}
        </div>
      </div>
      <hr className="w-[90%] mx-auto z-10 relative" />
      <p className="text-center text-sm py-4">Copyright © 2022 - All right reserved</p>
      <span className="absolute hidden md:block w-[550px] h-[550px] md:-right-96 md:-bottom-96 bg-[#171717] lg:-right-20 lg:top-36 " style={{ borderRadius: "38%", transform: "rotate(20deg)" }}></span>
    </div>
  )
};

export default Footer;
