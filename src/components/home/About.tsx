"use client";

import { motion, type Variants } from "framer-motion";
import { HiAcademicCap, HiCode } from "react-icons/hi";

import SectionHeading from "@/components/ui/SectionHeading";
import GlassCard from "@/components/ui/GlassCard";

const focusAreas = [
  {
    title: "Frontend Development",
    description:
      "Building modern, responsive and interactive user interfaces with React, Next.js and TypeScript.",
  },
  {
    title: "Backend Development",
    description:
      "Creating secure APIs, database systems and scalable backend architecture using Node.js, Express and MongoDB.",
  },
  {
    title: "Clean Development",
    description:
      "Following reusable components, maintainable code structure and production-ready development practices.",
  },
  {
    title: "Continuous Learning",
    description:
      "Exploring modern technologies including AI integration, agentic AI and advanced web development.",
  },
];

const education = [
  {
    icon: HiAcademicCap,
    title: "BBA (Honours) in Marketing",
    place: "National University",
    period: "Bachelor's degree",
  },
  {
    icon: HiCode,
    title: "Full Stack Web Development",
    place: "Programming Hero",
    period: "6-month intensive program",
  },
];

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1, ease: [0.25, 0.1, 0.25, 1] },
  }),
};

export default function About() {
  return (
    <section id="about" className="scroll-mt-24 section-padding">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          badge="About me"
          title="Creating modern web solutions with"
          highlight="passion & purpose"
          description="
            I am Hasan Mohammod Zakaria, a full stack developer in the making,
            focused on building scalable, user-friendly and production-ready
            web applications.
          "
        />

        <div className="mt-16 grid gap-8 lg:grid-cols-5">
          {/* Main Story */}
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <GlassCard className="h-full p-8">
              <h3 className="text-2xl font-semibold">My journey</h3>

              <p className="mt-5 leading-8 text-muted">
                Curiosity is what pulled me toward web development. Seeing
                an idea come to life on a screen, something people can
                actually click, scroll and use, is what keeps me hooked to
                this craft.
              </p>

              <p className="mt-5 leading-8 text-muted">
                I have spent the last stretch of my journey mastering the
                full stack: React and Next.js on the frontend, Node.js and
                Express on the backend, with MongoDB tying it all together.
                Along the way, I built several projects on my own, choosing
                to understand the &quot;why&quot; behind the code rather
                than just following along.
              </p>

              <p className="mt-5 leading-8 text-muted">
                I am currently part of the SCIC developer batch, where I
                continue sharpening my craft through hands-on,
                industry-focused learning. What drives me is building
                products that feel as good to use as they were thoughtful
                to build.
              </p>
            </GlassCard>
          </motion.div>

          {/* Focus Cards */}
          <div className="grid gap-5 sm:grid-cols-2 lg:col-span-3">
            {focusAreas.map((item, index) => (
              <motion.div
                key={item.title}
                custom={index}
                variants={cardVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
              >
                <GlassCard className="h-full p-6">
                  <h3 className="text-xl font-semibold text-primary">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-muted">
                    {item.description}
                  </p>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Education */}
        <div className="mt-12">
          <h3 className="text-xl font-semibold">Educational qualification</h3>

          <div className="mt-6 grid gap-5 sm:grid-cols-2">
            {education.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  custom={index}
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.2 }}
                >
                  <GlassCard className="flex h-full items-start gap-4 p-6">
                    <div className="rounded-xl border border-border-default p-3 text-primary">
                      <Icon size={22} />
                    </div>

                    <div>
                      <h4 className="font-semibold">{item.title}</h4>
                      <p className="mt-1 text-sm text-muted">{item.place}</p>
                      <p className="mt-1 text-xs text-muted">{item.period}</p>
                    </div>
                  </GlassCard>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}