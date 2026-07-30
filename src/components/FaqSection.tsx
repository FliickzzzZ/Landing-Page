import React, { useState, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'motion/react';
import { ChevronDown, HelpCircle } from 'lucide-react';

interface FaqItem {
  id: number;
  question: string;
  answer: string;
}

const faqs: FaqItem[] = [
  {
    id: 1,
    question: 'Will Avantty disrupt or duplicate data in our existing ATS and CRM?',
    answer:
      'Negative. Avantty operates with zero tool replacement. It syncs directly with your current software infrastructure via secure APIs, reading data changes in real time. It populates existing candidate and client fields without creating duplicates or altering your established database architecture.',
  },
  {
    id: 2,
    question: 'How accurately does the bot extract complex technical skills and stacks?',
    answer:
      'Flawlessly. The AI model is specifically calibrated for technical recruitment. As shown in our workflow, it distinguishes between active tech stacks (e.g., React, Node.js), expected compensation, and specific candidate motivations, achieving 100% data accuracy without requiring human manual entry.',
  },
  {
    id: 3,
    question: 'Do our recruiters or clients need to download any new software to use the assistant?',
    answer:
      'Zero software required. The Avantty Meeting Assistant integrates directly at the platform level (Zoom, Microsoft Teams, Google Meet). It joins calls automatically based on your calendar schedule, extracting value in the background while your team focuses entirely on the conversation.',
  },
];

export const FaqSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { amount: 0.15 });
  const [openIds, setOpenIds] = useState<number[]>([1]); // First FAQ open by default

  const toggleFaq = (id: number) => {
    setOpenIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <section ref={sectionRef} id="faq" className="relative bg-white py-24 sm:py-32 overflow-hidden border-t border-gray-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="text-left mb-12 sm:mb-16">
          <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-black tracking-tight leading-[1.15] mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-base sm:text-lg text-gray-700 font-semibold">
            Frequently Asked Questions about Avantty Automation Systems
          </p>
        </div>

        {/* FAQ Accordion Cards */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIds.includes(faq.id);

            return (
              <motion.div
                key={faq.id}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`border rounded-2xl transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? 'border-gray-900 bg-gray-50/70 shadow-sm'
                    : 'border-gray-200 bg-white hover:border-gray-400'
                }`}
              >
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full text-left p-4 sm:p-7 flex items-center justify-between gap-3 sm:gap-4 focus:outline-none cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-start gap-3 sm:gap-3.5 pr-1 sm:pr-2">
                    <div className={`mt-0.5 w-6 h-6 rounded-lg flex items-center justify-center shrink-0 ${
                      isOpen ? 'bg-black text-white' : 'bg-gray-100 text-gray-500'
                    }`}>
                      <HelpCircle className="w-3.5 h-3.5" />
                    </div>
                    <span className="font-display text-base sm:text-xl font-extrabold text-black tracking-tight leading-snug">
                      {faq.question}
                    </span>
                  </div>

                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.25, ease: 'easeInOut' }}
                    className={`w-8 h-8 rounded-full border flex items-center justify-center shrink-0 ${
                      isOpen ? 'border-black bg-black text-white' : 'border-gray-200 bg-white text-gray-600'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </motion.div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                    >
                      <div className="px-4 pb-5 pt-0 sm:px-7 sm:pb-7 sm:pl-13 text-sm sm:text-base text-gray-800 font-medium leading-relaxed border-t border-gray-100/80 pt-3 mt-1">
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
