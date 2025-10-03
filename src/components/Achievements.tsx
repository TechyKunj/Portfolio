import { Trophy, Award, Users } from 'lucide-react';

export default function Achievements() {
  const achievements = [
    {
      icon: Users,
      title: 'GSSoC Contributor',
      period: 'Jul 2025 – Present',
      description: 'Contributing to the esteemed open source program Girlscript Summer of Code, collaborating with developers worldwide.'
    },
    {
      icon: Trophy,
      title: 'Multiple Hackathons Finalist',
      period: 'Apr 2023 – Present',
      description: 'Participated in 5+ hackathons, becoming a finalist and winning multiple track prizes for innovative solutions.'
    },
    {
      icon: Award,
      title: 'Data Science Intern',
      period: 'Aug 2024 – Sep 2024',
      description: 'Developed ML pipelines achieving 96% accuracy and delivered actionable insights at Oasis Infobyte.'
    }
  ];

  return (
    <section id="achievements" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Achievements & Experience</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Recognition and milestones in my journey as a data scientist and developer
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => (
            <div
              key={achievement.title}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 group"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="flex flex-col items-center text-center">
                <div className="p-4 bg-blue-50 rounded-full mb-4 group-hover:bg-blue-100 transition-colors duration-300">
                  <achievement.icon className="text-blue-600" size={32} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                  {achievement.title}
                </h3>
                <p className="text-sm text-blue-600 font-medium mb-3">{achievement.period}</p>
                <p className="text-gray-600 leading-relaxed">{achievement.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
