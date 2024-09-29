import { motion } from "framer-motion"
import { fadeIn } from "../../components/ui/animation.js"
import {
  CardBody,
  CardContainer,
  CardItem,
} from "../../components/ui/3dCard.jsx"
import { githubIcon } from "../../assets/index.js"
import React from "react"
import { sendGAEvent } from "../../utils/gaEvents"

const ProjectCard = ({ index, name, description, image, source_code_link }) => {
  const handleProjectClick = (event, name) => {
    sendGAEvent("project_clicked", { action: name })
    event.stopPropagation()
    window.open(source_code_link, "_blank").focus()
  }

  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <CardContainer className="inter-var">
        <CardBody className="flex flex-col justify-between items-center bg-tertiary bg-opacity-80 relative group/card shadow-card w-full xs:w-[360px] rounded-2xl p-5">
          <CardItem
            translateZ="100"
            className="w-full h-[230px] relative cursor-pointer hover:shadow-card"
            onClick={(event) => handleProjectClick(event, name)} // Add this line
          >
            <img
              src={image}
              alt="project_image"
              className="w-full h-full object-contain rounded-2xl"
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
  )
}

export default ProjectCard
