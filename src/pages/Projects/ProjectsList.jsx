import React from "react";
import { projects } from "../../data/index.js";
import ProjectCard from "./ProjectCard";

const ProjectsList = () => (
  <div className="mt-20 flex flex-wrap justify-center gap-7">
    {projects.map((project, index) => (
      <ProjectCard key={`project-${index}`} index={index} {...project} />
    ))}
  </div>
);

export default ProjectsList;
