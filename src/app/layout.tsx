import type { Metadata } from "next";

import {
  Inter,
  Michroma,
} from "next/font/google";

import "./globals.css";

import Providers from "./providers";

import MainNavbar from "@/components/layout/MainNavbar";
import Footer from "@/components/layout/Footer";

import {
  siteConfig,
} from "@/constants/site";



const inter = Inter({

  variable:
    "--font-inter",

  subsets:
    ["latin"],

});



const michroma = Michroma({

  variable:
    "--font-michroma",

  weight:
    "400",

  subsets:
    ["latin"],

});



export const metadata: Metadata = {

  title:
    siteConfig.title,

  description:
    siteConfig.description,

};



export default function RootLayout({

  children,

}: Readonly<{

  children: React.ReactNode;

}>) {


  return (

    <html

      lang="en"

      suppressHydrationWarning

      className={`
        ${inter.variable}
        ${michroma.variable}
        antialiased
      `}

    >


      <body

        className="
          min-h-screen
          bg-(--background)
          text-(--foreground)
        "

      >

        <Providers>

          <MainNavbar />


          <main>

            {children}

          </main>


          <Footer />


        </Providers>


      </body>


    </html>

  );

}