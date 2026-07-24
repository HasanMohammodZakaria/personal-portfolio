"use client";


import {
  useState,
} from "react";


import Navbar from "./Navbar";
import MobileMenu from "./MobileMenu";



export default function MainNavbar(){


  const [
    open,
    setOpen
  ] = useState(false);



  return (

    <>

      <Navbar
        onMenuClick={()=>
          setOpen(true)
        }
      />


      <MobileMenu

        open={open}

        onClose={()=>
          setOpen(false)
        }

      />


    </>

  );

}