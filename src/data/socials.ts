import {
  FaGithub,
  FaLinkedin,
  FaFacebook,
} from "react-icons/fa6";


export interface SocialLink {

  id: string;

  name: string;

  href: string;

  icon: React.ElementType;

  external: boolean;

}



export const socialLinks: SocialLink[] = [

  {
    id: "github",

    name: "GitHub",

    href:
      "https://github.com/HasanMohammodZakaria",

    icon:
      FaGithub,

    external:
      true,
  },


  {
    id: "linkedin",

    name: "LinkedIn",

    href:
      "https://linkedin.com",

    icon:
      FaLinkedin,

    external:
      true,
  },


  {
    id: "facebook",

    name: "Facebook",

    href:
      "https://facebook.com",

    icon:
      FaFacebook,

    external:
      true,
  },

];