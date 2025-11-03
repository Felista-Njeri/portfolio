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
    <div className="min-w-screen min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <WorkExperience />
      <Achievements />
      <Projects />
      <Contact />
    </div>
  );
};

export default Index;
