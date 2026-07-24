"use client";

import Link from "next/link";

import {
  HiBars3,
} from "react-icons/hi2";

import ThemeToggle from "@/components/ui/theme-toggle";
import { navigation, type NavigationItem, } from "@/data/navigation";




interface NavbarProps {
  onMenuClick: () => void;
}


export default function Navbar({
  onMenuClick,
}: NavbarProps) {

  return (

    <header
      className="
        fixed
        top-0
        z-50
        w-full
        border-b
        border-default
        backdrop-blur-xl
      "
    >

      <nav
        className="
          mx-auto
          flex
          max-w-7xl
          items-center
          justify-between
          px-6
          py-4
        "
      >


        {/* Logo */}

        <Link
          href="/"
          className="
            text-xl
            font-bold
          "
        >

          Hasan
          <span
            className="
              text-primary
            "
          >
            .
          </span>

        </Link>



        {/* Desktop Menu */}

        <div
          className="
            hidden
            items-center
            gap-8
            md:flex
          "
        >

         {
  navigation.map(
    (item: NavigationItem)=>(
      <Link
        key={item.href}
        href={item.href}
        className="
          text-sm
          text-muted
          transition
          hover:text-primary
        "
      >
        {item.label}
      </Link>
    )
  )
}


          <ThemeToggle />

        </div>



        {/* Mobile */}

        <div
          className="
            flex
            items-center
            gap-3
            md:hidden
          "
        >

          <ThemeToggle />


          <button
            type="button"
            onClick={onMenuClick}
            className="
              rounded-full
              border
              border-default
              p-2
            "
          >

            <HiBars3
              size={22}
            />

          </button>


        </div>


      </nav>


    </header>

  );
}