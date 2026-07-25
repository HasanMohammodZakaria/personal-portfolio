import Link from "next/link";
import { notFound } from "next/navigation";

import { HiArrowLeft, HiArrowTopRightOnSquare, HiCodeBracket } from "react-icons/hi2";

import { projects } from "@/data/projects";
import ProjectGallery from "@/components/project/ProjectGallery";


interface ProjectDetailsPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function ProjectDetailsPage({
  params,
}: ProjectDetailsPageProps) {
  const { slug } = await params;

  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="section-padding">
      <div className="mx-auto max-w-6xl px-6">
        {/* Back Button */}
        <Link
          href="/#projects"
          className="
            inline-flex
            items-center
            gap-2
            text-sm
            text-muted
            transition-colors
            hover:text-foreground
          "
        >
          <HiArrowLeft />
          Back to projects
        </Link>

        {/* Header */}
        <div className="mt-8 text-center">
          <h1 className="text-4xl font-bold md:text-6xl">{project.title}</h1>

          <p className="mx-auto mt-6 max-w-3xl leading-8 text-muted">
            {project.shortDescription}
          </p>
        </div>

        {/* Gallery */}
        <ProjectGallery
          mainImage={project.image}
          images={project.images}
          title={project.title}
        />

        {/* Overview */}
        <section className="mt-12">
          <h2 className="text-2xl font-semibold">Project Overview</h2>
          <p className="mt-4 leading-8 text-muted">{project.description}</p>
        </section>

        {/* Features */}
        <section className="mt-12">
          <h2 className="text-2xl font-semibold">Key Features</h2>
          <div className="mt-5 grid gap-4 md:grid-cols-2">
            {project.features.map((feature) => (
              <div
                key={feature}
                className="rounded-xl border border-border-default p-4 text-muted"
              >
                {feature}
              </div>
            ))}
          </div>
        </section>

       {/* Problem Solving */}
<section className="mt-12">
  <h2 className="text-2xl font-semibold">Problem Solving</h2>
  <div className="mt-5 grid gap-4 md:grid-cols-2">
    {project.problemSolving.map((item) => (
      <div
        key={item}
        className="rounded-xl border border-border-default p-4 text-muted"
      >
        {item}
      </div>
    ))}
  </div>
</section>

        {/* Future Improvements */}
        <section className="mt-12">
          <h2 className="text-2xl font-semibold">
            Potential Improvements &amp; Future Plans
          </h2>
          <div className="mt-5 grid gap-4 md:grid-cols-2">
            {project.futureImprovements.map((item) => (
              <div
                key={item}
                className="rounded-xl border border-dashed border-border-default p-4 text-muted"
              >
                {item}
              </div>
            ))}
          </div>
        </section>

       
        {/* Technology Stack */}
        <section className="mt-12">
          <h2 className="text-2xl font-semibold">Technology Stack</h2>

          <div className="mt-5 grid gap-6 md:grid-cols-2">
            <TechGroup title="Frontend" items={project.technologies.frontend} />
            <TechGroup title="Backend" items={project.technologies.backend} />
            <TechGroup title="Database" items={project.technologies.database} />
            <TechGroup title="Deployment" items={project.technologies.deployment} />
            <TechGroup title="Tools" items={project.technologies.tools} />
          </div>
        </section>

        {/* Buttons */}
        <div className="mt-12 flex flex-wrap justify-center gap-4">
          <Link href={project.live} target="_blank">
            <button
              className="
                flex items-center gap-2 rounded-full
                bg-primary px-6 py-3 text-primary-foreground
                transition-colors hover:bg-primary-hover
              "
            >
              Live Demo
              <HiArrowTopRightOnSquare />
            </button>
          </Link>

          <Link href={project.github} target="_blank">
            <button
              className="
                flex items-center gap-2 rounded-full
                border border-border-default px-6 py-3
                transition-colors hover:border-border-strong
              "
            >
              GitHub Code
              <HiCodeBracket />
            </button>
          </Link>
        </div>
      </div>
    </main>
  );
}

function TechGroup({ title, items }: { title: string; items: string[] }) {
  return (
    <div
      className="
        rounded-2xl
        border
        border-border-default
        p-5
      "
    >
      <h3 className="mb-3 font-medium">{title}</h3>
      <div className="flex flex-wrap gap-3">
        {items.map((item) => (
          <span
            key={item}
            className="
              rounded-full border border-border-default
              px-4 py-2 text-sm text-muted
            "
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}