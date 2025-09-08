import { backend, sql, web } from "../assets/index.js";

export const overview = {
  title: "Overview",
  subtitle: "What I offer",
  description:
    "I’m a Canada-based developer pivoting from database work into backend and full-stack app/website development. I bring 4 years in SQL-backed systems and a growing toolkit in modern web stacks to ship clean, maintainable, user-focused software.",
};

export const skills = [
  {
    title: "Front-End Developer",
    icon: web,
    whyTitle: "Why Front-End",
    why:
      "I like turning ideas into usable interfaces—fast, accessible, and clean.",
    whatTitle: "What I use",
    what:
      "React (hooks), JavaScript/ES6+, HTML5, CSS3, Tailwind CSS, Material UI; design in Figma.",
    challenge:
      "Ship small, polished UIs that solve real user needs and scale to production.",
  },
  {
    title: "Back-End Developer",
    icon: backend,
    whyTitle: "Why Back-End",
    why:
      "I enjoy building reliable services and APIs that make products work end-to-end.",
    whatTitle: "What I use",
    what:
      "Node.js/Express, Python (Django REST), C#, REST APIs, auth, testing, basic CI/CD.",
    challenge:
      "Grow into a seasoned full-stack dev: robust APIs, clean architecture, strong tests.",
  },
  {
    title: "SQL Developer",
    icon: sql,
    whyTitle: "Where I started",
    why:
      "4 years optimizing queries, reports, and data flows taught me performance and rigor.",
    whatTitle: "What I used",
    what:
      "SQL Server, T-SQL, SSRS, SSIS; ORM experience (Room, Django).",
    challenge:
      "Actively pivoting from database-centric roles to application and web development.",
  },
];
