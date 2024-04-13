import { motion } from "framer-motion";
import { useState } from "react";
import { FaChevronUp } from "react-icons/fa6";

const data = [
  {
    id: 1,
    title: "Data Security & Privacy",
    content:
      "Detail the significance of data security and privacy in your digital ecosystem. Outline the strategies employed to safeguard customer and business information.",
  },
  {
    id: 2,
    title: "Innovation & Development",
    content:
      "Describe your team's approach to innovation and the latest technologies adopted. Showcase recent projects or initiatives that exemplify the company's commitment to innovation.",
  },
  {
    id: 3,
    title: "Customer Engagement",
    content:
      "Discuss unique methods your company uses to enhance customer experience through digital platforms. Provide examples of customer engagement strategies that have successfully increased loyalty and retention.",
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

export default function Accordion () {
  const [active, setActive] = useState(null);

  return (
    <div className="lg:w-[600px] w-full mb-10 lg:mb-0">
      {data.map((item, i) => (
        <div
          key={i}
          className="border-b overflow-hidden py-4 hover:cursor-pointer break-inside-avoid-column"
          onClick={() => setActive(active === item.id ? null : item.id)}
        >
          <div className="w-full font-semibold text-sm md:text-lg inline-flex items-center justify-between">
            {item.title}
            <motion.span
              initial={{ rotate: 0 }}
              animate={{ rotate: active === item.id ? 180 : 0 }}
              transition={{ duration: 0.5 }}
            >
              <FaChevronUp className="text-xl" />
            </motion.span>
          </div>
          <motion.p
            key={i}
            variants={variants}
            animate={active === item.id ? "open" : "closed"}
            className="text-sm md:text-base"
          >
            {item.content}
          </motion.p>
        </div>
      ))}
    </div>
  );
};
