import { VerticalTimeline } from "react-vertical-timeline-component";
import { events } from "../../data/index.js";
import EventCard from "./EventCard";
import "react-vertical-timeline-component/style.min.css";

const EventTimeline = () => (
  <VerticalTimeline>
    {events.map((events, index) => (
      <EventCard key={index} events={events} />
    ))}
  </VerticalTimeline>
);

export default EventTimeline;
