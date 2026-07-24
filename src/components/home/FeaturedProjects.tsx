"use client";


import Image from "next/image";

import Link from "next/link";


import {
  motion,
} from "framer-motion";


import {
  HiArrowTopRightOnSquare,
  HiCodeBracket,
  HiEye,
} from "react-icons/hi2";


import SectionHeading from "@/components/ui/SectionHeading";

import GlassCard from "@/components/ui/GlassCard";

import AnimatedButton from "@/components/ui/AnimatedButton";


import {
  projects,
  type Project,
} from "@/data/projects";



export default function FeaturedProjects(){


  return (

    <section

      id="projects"

      className="
        section-padding
      "

    >


      <div

        className="
          mx-auto
          max-w-7xl
          px-6
        "

      >


        <SectionHeading

          badge="Featured Projects"

          title="Projects I have"

          highlight="built"

          description="
            A showcase of my selected projects,
            focusing on modern technologies,
            clean architecture and real-world
            problem solving.
          "

        />



        <div

          className="
            mt-16
            grid
            gap-8
            md:grid-cols-2
            lg:grid-cols-3
          "

        >


          {
            projects.map(

              (
                project: Project,
                index:number

              )=>(


                <motion.div

                  key={project.slug}


                  initial={{
                    opacity:0,
                    y:40,
                  }}


                  whileInView={{
                    opacity:1,
                    y:0,
                  }}


                  viewport={{
                    once:true,
                  }}


                  transition={{
                    duration:.5,
                    delay:index * .1,
                  }}

                >



                  <GlassCard

                    className="
                      h-full
                      overflow-hidden
                    "

                  >



                    {/* Project Image */}

                    <div

                      className="
                        relative
                        h-52
                        w-full
                        bg-surface-secondary
                      "

                    >

                      {
                        project.image ? (

                          <Image

                            src={project.image}

                            alt={project.title}

                            fill

                            className="
                              object-cover
                            "

                          />

                        ) : (

                          <div

                            className="
                              flex
                              h-full
                              items-center
                              justify-center
                            "

                          >

                            <span

                              className="
                                text-muted
                              "

                            >

                              Project Preview

                            </span>


                          </div>

                        )
                      }


                    </div>





                    <div

                      className="
                        p-6
                      "

                    >



                      <h3

                        className="
                          text-xl
                          font-semibold
                        "

                      >

                        {project.title}

                      </h3>




                      <p

                        className="
                          mt-3
                          text-sm
                          leading-7
                          text-muted
                        "

                      >

                        {project.description}

                      </p>





                      {/* Technology */}

                      <div

                        className="
                          mt-5
                          flex
                          flex-wrap
                          gap-2
                        "

                      >

                        {
                          project.technologies.map(

                            (
                              tech:string

                            )=>(

                              <span

                                key={tech}

                                className="
                                  rounded-full
                                  border
                                  border-default
                                  px-3
                                  py-1
                                  text-xs
                                  text-muted
                                "

                              >

                                {tech}

                              </span>

                            )

                          )
                        }

                      </div>





                   

{/* Actions */}

<div
  className="
    mt-6
    flex
    w-full
    justify-center
    gap-3
  "
>

  {/* Details */}

  <Link
    href={`/projects/${project.slug}`}
  >

    <AnimatedButton
      className="
        flex
        items-center
        gap-2
        whitespace-nowrap
      "
    >

      <HiEye size={18} />

      Details

    </AnimatedButton>

  </Link>



  {/* Live */}

  {
    project.live && (

      <Link
        href={project.live}
        target="_blank"
        rel="noopener noreferrer"
      >

        <AnimatedButton
          className="
            flex
            items-center
            gap-2
            whitespace-nowrap
            border
            border-default
            bg-transparent
            text-(--foreground)
          "
        >

          <HiArrowTopRightOnSquare size={18} />

          Live

        </AnimatedButton>

      </Link>

    )
  }



  {/* Code */}

  {
    project.github && (

      <Link
        href={project.github}
        target="_blank"
        rel="noopener noreferrer"
      >

        <AnimatedButton
          className="
            flex
            items-center
            gap-2
            whitespace-nowrap
            border
            border-default
            bg-transparent
            text-(--foreground)
          "
        >

          <HiCodeBracket size={18} />

          Code

        </AnimatedButton>

      </Link>

    )
  }


</div>



                    </div>



                  </GlassCard>


                </motion.div>


              )

            )
          }


        </div>


      </div>


    </section>

  );

}