const Skills = () => {
  const skills = [
    "TypeScript",
    "JavaScript",
    "React",
    "Next.js",
    "ExpressJS",
    "TailwindCSS",
    "Solidity",
    "Hardhat",
  ];

  return (
    <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="mb-16 animate-fade-in">
            <h2 className="text-6xl sm:text-7xl md:text-8xl font-black tracking-tighter mb-4">
              SKILLS
            </h2>
            <div className="text-3xl">✦</div>
          </div>

          {/* Skills grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 animate-fade-in">
            {skills.map((skill, index) => (
              <div
                key={skill}
                className="group relative p-8 border border-gray-600 rounded-lg transition-all duration-300 hover:scale-105"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-center">
                  <h3 className="sm:text-xl font-bold tracking-tight">{skill}</h3>
                </div>                
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
