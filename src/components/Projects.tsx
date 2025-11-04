import { Link } from "react-router";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

const Projects = () => {
  const projects = [
    {
      title: "FVP",
      description: "A comprehensive financial management tool for securing and managing digital assets with advanced security features and intuitive user interface.",
      tech: ["Next.js", "TypeScript", "Express.js", "MongoDB"],
      github: "https://github.com",
      live: "https://fvp.finance",
    },
    {
      title: "PropChain",
      description: "A blockchain-based platform for tokenizing real estate properties, enabling fractional ownership and seamless property trading through smart contracts.",
      tech: ["React", "Solidity", "Web3.js", "TailwindCSS"],
      live: "https://propertychain.vercel.app",
      github: "https://github.com/Felista-Njeri/real-estate-app",
    },
    {
      title: "create-next-wagmi-shadcn",
      description: "An open-source NPM package that provides developers with essential tools and templates for quickly bootstrapping Web3 projects and DApps.",
      tech: ["Node.js", "CLI", "Templates", "Web3"],
      live: "https://www.npmjs.com/package/create-next-wagmi-shadcn",
      github: "https://github.com/Felista-Njeri/next-wagmi-shadcn",
    },
    {
      title: "Jo&Al Knowledge Experts",
      description: "A modern, responsive web application for a consultancy firm featuring dynamic content management, client portal, and interactive service showcase.",
      tech: ["React", "TailwindCSS", "Framer Motion", "CMS"],
      live: "https://joandalknowledgexperts.com",
      githubLink: "#",
    }
  ];

  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="mb-16 animate-fade-in">
            <h2 className="text-6xl sm:text-7xl md:text-8xl font-black tracking-tighter mb-4">
              PROJECTS
            </h2>
            <div className="text-3xl">✦</div>
          </div>

          {/* Projects grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group border border-gray-500 rounded-lg p-8 hover:border-foreground transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="space-y-4">
                  <div className="flex items-start justify-between">
                    <h3 className="text-2xl font-bold tracking-tight group-hover:text-foreground/80 transition-colors">
                      {project.title}
                    </h3>
                    <div className="flex gap-2">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-foreground transition-colors"
                      >
                        <Github size={20} />
                      </a>
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-foreground transition-colors"
                      >
                        <ExternalLink size={20} />
                      </a>
                    </div>
                  </div>

                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs px-3 py-1 border border-gray-500 rounded-full font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button asChild  size="lg" className="font-medium">
              <Link to="https://github.com/Felista-Njeri" target="_blank">View All Projects</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
