import { motion } from "framer-motion";
import { useState } from "react";
import { FaChevronUp } from "react-icons/fa6";

const data = [
  {
    id: 1,
    title: "Non consectetur a erat nam at lectus urna duis?",
    content:
      "#1This is accordion items body. It is shown or hidden by default, depending on the state. These classes control the overall appearance, as well as the showing and hiding via CSS transitions.",
  },
  {
    id: 2,
    title: "Non consectetur a erat nam at lectus urna duis?",
    content:
      "#2This is accordion items body. It is shown or hidden by default, depending on the state. These classes control the overall appearance, as well as the showing and hiding via CSS transitions.",
  },
  {
    id: 3,
    title: "Non consectetur a erat nam at lectus urna duis?",
    content:
      "#3This is accordion items body. It is shown or hidden by default, depending on the state. These classes control the overall appearance, as well as the showing and hiding via CSS transitions.",
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

const Accordion = () => {
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

export default Accordion;
