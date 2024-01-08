import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { githubIcon } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects, projectsTitle } from "../constants";
import { fadeIn, textVariant } from "../animation";

const ProjectCard = ({
  index,
  name,
  description,
  image,
  source_code_link,
  demo_link,
}) => {
  const handleCardClick = () => {
    console.log("card clicked");
    window.open(demo_link, "_blank");
  };

  const handleIconClick = (event) => {
    event.stopPropagation();
    window.open(source_code_link, "_blank");
  };

  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full shadow-card backdrop-blur-md bg-opacity-60 flex flex-col justify-between items-center">
        <div onClick={handleCardClick} className="cursor-pointer">
          <div className="relative w-full h-[230px]">
            <img
              src={image}
              alt="project_image"
              className="w-full h-full object-cover rounded-2xl"
            />

            <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
              <div
                onClick={handleIconClick}
                className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
              >
                <img
                  src={githubIcon}
                  alt="source code"
                  className="w-1/2 h-1/2 object-contain"
                />
              </div>
            </div>
          </div>

          <div className="mt-5">
            <h3 className="text-white font-bold text-[24px]">{name}</h3>
            <p className="mt-2 text-secondary text-[14px]">{description}</p>
          </div>
        </div>
      </Tilt>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>{projectsTitle.subtitle}</p>
        <h2 className={`${styles.sectionHeadText}`}>{projectsTitle.title}</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] leading-[30px] text-justify"
          dangerouslySetInnerHTML={{ __html: projectsTitle.description }}
        />
      </div>

      <div className="mt-20 flex flex-wrap justify-center gap-7">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Projects, "");
