import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Briefcase, Award } from 'lucide-react';
import { Experience } from '../types';

const experiences: Experience[] = [
  {
    id: '1',
    role: 'Project Manager',
    company: 'Karanasos Alexandros & Sia OE',
    companyUrl: 'https://www.karanasos.gr/el/',
    period: '2015 - Present',
    description: 'Leading the production system and creating new projects in time and on budget.',
    achievements: [
      'Created and organized a database that highlighted the most profitable products, enabling strategic decisions leading to a 29% increase in sales.',
      'Negotiated improved terms with suppliers, achieving a 15% increase in cash flow and a reduction in total production costs.',
      'Oversaw the installation of palletizing robots, increasing production capacity by 5,000 kg per day without compromising quality.',
      'Coordinated production, procurement, and order fulfillment, ensuring timely and quality customer service.',
      'Maintained a team-oriented and productive atmosphere in a team of 5 people, encouraging continuous improvement and accountability.'
    ],
    metrics: '29% Increase in Sales'
  }
];

const Timeline: React.FC = () => {
  const [expandedId, setExpandedId] = useState<string | null>(experiences[0].id);

  return (
    <motion.section 
      id="experience" 
      className="py-24 bg-primary-50"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8 }}
    >
      <div className="container mx-auto px-6">
        <div className="mb-16 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 mb-4">My <span className="text-primary-600">Journey</span></h2>
          <p className="text-slate-600 max-w-2xl">
            A timeline of my professional growth, key roles, and the impact I've made along the way.
          </p>
        </div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-slate-200 transform md:-translate-x-1/2"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => {
              const isEven = index % 2 === 0;
              const isExpanded = expandedId === exp.id;

              return (
                <motion.div 
                  key={exp.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className={`relative flex items-start md:items-center ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-primary-500 rounded-full border-4 border-primary-50 transform -translate-x-1/2 z-10 mt-1.5 md:mt-0 shadow-sm"></div>

                  {/* Spacer for Desktop */}
                  <div className="hidden md:block w-1/2" />

                  {/* Content Card */}
                  <div className={`w-full md:w-1/2 pl-20 md:pl-0 ${isEven ? 'md:pr-12' : 'md:pl-12'}`}>
                    <div 
                      className={`
                        p-6 rounded-2xl border transition-all cursor-pointer overflow-hidden
                        ${isExpanded 
                          ? 'bg-white border-primary-400 shadow-xl shadow-primary-900/5' 
                          : 'bg-white border-slate-200 hover:border-primary-300 shadow-sm'
                        }
                      `}
                      onClick={() => setExpandedId(isExpanded ? null : exp.id)}
                    >
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <h3 className="text-xl font-bold text-slate-900">{exp.role}</h3>
                          <div className="flex items-center text-sm text-primary-600 font-medium mt-1">
                            <Briefcase size={14} className="mr-2" />
                            {exp.companyUrl ? (
                              <a 
                                href={exp.companyUrl} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="hover:underline hover:text-primary-800 transition-colors z-20 relative"
                                onClick={(e) => e.stopPropagation()}
                              >
                                {exp.company}
                              </a>
                            ) : (
                              exp.company
                            )}
                          </div>
                        </div>
                        <span className="text-xs font-mono text-slate-600 bg-primary-100 px-2 py-1 rounded">
                          {exp.period}
                        </span>
                      </div>

                      {/* Always visible brief */}
                      <p className="text-slate-600 text-sm mb-3 line-clamp-2">
                        {exp.description}
                      </p>

                      {/* Expandable Content */}
                      <AnimatePresence>
                        {isExpanded && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                          >
                            <div className="pt-4 mt-4 border-t border-slate-100">
                              <h4 className="text-sm font-semibold text-slate-900 mb-2 flex items-center">
                                <Award size={14} className="mr-2 text-primary-500" />
                                Key Achievements
                              </h4>
                              <ul className="space-y-2 mb-4">
                                {exp.achievements.map((item, i) => (
                                  <li key={i} className="text-sm text-slate-600 flex items-start">
                                    <span className="w-1.5 h-1.5 bg-primary-400 rounded-full mt-1.5 mr-2 flex-shrink-0"></span>
                                    {item}
                                  </li>
                                ))}
                              </ul>
                              <div className="bg-primary-50 rounded-lg p-3 border border-primary-100">
                                <p className="text-xs text-primary-600 font-bold uppercase tracking-wide mb-1">Impact</p>
                                <p className="text-slate-900 font-bold">{exp.metrics}</p>
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                      
                      <div className="mt-4 flex justify-center md:hidden">
                         <ChevronDown className={`w-5 h-5 text-slate-400 transition-transform ${isExpanded ? 'rotate-180' : ''}`} />
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Timeline;