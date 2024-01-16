import { github, habitapp, todoapp } from "../assets/index.js";

export const projectsTitle = {
  title: "Projects",
  subtitle: "My work",
  description: `As a hobbyist developer, I have developed some projects using
                different technologies. From this portfolio using React and Vite to
                some projects using vanilla JavaScript and CSS.
                In addition to web development, I've also worked on some Android
                projects using Android Compose.
                These projects have been a great way for me to develop my skills as a
                developer and explore my passion for creating innovative solutions.
                I'm excited to continue working on new projects and pushing the
                boundaries of what's possible with web and mobile development.`,
};

export const projects = [
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
