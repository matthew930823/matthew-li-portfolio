import React from 'react';
import { PERSONAL_INFO } from '../constants';
import { Github, Linkedin, Mail, MapPin } from 'lucide-react';
import myPhoto from './photo.jpg';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
      {/* Background Decorative Blobs */}
      <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
      <div className="absolute top-0 -right-4 w-72 h-72 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-8 left-20 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>

      <div className="container mx-auto px-6 md:px-8 lg:px-4 z-10 grid md:grid-cols-2 gap-12 md:gap-16 items-center py-8 md:py-0">
        {/* Text Content */}
        <div className="text-center md:text-left space-y-4 md:space-y-6">
            <div className="inline-block px-4 py-2 md:px-5 md:py-2 rounded-full bg-cyan-900/30 border border-cyan-500/30 text-cyan-400 text-xs sm:text-sm font-mono mb-2 max-w-full">
                <span className="block sm:inline">尋求實習機會中</span>
                <span className="block sm:inline"> (Available for Internship)</span>
            </div>
          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight py-2">
            嗨，我是 <br />
            <span className="gradient-text">{PERSONAL_INFO.name.split('(')[0]}</span>
          </h1>
          <h2 className="text-lg sm:text-xl md:text-2xl text-gray-400 font-mono py-1">
             {`<${PERSONAL_INFO.title}>`}
          </h2>
          <p className="text-sm sm:text-base text-gray-400 max-w-lg mx-auto md:mx-0 leading-relaxed py-2 px-2 md:px-0">
            {PERSONAL_INFO.bio}
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center md:justify-start text-gray-400 pt-6 md:pt-8 pb-4">
             <div className="flex items-center justify-center md:justify-start gap-2 text-xs sm:text-sm px-4 py-2.5 rounded-lg bg-slate-800/50 hover:bg-slate-800/70 transition-colors">
                <MapPin className="w-4 h-4 text-cyan-500 flex-shrink-0" /> 
                <span className="truncate">{PERSONAL_INFO.location.split(',')[0]}</span>
             </div>
          </div>
        </div>

        {/* Visual/Image Content */}
        <div className="relative group perspective-1000 mt-8 md:mt-0">
          <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 mx-auto transition-transform duration-500 transform group-hover:rotate-y-12 preserve-3d">
            {/* Spinning ring */}
            <div className="absolute inset-0 rounded-full border-2 border-dashed border-cyan-500/30 animate-[spin_10s_linear_infinite]"></div>
            <div className="absolute inset-4 rounded-full border border-purple-500/30 animate-[spin_15s_linear_infinite_reverse]"></div>
            
            {/* Image Container */}
            <div className="absolute inset-6 rounded-full overflow-hidden border-4 border-slate-800 shadow-2xl bg-slate-800 z-10">
               {/* Using a placeholder because I don't have the real image file, but using an abstract tech avatar for effect */}
               <img 
                 src={myPhoto} 
                 alt="Matthew Lee" 
                 className="w-full h-full object-cover opacity-90 group-hover:scale-110 transition-transform duration-500"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-40"></div>
            </div>

            {/* Floating Badges */}
            <div className="absolute -right-2 sm:-right-4 top-8 sm:top-10 glass-panel px-3 sm:px-4 py-1.5 sm:py-2 rounded-xl text-[10px] sm:text-xs font-bold text-cyan-300 animate-bounce delay-100 shadow-lg border-cyan-500/20 z-20">
                軟體開發
            </div>
            <div className="absolute -left-2 sm:-left-4 bottom-16 sm:bottom-20 glass-panel px-3 sm:px-4 py-1.5 sm:py-2 rounded-xl text-[10px] sm:text-xs font-bold text-purple-300 animate-bounce delay-300 shadow-lg border-purple-500/20 z-20">
                AI 研究
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;