import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

const FAQS: FAQItem[] = [
  {
    question: 'How long does it take to deploy our custom workflow automations?',
    answer: 'Complete setup and mapping takes between 7 to 10 business days. We analyze your team\'s current interview workflow, calendar setup, and candidate reporting formats to configure zero-maintenance background updates without disrupting active searches.'
  },
  {
    question: 'Do our search consultants need to learn new software or switch databases?',
    answer: 'Not at all. Avantty operates invisibly in the background. Your consultants continue working in their preferred email client, calendars, ATS (Bullhorn, Invenias, Airtable, etc.), and spreadsheets exactly as they do today.'
  },
  {
    question: 'How do you ensure strict candidate confidentiality and data security?',
    answer: 'We enforce enterprise-grade encryption, SOC2-aligned standards, and zero-data-retention AI processing policies. Candidate audio, notes, and client dossiers remain strictly confidential within your private firm infrastructure and are never shared or used to train external models.'
  }
];

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleIndex = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 md:py-32 bg-white border-b border-[#E8EAED] relative font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl text-left mb-12 md:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#202124] tracking-tight mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-sm sm:text-base text-[#202124] font-normal leading-relaxed">
            Everything you need to know about implementing Avantty background automations for your firm.
          </p>
        </motion.div>

        {/* Accordion List - aligned to left with max width */}
        <div className="max-w-4xl space-y-4">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;

            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="border border-[#E8EAED] rounded-2xl bg-white transition-all duration-200 overflow-hidden hover:border-[#202124]"
              >
                <button
                  onClick={() => toggleIndex(idx)}
                  className="w-full text-left p-6 flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="text-base sm:text-lg font-bold text-[#202124] leading-snug">
                    {faq.question}
                  </span>
                  <div className={`p-2 rounded-xl bg-gray-50 border border-[#E8EAED] text-[#202124] shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180 bg-[#202124] text-white border-[#202124]' : ''}`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 pt-0 text-sm sm:text-base text-[#3C4043] leading-relaxed font-normal border-t border-gray-100 mt-2 pt-4">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
