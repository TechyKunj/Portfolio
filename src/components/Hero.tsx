import { ArrowDown, Sparkles } from 'lucide-react';

export default function Hero() {
  const scrollToProjects = () => {
    const element = document.querySelector('#projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white via-blue-50 to-white relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
      <div className="absolute top-40 right-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>

      <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
        <div className="opacity-0 animate-fadeIn">
          <div className="inline-flex items-center px-4 py-2 bg-blue-50 border border-blue-200 rounded-full mb-6">
            <Sparkles className="text-blue-600 mr-2" size={16} />
            <span className="text-sm font-medium text-blue-700">Open to opportunities</span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-gray-900 mb-6 leading-tight">
            Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400">Kunj Rastogi</span>
          </h1>

          <p className="text-xl md:text-2xl lg:text-3xl text-gray-700 mb-6 font-medium">
            Aspiring Data Analyst | AI & ML Enthusiast | Full Stack Learner
          </p>

          <p className="text-lg md:text-xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
            Turning data into insights and insights into action. Passionate about building intelligent solutions
            that make a real-world impact.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={scrollToProjects}
              className="group inline-flex items-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              View My Work
              <ArrowDown className="ml-2 group-hover:translate-y-1 transition-transform duration-300" size={20} />
            </button>

            <button
              onClick={scrollToContact}
              className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg border-2 border-blue-600 hover:bg-blue-50 transition-all duration-300 transform hover:scale-105"
            >
              Get In Touch
            </button>
          </div>

          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
            <div className="p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="text-3xl font-bold text-blue-600 mb-1">8.0</div>
              <div className="text-sm text-gray-600">CGPA</div>
            </div>
            <div className="p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="text-3xl font-bold text-blue-600 mb-1">5+</div>
              <div className="text-sm text-gray-600">Projects</div>
            </div>
            <div className="p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="text-3xl font-bold text-blue-600 mb-1">5+</div>
              <div className="text-sm text-gray-600">Hackathons</div>
            </div>
            <div className="p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="text-3xl font-bold text-blue-600 mb-1">GSSoC</div>
              <div className="text-sm text-gray-600">Contributor</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
