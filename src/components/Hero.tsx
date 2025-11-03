import { Github, Linkedin, Twitter } from "lucide-react";
import { useState, useEffect } from "react";
import { scrollToSection } from "@/lib/scrollToSection";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-pink-500/20 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h1 className="pb-2 text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent leading-tight">
            Felista Njeri
          </h1>
          <div className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent font-semibold">
              Frontend Developer
            </span>
            <span className="block mt-2">
              Passionate about building innovative software solutions that bridge traditional web development with cutting-edge blockchain technology
            </span>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
             <button onClick={() => scrollToSection("projects")}  className="px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25">
              View My Work
            </button>
            <button className="px-8 py-4 border border-purple-400 text-purple-400 rounded-full font-semibold transition-all duration-300 hover:bg-purple-400 hover:text-white hover:scale-105">
              Download CV
            </button>
          </div>
          <div className="flex justify-center space-x-4">
            <a href="https://github.com/Felista-Njeri" target="_blank"><Github className="text-gray-400 hover:text-purple-400" /></a>
            <a href="https://www.linkedin.com/in/felista-njeri" target="_blank"><Linkedin className="text-gray-400 hover:text-purple-400"/></a>
            <a href="https://x.com/njerinjeri__" target="_blank"><Twitter className="text-gray-400 hover:text-purple-400" /></a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
