// Projects.jsx
import React from "react";
import {
  SectionDescription,
  SectionTitle,
  SectionWrapper,
} from "../../components";
import ProjectsList from "./ProjectsList";
import { projectsTitle } from "../../data/index.js";

const Projects = () => {
  return (
    <>
      <SectionTitle section={projectsTitle} />
      <SectionDescription section={projectsTitle} />
      <ProjectsList />
    </>
  );
};

export default SectionWrapper(Projects, "projects");
