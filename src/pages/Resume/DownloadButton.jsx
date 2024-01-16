import React from "react";
import Resume from "../../assets/Resume_Yesid_Otalora.pdf";
import { sendGAEvent } from "../../utils/gaEvents.js";

const DownloadButton = () => {
  const handleDownloadClick = () => {
    sendGAEvent("resume_downloaded", { action: "Clicked on Download PDF" });
  };

  const handleViewClick = () => {
    sendGAEvent("resume_viewed", { action: "Clicked on View PDF" });
  };

  return (
    <div className="my-10 flex justify-center space-x-4">
      <a
        href={Resume}
        download
        onClick={handleDownloadClick}
        className="text-white rounded-full backdrop-blur-md bg-opacity-40 bg-tertiary shadow-card w-40 h-20 sm:w-64 sm:h-20 flex justify-center items-center font-semibold transform transition duration-500 ease-in-out hover:scale-110"
      >
        Download PDF
      </a>
      <a
        href={Resume}
        target="_blank"
        rel="noopener noreferrer"
        onClick={handleViewClick}
        className="text-white rounded-full backdrop-blur-md bg-opacity-40 bg-tertiary shadow-card w-40 h-20 sm:w-64 sm:h-20 md:flex justify-center items-center font-semibold hidden transform transition duration-500 ease-in-out hover:scale-110"
      >
        View PDF
      </a>
    </div>
  );
};

export default DownloadButton;
