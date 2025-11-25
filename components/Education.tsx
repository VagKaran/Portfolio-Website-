import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, MapPin, BookOpen } from 'lucide-react';

const Education: React.FC = () => {
  return (
    <motion.section
      id="education"
      className="py-20 bg-white relative overflow-hidden"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8 }}
    >
      {/* Decorative background element */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-white via-primary-200 to-white"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 mb-4">
            Education
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            The academic foundation driving my technical and analytical capabilities.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            className="bg-primary-50 rounded-2xl p-8 border border-primary-100 hover:border-primary-300 transition-all hover:shadow-xl hover:shadow-primary-900/5 group relative overflow-hidden"
            whileHover={{ y: -5 }}
          >
             {/* Hover Glow Effect */}
             <div className="absolute top-0 right-0 w-32 h-32 bg-primary-200 rounded-full blur-3xl -mr-16 -mt-16 opacity-0 group-hover:opacity-50 transition-opacity duration-500"></div>

            <div className="flex flex-col md:flex-row items-start md:items-center gap-8 relative z-10">
              {/* Icon Box */}
              <div className="w-20 h-20 rounded-2xl bg-white border border-primary-100 flex items-center justify-center text-primary-600 shrink-0 shadow-sm group-hover:scale-105 group-hover:rotate-3 transition-all duration-300">
                <GraduationCap size={40} strokeWidth={1.5} />
              </div>
              
              <div className="flex-1">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                    <div>
                        <h3 className="text-2xl font-bold text-slate-900 leading-tight">
                        Master of Computer Applications - MCA
                        </h3>
                        <p className="text-lg text-primary-600 font-medium mt-1">
                        In Electrical and Electronics Engineering
                        </p>
                    </div>
                    <div className="mt-4 md:mt-0 inline-flex items-center px-4 py-1.5 bg-white rounded-full border border-primary-200 text-primary-700 text-sm font-semibold shadow-sm">
                        <Calendar size={14} className="mr-2" />
                        01/2021 - 12/2026
                    </div>
                </div>
                
                <div className="flex flex-col sm:flex-row sm:items-center gap-4 text-slate-600 mt-4">
                   <div className="flex items-center">
                     <MapPin size={18} className="mr-2 text-primary-500" />
                     <span className="font-medium">University of Peloponnese</span>
                   </div>
                   <div className="hidden sm:block w-1.5 h-1.5 bg-primary-300 rounded-full"></div>
                   <div className="flex items-center text-sm text-slate-500">
                     <BookOpen size={16} className="mr-2" />
                     <span>Specializing in Advanced Computing & Electronics</span>
                   </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Education;