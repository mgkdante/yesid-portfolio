import { motion } from "framer-motion";
import { fadeIn } from "./animation.js";
import React from "react";

const SectionDescription = ({ section }) => {
  return (
    <motion.p
      variants={fadeIn("", "", 0.1, 1)}
      className="mt-4 text-secondary text-[17px] w-full leading-[30px] text-justify"
    >
      {section.description}
    </motion.p>
  );
};

export default SectionDescription;
