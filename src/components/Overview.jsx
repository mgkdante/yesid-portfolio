import React, { useState } from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { skills } from "../constants";
import { fadeIn } from "../animation";
import { SectionWrapper } from "../hoc/index";
import { InfoCard } from "./InfoCard.jsx";
import { overview } from "../constants/index.js";

const Overview = () => {
  const [openCardIndex, setOpenCardIndex] = useState(null);

  return (
    <motion.div>
      <motion.div>
        <p className={styles.sectionSubText}>{overview.subtitle}</p>
        <h2 className={styles.sectionHeadText}>{overview.title}</h2>
      </motion.div>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] w-full leading-[30px] text-justify"
      >
        {overview.description}
      </motion.p>

      <motion.div className="mt-20 flex flex-wrap justify-evenly">
        {skills.map((service, index) => (
          <InfoCard
            key={service.title}
            index={index}
            {...service}
            isClickable={true}
            openCardIndex={openCardIndex}
            setOpenCardIndex={setOpenCardIndex}
          />
        ))}
      </motion.div>
    </motion.div>
  );
};

export default SectionWrapper(Overview, "about");
