interface exp {
  enterprise: string;
  position: string;
  time: string;
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
  };
  resume: string;
  skills: string[];
  experience?: exp[];
  education?: {
    school: string;
    degree: string;
    time: string;
  };
  lenguages?: Lenguage[];
}

export const info: Info = {
  developerName: "Carlos Javier Pacheco Domínguez",
  carreer: "Desarrollador Web",
  direction: {
    city: "PINAR DEL RÍO, CUBA",
    address: "Pinar del Río / Ramon Gonzalez Coro #51",
  },
  contacts: {
    github: "github.com/CJPD00",
    linkedin: "www.linkedin.com/in/carlos-javier-pacheco-domínguez-150058279",
    email: "carlosjavierpacheco60@gmail.com",
    phoneNumber: "+53 52050901",
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
};
