import React from 'react';
import { PROJECTS } from '../constants';
import { ExternalLink, Github } from 'lucide-react';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-12 sm:py-16 md:py-20">
      <div className="container mx-auto px-6 md:px-8 lg:px-4">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 sm:mb-10 md:mb-12 text-center">
          精選 <span className="gradient-text">專案</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 md:gap-8">
          {PROJECTS.map((project, idx) => (
            <div 
              key={idx} 
              className="group relative rounded-xl md:rounded-2xl overflow-hidden glass-panel border-0 ring-1 ring-white/10 hover:ring-cyan-500/50 transition-all duration-500"
            >
              {/* Image Area */}
              <div className="h-40 sm:h-48 overflow-hidden relative">
                <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-transparent transition-colors z-10"></div>
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
              </div>

              {/* Content Area */}
              <div className="p-4 sm:p-5 md:p-6 relative z-20 bg-slate-900/90 backdrop-blur-sm h-full flex flex-col">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                    {project.title}
                  </h3>
                  {project.link && (
                    <a 
                      href={project.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  )}
                </div>
                
                <p className="text-gray-400 text-xs sm:text-sm mb-3 sm:mb-4 flex-grow line-clamp-3">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-1.5 sm:gap-2 mt-auto">
                  {project.tags.map((tag, tIdx) => (
                    <span 
                      key={tIdx} 
                      className="px-2 py-0.5 sm:py-1 text-[10px] sm:text-xs font-mono rounded bg-cyan-900/30 text-cyan-300 border border-cyan-500/20"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;