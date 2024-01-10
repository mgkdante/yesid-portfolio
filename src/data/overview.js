import { backend, sql, web } from "../assets/index.js";

export const overview = {
  title: "Overview",
  subtitle: "What I offer",
  description:
    "Welcome to my portfolio! As a Bishop's University Computer Science alumnus, I'm passionate about advancing in the ever-evolving tech world. Eager for software development opportunities, I'm committed to contributing to innovation and supporting the growth of communities and businesses in Canada. Here's a showcase of my key skills and areas of growth.",
};

export const skills = [
  {
    title: "Front-End Developer",
    icon: web,
    whyTitle: "What I love about the Front-End",
    why: "I'm passionate about Front-End development because it allows me to tell stories through code, creating emotional connections with users. Just as I simplify daily interactions in my personal life, I use Front-End development to enhance user experiences and make things easier for others.",
    whatTitle: "What I have tried",
    what: "I've explored various frameworks like React, and Django, along with styling libraries including Tailwind CSS, Bootstrap, and Material U. For design, I've used Figma and Adobe XD, preferring Figma while continuing to enhance my design skills.",
    challenge:
      "I'm aiming to develop applications that address user problems, understand their needs, and ensure a comfortable user events.",
  },
  {
    title: "SQL Developer",
    icon: sql,
    whyTitle: "What I love about SQL",
    why: "SQL's strength lies in its simple yet powerful ability to store, retrieve, and customize data efficiently. Its ease of use and performance optimization, especially with Data Structure Algorithms (DSA) for query enhancement, are particularly fascinating.",
    whatTitle: "What I have tried",
    what: "As a SQL developer skilled in SQL Server, SSRS, and some SSIS, I've also experimented with MySQL and SQLite in my personal projects. Additionally, I've explored ORM abstractions in Android (Room) and Django, as well as delving into NoSQL and Firebase.",
    challenge:
      "Really looking forward to make SQL second nature and be able to craft beautiful apps from the database to the ui ",
  },
  {
    title: "Back-End Developer",
    icon: backend,
    whyTitle: "What I love about the Back-End",
    why: "I appreciate the Back-End for its abstract, non-visual nature, where beautiful and functional code can significantly impact users. I'm patiently striving to become a top-tier back-end developer capable of changing lives with my work.",
    whatTitle: "What I have tried",
    what: "My events in back-end development, though limited, includes working with frameworks like Django Rest Framework and ExpressJS, enough to build a REST API and connect it to a database. I'm enhancing my skills through The Odin Project, confident that soon I'll be capable of developing a complete back-end application.",
    challenge:
      "My goal this year 2024, is to build a full-stack that solves an actual issue.",
  },
];
