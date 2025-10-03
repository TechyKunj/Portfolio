import { User } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-gray-900 text-center mb-16">About Me</h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="flex justify-center">
            <div className="w-64 h-64 bg-gradient-to-br from-blue-600 to-blue-400 rounded-full flex items-center justify-center shadow-2xl">
              <User size={120} className="text-white" />
            </div>
          </div>
          <div className="space-y-6">
            <p className="text-lg text-gray-700 leading-relaxed">
              I am currently pursuing B.Tech in IT from KIET with 8.0 CGPA. I have experience in
              Data Science, AI, and Full Stack projects, with a passion for turning complex data
              into meaningful insights.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              My skills include Python, SQL, React, FastAPI, and ML tools. I have participated in
              hackathons and open-source programs like GSSoC, constantly pushing myself to learn
              and grow in the tech space.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Apart from tech, I love traveling and photography, always seeking new perspectives
              both in code and in life. I'm excited to take on new challenges and collaborate on
              innovative projects that make a real impact.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
