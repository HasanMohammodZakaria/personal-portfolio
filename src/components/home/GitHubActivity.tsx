"use client";


import {
  motion,
} from "framer-motion";


import {
 
  HiArrowTopRightOnSquare,
} from "react-icons/hi2";


import SectionHeading from "@/components/ui/SectionHeading";

import GlassCard from "@/components/ui/GlassCard";



const githubStats = [

  {
    title:"Repositories",

    value:"20+",

    description:"Projects and experiments hosted on GitHub.",

  },


  {
    title:"Contributions",

    value:"Active",

    description:"Regular coding and project development.",

  },


  {
    title:"Open Source",

    value:"Growing",

    description:"Learning, building and sharing code.",

  },

];





export default function GitHubActivity(){


  return (

    <section

      id="github"

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

          badge="GitHub Activity"

          title="My coding"

          highlight="journey"

          description="
            Explore my repositories, coding
            activity and development progress.
          "

        />





        <div

          className="
            mt-16
            grid
            gap-6
            md:grid-cols-3
          "

        >


          {
            githubStats.map(

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

                    duration:.5,

                    delay:index * .1,

                  }}

                >


                  <GlassCard

                    className="
                      p-6
                    "

                  >

                    <h3

                      className="
                        text-3xl
                        font-bold
                        text-primary
                      "

                    >

                      {item.value}

                    </h3>


                    <h4

                      className="
                        mt-3
                        text-lg
                        font-semibold
                      "

                    >

                      {item.title}

                    </h4>


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


              )

            )
          }



        </div>





        <div

          className="
            mt-10
            flex
            justify-center
          "

        >

          <a

            href="https://github.com/your-username"

            target="_blank"

            rel="noopener noreferrer"

            className="
              flex
              items-center
              gap-2
              rounded-full
              bg-primary
              px-6
              py-3
              text-black
            "

          >

            Visit GitHub

            <HiArrowTopRightOnSquare />

          </a>


        </div>



      </div>


    </section>

  );

}