import React from "react";

// Import ServiceCard from About.jsx
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { motion } from "framer-motion";
import { textVariant } from "../animation";
import { styles } from "../styles";
import { InfoCard } from "./InfoCard.jsx";
import Tilt from "react-parallax-tilt";

const Tech = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Knowledge</p>
        <h2 className={styles.sectionHeadText}>Tech Stack</h2>
      </motion.div>
      <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-10 my-10">
        {technologies.map((technology, index) => (
          <Tilt key={technology.name}>
            <div key={technology.name}>
              <InfoCard
                key={technology.name}
                index={index}
                title={technology.name}
                icon={technology.icon}
              />
            </div>
          </Tilt>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "");
