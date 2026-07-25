"use client";

import { motion } from "framer-motion";

import {
  HiMagnifyingGlass,
  HiPaintBrush,
  HiCodeBracket,
  HiBugAnt,
  HiRocketLaunch,
} from "react-icons/hi2";

import SectionHeading from "@/components/ui/SectionHeading";
import GlassCard from "@/components/ui/GlassCard";

const developmentSteps = [
  {
    id: "01",
    title: "Planning & Research",
    description:
      "Understanding requirements, analyzing problems and creating a clear roadmap before development.",
    icon: HiMagnifyingGlass,
  },
  {
    id: "02",
    title: "UI/UX Design",
    description:
      "Creating clean and user-friendly interfaces with modern design principles.",
    icon: HiPaintBrush,
  },
  {
    id: "03",
    title: "Development",
    description:
      "Building scalable frontend, backend and database solutions using modern technologies.",
    icon: HiCodeBracket,
  },
  {
    id: "04",
    title: "Testing & Optimization",
    description:
      "Testing functionality, fixing issues and improving performance for better experience.",
    icon: HiBugAnt,
  },
  {
    id: "05",
    title: "Deployment",
    description:
      "Deploying production-ready applications and ensuring smooth delivery.",
    icon: HiRocketLaunch,
  },
];

export default function DevelopmentProcess() {
  return (
    <section id="process" className="section-padding">
      <div className="mx-auto max-w-4xl px-6">
        <SectionHeading
          badge="Development Process"
          title="How I"
          highlight="build"
          description="
            A structured workflow that helps me
            create scalable, maintainable and
            user-focused digital products.
          "
        />

        <div className="relative mt-16">
          {/* Vertical line - runs behind the dots only */}
          <div
            className="
              absolute
              top-0
              left-6
              h-full
              w-px
              bg-border-default
              md:left-1/2
              md:-translate-x-1/2
            "
          />

          <div className="flex flex-col gap-10">
            {developmentSteps.map((step, index) => {
              const Icon = step.icon;
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={step.id}
                  initial={{
                    opacity: 0,
                    y: 30,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                    amount: 0.1,
                  }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1,
                  }}
                  className={`
                    relative
                    flex
                    items-start
                    gap-6
                    md:gap-10
                    ${isEven ? "md:flex-row" : "md:flex-row-reverse"}
                  `}
                >
                  {/* Dot + Icon */}
                  <div
                    className={`
                      relative
                      z-10
                      flex
                      h-12
                      w-12
                      shrink-0
                      items-center
                      justify-center
                      rounded-full
                      text-primary-foreground
                      md:absolute
                      md:left-1/2
                      md:-translate-x-1/2
                      ${isEven ? "bg-primary" : "bg-accent"}
                    `}
                  >
                    <Icon size={22} />
                  </div>

                  {/* Card */}
                  <div
                    className="
                      w-full
                      md:w-[calc(50%-2.5rem)]
                    "
                  >
                    <GlassCard
                      className={`
                        p-6
                        transition-colors
                        duration-300
                        ${
                          isEven
                            ? "hover:border-primary/40"
                            : "hover:border-accent/40"
                        }
                      `}
                    >
                      <span
                        className={`
                          text-sm
                          ${isEven ? "text-primary" : "text-accent"}
                        `}
                      >
                        Step {step.id}
                      </span>

                      <h3 className="mt-2 text-lg font-semibold">
                        {step.title}
                      </h3>

                      <p className="mt-3 text-sm leading-7 text-muted">
                        {step.description}
                      </p>
                    </GlassCard>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}