import React from 'react';
import { motion } from 'framer-motion';
import { Terminal, Layout, Briefcase } from 'lucide-react';
import { LearningGoal } from '../types';

const goals: LearningGoal[] = [
  { title: 'Automated Data Analysis Web App', progress: 75, status: 'In Progress', icon: Terminal },
  { title: 'Full Stack Development', progress: 60, status: 'In Progress', icon: Layout },
  { title: 'Google Project Management', progress: 0, status: 'Planned', icon: Briefcase },
];

const Learning: React.FC = () => {
  return (
    <motion.section 
      className="py-20 bg-white border-y border-slate-200"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8 }}
    >
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
          <div className="lg:col-span-1">
            <h2 className="text-3xl font-display font-bold text-slate-900 mb-4">
              What I'm <br /><span className="text-primary-600">Learning Now</span>
            </h2>
            <p className="text-slate-600 mb-6">
              I believe in continuous evolution. Here are the technical challenges I'm currently tackling to level up my stack.
            </p>
            <div className="p-4 bg-primary-100/50 border border-primary-200 rounded-xl">
              <p className="text-primary-700 text-sm font-semibold">Current Focus</p>
              <p className="text-slate-900 mt-1">Building an end-to-end data pipeline with automated reporting capabilities.</p>
            </div>
          </div>

          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
            {goals.map((goal, index) => (
              <motion.div
                key={goal.title}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-primary-50 p-6 rounded-2xl border border-primary-100 flex flex-col justify-between"
              >
                <div className="flex justify-between items-start mb-4">
                  <div className="p-3 bg-white border border-primary-100 rounded-lg text-primary-600">
                    <goal.icon size={24} />
                  </div>
                  <span className={`text-xs font-bold px-2 py-1 rounded-full ${
                    goal.status === 'In Progress' ? 'bg-primary-100 text-primary-700' : 'bg-slate-200 text-slate-600'
                  }`}>
                    {goal.status}
                  </span>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-3">{goal.title}</h3>
                  <div className="w-full bg-slate-200 h-2 rounded-full overflow-hidden">
                    <motion.div 
                      className="h-full bg-primary-500"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${goal.progress}%` }}
                      transition={{ duration: 1, ease: "easeOut" }}
                    />
                  </div>
                  <p className="text-right text-xs text-slate-500 mt-2">{goal.progress}%</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Learning;