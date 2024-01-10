import React from "react";
import { SectionTitle, SectionWrapper } from "../../components";
import TechnologiesList from "./TechnologiesList";
import { techTitle } from "../../data";

const Tech = () => {
  return (
    <>
      <SectionTitle section={techTitle} />
      <TechnologiesList />
    </>
  );
};

export default SectionWrapper(Tech, "");
