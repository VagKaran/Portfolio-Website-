import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Database, BarChart3, Code2, Users, LineChart, Cpu, Layers } from 'lucide-react';
import { Skill } from '../types';

const skills: Skill[] = [
  { name: 'AI Automations', category: 'Tech', icon: Brain, description: 'Streamlining workflows with intelligent agents and scripts.' },
  { name: 'Project Management', category: 'Management', icon: Users, description: 'Agile methodologies, sprint planning, and team leadership.' },
  { name: 'Data Analysis', category: 'Data', icon: BarChart3, description: 'Extracting actionable insights from complex datasets.' },
  { name: 'SQL', category: 'Tech', icon: Database, description: 'Advanced querying, database design, and optimization.' },
  { name: 'Python', category: 'Tech', icon: Code2, description: 'Scripting for automation, data cleaning, and analysis.' },
  { name: 'BI Tools', category: 'Data', icon: LineChart, description: 'Creating interactive dashboards in PowerBI and Tableau.' },
  { name: 'Machine Learning', category: 'Tech', icon: Cpu, description: 'Predictive modeling and basic neural networks.' },
  { name: 'System Design', category: 'Architecture', icon: Layers, description: 'Building scalable data pipelines and architectures.' },
];

const Skills: React.FC = () => {
  return (
    <motion.section 
      id="skills" 
      className="py-24 bg-white relative"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8 }}
    >
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 mb-4">How Can I <span className="text-primary-600">Help You?</span></h2>
          <p className="text-slate-600 text-lg">
            I blend technical expertise with strategic thinking. Here is my toolkit for solving problems and driving growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="group p-6 rounded-2xl bg-slate-50 border border-slate-200 hover:border-primary-500/50 hover:bg-white hover:shadow-lg hover:shadow-primary-500/5 transition-all cursor-default"
            >
              <div className="w-12 h-12 rounded-lg bg-white border border-slate-200 group-hover:bg-primary-50 flex items-center justify-center mb-4 transition-colors">
                <skill.icon className="w-6 h-6 text-primary-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-primary-600 transition-colors">{skill.name}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">{skill.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Skills;