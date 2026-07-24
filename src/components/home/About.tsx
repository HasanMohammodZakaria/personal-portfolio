"use client";


import {
  motion,
} from "framer-motion";


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
      "Exploring modern technologies including AI integration, Agentic AI and advanced web development.",
  },

];



export default function About(){


  return (

    <section
      id="about"
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

          badge="About Me"

          title="Creating modern web solutions with"

          highlight="passion & purpose"

          description="
            I am Hasan Mohammod Zakaria,
            a Full Stack Developer focused on building
            scalable, user-friendly and production-ready
            web applications.
          "

        />



        <div
          className="
            mt-16
            grid
            gap-8
            lg:grid-cols-5
          "
        >



          {/* Main Story */}

          <motion.div

            className="
              lg:col-span-2
            "

            initial={{
              opacity:0,
              x:-30,
            }}

            whileInView={{
              opacity:1,
              x:0,
            }}

            viewport={{
              once:true,
            }}

          >

            <GlassCard
              className="
                h-full
                p-8
              "
            >

              <h3
                className="
                  text-2xl
                  font-semibold
                "
              >

                My Journey

              </h3>


              <p
                className="
                  mt-5
                  leading-8
                  text-muted
                "
              >

                My journey started with WordPress
                development, where I learned website
                design, customization and real-world
                client requirements.

                <br />
                <br />

                Currently, I am expanding my skills
                into full-stack development by working
                with React, Next.js, TypeScript,
                Node.js and modern development tools.

                <br />
                <br />

                My goal is to build meaningful
                digital products with clean architecture
                and great user experiences.

              </p>


            </GlassCard>


          </motion.div>





          {/* Focus Cards */}

          <div
            className="
              grid
              gap-5
              sm:grid-cols-2
              lg:col-span-3
            "
          >

            {
              focusAreas.map(
                (item,index)=>(

                <motion.div

                  key={item.title}

                  initial={{
                    opacity:0,
                    y:30,
                  }}

                  whileInView={{
                    opacity:1,
                    y:0,
                  }}

                  viewport={{
                    once:true,
                  }}

                  transition={{
                    delay:index * 0.1,
                  }}

                >

                  <GlassCard
                    className="
                      h-full
                      p-6
                    "
                  >

                    <h3
                      className="
                        text-xl
                        font-semibold
                        text-primary
                      "
                    >

                      {item.title}

                    </h3>


                    <p
                      className="
                        mt-3
                        text-sm
                        leading-7
                        text-muted
                      "
                    >

                      {item.description}

                    </p>


                  </GlassCard>


                </motion.div>

              ))
            }


          </div>


        </div>


      </div>


    </section>

  );

}