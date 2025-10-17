interface exp {
  enterprise: string;
  position: string;
  time?: string;
  description: string[];
}

interface Lenguage {
  name: string;
  level: string;
}

interface Info {
  developerName: string;
  carreer: string;
  direction: {
    city: string;
    address: string;
  };
  contacts: {
    github: string;
    linkedin: string;
    email: string;
    phoneNumber: string;
    x: string;
    telegram: string;
  };
  resume: string;
  skills: string[];
  experience: exp[];
  education: {
    school: string;
    degree: string;
    time: string;
  };
  lenguages: Lenguage[];
}

export const info: Info = {
  developerName: "Carlos Javier Pacheco Domínguez",
  carreer: "Desarrollador Web",
  direction: {
    city: "PINAR DEL RÍO, CUBA",
    address: "Pinar del Río / Ramon Gonzalez Coro #51",
  },
  contacts: {
    github: "https://github.com/CJPD00",
    linkedin:
      "https://www.linkedin.com/in/carlos-javier-pacheco-domínguez-150058279",
    email: "carlosjavierpacheco60@gmail.com",
    phoneNumber: "5352050901",
    x: "https://x.com/Lib3rtyCoder",
    telegram: "https://t.me/username007002",
  },
  resume: `Full Stack Web Developer with experience in microservices architecture and a
          solid background in Computer Engineering. I have over two years of experience
          in university and personal projects, combining a rigorous technical approach
          with creativity and strong development best practices.\n
          During my time at Tecopos as a Frontend Developer, I contributed to the
          development of an internal client management platform designed to optimize
          tracking and control processes within the company. I worked closely with an
          agile team, applying methodologies such as Scrum, code review, and clean code
          principles, ensuring software quality, scalability, and maintainability.\n
          I have strong skills in technologies such as React, NestJS, Next.js, React
          Native, Prisma, SQL, and NoSQL, along with experience in microservices
          integration and REST API design. I’m known for my teamwork, results-oriented
          mindset, and continuous improvement attitude, always aiming to build solutions
          that provide real value to both users and the business.`,
  skills: [
    "React",
    "Next.js",
    "React Native",
    "node.js",
    "Nest.js",
    "Golang",
    "MongoDB",
    "SQL",
    "Material UI",
    "Tailwind",
    "Prisma",
    "Ant Design",
    "Shadcn",
    "Microservicios",
    "n8n",
  ],
  experience: [
    {
      enterprise: "Tecopos",
      position: "Frontend Developer",
      time: "jul.2025 - oct.2025 Habana, Cuba",
      description: [
        `Active participation in the development of an internal client management
         platform, aimed at optimizing tracking and control processes within the
         company, using a modern technology stack that includes React, Tailwind
         CSS, React Router DOM, among others. `,
        `Implementation of intuitive, responsive user interfaces using design
         libraries such as ShadCn. `,
        `Effective collaboration with multidisciplinary teams, contributing to the
          design and development of efficient and scalable software solutions. `,
      ],
    },
    {
      enterprise: "University of Pinar del Río",
      position: "Full Stack Web Developer",
      time: "feb.2023 - jul.2025 Pinar del Río, Cuba",
      description: [
        `Actively involved in web application development, utilizing a suite of
         modern technologies including React, Node.js, MongoDB, and Express. `,
        `Implementing intuitive, responsive user interfaces using design libraries
         such as MUI Material and Ant Design. `,
        `Effective collaboration with multidisciplinary teams, contributing to the
        design and development of efficient and scalable software solutions. `,
      ],
    },
    {
      enterprise: "Personal Projects",
      position: "Full Stack Web Developer",
      description: [
        `Design and implementation of microservices architectures using Docker,
        Kubernetes, and NestJs. `,
        `Development of an e-commerce platform, an API for managing users,
        products, and orders etc, applying microservices principles. `,
        `Experience in service-to-service communication, configuration management,
        fault tolerance, and microservices deployment. `,
        `Development of an AI Autonomous Agent for the company Print AI,
        integrating tools such as n8n and Auto-GPT to execute automatic flows,
        autonomous decisions, and dynamic tasks. `,
        `Development of an API for a social network (similar to Twitter) using
        Golang, with message publishing, user management and tracking
        functionalities, etc. `,
        `Development of an e-commerce dashboard as part of the Vercel certified
        course. `,
      ],
    },
  ],
  education: {
    school: "University of Pinar del Río",
    degree: "Computer Engineering",
    time: "2021 - sept.2024 Pinar del Río, Cuba",
  },
  lenguages: [
    {
      name: "Spanish",
      level: "Native",
    },
    {
      name: "English",
      level: "B1",
    },
  ],
};
