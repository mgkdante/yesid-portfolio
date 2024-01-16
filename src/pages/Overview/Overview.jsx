import React from "react";
import { motion } from "framer-motion";
import {
  SectionTitle,
  SectionDescription,
  SectionWrapper,
} from "../../components";
import SkillsList from "./SkillsList";
import { overview } from "../../data";

const Overview = () => {
  return (
    <motion.div>
      <SectionTitle section={overview} />
      <SectionDescription section={overview} />
      <SkillsList />
    </motion.div>
  );
};

export default SectionWrapper(Overview, "overview");
