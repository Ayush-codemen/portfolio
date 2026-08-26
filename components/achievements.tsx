import { Trophy, Award, Star, Music } from "lucide-react"

export default function Achievements() {
  const achievements = [
    {
      title: "Spotify Popular Creator",
      description:
        "Recognized as a Popular Creator on Spotify with over 100 Millions view on my Pannel.",
      icon: <Music className="h-8 w-8 text-green-500" />,
      highlight: true,
    },
    {
      title: "Runner-up in One India Competition",
      description: "Secured 2nd Runner-Up in the prestigious One India Competition, representing Uttar Pradesh.",
      icon: <Trophy className="h-8 w-8 text-yellow-500" />,
      highlight: false,
    },
    {
      title: "AWS Community Builder",
      description: "Selected as an AWS Community Builder for contributions to cloud computing knowledge sharing.",
      icon: <Award className="h-8 w-8 text-yellow-500" />,
      highlight: false,
    },
    {
      title: "Team Leadership Success",
      description: "Led a team of 4 developers to deliver a project two weeks ahead of deadlines.",
      icon: <Star className="h-8 w-8 text-green-500" />,
      highlight: true,
    },
  ]

  return (
    <section id="achievements" className="py-20 bg-gradient-to-b from-slate-50 to-white">
      <div className="container px-4 md:px-6 mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Achievements</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className={`rounded-lg shadow-md p-6 border transition-all duration-300 
                        hover:shadow-xl hover:-translate-y-1 flex items-start gap-4
                        ${
                          achievement.highlight
                            ? "bg-gradient-to-br from-green-50 to-emerald-50 border-green-200"
                            : "bg-white border-slate-200"
                        }`}
            >
              <div
                className={`flex-shrink-0 p-3 rounded-full ${achievement.highlight ? "bg-green-100" : "bg-slate-100"}`}
              >
                {achievement.icon}
              </div>
              <div>
                <h3 className={`text-lg font-bold mb-2 ${achievement.highlight ? "text-green-700" : ""}`}>
                  {achievement.title}
                  {achievement.highlight && (
                    <span className="ml-2 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                      Featured
                    </span>
                  )}
                </h3>
                <p className="text-slate-600">{achievement.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
