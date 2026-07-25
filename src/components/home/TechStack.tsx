"use client";

import { motion } from "framer-motion";

import {
  HiCodeBracket,
  HiServerStack,
  HiCircleStack,
  HiWrenchScrewdriver,
} from "react-icons/hi2";

import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiFramer,
  SiNodedotjs,
  SiExpress,
  SiJsonwebtokens,
  SiMongodb,
  SiGit,
  SiGithub,

  SiFigma,
  SiVercel,
  SiRailway,
  SiNetlify,
  SiRender,
  SiVivaldi,
} from "react-icons/si";

import { HiShieldCheck, HiCloud } from "react-icons/hi2";

import SectionHeading from "@/components/ui/SectionHeading";
import GlassCard from "@/components/ui/GlassCard";

const techGroups = [
  {
    title: "Frontend",
    description:
      "Modern tools I use to build fast and interactive user interfaces.",
    icon: HiCodeBracket,
    technologies: [
      { name: "JavaScript", icon: SiJavascript },
      { name: "TypeScript", icon: SiTypescript },
      { name: "React", icon: SiReact },
      { name: "Next.js", icon: SiNextdotjs },
      { name: "Tailwind CSS", icon: SiTailwindcss },
      { name: "Framer Motion", icon: SiFramer },
    ],
  },

  {
    title: "Backend",
    description:
      "Technologies for building scalable server-side applications.",
    icon: HiServerStack,
    technologies: [
      { name: "Node.js", icon: SiNodedotjs },
      { name: "Express.js", icon: SiExpress },
      { name: "REST API", icon: HiCloud },
      { name: "JWT", icon: SiJsonwebtokens },
      { name: "Better Auth", icon: HiShieldCheck },
    ],
  },

  {
    title: "Database",
    description:
      "Database technologies for storing and managing application data.",
    icon: HiCircleStack,
    technologies: [
      { name: "MongoDB", icon: SiMongodb },
      { name: "MongoDB Atlas", icon: SiMongodb },
      { name: "Mongoose", icon: SiMongodb },
    ],
  },

  {
    title: "Tools & Deployment",
    description:
      "Development tools and platforms I use for production delivery.",
    icon: HiWrenchScrewdriver,
    technologies: [
      { name: "Git", icon: SiGit },
      { name: "GitHub", icon: SiGithub },
      { name: "VS Code", icon: SiVivaldi },
      { name: "Figma", icon: SiFigma },
      { name: "Vercel", icon: SiVercel },
      { name: "Railway", icon: SiRailway },
      { name: "Netlify", icon: SiNetlify },
      { name: "Render", icon: SiRender },
    ],
  },
];

export default function TechStack() {
  return (
    <section id="tech-stack" className="section-padding">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          badge="Tech Stack"
          title="Technologies I"
          highlight="work with"
          description="
            A collection of modern technologies
            and tools I use to build scalable
            web applications.
          "
        />

        <div className="mt-16 grid gap-8 md:grid-cols-2">
          {techGroups.map((group, index) => {
            const Icon = group.icon;

            return (
              <motion.div
                key={group.title}
                initial={{
                  opacity: 0,
                  y: 40,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
              >
                <GlassCard
                  className="
                    h-full
                    p-6
                    transition-colors
                    duration-300
                    hover:border-primary/40
                  "
                >
                  <div className="flex items-center gap-4">
                    <div
                      className="
                        flex
                        h-12
                        w-12
                        items-center
                        justify-center
                        rounded-full
                        bg-primary
                        text-primary-foreground
                      "
                    >
                      <Icon size={24} />
                    </div>

                    <h3 className="text-xl font-semibold">{group.title}</h3>
                  </div>

                  <p className="mt-5 text-sm leading-7 text-muted">
                    {group.description}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-3">
                    {group.technologies.map((tech) => {
                      const TechIcon = tech.icon;

                      return (
                        <span
                          key={tech.name}
                          className="
                            flex
                            items-center
                            gap-2
                            rounded-full
                            border
                            border-border-default
                            px-4
                            py-2
                            text-sm
                            text-muted
                            transition-colors
                            hover:border-border-strong
                            hover:text-foreground
                          "
                        >
                          <TechIcon size={16} />
                          {tech.name}
                        </span>
                      );
                    })}
                  </div>
                </GlassCard>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}