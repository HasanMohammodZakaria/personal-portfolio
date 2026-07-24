"use client";

import {
  useTheme,
} from "next-themes";

import {
  useSyncExternalStore,
} from "react";

import {
  HiMoon,
  HiSun,
} from "react-icons/hi2";


const emptySubscribe = () => {
  return () => {};
};


export default function ThemeToggle() {

  const {
    theme,
    setTheme,
  } = useTheme();


  const mounted = useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false
  );


  if (!mounted) {
    return null;
  }


  return (

    <div
      className="
        flex
        gap-1
        rounded-full
        border
        border-default
        p-1
      "
    >


      <button
        type="button"
        onClick={() =>
          setTheme("dark")
        }
        aria-label="Dark mode"
        className={`
          rounded-full
          p-2
          transition
          ${
            theme === "dark"
              ?
            "bg-primary text-black"
              :
            "text-muted"
          }
        `}
      >

        <HiMoon size={18}/>

      </button>



      <button
        type="button"
        onClick={() =>
          setTheme("light")
        }
        aria-label="Light mode"
        className={`
          rounded-full
          p-2
          transition
          ${
            theme === "light"
              ?
            "bg-primary text-black"
              :
            "text-muted"
          }
        `}
      >

        <HiSun size={18}/>

      </button>


    </div>

  );
}