import React from "react";
import { SectionWrapper } from "../../components";
import ContactTitle from "./ContactTitle";
import ContactForm from "./ContactForm";
import EarthCanvasWrapper from "./EarthCanvasWrapper";
import { slideIn } from "../../components/ui/animation.js";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <div
      className={`xl:mt-12 flex xl:flex-row flex-col gap-10 overflow-hidden mb-16 overflow-y-visible`}
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] backdrop-blur-md bg-opacity-60 p-8 rounded-2xl bg-tertiary shadow-card"
      >
        <ContactTitle />
        <ContactForm />
      </motion.div>
      <EarthCanvasWrapper />
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
