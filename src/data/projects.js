import { github, styleslibre, todoapp } from "../assets/index.js";

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
    name: "Style Libre Studios",
    description:
      "Style Libre Studios in Montreal is a hub of visual creativity, specializing in promotional and music videos, as well as photography. The studio excels in crafting compelling narratives that capture the essence of each subject, delivering high-quality, emotive content that surpasses expectations.",
    image: styleslibre,
    source_code_link: "https://www.stylelibrestudios.com/",
    demo_link: "https://www.stylelibrestudios.com/",
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
    name: "Github Repo",
    description:
      "A collection of various projects hosted on GitHub. The projects use a variety of technologies and frameworks. I'm often working on new projects, which are visible in this repository.",
    image: github,
    source_code_link: "https://github.com/mgkdante?tab=repositories",
    demo_link: "https://github.com/mgkdante?tab=repositories",
  },
];
