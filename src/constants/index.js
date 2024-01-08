import {
  accounting,
  backend,
  bu,
  champlain,
  chromeLogo,
  computer,
  css,
  dialUp,
  firefox,
  gem,
  git,
  github,
  habitapp,
  html,
  ie,
  javascript,
  logo,
  mangakaLatino,
  nodejs,
  notAllowed,
  reactjs,
  sql,
  sqlserver,
  themsocks,
  todoapp,
  ubuntu,
  vaio,
  web,
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

const hero = {
  title: "Hi, I'm Yesid",
  role: "An App Developer ",
  description:
    "from Sherbrooke, Canada, I aspire to help others offer great solutions with a strong focus on user events and maintainable code.",
};

const overview = {
  title: "Overview",
  subtitle: "What I offer",
  description:
    "Welcome to my portfolio! As a Bishop's University Computer Science alum, I'm passionate about advancing in the ever-evolving tech world. Eager for software development opportunities, I'm committed to contributing to innovation and supporting the growth of communities and businesses in Canada. Here's a showcase of my key skills and areas of growth.",
};

const eventsTitle = {
  title: "Events",
  subtitle: "My journey",
};

const techTitle = {
  title: "Stack",
  subtitle: "knowledge",
};

const projectsTitle = {
  title: "Projects",
  subtitle: "My work",
  description: `As a hobbyist developer, I have developed some projects using
                different technologies. From this portfolio using React and Vite to
                some projects using vanilla JavaScript and CSS.
                <br />
                <br />
                In addition to web development, I've also worked on some Android
                projects using Android Compose.
                <br />
                <br />
                These projects have been a great way for me to develop my skills as a
                developer and explore my passion for creating innovative solutions.
                I'm excited to continue working on new projects and pushing the
                boundaries of what's possible with web and mobile development.`,
};

const contactTitle = {
  title: "Contact",
  subtitle: "Get in touch",
};

const skills = [
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
      "Really looking forward to make SQL second nature and be able to craft beautiful apps from the database to the UI ",
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
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Git",
    icon: git,
  },
  {
    name: "SQL Server",
    icon: sqlserver,
  },
];

