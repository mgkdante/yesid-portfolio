import {
    sql,
    backend,
    web,
    javascript,
    html,
    css,
    reactjs,
    nodejs,
    git,
    gem,
    sqlserver,
    logo,
    todoapp,
    habitapp,
    github,
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
    },
    {
        title: "SQL Developer",
        icon: sql,
    },
    {
        title: "Back-End Developer (in progress)",
        icon: backend,
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
    }
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
            "This was an Android product that I wanted to do following SOLID principles. I used MVVM architecture, Room, and Dagger Hilt. I also used Kotlin Coroutines for asynchronous programming. I learned a lot about Android development while working on this project."
        , image: habitapp,
        source_code_link: "https://github.com/mgkdante/HabitsApps",
        demo_link: "https://github.com/mgkdante/HabitsApps",
    },
    {
        name: "Github Repo",
        description:
            "If you would like to see more of my projects, you can check out my Github repo. I have a few projects that I'm working on, and I'm always looking for new ideas to work on."
        , image: github,
        source_code_link: "https://github.com/mgkdante?tab=repositories",
        demo_link: "https://github.com/mgkdante?tab=repositories",
    },
];

export {services, technologies, experiences, projects};
