import { ExternalLink, Github, Award } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      title: 'ResearcherAgent-ScholarBot',
      description: 'Built an AI-powered research assistant to retrieve, summarize, and analyze academic papers. Integrated LangChain and Gemini API for context-aware insights and literature review support.',
      tech: 'Streamlit, LangChain, LangGraph, Gemini API',
      github: 'https://github.com/TechyKunj/ResearcherAgent-ScholarBot',
      demo: '',
      featured: true
    },
    {
      title: 'Blinkit Sales Analysis Dashboard',
      description: 'Developed an interactive Power BI dashboard analyzing sales performance across categories, outlet sizes, and years. Implemented DAX measures for KPIs including Total Sales ($1.2M).',
      tech: 'Power BI, DAX, Data Cleaning',
      github: 'https://github.com/TechyKunj/Blinkit-Sales-Analysis',
      demo: '',
      featured: true
    },
    {
      title: 'DocuMind',
      description: 'Developed an AI-powered tool for document upload, summarization, Q&A, and comprehension challenges. Integrated citation support and performance analytics to enhance learning outcomes.',
      tech: 'Streamlit, FastAPI, Google Gemini, LangChain',
      github: 'https://github.com/TechyKunj/DocuMind',
      demo: '',
      featured: true
    },
    {
      title: 'URL Shortener',
      description: 'Full Stack URL shortener with analytics, custom links, and real-time tracking capabilities. Built with modern web technologies for optimal performance.',
      tech: 'React, Tailwind CSS, Supabase',
      github: 'https://github.com/TechyKunj/URL-Shortener',
      demo: 'https://68df701dd0facc7d5b3a4204--urlshortenerjhdsasjk.netlify.app/'
    },
    {
      title: 'AI Resume Analyzer',
      description: 'AI-powered tool to analyze resumes and provide ATS scores with actionable improvement suggestions. Helps job seekers optimize their resumes for better results.',
      tech: 'Python, AI/ML, NLP',
      github: 'https://github.com/TechyKunj/AI-Resume-Analyzer',
      demo: 'https://ai-resume-analyzer-c-roji.bolt.host/'
    },
    {
      title: 'Data Job Dashboard',
      description: 'Interactive data analytics dashboard providing insights into job market trends and opportunities. Helps understand the data job landscape.',
      tech: 'Python, Pandas, Plotly, Power BI',
      github: 'https://github.com/TechyKunj/Data-Job-Dashboard',
      demo: ''
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Featured Projects</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Showcasing real-world applications of data science, AI, and full-stack development
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="bg-white p-6 rounded-xl border-2 border-gray-200 hover:border-blue-500 hover:shadow-2xl transition-all duration-300 group relative overflow-hidden"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {project.featured && (
                <div className="absolute top-4 right-4">
                  <div className="flex items-center px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-semibold">
                    <Award size={14} className="mr-1" />
                    Featured
                  </div>
                </div>
              )}

              <div className="mb-4">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300 pr-20">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed text-sm">
                  {project.description}
                </p>
              </div>

              <div className="mb-4">
                <div className="flex flex-wrap gap-2">
                  {project.tech.split(', ').map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-md font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex space-x-4 pt-4 border-t border-gray-200">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-gray-700 hover:text-gray-900 font-medium transition-colors duration-200 text-sm"
                  >
                    <Github size={18} className="mr-2" />
                    Code
                  </a>
                )}
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium transition-colors duration-200 text-sm"
                  >
                    <ExternalLink size={18} className="mr-2" />
                    Live Demo
                  </a>
                )}
              </div>

              <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-transparent opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
