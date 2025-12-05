import {
  c,
  python,
  java,
  cpp,
  javascript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  git,
  bac,
 educode,
  fsm,
  
  threejs,
   oussama,
  
  
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Education",
  },
  
  {
    id: "contact",
    title: "Contact",
  },
];

export const services = [
  { title: "C", icon: c },
  { title: "C++", icon: cpp },
  { title: "Python", icon: python },
  { title: "Java", icon: java },
];

export const technologies = [
  { name: "HTML 5", icon: html },
  { name: "CSS 3", icon: css },
  { name: "JavaScript", icon: javascript },
  { name: "Rect JS", icon: reactjs },
  { name: "Tailwind CSS", icon: tailwind },
  { name: "Node JS", icon: nodejs },
  { name: "Three JS", icon: threejs },
  { name: "git", icon: git },
];

export const experiences = [
  {
    title: "Bacalaureate in mathematics",
  
    company_name: "Lycée Ali borgouiba kalaa kebira sousse",
    icon: bac,
    iconBg: "#161329",
    date: "Sep 2022 - juin 2023",
    points: [
      "Successfully completed the Bacalaureate in mathematics with a strong academic record.",
    ],
  },
  {
    title: "Licence in Computer Science",
    company_name: "Faculty of Sciences of Monastir",
    icon: fsm,
    iconBg: "#161329",
    date: "Sep 2023 - Present",
    points: [
      "Pursuing a Bachelor's degree in Computer Science, focusing on foundational and advanced topics in computing.",
    ],
  },
];

export const projects = [
  {
    name: "Edu Code",
    description:
      "A modern online learning platform offering free courses with certificates to improve your programming skills.",
    tags: [
      { name: "JavaScript", color: "blue-text-gradient" },
      { name: "HTML", color: "green-text-gradient" },
      { name: "Bootstrap 5.3.0", color: "pink-text-gradient" },
      { name: "CSS3", color: "yellow-text-gradient" }
    ],
    image: educode,
    link: "https://mbarekoussama.github.io/edu-code-/",
    github: "https://github.com/mbarekoussama/edu-code-"
  },
  {
    name: "Emploi-FSM",
    description:
      "A comprehensive timetable management web application for the Faculty of Sciences of Monastir, featuring automated scheduling, teacher management, and Excel/PDF export capabilities.",
    tags: [
      { name: "Angular", color: "blue-text-gradient" },
      { name: "h2", color: "green-text-gradient" },
      { name: "springboot", color: "pink-text-gradient" },
    ],
    image: fsm,
    link: "https://github.com/mbarekoussama/emploi-fsm",
    
  },
  {
    name: "Oussama Portfolio",
    description:
      "A modern, responsive personal portfolio website built with React.js to showcase projects, technical skills, and professional experience. Features animated components, particle effects, and a clean dark theme design.",
      tags: [
        { name: "React.js", color: "blue-text-gradient" },
        { name: "Bootstrap", color: "green-text-gradient" },
        { name: "Framer Motion", color: "pink-text-gradient" },
      ],
    image: oussama,
    source_code_link: "https://github.com/mbarekoussama/Oussama-Portfolio",
    live_demo_link: "https://mbarekoussama.github.io/Oussama-Portfolio/"
    
      
  },
 

];
