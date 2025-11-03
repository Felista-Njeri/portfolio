import { Award } from "lucide-react";

const Achievements = () => {
  const achievements = [
    {
      title: "1st Place, Base Batches 001 DeFi Track Africa",
      date: "June 2025",
      rank: "1st",
      color: "from-yellow-400 to-yellow-600",
    },
    {
      title: "1st Runner-Up, NSE/Hedera Hackathon Nairobi",
      date: "April 2025",
      rank: "2nd",
      color: "from-gray-300 to-gray-500",
    },
    {
      title: "2nd Place, UoN Algorand Hackathon",
      date: "March 2024",
      rank: "2nd",
      color: "from-orange-400 to-orange-600",
    },
  ];

  return (
    <section id="achievements" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            Achievements
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {achievements.map((achievement, idx) => (
            <div
              key={idx}
              className="bg-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/10 shadow-2xl hover:scale-105 hover:border-purple-500/30 transition-all duration-300 group relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-500/20 to-transparent rounded-full blur-3xl group-hover:scale-150 transition-transform duration-500"></div>
              
              <div className="relative">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${achievement.color} flex items-center justify-center mb-6 group-hover:rotate-12 transition-transform duration-300`}>
                  <Award className="w-8 h-8 text-white" />
                </div>

                <div className="mb-4">
                  <span className={`inline-block px-3 py-1 rounded-full text-sm font-bold bg-gradient-to-r ${achievement.color} text-white`}>
                    {achievement.rank === "1st" ? "🥇 1st Place" : achievement.rank === "2nd" ? "🥈 2nd Place" : "Runner-Up"}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors">
                  {achievement.title}
                </h3>

                <p className="text-blue-400 font-medium">{achievement.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;