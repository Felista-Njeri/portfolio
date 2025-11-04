import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Navbar from "@/components/Navbar";
import Skills from "@/components/Skills";
import WorkExperience from "@/components/WorkExperience";
import Achievements from "@/components/Achievements";

const Index = () => {
  return (
    <div className="min-w-screen min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <WorkExperience />
      <Projects />
      <Achievements />
      <Contact />
    </div>
  );
};

export default Index;
