type Project = {
  name?: string;
  achievements: string[];
};

type Experience = {
  role: string;
  company: string;
  location: string;
  period: string;
  projects: Project[];
};

const WorkExperience = () => {
  const experiences: Experience[] = [
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
      projects: [
        {
          achievements: [
            "Drove 35% increase in Algokit downloads by delivering technical demos, publishing developer documentation, and providing 1:1 developer support.",
            "Boosted local developer adoption of Algorand tools by hosting webinars with a 50%+ turnout rate, educating participants on the protocol's benefits.",
            "Designed a blockchain-based land registry system that reduced fraud risk by enabling immutable property records and improving ownership transparency.",
          ],
        },
      ],
    },
    {
      role: "WEB DEVELOPER",
      company: "JO&AL - Knowledge Experts",
      location: "NAIROBI, KENYA",
      period: "July 2023 - September 2023",
      projects: [
        {
          achievements: [
            "Improved client reach by 30% through developing a responsive website, optimizing accessibility and user engagement for consultancy services.",
            "Integrated M-Pesa Daraja API, streamlining payment workflows and reducing transaction errors by 30%.",
            "Achieved project delivery 20% faster by effectively gathering stakeholder requirements and prioritizing deliverables.",
          ],
        },
      ],
    },
  ];

  return (
    <section id="experience" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            Work Experience
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto rounded-full"></div>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, idx) => (
            <div
              key={idx}
              className="bg-white/5 backdrop-blur-lg rounded-3xl p-8 md:p-10 border border-white/10 shadow-2xl hover:border-purple-500/30 transition-all duration-300 group"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6 gap-4">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors">
                    {exp.role}
                  </h3>
                  <p className="text-xl text-purple-300 font-medium">{exp.company}</p>
                </div>
                <div className="text-left md:text-right">
                  <p className="text-gray-400 text-sm uppercase tracking-wider">{exp.location}</p>
                  <p className="text-blue-400 font-medium mt-1">{exp.period}</p>
                </div>
              </div>

              <div className="space-y-6">
                {exp.projects.map((project, projIdx) => (
                  <div key={projIdx}>
                    {project.name && (
                      <h4 className="text-lg font-semibold text-purple-300 mb-3">{project.name}</h4>
                    )}
                    <ul className="space-y-3">
                      {project.achievements.map((achievement, achIdx) => (
                        <li key={achIdx} className="flex items-start gap-3 text-gray-300 leading-relaxed">
                          <span className="text-purple-400 mt-1.5 flex-shrink-0">▹</span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;