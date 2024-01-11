import {
  accounting,
  bu,
  champlain,
  chromeLogo,
  computer,
  dialUp,
  firefox,
  gem,
  ie,
  logo,
  mangakaLatino,
  themsocks,
  ubuntu,
  vaio,
} from "../assets/index.js";

export const eventsTitle = {
  title: "Events",
  subtitle: "My journey",
};

export const events = [
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
      "This let's me apply ui themes and I can customize my desktop. I'm in love (CD shipping used to be free)",
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
  /* {
    title: "Got grounded",
    subtitle:
      "While I was curious and eager to learn, I was also a kid who loved mischief. This led to me being grounded and I had to refrain from using the computer for some time",
    icon: notAllowed,
    date: "2010",
  },*/
  {
    title: "Purchased my first laptop",
    subtitle:
      "Worked my first summer at 15 years old and purchased my first laptop. I was so happy to have my own computer and I could do whatever I wanted with it. Still have it for nostalgia",
    icon: vaio,
    date: "2011",
  },
  {
    title: "Accounting and Management technology",
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
    date: "2019 - 2022",
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
