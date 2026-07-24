import { siteConfig } from "@/constants/site";
import Link from "next/link";
import {
  socialLinks,
  type SocialLink,
} from "@/data/socials";







export default function Footer(){

  return (

    <footer
      className="
        border-t
        border-default
        py-10
      "
    >

      <div
        className="
          mx-auto
          flex
          max-w-7xl
          flex-col
          gap-6
          px-6
          md:flex-row
          md:items-center
          md:justify-between
        "
      >


        <p
          className="
            text-sm
            text-muted
          "
        >

          © {new Date().getFullYear()}
          {" "}
          {siteConfig.name}

        </p>



        <div
          className="
            flex
            gap-4
          "
        >

         {
  socialLinks.map((social: SocialLink)=>{

    const Icon =
      social.icon;

    return (

                <Link

                  key={social.id}

                  href={social.href}

                  target="_blank"

                  className="
                    text-muted
                    hover:text-primary
                  "

                >

                  <Icon size={20}/>

                </Link>

              );

            })
          }


        </div>


      </div>

    </footer>

  );

}