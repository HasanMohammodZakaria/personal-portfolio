"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { HiEye } from "react-icons/hi2";

import SectionHeading from "@/components/ui/SectionHeading";
import GlassCard from "@/components/ui/GlassCard";
import AnimatedButton from "@/components/ui/AnimatedButton";

import { projects, type Project } from "@/data/projects";

export default function FeaturedProjects() {
  return (
    <section id="projects" className="scroll-mt-24 section-padding">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          badge="Featured projects"
          title="Projects I have"
          highlight="built"
          description="
            A showcase of my selected projects,
            focusing on modern technologies,
            clean architecture and real-world
            problem solving.
          "
        />

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project: Project, index: number) => (
            <motion.div
              key={project.slug}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <GlassCard className="h-full overflow-hidden">
                {/* Project Image - single static screenshot, no scroll */}
                <div className="relative h-52 w-full bg-surface-secondary">
                  {project.image ? (
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover"
                    />
                  ) : (
                    <div className="flex h-full items-center justify-center">
                      <span className="text-muted">Project preview</span>
                    </div>
                  )}
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-semibold">{project.title}</h3>

                  <p className="mt-3 text-sm leading-7 text-muted">
                    {project.shortDescription}
                  </p>

                  {/* Technology */}
                  <div className="mt-5 flex flex-wrap gap-2">
                    {[
                      ...project.technologies.frontend,
                      ...project.technologies.backend,
                      ...project.technologies.database,
                    ]
                      .slice(0, 5)
                      .map((tech: string) => (
                        <span
                          key={tech}
                          className="rounded-full border border-border-default px-3 py-1 text-xs text-muted"
                        >
                          {tech}
                        </span>
                      ))}
                  </div>

                  {/* Actions - only View Details, live/code links live on the detail page */}
                  <div className="mt-6 flex w-full justify-center">
                    <Link href={`/projects/${project.slug}`} className="w-full">
                      <AnimatedButton className="flex w-full items-center justify-center gap-2 whitespace-nowrap">
                        <HiEye size={18} />
                        View Details
                      </AnimatedButton>
                    </Link>
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}