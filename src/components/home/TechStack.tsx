"use client";


import {
  motion,
} from "framer-motion";


import {
  HiCodeBracket,
  HiServerStack,
  HiCircleStack,
  HiWrenchScrewdriver,
} from "react-icons/hi2";


import SectionHeading from "@/components/ui/SectionHeading";

import GlassCard from "@/components/ui/GlassCard";




const techGroups = [

  {
    title:"Frontend",

    description:
      "Modern tools I use to build fast and interactive user interfaces.",

    icon:HiCodeBracket,

    technologies:[

      "HTML5",

      "CSS3",

      "JavaScript",

      "TypeScript",

      "React",

      "Next.js",

      "Tailwind CSS",

      "Framer Motion",

    ],

  },



  {
    title:"Backend",

    description:
      "Technologies for building scalable server-side applications.",

    icon:HiServerStack,

    technologies:[

      "Node.js",

      "Express.js",

      "REST API",

      "JWT",

      "Authentication",

    ],

  },



  {
    title:"Database",

    description:
      "Database technologies for storing and managing application data.",

    icon:HiCircleStack,

    technologies:[

      "MongoDB",

      "MongoDB Atlas",

      "Mongoose",

    ],

  },



  {
    title:"Tools & Deployment",

    description:
      "Development tools and platforms I use for production delivery.",

    icon:HiWrenchScrewdriver,

    technologies:[

      "Git",

      "GitHub",

      "VS Code",

      "Figma",

      "Vercel",

      "Railway",

    ],

  },


];






export default function TechStack(){


  return (

    <section

      id="tech-stack"

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

          badge="Tech Stack"

          title="Technologies I"

          highlight="work with"

          description="
            A collection of modern technologies
            and tools I use to build scalable
            web applications.
          "

        />







        <div

          className="
            mt-16
            grid
            gap-8
            md:grid-cols-2
          "

        >


          {
            techGroups.map(

              (group,index)=>{


                const Icon = group.icon;


                return (

                  <motion.div

                    key={group.title}


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
                        p-6
                      "

                    >



                      <div

                        className="
                          flex
                          items-center
                          gap-4
                        "

                      >

                        <div

                          className="
                            flex
                            h-12
                            w-12
                            items-center
                            justify-center
                            rounded-full
                            bg-primary
                            text-black
                          "

                        >

                          <Icon size={24}/>


                        </div>



                        <h3

                          className="
                            text-xl
                            font-semibold
                          "

                        >

                          {group.title}


                        </h3>


                      </div>






                      <p

                        className="
                          mt-5
                          text-sm
                          leading-7
                          text-muted
                        "

                      >

                        {group.description}


                      </p>







                      <div

                        className="
                          mt-6
                          flex
                          flex-wrap
                          gap-3
                        "

                      >

                        {
                          group.technologies.map(

                            (tech:string)=>(

                              <span

                                key={tech}

                                className="
                                  rounded-full
                                  border
                                  border-default
                                  px-4
                                  py-2
                                  text-sm
                                  text-muted
                                "

                              >

                                {tech}


                              </span>

                            )

                          )
                        }


                      </div>




                    </GlassCard>



                  </motion.div>


                );


              }

            )
          }



        </div>




      </div>


    </section>

  );

}