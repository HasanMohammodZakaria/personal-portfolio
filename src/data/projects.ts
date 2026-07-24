export interface Project {

  title: string;

  slug: string;

  shortDescription: string;

  description: string;

  image: string;


  features: string[];

  problemSolving: string[];


  technologies: {

    frontend: string[];

    backend: string[];

    database: string[];

    deployment: string[];

    tools: string[];

  };


  live: string;

  github: string;

}





export const projects: Project[] = [


  {
    title: "Skill Pilot AI",

    slug: "skill-pilot-ai",


    shortDescription:
      "An Agentic AI powered platform for skill development and personalized learning.",



    description:
      "Skill Pilot AI is a modern full-stack Agentic AI application designed to help users improve their skills through intelligent workflows. The platform focuses on AI integration, scalable architecture, secure authentication and a smooth user experience.",



    image:
      "/projects/skill-pilot.png",



    features:[

      "AI powered assistant",

      "Personalized learning workflow",

      "User authentication",

      "Dashboard system",

      "Responsive modern UI",

    ],



    problemSolving:[

      "Created an intelligent workflow system using AI",

      "Designed scalable frontend and backend architecture",

      "Solved complex state and data management challenges",

      "Built reusable components for maintainability",

    ],



    technologies:{


      frontend:[

        "Next.js",

        "TypeScript",

        "Tailwind CSS",

        "Framer Motion",

      ],



      backend:[

        "Node.js",

        "Express.js",

        "JWT",

      ],



      database:[

        "MongoDB",

      ],



      deployment:[

        "Vercel",

        "Railway",

      ],



      tools:[

        "Git",

        "GitHub",

        "Figma",

      ],


    },



    live:"",

    github:"",


  },







  {
    title:"MediNexa Connect",


    slug:"medinexa-connect",



    shortDescription:
      "A healthcare management system connecting patients and doctors.",




    description:
      "MediNexa Connect is a healthcare platform that provides appointment booking, doctor management, digital prescriptions and secure healthcare workflow.",



    image:
      "/projects/medinexa.png",



    features:[

      "Patient dashboard",

      "Doctor dashboard",

      "Appointment booking",

      "Digital prescription",

      "Payment integration",

    ],



    problemSolving:[

      "Managed complex healthcare workflows",

      "Implemented role-based access",

      "Organized medical data efficiently",

      "Created secure user authentication",

    ],



    technologies:{


      frontend:[

        "Next.js",

        "TypeScript",

        "Tailwind CSS",

      ],



      backend:[

        "Node.js",

        "Express.js",

        "JWT",

      ],



      database:[

        "MongoDB",

      ],



      deployment:[

        "Vercel",

        "Railway",

      ],



      tools:[

        "Git",

        "GitHub",

        "Figma",

      ],


    },



    live:"",

    github:"",


  },







  {
    title:"Estate Hub",


    slug:"estate-hub",



    shortDescription:
      "A modern real estate platform for property management and exploration.",




    description:
      "Estate Hub is a full-stack real estate application where users can explore properties, manage listings and interact with a modern responsive interface.",



    image:
      "/projects/estate-hub.png",



    features:[

      "Property listing",

      "Property details",

      "User authentication",

      "Responsive design",

      "Dashboard management",

    ],



    problemSolving:[

      "Structured large property data",

      "Created reusable UI architecture",

      "Improved user navigation",

      "Built scalable application structure",

    ],



    technologies:{


      frontend:[

        "Next.js",

        "TypeScript",

        "Tailwind CSS",

      ],



      backend:[

        "Node.js",

        "Express.js",

      ],



      database:[

        "MongoDB",

      ],



      deployment:[

        "Vercel",

        "Railway",

      ],



      tools:[

        "Git",

        "GitHub",

        "Figma",

      ],


    },



    live:"",

    github:"",


  },


];