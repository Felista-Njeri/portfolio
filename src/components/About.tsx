import { Github, Linkedin, Twitter, Mail } from "lucide-react";

const About = () => {
  const socialLinks = [
    { icon: Github, href: "https://github.com/Felista-Njeri", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/felista-njeri", label: "LinkedIn" },
    { icon: Twitter, href: "https://x.com/njerinjeri__", label: "Twitter" },
    { icon: Mail, href: "mailto:njeerikamau2@gmail.com", label: "Email" },
  ];

  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="mb-16 animate-fade-in">
            <h2 className="text-6xl sm:text-7xl md:text-8xl font-black tracking-tighter mb-4">
              ABOUT
            </h2>
            <div className="text-3xl">✦</div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Left column - Image and social links */}
            <div className="space-y-6 animate-fade-in">
              <div className="relative">
                <img
                  src={"/pic.jpg"}
                  alt="Felista Njeri"
                  className="w-full max-w-md rounded-lg shadow-lg"
                />
              </div>

              {/* Social links */}
              <div className="flex gap-4 pt-4">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 text-primary-foreground rounded-md flex items-center justify-center border border-gray-700 hover:border-foreground hover:scale-105 transition-colors"
                      aria-label={social.label}
                    >
                      <Icon size={20} />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Right column - Bio */}
            <div className="space-y-6 animate-fade-in">
              <div className="space-y-6 text-muted-foreground leading-relaxed">
                <p className="text-lg">
                  I'm a passionate frontend developer with a keen interest in blockchain technology and Web3 innovation. My journey in software development has led me to specialize in creating seamless user experiences while exploring the limitless possibilities of decentralized applications.
                </p>

                <p>
                  With expertise spanning from modern web frameworks to smart contract development, I bring a unique perspective to every project. I believe in writing clean, efficient code that not only functions beautifully but also pushes the boundaries of what's possible in the digital space.
                </p>

                <p>
                  When I'm not coding, you'll find me exploring the latest in blockchain technology, contributing to open-source projects, or mentoring fellow developers in their journey to master the art of software development.
                </p>
              </div>

              {/* Education highlight */}
              <div className="pt-6 border-t border-border">
                <h3 className="font-bold text-foreground mb-2">Education</h3>
                <p className="text-sm text-muted-foreground">
                  Bachelor of Science in Computer Science from University of Nairobi
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
