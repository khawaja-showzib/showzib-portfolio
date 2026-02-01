import ConnectSection from "./components/ConnectSection";
import ExperienceTimeline from "./components/ExperinceTimeline";
import HeroSection from "./components/Hero";
import HowIBuildProducts from "./components/HowIBuildProducts";
import ProjectsSection from "./components/ProjectSection";
import TechStackSection from "./components/TechStackSection";
import TestimonialsSection from "./components/TestimonialsSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <HowIBuildProducts />
      <ProjectsSection />
      <TechStackSection />
      <ExperienceTimeline />
      <TestimonialsSection />
      <ConnectSection
        linkedinUrl="https://www.linkedin.com/in/khawaja-showzib"
        email="khawajashowzib22@email.com"
      />
    </>
  );
}
