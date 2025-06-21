import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "PropChain",
      description: "A blockchain-based platform for tokenizing real estate properties, enabling fractional ownership and seamless property trading through smart contracts.",
      tech: ["React", "Solidity", "Web3.js", "TailwindCSS"],
      gradient: "from-purple-600 to-blue-600",
      liveDemo: "https://propertychain.vercel.app",
      githubLink: "https://github.com/Felista-Njeri/real-estate-app",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "FVP",
      description: "A comprehensive financial management tool for securing and managing digital assets with advanced security features and intuitive user interface.",
      tech: ["Next.js", "TypeScript", "Express.js", "MongoDB"],
      gradient: "from-green-600 to-teal-600",
      liveDemo: "https://fvp.finance",
      githubLink: "https://github.com/Felista-Njeri",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "create-next-wagmi-shadcn",
      description: "An open-source NPM package that provides developers with essential tools and templates for quickly bootstrapping Web3 projects and DApps.",
      tech: ["Node.js", "CLI", "Templates", "Web3"],
      gradient: "from-orange-600 to-red-600",
      liveDemo: "https://www.npmjs.com/package/create-next-wagmi-shadcn",
      githubLink: "https://github.com/Felista-Njeri/next-wagmi-shadcn",
      image: "https://images.unsplash.com/photo-1618477388954-7852f32655ec?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Jo&Al Knowledge Experts",
      description: "A modern, responsive web application for a consultancy firm featuring dynamic content management, client portal, and interactive service showcase.",
      tech: ["React", "TailwindCSS", "Framer Motion", "CMS"],
      gradient: "from-pink-600 to-purple-600",
      liveDemo: "https://joandalknowledgexperts.com",
      githubLink: "#",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <section id="projects" className="py-20 px-6">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="group relative bg-white/5 backdrop-blur-lg rounded-3xl overflow-hidden border border-white/10 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${project.gradient} opacity-60`}></div>
              </div>
              
              <div className="p-8">
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-purple-300 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-3 py-1 bg-white/10 text-purple-300 rounded-full text-sm font-medium backdrop-blur-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-4">
                  <a href={project.githubLink} target="_blank">
                      <button className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg">
                        <Github className="w-4 h-4" />
                        Code
                      </button>
                  </a>

                  <a href={project.liveDemo} target="_blank">
                    <button className="flex items-center gap-2 px-4 py-2 border border-purple-400 text-purple-400 rounded-lg font-medium transition-all duration-300 hover:bg-purple-400 hover:text-white hover:scale-105">
                    <ExternalLink className="w-4 h-4" />
                    Live Project
                    </button>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
