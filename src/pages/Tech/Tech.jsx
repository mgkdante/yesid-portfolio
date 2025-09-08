import React from "react";
import { SectionTitle, SectionWrapper, SectionDescription } from "../../components";
import TechnologiesList from "./TechnologiesList";
import { techTitle } from "../../data";

const Tech = () => {
  return (
    <>
      <SectionTitle section={techTitle} />
      <SectionDescription section={techTitle} />
      <TechnologiesList />
    </>
  );
};

export default SectionWrapper(Tech, "tech");
