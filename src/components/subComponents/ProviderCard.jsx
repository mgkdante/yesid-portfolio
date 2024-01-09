import React, { useState } from "react";
import { motion } from "framer-motion";
import CertificationCard from "./CertificationCard";

const ProviderCard = ({ provider, certifications }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <motion.div layout onClick={handleClick} className="cursor-pointer">
      <motion.div
        layout
        className="flex justify-between items-center p-2 md:p-4"
      >
        <motion.h3 className="text-xl font-bold">{provider}</motion.h3>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.5 }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6 text-white"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </motion.div>
      </motion.div>
      {isOpen && (
        <motion.div
          className="text-white p-2 md:p-4"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {certifications.map((cert, index) => (
            <CertificationCard key={index} certification={cert} />
          ))}
        </motion.div>
      )}
    </motion.div>
  );
};

export default ProviderCard;
