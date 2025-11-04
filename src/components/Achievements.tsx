import { Award } from "lucide-react";

const Achievements = () => {
  const achievements = [
    {
      icon: "🥇",
      title: "1st Place",
      event: "1st Place, Base Batches 001 DeFi Track Africa",
      date: "June 2025",
    },
    {
      icon: "🥈",
      title: "1st Runner-Up",
      event: "1st Runner-Up, NSE/Hedera Hackathon Nairobi",
      date: "April 2025",
    },
    {
      icon: "🥈",
      title: "2nd Place",
      event: "2nd Place, UoN Algorand Hackathon",
      date: "March 2024",
    },
  ];

  return (
    <section id="achievements" className="py-24 px-4 sm:px-6 lg:px-8 bg-secondary/0">
      <div className="container mx-auto">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="mb-16 animate-fade-in">
            <h2 className="text-6xl sm:text-7xl md:text-8xl font-black tracking-tighter mb-4">
              WINS
            </h2>
            <div className="text-3xl">✦</div>
          </div>

          {/* Achievements grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className="group border border-gray-500 rounded-lg p-8 text-center hover:border-foreground hover:scale-105 transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold tracking-tight">
                    {achievement.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {achievement.event}
                  </p>
                  <p className="text-xs text-muted-foreground/80 font-medium">
                    {achievement.date}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Additional info */}
          <div className="mt-16 text-center animate-fade-in">
            <div className="inline-flex items-center gap-2 px-6 py-3 border border-gray-500 hover:border-foreground rounded-full">
              <Award className="w-5 h-5 text-muted-foreground" />
              <span className="text-sm font-medium text-muted-foreground">
                Multiple hackathon wins demonstrating innovation in blockchain & Web3
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;