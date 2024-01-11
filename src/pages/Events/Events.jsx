import { motion } from "framer-motion";
import EventTimeline from "./EventTimeline";
import { SectionTitle, SectionWrapper } from "../../components";
import { eventsTitle } from "../../data/";

const Events = () => {
  return (
    <motion.div layout>
      <SectionTitle section={eventsTitle} />
      <div className="mt-20 flex flex-col"></div>
      <EventTimeline />
    </motion.div>
  );
};

export default SectionWrapper(Events, "events");
