const WorkExperience = () => {
  const experiences = [
    {
      role: "FRONTEND DEVELOPER",
      company: "Bafunde Ltd",
      location: "REMOTE",
      period: "March 2025 - Oct 2025",
      projects: [
        {
          name: "Startup School Kenya (Sep - Oct)",
          achievements: [
            "Developed the web interface for Startup School Kenya, a national online training platform for early-stage entrepreneurs under the Kenya National Innovation Agency (KENIA).",
            "Implemented multi-role user functionality using Next.js, Tailwind, Shadcn, and Axios, ensuring smooth and secure interaction across modules.",
            "Collaborated with backend engineers integrating Django REST APIs, achieving a reliable and responsive system across all user roles.",
          ],
        },
        {
          name: "Mula (March - Aug)",
          achievements: [
            "Accelerated financial data reconciliation time by 70% by building responsive Next.js dashboards that replaced manual Excel processes.",
            "Reduced loan tracking errors by 80% through API-driven automation of member-level loan and repayment processes, increasing funding cycle efficiency.",
            "Decreased manual reporting time by 80% by integrating backend APIs with analytics components, producing automated visual reports and metrics.",
          ],
        },
      ],
    },
    {
      role: "TECH INTERN",
      company: "Algorand Foundation",
      location: "REMOTE",
      period: "June 2024 - August 2024",
      achievements: [
        "Drove 35% increase in Algokit downloads by delivering technical demos, publishing developer documentation, and providing 1:1 developer support.",
        "Boosted local developer adoption of Algorand tools by hosting webinars with a 50%+ turnout rate, educating participants on the protocol's benefits.",
        "Designed a blockchain-based land registry system that reduced fraud risk by enabling immutable property records and improving ownership transparency.",
      ],
    },
    {
      role: "WEB DEVELOPER",
      company: "JO&AL - Knowledge Experts",
      location: "NAIROBI, KENYA",
      period: "July 2023 - September 2023",
      achievements: [
        "Improved client reach by 30% through developing a responsive website, optimizing accessibility and user engagement for consultancy services.",
        "Integrated M-Pesa Daraja API, streamlining payment workflows and reducing transaction errors by 30%.",
        "Achieved project delivery 20% faster by effectively gathering stakeholder requirements and prioritizing deliverables.",
      ],
    },
  ];

  return (
    <section id="experience" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="mb-16 animate-fade-in">
            <h2 className="text-6xl sm:text-7xl md:text-8xl font-black tracking-tighter mb-4">
              EXPERIENCE
            </h2>
            <div className="text-3xl">✦</div>
          </div>

          {/* Experience timeline */}
          <div className="space-y-16">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="relative pl-8 border-l-2 border-border hover:border-foreground transition-colors animate-fade-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Timeline dot */}
                <div className="absolute -left-[9px] top-0 w-4 h-4 bg-foreground rounded-full" />

                <div className="space-y-4">
                  {/* Role and company */}
                  <div>
                    <h3 className="text-2xl font-bold tracking-tight mb-1">
                      {exp.role}
                    </h3>
                    <p className="text-lg font-medium text-muted-foreground">
                      {exp.company}
                    </p>
                    <p className="text-sm text-muted-foreground/80">
                      {exp.location} • {exp.period}
                    </p>
                  </div>

                  {/* Achievements or projects */}
                  {exp.projects ? (
                    <div className="space-y-6">
                      {exp.projects.map((project, pIndex) => (
                        <div key={pIndex} className="space-y-2">
                          <h4 className="font-semibold text-foreground">
                            {project.name}
                          </h4>
                          <ul className="space-y-2">
                            {project.achievements.map((achievement, aIndex) => (
                              <li
                                key={aIndex}
                                className="text-sm text-muted-foreground flex gap-2"
                              >
                                <span className="text-foreground">▹</span>
                                <span>{achievement}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <ul className="space-y-2">
                      {exp.achievements?.map((achievement, aIndex) => (
                        <li
                          key={aIndex}
                          className="text-sm text-muted-foreground flex gap-2"
                        >
                          <span className="text-foreground">▹</span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;