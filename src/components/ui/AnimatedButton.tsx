"use client";


import {
  motion,
} from "framer-motion";

import {
  cn,
} from "@/lib/utils";

import {
  ElementType,
  ReactNode,
} from "react";


interface AnimatedButtonProps {

  children: ReactNode;

  icon?: ElementType;

  className?: string;

  type?: "button" | "submit";

  disabled?: boolean;

}



export default function AnimatedButton({

  children,

  icon: Icon,

  className,

  type="button",

  disabled,

}: AnimatedButtonProps) {


  return (

    <motion.button

      type={type}

      disabled={disabled}

      whileHover={{
        scale: 1.03,
      }}

      whileTap={{
        scale:0.97,
      }}

      className={cn(

        `
        inline-flex
        items-center
        justify-center
        gap-2
        rounded-full
        bg-primary
        px-6
        py-3
        font-semibold
        text-black
        transition
        disabled:opacity-50
        `,
        
        className

      )}

    >

      {children}


      {
        Icon && (

          <Icon
            size={18}
          />

        )
      }


    </motion.button>

  );

}