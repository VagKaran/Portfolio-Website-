import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download } from 'lucide-react';

const Hero: React.FC = () => {
  const handleScrollToProjects = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.getElementById('projects');
    if (element) {
      const navbarHeight = 80;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - navbarHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="about" className="min-h-screen flex items-center pt-20 pb-10 relative overflow-hidden bg-primary-50">
      {/* Background Blobs - Warm Earthy Tones */}
      <div className="absolute top-0 right-0 -mr-40 -mt-40 w-[600px] h-[600px] bg-primary-200/40 rounded-full blur-3xl opacity-60 animate-pulse"></div>
      <div className="absolute bottom-0 left-0 -ml-40 -mb-40 w-[500px] h-[500px] bg-primary-300/30 rounded-full blur-3xl opacity-60"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-white border border-slate-200 text-slate-600 text-xs font-semibold uppercase tracking-wider mb-6 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-primary-500 mr-2 animate-pulse"></span>
              Available for new projects
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-slate-900 leading-tight mb-6">
              Hey friends, <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-primary-400">
                I’m Vag.
              </span>
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed mb-8 max-w-2xl mx-auto">
              I’m someone who loves making sense of chaos. I take complex data, unclear goals, and scattered ideas, and turn them into clear insights, structured plans, and decisions that actually move things forward. My sweet spot lies where analysis meets execution — the place where a Data Analyst and a Project Manager both thrive.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="#projects"
                onClick={handleScrollToProjects}
                className="inline-flex items-center justify-center px-8 py-4 bg-primary-500 hover:bg-primary-600 text-white font-bold rounded-xl transition-all shadow-lg shadow-primary-500/20 hover:shadow-primary-500/40"
              >
                View My Work
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
              <a 
                href="https://docs.google.com/document/d/1K1mRVH0SNc-B4eA9dOcnVdc6AtQlPqKHSYuBWk7nvJA/edit?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 bg-white hover:bg-primary-50 text-slate-900 font-semibold rounded-xl border border-slate-200 transition-all shadow-sm hover:shadow-md"
              >
                <Download className="mr-2 w-5 h-5 text-slate-500" />
                Download CV
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;