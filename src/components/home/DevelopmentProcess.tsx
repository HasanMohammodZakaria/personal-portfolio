"use client";
import {
  motion,
} from "framer-motion";


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





export default function DevelopmentProcess(){


  return (

    <section

      id="process"

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

          badge="Development Process"

          title="How I"

          highlight="build"

          description="
            A structured workflow that helps me
            create scalable, maintainable and
            user-focused digital products.
          "

        />






        <div

          className="
            mt-16
            grid
            gap-6
            md:grid-cols-2
            lg:grid-cols-5
          "

        >


          {
            developmentSteps.map(

              (step,index)=>{


                const Icon = step.icon;


                return (

                  <motion.div

                    key={step.id}


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
                          h-12
                          w-12
                          items-center
                          justify-center
                          rounded-full
                          bg-primary
                          text-black
                        "

                      >

                        <Icon

                          size={24}

                        />

                      </div>






                      <span

                        className="
                          mt-6
                          block
                          text-sm
                          text-primary
                        "

                      >

                        {step.id}

                      </span>






                      <h3

                        className="
                          mt-3
                          text-lg
                          font-semibold
                        "

                      >

                        {step.title}

                      </h3>






                      <p

                        className="
                          mt-3
                          text-sm
                          leading-7
                          text-muted
                        "

                      >

                        {step.description}

                      </p>




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