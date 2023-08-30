import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  git,
  figma,
  gem,
  themlabs,
  piscineaide,
  android,
  artistic,
  threejs,
  sqllite,
  sqlserver,
  logo
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "SQL Server",
    icon: sqlserver,
  },
  {
    name: "SQL Lite",
    icon: sqllite,
  },
];

const experiences = [
  {
    title: "Web developer",
    company_name: "Freelancer",
    icon: logo,
    iconBg: "#000000",
    date: "May 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js, Angular, Svelte and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "SQL developer",
    company_name: "Global Excel Management",
    icon: gem,
    iconBg: "#FFFFFF",
    date: "May 2021 - Present",
    points: [
      "Optimizing database performance and ensuring data integrity",
      "Creating and maintaining database documentation",
      "Collaborating with other developers and stakeholders to design and implement database solutions",
      "Troubleshooting and resolving database issues",
      "Developing and maintaining ETL processes",
      "Implementing security measures to protect sensitive data",
      "Staying up-to-date with emerging trends and technologies in database development"
    ],
  }
];


const projects = [
  {
    name: "Video Portfolio",
    description:
      "I had a lot of fun creating a website for a video artist. My main focus was on creating a visually stunning and immersive experience that would showcase the artist's work in the best possible light. To achieve this, I used cutting-edge web technologies to create a dynamic and interactive website that would engage visitors and leave a lasting impression.",
    image: artistic,
    source_code_link: "https://mgkdante.github.io/yesid-artistic/",
  },
  {
    name: "Piscine-Aide",
    description:
    "It was challenging coming up with a design for a pool store. My main focus was on creating a user-friendly and informative website that would help customers find the products and services they need."
    ,image: piscineaide,
    source_code_link: "https://mgkdante.github.io/yesid-piscine/",
  },
  {
    name: "Android Projects",
    description:
    "I've created apps that touch on different aspects of Android development, such as UI design, database management, and network communication. Each project has presented its own unique challenges and has allowed me to develop my skills as an Android developer."
    ,image: android,
    source_code_link: "https://github.com/mgkdante?tab=repositories",
  },
];

export { services, technologies, experiences, projects };
