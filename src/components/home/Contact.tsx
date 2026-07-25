"use client";


import {
  HiEnvelope,
  HiMapPin,
} from "react-icons/hi2";


import SectionHeading from "@/components/ui/SectionHeading";

import GlassCard from "@/components/ui/GlassCard";




export default function Contact(){


  return (

    <section

      id="contact"

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

          badge="Contact"

          title="Let's work"

          highlight="together"

          description="
            Have a project idea? Feel free to
            contact me and let's create something
            amazing.
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



          <GlassCard

            className="
              p-8
            "

          >

            <h3

              className="
                text-2xl
                font-semibold
              "

            >

              Get In Touch

            </h3>



            <div

              className="
                mt-8
                space-y-5
              "

            >

              <div

                className="
                  flex
                  items-center
                  gap-4
                "

              >

                <HiEnvelope

                  className="
                    text-primary
                  "

                  size={24}

                />


                <span

                  className="
                    text-muted
                  "

                >

                  your-email@gmail.com

                </span>


              </div>





              <div

                className="
                  flex
                  items-center
                  gap-4
                "

              >

                <HiMapPin

                  className="
                    text-primary
                  "

                  size={24}

                />


                <span

                  className="
                    text-muted
                  "

                >

                  Bangladesh

                </span>


              </div>


            </div>


          </GlassCard>







          <GlassCard

            className="
              p-8
            "

          >

            <form

              className="
                space-y-5
              "

            >


              <input

                type="text"

                placeholder="Your Name"

                className="
                  input-style
                "

              />



              <input

                type="email"

                placeholder="Your Email"

                className="
                  input-style
                "

              />




              <textarea

                placeholder="Your Message"

                rows={5}

                className="
                  input-style
                  resize-none
                "

              />





              <button

                type="submit"

                className="
                  rounded-full
                  bg-primary
                  px-6
                  py-3
                  font-medium
                  text-black
                "

              >

                Send Message

              </button>


            </form>


          </GlassCard>



        </div>



      </div>


    </section>

  );

}