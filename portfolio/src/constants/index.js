import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `I am a dedicated .NET developer with 3 years of experience in building and maintaining high-quality web applications. My expertise spans the .NET ecosystem, including ASP.NET Core, Entity Framework, and MSBI for comprehensive business intelligence solutions. Additionally, I bring proficiency in front-end development with React and TailwindCSS, enabling me to create seamless, user-centric interfaces. My objective is to blend robust backend systems with intuitive front-end experiences to drive efficient, scalable, and impactful solutions for business success.`;

export const ABOUT_TEXT = `I am a skilled .NET developer with a strong commitment to building dynamic and scalable web applications. With 3 years of professional experience, I have developed expertise in the .NET framework, especially ASP.NET Core, Entity Framework, and MSBI for creating powerful data-driven solutions. My background also includes front-end technologies such as React and TailwindCSS, allowing me to bridge the gap between server-side functionality and engaging user interfaces. I am driven by a desire to understand complex systems and turn them into intuitive, high-quality applications. Beyond coding, I am passionate about exploring new tech, staying active, and making meaningful contributions to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "2024-present",
    role: "Graduate Assistant",
    company: "University Of New Haven",
    description: `In the Enrollment Operations department, I supported the application process by verifying documents and preparing I-20 forms for international students. Additionally, I occasionally assisted the team with writing code and developing small applications to streamline administrative tasks and improve operational efficiency.`,
    technologies: ["python", "React.js", "c#", "Excel","ASP.NET"],
  },
  {
    year: "2022 - 2024",
    role: "Full Stack Developer",
    company: "GlobalLogic",
    description: `I designed and developed user interfaces for web applications using ASP.NET and C#. I collaborated closely with backend developers to integrate frontend components with Microsoft SQL databases and MSBI services. Additionally, I contributed to the Android development team by designing mobile app interfaces, implementing responsive designs, and optimizing application performance to ensure a seamless user experience.`,
    technologies: ["java", "c#", "MSBI", "Android", "SQL", "React.js", "ASP.NET","CI/CD"],
  },
  {
    year: "2021 - 2022",
    role: "FreeLancer",
    company: "GlobalLogic",
    description: `As a freelancer in college, I created responsive websites for clients using HTML, CSS, and JavaScript. This role enhanced my project management skills and allowed me to apply my web development knowledge in real-world scenarios.`,
    technologies: ["c#", "React.js", "ASP.NET", "sql"],
  }
];

export const PROJECTS = [
  {
    title: "E-Commerce Website",
    image: project1,
    description:
      "A fully functional e-commerce website with features like product listing, shopping cart, and user authentication.",
    technologies: ["HTML", "CSS", "React", "c#", "SQL","tailwindcss","ASP.NET"],
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "React", "tailwindcss"],
  },
  {
    title: "MediConnect",
    image: project4,
    description:
      "A platform for doctors and patients to connect, schedule appointments, and manage medical records.",
    technologies: ["c#", "sql", "react", "tailwind", "ASP.NET"],
  },
];

export const CONTACT = {
  address: "153 Bull hill Ln, West Haven, CT 06516",
  phoneNo: "+1 475-308-0764",
  email: "hemanthreddyreddybattula@gmail.com",
};