const events = [
  {
    title: "First time using a computer",
    subtitle: "The start of my journey",
    icon: computer,
    date: "2003",
  },
  {
    title: "First time using the internet",
    subtitle: "Played the heck out of flash games",
    icon: dialUp,
    date: "2005",
  },
  {
    title: "We get internet at home",
    subtitle: "Okay, my world just got x1000 bigger",
    icon: ie,
    date: "2007",
  },
  {
    title: "Downloaded Mozilla Firefox",
    subtitle:
      "Alright, this looks faster than IE and the toolbar is way less cluttered",
    icon: firefox,
    date: "2007",
  },
  {
    title: "Chrome is released",
    subtitle:
      "Hmm, this is clutter free and fast. I'm switching to this browser and won't switch for a while",
    icon: chromeLogo,
    date: "2008",
  },
  {
    title: "Ordered Ubuntu 9.04",
    subtitle:
      "This let's me apply UI themes and I can customize my desktop. I'm in love (CD shipping used to be free)",
    icon: ubuntu,
    date: "2009",
  },
  {
    title: "My first website",
    subtitle:
      "To be young and curious, I made a site to stream anime online, www.mangaka-latino.es.tl. Beautiful times",
    icon: mangakaLatino,
    date: "2009 - 2010",
  },
  {
    title: "Got grounded",
    subtitle:
      "While I was curious and wanted to learn, I was also a kid with shenanigans and I got grounded for a while. I had to stop using the computer for a while",
    icon: notAllowed,
    date: "2010",
  },
  {
    title: "Purchased my first laptop",
    subtitle:
      "Worked my first summer at 15 years old and purchased my first laptop. I was so happy to have my own computer and I could do whatever I wanted with it. Still have it for nostalgia",
    icon: vaio,
    date: "2011",
  },
  {
    title: "Studied Accounting and Management technology",
    subtitle: "Champlain Regional College",
    icon: champlain,
    date: "2014 - 2017",
    points: [
      "Learned Accounting principles and how to use accounting software such as Sage 50 and Acomba",
      "Learned to start a business and how to manage it",
      "Learned to do my own taxes",
    ],
  },
  {
    title: "Started my first business",
    subtitle: "Themsocks.ca",
    icon: themsocks,
    date: "2018 - 2020",
    points: [
      "Sold novelty socks online through Shopify",
      "Imported socks from China and sold them in Canada",
      "Learned how to use Facebook Ads and Google Ads",
    ],
  },
  {
    title: "Accounting clerk",
    subtitle: "Service d'administration Marcoux",
    icon: accounting,
    date: "2018 - 2019",
    points: [
      "Prepare financial statements for clients",
      "File taxes for clients",
      "Do journal entries and bank reconciliations",
    ],
  },
  {
    title: "Computer Science",
    subtitle: "Bishop's University",
    icon: bu,
    date: "2018 - 2019",
    points: [
      "Back to where my heart longed for, I started my journey in Computer Science",
      "Learned the basics of programming with Java and C++",
      "Learned about data structures and algorithms and its uses",
    ],
  },
  {
    title: "SQL developer",
    subtitle: "Global Excel Management",
    icon: gem,
    date: "May 2021 - Present",
    points: [
      "Optimize database performance and ensuring data integrity",
      "Create and maintain database documentation",
      "Collaborate with other developers and stakeholders to design and implement database solutions",
      "Troubleshoot and resolve database issues",
      "Develop and maintain ETL processes",
    ],
  },
  {
    title: "App developer",
    subtitle: "Hobby",
    icon: logo,
    date: "Sept 2021 - Present",
    points: [
      "Learn new technologies such as Android development, web development with React, Vite, Tailwind CSS, and more.",
      "Build fun and interesting projects in my free time.",
      "Participate in code reviews and provide constructive feedback to other developers.",
      "Freelance when there is clientele.",
    ],
  },
];

const projects = [
  {
    name: "Todo App",
    description:
      "A simple todo list application developed using vanilla JavaScript and CSS. The application allows users to create and edit projects, as well as tasks within those projects. All data is saved in localStorage for persistence. Webpack was used for bundling the application.",
    image: todoapp,
    source_code_link: "https://github.com/mgkdante/todo-app",
    demo_link: "http://mgkdante.github.io/todo-app",
  },
  {
    name: "Android Habits App",
    description:
      "An Android application developed using Jetpack Compose and following SOLID principles. The application allows users to track their habits, marking tasks as done for each day and keeping a streak of completed tasks. It uses MVVM architecture, Room for local data storage, Dagger Hilt for dependency injection, and Kotlin Coroutines for asynchronous programming.",
    image: habitapp,
    source_code_link: "https://github.com/mgkdante/HabitsApps",
    demo_link: "https://github.com/mgkdante/HabitsApps",
  },
  {
    name: "Github Repo",
    description:
      "A collection of various projects hosted on GitHub. The projects use a variety of technologies and frameworks. I'm often working on new projects, which are visible in this repository.",
    image: github,
    source_code_link: "https://github.com/mgkdante?tab=repositories",
    demo_link: "https://github.com/mgkdante?tab=repositories",
  },
];
const contactFormFields = {
  name: {
    label: "Your Name",
    placeholder: "What's your good name?",
  },
  email: {
    label: "Your Email",
    placeholder: "What's your web address?",
  },
  message: {
    label: "Your Message",
    placeholder: "What you want to say?",
  },
};

export {
  skills,
  technologies,
  events,
  projects,
  hero,
  overview,
  eventsTitle,
  techTitle,
  projectsTitle,
  contactTitle,
  contactFormFields,
};
