import React from "react";
import Tilt from "react-parallax-tilt";
import {motion} from "framer-motion";

import {styles} from "../styles";
import {githubIcon} from "../assets";
import {SectionWrapper} from "../hoc";
import {projects} from "../constants";
import {fadeIn, textVariant} from "../animation"

const ProjectCard = ({ index, name, description, image, source_code_link, demo_link,}) => {
    const handleCardClick = () => {
        console.log("card clicked");
        window.open(demo_link, "_blank");
    };

    const handleIconClick = (event) => {
        event.stopPropagation();
        window.open(source_code_link, "_blank");
    };

    return (<motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
        <Tilt
            className='bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full shadow-card backdrop-blur-md bg-opacity-60 flex flex-col justify-between items-center'>
            <div onClick={handleCardClick} className="cursor-pointer">
                <div className='relative w-full h-[230px]'>
                    <img
                        src={image}
                        alt='project_image'
                        className='w-full h-full object-cover rounded-2xl'
                    />

                    <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
                        <div
                            onClick={handleIconClick}
                            className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
                        >
                            <img
                                src={githubIcon}
                                alt='source code'
                                className='w-1/2 h-1/2 object-contain'
                            />
                        </div>
                    </div>
                </div>

                <div className='mt-5'>
                    <h3 className='text-white font-bold text-[24px]'>{name}</h3>
                    <p className='mt-2 text-secondary text-[14px]'>{description}</p>
                </div>
            </div>
        </Tilt>
    </motion.div>);
};

const Projects = () => {
    return (<>
        <motion.div variants={textVariant()}>
            <p className={`${styles.sectionSubText} `}>My work</p>
            <h2 className={`${styles.sectionHeadText}`}>Projects</h2>
        </motion.div>

        <div className='w-full flex'>
            <motion.p
                variants={fadeIn("", "", 0.1, 1)}
                className='mt-3 text-secondary text-[17px] leading-[30px]'
            >
                As a hobbyist developer, I have developed some projects using different technologies. From this
                portfolio using React and Vite to some projects using vanilla JavaScript and CSS.
                <br/><br/>
                In addition to web development, I've also worked on some Android projects using Android Compose.
                <br/><br/>
                These projects have been a great way for me to develop my skills as a developer and explore my
                passion for creating innovative solutions. I'm excited to continue working on new projects and
                pushing the boundaries of what's possible with web and mobile development.
            </motion.p>
        </div>

        <div className='mt-20 flex flex-wrap justify-center gap-7'>
            {projects.map((project, index) => (<ProjectCard key={`project-${index}`} index={index} {...project} />))}
        </div>
    </>);
};

export default SectionWrapper(Projects, "");