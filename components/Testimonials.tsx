import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote, ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { Testimonial } from '../types';

const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Sarah Jenkins',
    role: 'VP of Marketing @ TechGrowth',
    text: "Vag transforms complex data into clear, actionable insights. He didn't just build a dashboard; he gave us a completely new way to look at our customer acquisition strategy. A true asset to any project.",
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150&h=150'
  },
  {
    id: '2',
    name: 'Mark Thompson',
    role: 'Operations Lead @ LogiChain',
    text: "The automation scripts Vag implemented saved our team over 20 hours of manual data entry every week. The ROI was immediate. His ability to understand the business need before writing code is rare.",
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150&h=150'
  },
  {
    id: '3',
    name: 'Emily Chen',
    role: 'Product Manager @ FinTech Sol',
    text: "Incredible attention to detail and project management skills. Vag delivered the analytics module ahead of schedule and managed stakeholder expectations perfectly throughout the entire lifecycle.",
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=150&h=150'
  }
];

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      nextTestimonial();
    }, 5000);

    return () => clearInterval(interval);
  }, [currentIndex, isPaused]);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <motion.section 
      id="testimonials"
      className="py-24 bg-white relative overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-primary-100 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 opacity-50"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary-50 rounded-full blur-3xl translate-x-1/3 translate-y-1/3 opacity-60"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 mb-4">
            Kind <span className="text-primary-600">Words</span>
          </h2>
          <p className="text-slate-600 max-w-xl mx-auto">
            Feedback from colleagues and clients I've had the pleasure of working with.
          </p>
        </div>

        <div 
          className="max-w-4xl mx-auto relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Main Card Slider */}
          <div className="relative overflow-hidden min-h-[400px] md:min-h-[350px] flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="w-full"
              >
                <div className="bg-slate-50 border border-slate-100 rounded-3xl p-8 md:p-12 shadow-xl shadow-slate-200/50 flex flex-col md:flex-row gap-8 items-center md:items-start text-center md:text-left">
                  
                  {/* Image & Info */}
                  <div className="flex flex-col items-center flex-shrink-0">
                    <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-white shadow-md mb-4">
                      <img 
                        src={testimonials[currentIndex].image} 
                        alt={testimonials[currentIndex].name} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex gap-1 mb-2 text-yellow-400">
                        {[...Array(5)].map((_, i) => (
                            <Star key={i} size={14} fill="currentColor" />
                        ))}
                    </div>
                    <h4 className="font-bold text-slate-900 text-lg">{testimonials[currentIndex].name}</h4>
                    <p className="text-primary-600 text-xs font-medium uppercase tracking-wide">{testimonials[currentIndex].role}</p>
                  </div>

                  {/* Quote */}
                  <div className="flex-1 relative">
                    <Quote className="absolute -top-4 -left-4 w-12 h-12 text-primary-200 opacity-50 transform -scale-x-100" />
                    <p className="text-slate-600 text-lg md:text-xl italic leading-relaxed pt-4 relative z-10">
                      "{testimonials[currentIndex].text}"
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Controls */}
          <div className="flex justify-center items-center mt-8 gap-6">
            <button 
              onClick={prevTestimonial}
              className="p-3 rounded-full bg-white border border-slate-200 text-slate-600 hover:bg-primary-50 hover:border-primary-200 hover:text-primary-700 transition-all shadow-sm"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={20} />
            </button>

            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                    index === currentIndex 
                      ? 'bg-primary-600 w-8' 
                      : 'bg-slate-300 hover:bg-primary-300'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <button 
              onClick={nextTestimonial}
              className="p-3 rounded-full bg-white border border-slate-200 text-slate-600 hover:bg-primary-50 hover:border-primary-200 hover:text-primary-700 transition-all shadow-sm"
              aria-label="Next testimonial"
            >
              <ChevronRight size={20} />
            </button>
          </div>

        </div>
      </div>
    </motion.section>
  );
};

export default Testimonials;