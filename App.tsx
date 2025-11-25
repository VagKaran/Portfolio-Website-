import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Education from './components/Education';
import Skills from './components/Skills';
import Timeline from './components/Timeline';
import Learning from './components/Learning';
import Projects from './components/Projects';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';

function App() {
  return (
    <div className="bg-slate-50 text-slate-900 min-h-screen selection:bg-primary-500/30 selection:text-primary-900">
      <Navbar />
      <main>
        <Hero />
        <Education />
        <Skills />
        <Timeline />
        <Learning />
        <Projects />
        <Testimonials />
      </main>
      <Contact />
    </div>
  );
}

export default App;