import React from 'react';
import { motion } from 'motion/react';
import { Calendar, ArrowRight } from 'lucide-react';

interface BookDemoSectionProps {
  onOpenDemo: () => void;
}

export const BookDemoSection: React.FC<BookDemoSectionProps> = ({ onOpenDemo }) => {
  return (
    <section id="book-demo" className="relative bg-white py-16 sm:py-24 overflow-hidden border-t border-gray-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.7 }}
          className="relative bg-white rounded-3xl p-8 sm:p-14 text-center text-black border border-gray-200 shadow-xl overflow-hidden"
        >
          {/* Heading */}
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-black tracking-tight leading-[1.15] mb-4">
            Book a Demo
          </h2>

          {/* Subtitle */}
          <p className="max-w-2xl mx-auto text-base sm:text-lg text-gray-700 font-medium leading-relaxed mb-8">
            Stop wasting valuable recruiter hours on manual ATS and CRM data entry. Schedule a personalized walkthrough to see Avantty in action.
          </p>

          {/* Call to Action Button */}
          <div className="flex justify-center">
            <button
              onClick={onOpenDemo}
              className="group relative inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-black hover:bg-gray-800 text-white font-extrabold text-base rounded-2xl shadow-lg transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
            >
              <Calendar className="w-5 h-5 text-white" />
              <span>Book a Demo</span>
              <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

