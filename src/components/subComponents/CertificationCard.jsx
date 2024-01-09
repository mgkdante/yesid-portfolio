import React from "react";
import { motion } from "framer-motion";

const CertificationCard = ({ certification }) => {
  return (
    <motion.div layout className="p-2">
      <a href={certification.link} target="_blank" rel="noopener noreferrer">
        {certification.name}
      </a>
    </motion.div>
  );
};

export default CertificationCard;
