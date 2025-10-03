import { Code2, Database, Brain, Sparkles, Cloud, Package, BarChart3, Cpu } from 'lucide-react';

export default function Skills() {
  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: Code2,
      skills: ['Python', 'Java', 'C', 'SQL', 'HTML', 'CSS', 'JavaScript']
    },
    {
      title: 'Generative AI & LLMs',
      icon: Sparkles,
      skills: ['Google Gemini', 'OpenAI GPT', 'LLaMA', 'LangGraph', 'LangChain', 'Prompt Engineering', 'RAG', 'Transformers']
    },
    {
      title: 'Machine Learning & Deep Learning',
      icon: Brain,
      skills: ['ANN', 'CNN', 'RNN', 'EDA', 'Feature Engineering', 'Supervised Learning', 'Unsupervised Learning', 'MLflow']
    },
    {
      title: 'Python Libraries & Frameworks',
      icon: Package,
      skills: ['TensorFlow', 'PyTorch', 'Hugging Face', 'Scikit-learn', 'Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'Flask', 'Streamlit', 'Selenium', 'BeautifulSoup4']
    },
    {
      title: 'Databases & Cloud',
      icon: Cloud,
      skills: ['MySQL', 'MongoDB', 'PostgreSQL', 'AWS', 'GCP', 'Streamlit', 'FastAPI', 'Git', 'Docker']
    },
    {
      title: 'Data & BI Tools',
      icon: BarChart3,
      skills: ['Power BI', 'MS Excel', 'Data Visualization', 'Statistics', 'DAX']
    },
    {
      title: 'Mathematics & Statistics',
      icon: Cpu,
      skills: ['Algebra', 'Probability', 'Statistics', 'Calculus']
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Skills & Expertise</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A comprehensive toolkit for turning data into meaningful insights and building intelligent solutions
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className="bg-white p-6 rounded-xl border border-gray-200 hover:border-blue-500 hover:shadow-xl transition-all duration-300 group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center mb-4">
                <div className="p-3 bg-blue-50 rounded-lg group-hover:bg-blue-100 transition-colors duration-300">
                  <category.icon className="text-blue-600" size={28} />
                </div>
                <h3 className="ml-3 text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                  {category.title}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 bg-gray-50 text-gray-700 text-sm rounded-full border border-gray-200 hover:border-blue-400 hover:bg-blue-50 hover:text-blue-700 transition-all duration-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
