import React from "react";
import {motion} from "framer-motion";
import {styles} from "../styles";
import {services} from "../constants";
import {fadeIn} from "../animation";
import {SectionWrapper} from "../hoc/index";
import {InfoCard} from "./InfoCard.jsx";

const About = () => {
  return (
    <div>
      <motion.div>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] w-full leading-[30px]"
      >
        Welcome to my portfolio! I am a graduate from Bishop's University with a bachelor's degree in Computer Science.
          I am a curious person by heart and even though I finished my formal education I am still learning new concepts every week.
          I strive to become a great developer in an ever changing industry. I am currently looking for new opportunities in the field of software development.
          Below you can find the core skills I have developed over my career and skills that I am currently developing.
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-20 justify-evenly">
        {services.map((service, index) => (
          <InfoCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(About, "about");
