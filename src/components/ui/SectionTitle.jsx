import { motion } from "framer-motion";
import { textVariant } from "./animation.js";
import { styles } from "../../styles.js";
import React from "react";

const SectionTitle = ({ section }) => {
  return (
    <motion.div variants={textVariant()}>
      <p className={styles.sectionSubText}>{section.subtitle}</p>
      <h2 className={styles.sectionHeadText}>{section.title}</h2>
    </motion.div>
  );
};

export default SectionTitle;
