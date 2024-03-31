import Link from "next/link";
import React from "react";

const list = [
  "Access to all basic features",
  "Basic reporting and analytics",
  "Up to 10 individual users",
  "20GB individual data each user",
  "Basic chat and email support",
];

const CardPrice = () => {
  return (
    <div className="flex flex-col border border-gray-200 text-center rounded-xl p-4 md:p-8 bg-[#E7E8E8]">
      <h4 className="font-semibold text-sm md:text-xl text-accent">Free</h4>
      <span className="my-3 font-monument text-4xl md:text-5xl text-black">
        1,3 Juta
      </span>
      <p className="text-sm text-[#475467]">Our most popular plan.</p>
      <ul className="mt-7 space-y-2.5 text-sm">
        {list.map((item, index) => (
          <li className="flex space-x-3" key={index}>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="24" height="24" rx="12" fill="#F4EBFF" />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M17.096 7.39004L9.93602 14.3L8.03602 12.27C7.68602 11.94 7.13602 11.92 6.73602 12.2C6.34602 12.49 6.23602 13 6.47602 13.41L8.72602 17.07C8.94602 17.41 9.32601 17.62 9.75601 17.62C10.166 17.62 10.556 17.41 10.776 17.07C11.136 16.6 18.006 8.41004 18.006 8.41004C18.906 7.49004 17.816 6.68004 17.096 7.38004V7.39004Z"
                fill="#5D5FEF"
              />
            </svg>
            <span className="text-gray-800">{item}</span>
          </li>
        ))}
      </ul>
      <Link
        className="mt-8 md:mt-16 py-3 px-4 inline-flex justify-center items-center text-sm font-semibold rounded-full border border-transparent bg-accent disabled:opacity-50 disabled:pointer-events-none"
        href="#"
      >
        Get Started
      </Link>
    </div>
  );
};

export default CardPrice;
