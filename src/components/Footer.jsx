import React from "react";
import { githubIcon } from "../assets"; // Import the GitHub icon from your assets

const Footer = () => {
  return (
    <footer className="flex justify-center items-center gap-4 mb-2">
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
    </footer>
  );
};

export default Footer;
