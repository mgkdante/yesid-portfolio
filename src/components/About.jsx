import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../animation";

const ServiceCard = ({ index, title, icon }) => {
  return <p>{title}</p>;
};

const About = () => {
  return (
    <div className="flex sm:flex-row flex-col justify-center items-center gap-8 sm:ps-[10svw] sm:pe-[10svw] ps-[5svw] pe-[5svw]">
      <motion.div>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] w-full leading-[30px]"
      >
        Welcome to my portfolio! I'm a React developer with experience in Vite,
        NextJS, ThreeJS, Framer Motion, Tailwind, CSS, Sass, Webflow, WordPress,
        Netlify, and GitHub Pages. I graduated in June 2023 and I'm excited to
        offer my skills to create beautiful, responsive, and 3D websites at an
        affordable cost. With my expertise in React and other web technologies,
        I can help you bring your ideas to life and create stunning websites
        that stand out. Let's work together to build something amazing!
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} />
        ))}
      </div>
    </div>
  );
};

export default About;
