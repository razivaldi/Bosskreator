import React from "react";

const SectionName = ({ children }) => {
  return (
    <div className="bg-[#2E2A2A] left-0 top-0 absolute origin-top-left rotate-90 scale-y-[-1] px-4 py-2">
      <p className="uppercase text-nowrap text-[7px] md:text-sm font-medium scale-x-[-1]">{children}</p>
    </div>
  )
};

export default SectionName;
