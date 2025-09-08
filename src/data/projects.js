import { winningMindset, battleship, todoapp } from "../assets/index.js";

export const projectsTitle = {
  title: "Projects",
  subtitle: "Hands-On Experience",
  description: `Here are a few projects that reflect my hands-on learning in web and mobile development. 
  They show my ability to take concepts from start to finish with the tools I know today (React, JavaScript, 
  Android Compose). While my knowledge is still growing, I am eager to keep improving these skills and apply 
  them in a professional setting.`,
};

export const projects = [
  {
    name: "Battleship",
    description:
      "Classic naval strategy game built with JavaScript (ES6 modules). Features include AI opponent and ship placement options. Strengthened my understanding of modular code and testing.",
    image: battleship,
    source_code_link: "https://github.com/mgkdante/Battleship",
    demo_link: "https://mgkdante.github.io/Battleship/",
  },
  {
    name: "Todo App",
    description:
      "Lightweight task manager built with vanilla JavaScript and CSS, bundled with Webpack. Data persistence handled with localStorage. Helped me practice clean DOM manipulation and project structure.",
    image: todoapp,
    source_code_link: "https://github.com/mgkdante/todo-app",
    demo_link: "http://mgkdante.github.io/todo-app",
  },
  {
    name: "Habits App for Android",
    description:
      "Android app for tracking goals and habits, built with Jetpack Compose and Room database. Taught me about modern Android architecture (MVVM) and local persistence.",
    image: winningMindset,
    source_code_link: "https://github.com/mgkdante/HabitsApps",
    demo_link: "https://github.com/mgkdante/HabitsApps",
  },
];
