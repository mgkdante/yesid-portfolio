import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { CardBody, CardContainer, CardItem } from "./3dCard.jsx";

import { styles } from "../styles";
import { githubIcon } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects, projectsTitle } from "../constants";
import { fadeIn, textVariant } from "../animation";

const ProjectCard = ({ index, name, description, image, source_code_link }) => {
  const handleIconClick = (event) => {
    event.stopPropagation();
    window.open(source_code_link, "_blank").focus();
  };

  const handleCardClick = () => {
    console.log("card clicked");
    window.open(demo_link, "_blank").focus();
  };

  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <CardContainer className="inter-var">
        <CardBody
          className="flex flex-col justify-between items-center bg-tertiary bg-opacity-80 relative group/card shadow-card w-full sm:w-[360px] rounded-2xl p-5 h-auto"
          onClick={handleCardClick}
        >
          <CardItem
            translateZ="100"
            className="w-full h-[230px] relative cursor-pointer hover:shadow-card"
            onClick={handleIconClick} // Add this line
          >
            <img
              src={image}
              alt="project_image"
              className="w-full h-full object-cover rounded-2xl"
            />
            <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
              <CardItem
                translateZ={100}
                translateX={10}
                translateY={-10}
                as="button"
                className="bg-tertiary w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
              >
                <img
                  src={githubIcon}
                  alt="source code"
                  className="w-1/2 h-1/2 object-contain"
                />
              </CardItem>
            </div>
          </CardItem>
          <CardItem
            translateZ="50"
            className="text-xl font-bold text-white self-start mt-5"
          >
            {name}
          </CardItem>
          <CardItem
            as="p"
            translateZ="60"
            className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
          >
            {description}
          </CardItem>
        </CardBody>
      </CardContainer>
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
