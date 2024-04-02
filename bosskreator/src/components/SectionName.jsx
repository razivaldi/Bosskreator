import React from "react";
import { motion } from "framer-motion";

export default function SectionName({ children }) {
  return (
    <motion.div
      initial={{ x: -100 }}
      whileInView={{ x: 0 }}
      transition={{ duration: 0.5, delay: 0.5 }}
      viewport={{ once: true }}
    >
      <div className="bg-[#2E2A2A] left-0 top-0 absolute origin-top-left rotate-90 scale-y-[-1] px-4 py-2">
        <p className="uppercase text-nowrap text-[7px] md:text-sm font-medium scale-x-[-1]">
          {children}
        </p>
      </div>
    </motion.div>
  );
}
