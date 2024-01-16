import React, { useState } from "react";
import { motion } from "framer-motion";
import { InfoCard } from "../../components/ui/InfoCard.jsx";
import { skills } from "../../data/index.js";

const SkillsList = () => {
  const [openCardIndex, setOpenCardIndex] = useState(null);

  return (
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
  );
};

export default SkillsList;
