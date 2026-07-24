export interface Project {

  title: string;

  slug: string;

  description: string;

  image?: string;

  technologies: string[];

  live?: string;

  github?: string;

}



export const projects: Project[] = [


  {
    title: "Skill Pilot AI",

    slug: "skill-pilot-ai",

    description:
      "An Agentic AI powered platform that helps users improve skills through intelligent workflows.",

    technologies:[
      "Next.js",
      "TypeScript",
      "Node.js",
      "MongoDB",
      "AI",
    ],

    live:"#",

    github:"#",

  },



  {
    title: "MediNexa Connect",

    slug:"medinexa-connect",

    description:
      "A healthcare management platform with appointment booking, doctor dashboard and digital prescription system.",

    technologies:[
      "Next.js",
      "TypeScript",
      "Express.js",
      "MongoDB",
      "Stripe",
    ],

    live:"#",

    github:"#",

  },



  {
    title:"Estate Hub",

    slug:"estate-hub",

    description:
      "A modern real estate platform focused on property management and user-friendly experience.",

    technologies:[
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "MongoDB",
    ],

    live:"#",

    github:"#",

  },


];