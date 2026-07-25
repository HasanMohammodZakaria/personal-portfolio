import About from "@/components/home/About";
import Contact from "@/components/home/Contact";
import DevelopmentProcess from "@/components/home/DevelopmentProcess";
import FeaturedProjects from "@/components/home/FeaturedProjects";

import Hero from "@/components/home/Hero";
import TechStack from "@/components/home/TechStack";


export default function Home() {
  return (
    <div>
      <Hero />
      <About />
      <FeaturedProjects />
      
      <TechStack />
      <DevelopmentProcess />
      <Contact />
    </div>
  );
}
