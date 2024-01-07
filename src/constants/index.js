import {
  backend,
  css,
  gem,
  git,
  github,
  habitapp,
  html,
  javascript,
  logo,
  nodejs,
  reactjs,
  sql,
  sqlserver,
  todoapp,
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

const services = [
  {
    title: "Front-End Developer",
    icon: web,
    whyTitle: "What I love about the Front-End",
    why:
      "What I really love about the Front-End is telling a story with code. " +
      "We want users to feel a certain way when using our applications and I love that through abstraction " +
      "I can be able to pass on a feeling to anyone who uses my applications." +
      "In my personal life, I always look to reduce friction and make things easier for my family and friends and I believe that Front-End development is a great way to do that.",
    whatTitle: "What I have tried",
    what:
      "I have tried many different frameworks and libraries such as React, Svelte and Django for Python. " +
      "I have also tried many different styling libraries such as Tailwind CSS, Bootstrap, and Material U (Google). " +
      "On the design side I have tried Figma and Adobe XD and I while I choose Figma, I am still learning and trying to improve my design skills.",
    challenge:
      "But I know there is so much more to uncover and learn but also so much to tell.",
  },
  {
    title: "SQL Developer",
    icon: sql,
    whyTitle: "What I love about SQL",
    why:
      "SQL is a very powerful language that allows us to store and retrieve data. " +
      "What I think is interesting about SQL is its simplicity yet its power to do so much. " +
      "I like the ease of use but also the customization that SQL provides performance wise and data wise." +
      "DSA comes into play when we want to optimize our queries and I think that is very interesting.",
    whatTitle: "What I have tried",
    what:
      "Since I currently work as a SQL developer and my workplace use SQL Server, I have become quite adept at SQL Server, SSRS and a little in SSIS" +
      "In my free time working with other projects I have also tried MySQL and SQLLite." +
      "I have also tried my hand at different abstractions such as ORM with Android (Room) and Django." +
      "Little extra: I have also tried NoSQL and Firebase.",
    challenge:
      "Really looking forward to make SQL second nature and be able to craft beautiful apps from the database to the UI ",
  },
  {
    title: "Back-End Developer",
    icon: backend,
    whyTitle: "What I love about the Back-End",
    why:
      "What I like about the Back-End, is that while it is very abstract and not as visual as the Front-End, " +
      "You can yet build beautiful things with beautiful code that is useful to the user." +
      "I believe that a VERY good back-end developer has the power to change many lives and I strive (patiently) but surely everyday to be one of those people.",
    whatTitle: "What I have tried",
    what:
      "Back-end development is my least experienced area but I have tried a couple of different frameworks and libraries such as Django Rest Framework, and ExpressJS" +
      "But enough to be able to build a REST API and connect it to a database. I am currently following The Odin Project to learn more about back-end development." +
      "While I might not be able to build a full back-end application YET, I am confident in my path and I know that I will be able to build a full back-end application soon.",
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

const experiences = [
  {
    title: "App developer",
    company_name: "Hobby",
    icon: logo,
    iconBg: "#000000",
    date: "Sept 2021 - Present",
    points: [
      "Learn new technologies such as Android development, web development with React, Vite, Tailwind CSS, and more.",
      "Build fun and interesting projects in my free time.",
      "Participate in code reviews and provide constructive feedback to other developers.",
      "Freelance when there is clientele.",
    ],
  },
  {
    title: "SQL developer",
    company_name: "Global Excel Management",
    icon: gem,
    iconBg: "#FFFFFF",
    date: "May 2021 - Present",
    points: [
      "Optimize database performance and ensuring data integrity",
      "Create and maintain database documentation",
      "Collaborate with other developers and stakeholders to design and implement database solutions",
      "Troubleshoot and resolve database issues",
      "Develop and maintain ETL processes",
    ],
  },
];

const projects = [
  {
    name: "Todo App",
    description:
      "I had a lot of fun creating a todo list app with vanilla Javascript and CSS. I wanted to tackle this project without using any frameworks or libraries, only webpack, and I'm happy with the result.",
    image: todoapp,
    source_code_link: "https://github.com/mgkdante/todo-app",
    demo_link: "http://mgkdante.github.io/todo-app",
  },
  {
    name: "Android Habits App",
    description:
      "This was an Android product that I wanted to do following SOLID principles. I used MVVM architecture, Room, and Dagger Hilt. I also used Kotlin Coroutines for asynchronous programming. I learned a lot about Android development while working on this project.",
    image: habitapp,
    source_code_link: "https://github.com/mgkdante/HabitsApps",
    demo_link: "https://github.com/mgkdante/HabitsApps",
  },
  {
    name: "Github Repo",
    description:
      "If you would like to see more of my projects, you can check out my Github repo. I have a few projects that I'm working on, and I'm always looking for new ideas to work on.",
    image: github,
    source_code_link: "https://github.com/mgkdante?tab=repositories",
    demo_link: "https://github.com/mgkdante?tab=repositories",
  },
];

export { services, technologies, experiences, projects };
