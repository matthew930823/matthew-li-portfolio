import React from 'react';
import { EXPERIENCE, PERSONAL_INFO } from '../constants';
import { Briefcase, GraduationCap, MapPin } from 'lucide-react';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 bg-slate-900/30">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">
          學歷 <span className="gradient-text">& 經歷</span>
        </h2>

        <div className="max-w-4xl mx-auto space-y-12 relative">
          {/* Vertical Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500 to-purple-600 opacity-30 md:left-1/2 transform md:-translate-x-1/2"></div>

          {/* Education Item (Right Side desktop) */}
          <div className="relative flex flex-col md:flex-row items-center md:justify-between group">
             <div className="md:w-1/2 md:pr-12 md:text-right order-2 md:order-1 pl-20 md:pl-0 mt-4 md:mt-0">
                <h3 className="text-xl font-bold text-white">{PERSONAL_INFO.education.school}</h3>
                <h4 className="text-cyan-400 font-mono text-sm mb-2">{PERSONAL_INFO.education.major}</h4>
                <span className="inline-block px-2 py-1 bg-slate-800 rounded text-xs text-gray-400 border border-slate-700">{PERSONAL_INFO.education.period}</span>
             </div>
             
             <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 w-10 h-10 bg-slate-900 border-2 border-cyan-500 rounded-full flex items-center justify-center z-10 group-hover:scale-110 transition-transform shadow-[0_0_15px_rgba(6,182,212,0.5)]">
                <GraduationCap className="w-5 h-5 text-cyan-400" />
             </div>
             
             <div className="md:w-1/2 md:pl-12 order-3 md:order-3 hidden md:block"></div>
          </div>

          {/* Experience Item (Left Side desktop) */}
          {EXPERIENCE.map((exp, idx) => (
            <div key={idx} className="relative flex flex-col md:flex-row items-center md:justify-between group">
               <div className="md:w-1/2 md:pr-12 hidden md:block order-1"></div>

               <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 w-10 h-10 bg-slate-900 border-2 border-purple-500 rounded-full flex items-center justify-center z-10 group-hover:scale-110 transition-transform shadow-[0_0_15px_rgba(168,85,247,0.5)]">
                  <Briefcase className="w-5 h-5 text-purple-400" />
               </div>

               <div className="md:w-1/2 md:pl-12 order-2 pl-20 md:pl-0 mt-4 md:mt-0 text-left">
                  <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3 mb-2">
                    <h4 className="text-purple-400 font-semibold">{exp.company}</h4>
                    <span className="text-xs text-gray-500 hidden sm:block">•</span>
                    <span className="flex items-center text-xs text-gray-400 gap-1"><MapPin className="w-3 h-3" /> {exp.location}</span>
                  </div>
                  <p className="text-gray-400 text-sm leading-relaxed mb-3">
                    {exp.description}
                  </p>
                  <span className="inline-block px-2 py-1 bg-slate-800 rounded text-xs text-gray-400 border border-slate-700">{exp.period}</span>
               </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;