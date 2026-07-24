import About from "@/components/home/About";
import FeaturedProjects from "@/components/home/FeaturedProjects";
import Hero from "@/components/home/Hero";


export default function Home() {
  return (
    <div>
      <Hero />
      <About />
      <FeaturedProjects />
    </div>
  );
}
