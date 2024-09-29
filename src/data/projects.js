import { winningMindset, battleship, todoapp } from "../assets/index.js"

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
}

export const projects = [
  {
    name: "Battleship",
    description:
      "This is a classic naval strategy game implemented in JavaScript using ES6 modules. Play against a computer opponent with options for manual or random ship placement.",
    image: battleship,
    source_code_link: "https://github.com/mgkdante/Battleship",
    demo_link: "https://mgkdante.github.io/Battleship/",
  },
  {
    name: "Todo App",
    description:
      "A simple todo list application developed using vanilla JavaScript and CSS. The application allows users to create and edit projects, as well as tasks within those projects. All data is saved in localStorage for persistence. Webpack was used for bundling the application.",
    image: todoapp,
    source_code_link: "https://github.com/mgkdante/todo-app",
    demo_link: "http://mgkdante.github.io/todo-app",
  },
  {
    name: "Habits App for Android",
    description:
      "This Android application helps you track your goals and milestones, fostering a winning mindset. It's built with Jetpack Compose and utilizes modern Android development practices.",
    image: winningMindset,
    source_code_link: "https://github.com/mgkdante/HabitsApps",
    demo_link: "https://github.com/mgkdante/HabitsApps",
  },
]
