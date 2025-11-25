import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, Send } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { name, email, message } = formData;
    
    // Construct the mailto link with pre-filled data
    const subject = encodeURIComponent(`Portfolio Inquiry from ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);
    
    // Open the user's email client
    window.location.href = `mailto:baggelhskaran@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <motion.footer 
      id="contact" 
      className="bg-slate-900 pt-24 pb-12 relative overflow-hidden"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8 }}
    >
        {/* Decorative Elements */}
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-primary-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
          <div>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
              Let's build something <br/>
              <span className="text-primary-400">meaningful.</span>
            </h2>
            <p className="text-slate-400 text-lg mb-8 max-w-md">
              Whether you have a project in mind, you want to hire me, or just want to chat about AI and automation — I'm here to help.
            </p>
            
            <div className="space-y-4">
              <a href="mailto:baggelhskaran@gmail.com" className="flex items-center p-4 bg-slate-800/50 rounded-xl border border-slate-800 hover:border-primary-500/50 hover:bg-slate-800 transition-all group">
                <div className="p-3 bg-slate-800 rounded-lg text-white group-hover:bg-primary-600 group-hover:text-white transition-colors">
                    <Mail size={24} />
                </div>
                <div className="ml-4">
                    <p className="text-sm text-slate-400">Email Me</p>
                    <p className="text-white font-bold text-lg">baggelhskaran@gmail.com</p>
                </div>
              </a>
              
              <div className="flex gap-4">
                  <a 
                    href="https://www.linkedin.com/in/vaggelis-karanasos-956961224/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center p-4 bg-slate-800/50 rounded-xl border border-slate-800 hover:border-primary-500/50 hover:text-primary-400 text-slate-300 transition-all"
                  >
                      <Linkedin className="mr-2" /> LinkedIn
                  </a>
                  <a 
                    href="https://github.com/VagKaran" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center p-4 bg-slate-800/50 rounded-xl border border-slate-800 hover:border-white/50 hover:text-white text-slate-300 transition-all"
                  >
                      <Github className="mr-2" /> Github
                  </a>
              </div>
            </div>
          </div>

          <form className="bg-slate-800/30 p-8 rounded-3xl border border-slate-800 shadow-xl backdrop-blur-sm" onSubmit={handleSubmit}>
            <h3 className="text-2xl font-bold text-white mb-6">Send a Message</h3>
            
            <div className="space-y-4">
                <div>
                    <label className="block text-slate-400 text-sm font-medium mb-2">Name</label>
                    <input 
                      type="text" 
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full bg-slate-900 border border-slate-700 rounded-xl p-4 text-white focus:outline-none focus:border-primary-500 transition-colors" 
                      placeholder="John Doe" 
                      required
                    />
                </div>
                <div>
                    <label className="block text-slate-400 text-sm font-medium mb-2">Email</label>
                    <input 
                      type="email" 
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full bg-slate-900 border border-slate-700 rounded-xl p-4 text-white focus:outline-none focus:border-primary-500 transition-colors" 
                      placeholder="john@example.com" 
                      required
                    />
                </div>
                <div>
                    <label className="block text-slate-400 text-sm font-medium mb-2">Message</label>
                    <textarea 
                      rows={4} 
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full bg-slate-900 border border-slate-700 rounded-xl p-4 text-white focus:outline-none focus:border-primary-500 transition-colors" 
                      placeholder="Tell me about your project..." 
                      required
                    />
                </div>
                
                <button type="submit" className="w-full py-4 bg-primary-600 hover:bg-primary-500 text-white font-bold rounded-xl transition-colors flex items-center justify-center shadow-lg shadow-primary-600/20">
                    Send Message
                    <Send size={18} className="ml-2" />
                </button>
            </div>
          </form>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-slate-500 text-sm">
            <p>&copy; {new Date().getFullYear()} Vag. All rights reserved.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
                <a href="#" className="hover:text-primary-400 transition-colors">Privacy Policy</a>
                <a href="#" className="hover:text-primary-400 transition-colors">Terms of Service</a>
            </div>
        </div>
      </div>
    </motion.footer>
  );
};

export default Contact;