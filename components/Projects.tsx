import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Github, Zap } from 'lucide-react';
import { Project } from '../types';

const projects: Project[] = [
  {
    id: '1',
    title: 'SQL Job Analysis',
    category: 'Data Analysis',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=800&auto=format&fit=crop',
    description: 'An in-depth analysis of the job market using SQL. This project explores salary trends, skill requirements, and demand across various sectors to identify high-value career paths.',
    impact: 'Market Insights',
    tags: ['SQL', 'Data Analysis', 'Database', 'Reporting'],
    link: 'https://github.com/VagKaran/SQL-Project-JobAnalysis'
  },
  {
    id: '2',
    title: 'Python Data Project',
    category: 'Data Science',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop',
    description: 'A comprehensive data processing and analysis project utilizing Python libraries. Focuses on cleaning raw data, visualizing patterns, and extracting actionable insights through automated scripts.',
    impact: 'Automated Workflows',
    tags: ['Python', 'Pandas', 'Matplotlib', 'Data Cleaning'],
    link: 'https://github.com/VagKaran/Python_Data_Project'
  }
];

const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <motion.section 
      id="projects" 
      className="py-24 bg-slate-50"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 mb-4">Featured <span className="text-primary-600">Projects</span></h2>
            <p className="text-slate-600 max-w-lg">
              A selection of my recent work in data analysis, automation, and technical problem solving.
            </p>
          </div>
          <a 
            href="https://github.com/VagKaran" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hidden md:block text-primary-600 hover:text-primary-700 font-medium transition-colors"
          >
            View Github Profile &rarr;
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              layoutId={`project-${project.id}`}
              onClick={() => setSelectedProject(project)}
              className="group relative bg-white rounded-2xl overflow-hidden cursor-pointer border border-slate-200 hover:shadow-xl hover:shadow-slate-200 transition-all"
              whileHover={{ y: -5 }}
            >
              {/* Image */}
              <div className="aspect-video overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 opacity-90 group-hover:opacity-100"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <span className="text-xs font-bold text-primary-600 uppercase tracking-wider">{project.category}</span>
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">{project.title}</h3>
                
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.tags.map(tag => (
                    <span key={tag} className="px-2 py-1 text-xs font-medium bg-slate-100 text-slate-600 rounded-md">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Hover Overlay with Impact */}
              <div className="absolute inset-0 bg-primary-900/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-center p-6">
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                >
                  <Zap className="w-12 h-12 text-white mb-3 mx-auto" />
                  <p className="text-white font-bold text-2xl mb-2">{project.impact}</p>
                  <p className="text-primary-200 text-sm">Click to view details</p>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
            />
            <motion.div
              layoutId={`project-${selectedProject.id}`}
              className="relative w-full max-w-3xl bg-white rounded-3xl border border-slate-200 shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
            >
              <button 
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 z-10 p-2 bg-white/50 backdrop-blur rounded-full text-slate-900 hover:bg-white transition-colors shadow-sm"
              >
                <X size={20} />
              </button>

              <div className="aspect-video w-full bg-slate-100 relative shrink-0">
                 <img src={selectedProject.image} alt={selectedProject.title} className="w-full h-full object-cover" />
                 <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
                    <div className="bg-white/90 backdrop-blur px-4 py-2 rounded-xl border border-slate-200 shadow-sm">
                      <p className="text-primary-600 text-xs font-bold uppercase tracking-wider mb-1">Impact</p>
                      <p className="text-slate-900 font-bold text-lg">{selectedProject.impact}</p>
                    </div>
                 </div>
              </div>

              <div className="p-8 overflow-y-auto">
                <h3 className="text-3xl font-bold text-slate-900 mb-4">{selectedProject.title}</h3>
                <p className="text-slate-600 text-lg leading-relaxed mb-8">
                  {selectedProject.description}
                </p>

                <div className="mb-8">
                  <h4 className="text-sm font-semibold text-slate-900 mb-3">Tech Stack</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tags.map(tag => (
                      <span key={tag} className="px-3 py-1.5 text-sm font-medium bg-slate-100 text-slate-600 rounded-full border border-slate-200">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-4">
                  {selectedProject.link && (
                    <a 
                      href={selectedProject.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center px-6 py-3 bg-white hover:bg-slate-50 text-slate-900 font-semibold rounded-xl border border-slate-200 transition-colors"
                    >
                      <Github className="mr-2 w-4 h-4" />
                      View Code
                    </a>
                  )}
                  {/* Removed duplicate Live Demo button if no separate live link is provided, 
                      or we can keep it generic if there was a live site. 
                      For now, focusing on the requested Github links. */}
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </motion.section>
  );
};

export default Projects;