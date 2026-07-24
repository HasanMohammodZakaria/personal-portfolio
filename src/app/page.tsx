import About from "@/components/home/About";
import DevelopmentProcess from "@/components/home/DevelopmentProcess";
import FeaturedProjects from "@/components/home/FeaturedProjects";
import GitHubActivity from "@/components/home/GitHubActivity";
import Hero from "@/components/home/Hero";
import TechStack from "@/components/home/TechStack";


export default function Home() {
  return (
    <div>
      <Hero />
      <About />
      <FeaturedProjects />
      <DevelopmentProcess />
      <TechStack />
      <GitHubActivity/>
    </div>
  );
}
