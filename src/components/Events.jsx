import {
  VerticalTimelineElement,
  VerticalTimeline,
} from "react-vertical-timeline-component";

import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";
import { styles } from "../styles";
import { events, eventsTitle } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../animation";

const EventCard = ({ events }) => (
  <VerticalTimelineElement
    contentStyle={{
      background: "#1f1f1f",
      color: "#fff",
      backdropFilter: "blur(20px)",
      backgroundColor: "rgba(255, 255, 255, 0.05)",
      borderRadius: "20px",
      boxShadow: "0px 35px 120px -15px #211e35",
    }}
    contentArrowStyle={{ boderRight: "7px solid #232631" }}
    date={events.date}
    iconStyle={{
      background: "#1f1f1f",
      backdropFilter: "blur(20px)",
      backgroundColor: "rgba(255, 255, 255, 0.05)",
    }}
    icon={
      <div className="flex justify-center items-center w-full h-full">
        <img
          src={events.icon}
          alt={events.subtitle}
          className="w-[100%] h-[100%] object-contain"
        />
      </div>
    }
  >
    <div>
      <h3 className="text-white text-[24px] font-bold">{events.title}</h3>
      <p className="text-secondary text-[16px]">{events.subtitle}</p>
    </div>
    {events.points && (
      <ul className="mt-5 list-disc ml-5 space-y-2">
        {events.points.map((point, index) => (
          <li
            key={`experience.point-${index}`}
            className="text-white-100 text-[14px] pl-1 tracking-wider"
          >
            {point}
          </li>
        ))}
      </ul>
    )}
  </VerticalTimelineElement>
);

const Events = () => {
  return (
    <motion.div layout>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>{eventsTitle.subtitle}</p>
        <h2 className={styles.sectionHeadText}>{eventsTitle.title}</h2>
      </motion.div>

      <div className="mt-20 flex flex-col"></div>
      <VerticalTimeline>
        {events.map((events, index) => (
          <EventCard key={index} events={events} />
        ))}
      </VerticalTimeline>
    </motion.div>
  );
};

export default SectionWrapper(Events, "events");
