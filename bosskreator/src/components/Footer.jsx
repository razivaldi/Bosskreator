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
    <div className="bg-[#0f0f0f]">
      <div className="w-[90%] p-10 mx-auto text-white flex flex-wrap flex-row justify-around">
        <div className="md:w-[60%] text-center lg:text-left lg:w-[40%]">
          <Image src="/logo.png" alt="logo" width={200} height={200} />
          <p className="text-sm py-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi illo temporibus magnam ducimus quas cumque sequi delectus molestias, quod repudiandae.</p>
          <div className="flex gap-4 text-2xl justify-center lg:justify-start">
            <Link href={"/"}><FaFacebook /></Link>
            <Link href={"/"}><FaInstagram /></Link>
            <Link href={"/"}><FaLinkedin /></Link>
          </div>
        </div>
        <div className="flex gap-x-28 flex-wrap mt-10 lg:mt-0">
          {menuItems.map((section, index) => (
            <div key={index}>
              <h6 className="text-2xl font-medium py-2">{section.title}</h6>
              {section.links.map((link, idx) => (
                <Link key={idx} href={link.href} className="link link-hover text-gray-400 text-sm block text-nowrap py-1">{link.text}</Link>
              ))}
            </div>
          ))}
        </div>
      </div>
      <hr className="w-[90%] mx-auto" />
      <p className="text-center text-sm py-4">Copyright © 2022 - All right reserved</p>
    </div>
  )
};

export default Footer;
