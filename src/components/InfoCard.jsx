import { motion } from "framer-motion";
import { fadeIn } from "../animation.js";
import React from "react";

export const InfoCard = ({
  index,
  title,
  icon,
  whyTitle,
  why,
  whatTitle,
  what,
  challenge,
  isClickable = false,
  openCardIndex,
  setOpenCardIndex,
}) => {
  const onClick = () => {
    if (isClickable) {
      setOpenCardIndex(openCardIndex === index ? null : index);
    }
  };

  const isOpen = openCardIndex === index;

  return (
    <div onClick={onClick}>
      <motion.div
        layout
        className={`${
          isOpen ? "w-[90%] md:w-[450px] mx-auto" : "w-[250px] mx-auto"
        }`}
      >
        <motion.div
          variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
          className={`w-full rounded-[20px] shadow-card ${
            isClickable ? "cursor-pointer" : ""
          }`}
        >
          <motion.div
            options={{
              max: 45,
              scale: 1,
              speed: 450,
            }}
            className={`bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center
                        flex-col backdrop-blur-md bg-opacity-60`}
          >
            <motion.img
              layout={"position"}
              src={icon}
              alt={title}
              className="w-16 h-16 object-contain"
            />
            <motion.h3
              layout={"position"}
              className="text-white text-[16px] font-bold text-center"
            >
              {title}
            </motion.h3>
            <br />
            {isOpen && (
              <motion.div
                className="text-white"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <motion.p className="font-bold">{whyTitle}</motion.p>
                <motion.p>{why}</motion.p>
                <br />
                <motion.p className="font-bold">{whatTitle}</motion.p>
                <motion.p>{what}</motion.p>
                <br />
                <motion.p>{challenge}</motion.p>
              </motion.div>
            )}
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};