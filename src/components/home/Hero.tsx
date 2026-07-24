"use client";


import Link from "next/link";

import {
  motion,
} from "framer-motion";


import {
  HiArrowRight,
} from "react-icons/hi2";


import AnimatedButton from "@/components/ui/AnimatedButton";

import {
  socialLinks,
} from "@/data/socials";
import { HiDownload } from "react-icons/hi";



export default function Hero() {


  return (

    <section
      id="home"
      className="
        relative
        overflow-hidden
        pt-32
        pb-20
      "
    >


      {/* Background Glow */}

      <div
        className="
          absolute
          left-1/2
          top-20
          -z-10
          h-72
          w-72
          -translate-x-1/2
          rounded-full
          bg-primary/20
          blur-3xl
        "
      />



      <div
        className="
          mx-auto
          grid
          max-w-7xl
          items-center
          gap-12
          px-6
          lg:grid-cols-2
        "
      >



        {/* Content */}

        <motion.div

          initial={{
            opacity:0,
            y:30,
          }}

          animate={{
            opacity:1,
            y:0,
          }}

          transition={{
            duration:.6,
          }}

        >


          <span
            className="
              inline-flex
              rounded-full
              border
              border-default
              px-4
              py-2
              text-sm
              text-primary
            "
          >

            Available for Remote Work

          </span>



          <h1
            className="
              mt-6
              text-4xl
              font-bold
              leading-tight
              md:text-6xl
            "
          >

            Hi, I&apos;m

            <span
              className="
                text-gradient
              "
            >

              {" "}
              Hasan Md Zakaria

            </span>


          </h1>



          <h2
            className="
              mt-5
              text-2xl
              font-semibold
              md:text-3xl
            "
          >

            Full Stack Developer

          </h2>



          <p
            className="
              mt-6
              max-w-xl
              leading-8
              text-muted
            "
          >

            I build modern, scalable and
            production-ready web applications
            using Next.js, TypeScript,
            React, Node.js and MongoDB.

          </p>




          {/* Buttons */}

          <div
            className="
              mt-8
              flex
              flex-wrap
              gap-4
            "
          >


            <AnimatedButton>

              View Projects

              <HiArrowRight />

            </AnimatedButton>



            <Link
              href="#contact"
            >

              <AnimatedButton
                className="
                  bg-transparent
                  border
                  border-default
                  text-(--foreground)
                "
              >

                Download CV

                <HiDownload />

              </AnimatedButton>

            </Link>


          </div>




          {/* Social */}

          <div
            className="
              mt-8
              flex
              items-center
              gap-5
            "
          >

            {
              socialLinks.map((social)=>{

                const Icon =
                  social.icon;


                return (

                  <Link

                    key={social.id}

                    href={social.href}

                    target="_blank"

                    rel="noopener noreferrer"

                    className="
                      text-muted
                      transition
                      hover:text-primary
                    "

                  >

                    <Icon size={22}/>


                  </Link>

                );

              })
            }

          </div>



        </motion.div>





        {/* Image Area */}

        <motion.div

          initial={{
            opacity:0,
            scale:.9,
          }}

          animate={{
            opacity:1,
            scale:1,
          }}

          transition={{
            duration:.6,
            delay:.2,
          }}

          className="
            flex
            justify-center
          "

        >

          <div
            className="
              relative
              flex
              h-80
              w-80
              items-center
              justify-center
              rounded-full
              border
              border-default
              glass
              md:h-96
              md:w-96
            "
          >

            <span
              className="
                text-center
                text-muted
              "
            >

              Profile Image

              <br />

              400×400

            </span>


          </div>


        </motion.div>



      </div>


    </section>

  );

}