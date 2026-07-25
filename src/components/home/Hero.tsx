"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import { HiArrowRight } from "react-icons/hi2";
import { HiDownload } from "react-icons/hi";

import AnimatedButton from "@/components/ui/AnimatedButton";
import { socialLinks } from "@/data/socials";

const containerVariants: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] },
  },
};

export default function Hero() {
  return (
    <section id="home" className="scroll-mt-24 relative overflow-hidden pt-32 pb-20">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-2">
        {/* Content */}
        <motion.div variants={containerVariants} initial="hidden" animate="show">
          <motion.span
            variants={itemVariants}
            className="inline-flex rounded-full border border-border-default px-4 py-2 text-sm text-primary"
          >
            Open to full-time and remote roles
          </motion.span>

          <motion.h1
            variants={itemVariants}
            className="mt-6 text-4xl font-bold leading-tight md:text-6xl"
          >
            Hi, I&apos;m
            <span className="text-gradient">{" "}Hasan Md Zakaria</span>
          </motion.h1>

          <motion.h2
            variants={itemVariants}
            className="mt-5 text-2xl font-semibold md:text-3xl"
          >
            Full stack developer
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="mt-6 max-w-xl leading-8 text-muted"
          >
            I build modern, scalable and production-ready web applications
            using Next.js, TypeScript, React, Node.js and MongoDB.
          </motion.p>

          {/* Buttons */}
          <motion.div variants={itemVariants} className="mt-8 flex flex-wrap gap-4">
            <Link href="#projects">
              <AnimatedButton>
                View projects
                <HiArrowRight />
              </AnimatedButton>
            </Link>

            <Link href="/resume.pdf" target="_blank" rel="noopener noreferrer">
              <AnimatedButton className="border border-border-default bg-transparent text-foreground">
                Download CV
                <HiDownload />
              </AnimatedButton>
            </Link>
          </motion.div>

          {/* Social */}
          <motion.div variants={itemVariants} className="mt-8 flex items-center gap-5">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <Link
                  key={social.id}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  className="text-muted transition-colors hover:text-primary"
                >
                  <Icon size={22} />
                </Link>
              );
            })}
          </motion.div>
        </motion.div>

        {/* Image Area */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative flex h-80 w-80 items-center justify-center justify-self-center md:h-96 md:w-96"
        >
          {/* Decorative pulsing circles, behind the photo */}
          <motion.div
            animate={{ scale: [1, 1.08, 1] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute h-full w-full rounded-full border border-primary/30"
          />
          <motion.div
            animate={{ scale: [1, 1.14, 1] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            className="absolute h-[85%] w-[85%] rounded-full border border-accent/30"
          />
          <motion.div
            animate={{ scale: [1, 1.05, 1], opacity: [0.5, 0.8, 0.5] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute h-[110%] w-[110%] rounded-full bg-primary/10 blur-2xl"
          />

          {/* Photo frame */}
          <div className="relative h-[80%] w-[80%] overflow-hidden rounded-full border-2 border-primary/60 bg-surface shadow-lg">
            <Image
              src="/Hasan.jpg"
              alt="Hasan Md Zakaria"
              fill
              sizes="(min-width: 768px) 320px, 260px"
              className="object-cover"
              priority
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}