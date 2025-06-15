import { Code, Layers3, Atom, Database, Hammer, Zap } from "lucide-react";

const skills = [
  {
    label: "TypeScript",
    icon: Code,
    highlight: true,
  },
  {
    label: "JavaScript",
    icon: Code,
    highlight: false,
  },
  {
    label: "React",
    icon: Atom,
    highlight: true,
  },
  {
    label: "Next.js",
    icon: Layers3,
    highlight: true,
  },
  {
    label: "ExpressJS",
    icon: Database,
    highlight: false,
  },
  {
    label: "TailwindCSS",
    icon: Zap,
    highlight: true,
  },
  {
    label: "Solidity",
    icon: Hammer,
    highlight: false,
  },
  {
    label: "Hardhat",
    icon: Hammer,
    highlight: false,
  },
];

export default function Skills() {
  return (
    <section className="w-full py-10">
    <div className="text-center mb-16">
      <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
        My Skills
      </h2>
      <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto rounded-full"></div>
    </div>
      <ul className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto px-4 md:px-0">
        {skills.map((skill) => (
          <li
            key={skill.label}
            className={`rounded-2xl px-5 py-7 flex flex-col items-center
            border border-border/30 hover:scale-105 hover:border-purple-400`}
          >
            <skill.icon size={40} className="text-purple-400"  />
            <span className="text-white text-lg font-semibold pt-2">{skill.label}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}