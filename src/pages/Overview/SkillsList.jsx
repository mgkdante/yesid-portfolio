import React, { useState } from "react";
import { motion } from "framer-motion";
import { InfoCard } from "../../components/ui/InfoCard.jsx";
import { skills } from "../../data/index.js";
import { sendGAEvent } from "../../utils/gaEvents";

const SkillsList = () => {
  const [openCardIndex, setOpenCardIndex] = useState(null);

  const handleCardClick = (cardTitle) => {
    sendGAEvent("card_clicked", { card_title: cardTitle });
  };

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
          onClick={() => handleCardClick(service.title)}
        />
      ))}
    </motion.div>
  );
};

export default SkillsList;
