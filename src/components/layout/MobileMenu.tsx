"use client";

import Link from "next/link";

import {
  HiXMark,
} from "react-icons/hi2";

import {
  motion,
  AnimatePresence,
} from "framer-motion";


import {
  navigation,
  type NavigationItem,
} from "@/data/navigation";

interface MobileMenuProps {

  open:boolean;

  onClose:()=>void;

}


export default function MobileMenu({

  open,

  onClose,

}:MobileMenuProps){


  return (

    <AnimatePresence>

      {
        open && (

          <motion.div

            initial={{
              opacity:0,
            }}

            animate={{
              opacity:1,
            }}

            exit={{
              opacity:0,
            }}

            className="
              fixed
              inset-0
              z-60
              bg-black/60
              backdrop-blur-sm
              md:hidden
            "

            onClick={onClose}

          >


            <motion.div

              initial={{
                x:"100%",
              }}

              animate={{
                x:0,
              }}

              exit={{
                x:"100%",
              }}

              transition={{
                duration:.3,
              }}

              onClick={(e)=>
                e.stopPropagation()
              }

              className="
                ml-auto
                flex
                h-full
                w-80
                flex-col
                gap-8
                border-l
                border-default
                bg-(--background)
                p-6
              "

            >


              <button
                onClick={onClose}
                className="
                  ml-auto
                "
              >

                <HiXMark size={28}/>

              </button>



              <div
                className="
                  flex
                  flex-col
                  gap-5
                "
              >

                {
  navigation.map(
    (item: NavigationItem)=>(
      <Link

        key={item.href}

        href={item.href}

        onClick={onClose}

        className="
          text-lg
          hover:text-primary
        "

      >

        {item.label}

      </Link>
    )
  )
}

              </div>


            </motion.div>


          </motion.div>

        )
      }

    </AnimatePresence>

  );

}