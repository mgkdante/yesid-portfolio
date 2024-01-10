import React from "react";
import { githubIcon } from "../assets/index.js"; // Import the GitHub icon from your assets
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <motion.footer
      layout
      className="flex justify-center items-center gap-4 mb-2 mt-10"
    >
      <p>mgkdante</p>
      <a
        href="https://github.com/mgkdante"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={githubIcon} alt="GitHub" className="w-6 h-6" />
      </a>
      <a
        href="https://github.com/mgkdante/yesid-portfolio"
        target="_blank"
        rel="noopener noreferrer"
      >
        Source code
      </a>
    </motion.footer>
  );
};

export default Footer;
