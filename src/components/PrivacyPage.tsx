import React from 'react';
import { motion } from 'motion/react';
import { Mail } from 'lucide-react';

export const PrivacyPage: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className="bg-white min-h-screen text-[#202124] py-16 md:py-24 relative overflow-hidden"
    >
      {/* Subtle ambient gradients */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden select-none z-0">
        <div className="absolute top-[10%] left-[-10%] w-[350px] h-[350px] rounded-full bg-[#4285F4]/3 blur-[100px]" />
        <div className="absolute bottom-[20%] right-[-10%] w-[350px] h-[350px] rounded-full bg-[#34A853]/2 blur-[100px]" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="border-b border-[#E8EAED] pb-8 mb-12">
          <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#202124]">
            Privacy Policy
          </h1>
          <p className="text-xs sm:text-sm font-mono text-[#202124] font-semibold mt-3">
            Last Updated: July 2026 • Avantty Operations
          </p>
        </div>

        {/* Content */}
        <div className="space-y-10 text-sm sm:text-base text-[#202124] font-medium leading-relaxed">
          
          <section className="space-y-4">
            <h2 className="font-display text-xl sm:text-2xl font-bold text-[#202124] tracking-tight">
              1. Our Commitment to Privacy
            </h2>
            <p>
              At Avantty, we provide workflow automation solutions for executive search firms, recruitment agencies, and boutique advisory companies. We understand that recruitment operations involve sensitive business information, including candidate pipelines, client requirements, and internal processes. Privacy, discretion, and responsible data handling are fundamental principles behind our automation services. This Privacy Policy explains how Avantty collects, processes, and protects information when providing workflow automation solutions and maintaining client integrations.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="font-display text-xl sm:text-2xl font-bold text-[#202124] tracking-tight">
              2. Information We Process
            </h2>
            <p>
              Avantty only processes information necessary to provide and maintain agreed automation services. Depending on the workflows configured for each client, this includes:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Candidate pipeline information, resumes, and recruitment stage updates.</li>
              <li>Audio recordings, video files, text transcriptions, and meeting metadata captured by the Avantty Meeting Assistant during authorized client calls.</li>
              <li>Professional contact details required for automation triggers and automated email workflows.</li>
              <li>Internal process data used to maintain dashboards, reports, and operational visibility.</li>
            </ul>
            <p>
              We do not sell, rent, or share client business information, candidate data, or proprietary recruitment intelligence with third parties for commercial purposes.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="font-display text-xl sm:text-2xl font-bold text-[#202124] tracking-tight">
              3. Artificial Intelligence & Data Usage Guarantee
            </h2>
            <p>
              To extract hiring requirements and populate candidate profiles, data is processed through secure language models (LLMs). Avantty provides an absolute guarantee that no client data, meeting transcriptions, audio files, or candidate profiles are ever utilized to train public, foundational, or third-party Artificial Intelligence models. Your operational intelligence remains entirely isolated.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="font-display text-xl sm:text-2xl font-bold text-[#202124] tracking-tight">
              4. Data Retention & Media Purge Policy
            </h2>
            <p>
              Avantty minimizes data retention to protect operational security. Audio recordings, video files, and raw text transcriptions captured during meetings are temporarily stored only to execute the extraction workflow. All raw media and full transcript files are automatically and permanently deleted from Avantty's active processing servers within seven days after the data has been successfully synchronized into the Client’s ATS or CRM infrastructure.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="font-display text-xl sm:text-2xl font-bold text-[#202124] tracking-tight">
              5. Data Ownership & Confidentiality
            </h2>
            <p>
              Client organizations retain full ownership and control of their recruitment data and business information. Avantty processes information only to deliver the requested automation services, improve operational workflows, and maintain the agreed configurations. We treat all client information as strictly confidential and apply appropriate safeguards designed to prevent unauthorized access, misuse, or disclosure.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="font-display text-xl sm:text-2xl font-bold text-[#202124] tracking-tight">
              6. Security Practices
            </h2>
            <p>
              Avantty follows industry-standard security practices designed to protect information throughout our workflow automation processes. Our security approach includes:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>End-to-end encryption for data transmission and secure storage protocols.</li>
              <li>Strict internal access controls designed to limit unauthorized data visibility.</li>
              <li>Confidential handling of client operational information.</li>
              <li>Responsible management of isolated automation environments and API integrations.</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="font-display text-xl sm:text-2xl font-bold text-[#202124] tracking-tight">
              7. Third-Party Services
            </h2>
            <p>
              To deliver reliable automation solutions, Avantty utilizes trusted third-party infrastructure and secure cloud technology providers (such as Amazon Web Services or specialized AI sub-processors). These providers are selected based on their enterprise-grade reliability, strict security compliance, and adherence to international privacy standards.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="font-display text-xl sm:text-2xl font-bold text-[#202124] tracking-tight">
              8. US State Privacy Compliance & Data Protection Roles
            </h2>
            <p>
              Avantty operates strictly as a Service Provider (as defined under US state privacy laws, including the California Consumer Privacy Act - CCPA/CPRA) and as a Data Processor under applicable international data protection standards.
            </p>
            <p>
              Ultimate responsibility for managing individual consumer rights requests (such as access, deletion, or opt-out requests from US-based candidates or clients) rests entirely with the Client organization acting as the Data Controller or Business. Avantty processes all operational information solely upon the formal, written instruction of the Client and will cooperate to assist the Client in fulfilling these obligations.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="font-display text-xl sm:text-2xl font-bold text-[#202124] tracking-tight">
              9. Contact Our Operations Team
            </h2>
            <p>
              If you have questions, security concerns, or require additional information regarding Avantty's privacy practices, please contact:
            </p>
            <div className="bg-gray-50 border border-[#E8EAED] rounded-xl p-5 inline-block">
              <a href="mailto:naim@avanttyops.com" className="text-sm sm:text-base font-semibold text-[#4285F4] hover:underline flex items-center gap-2">
                <Mail className="w-4 h-4" />
                naim@avanttyops.com
              </a>
            </div>
          </section>

        </div>

        {/* Footer Accent */}
        <div className="border-t border-[#E8EAED] mt-16 pt-8 text-center text-xs text-[#202124] font-bold font-mono">
          &copy; {new Date().getFullYear()} Avantty. All rights reserved.
        </div>

      </div>
    </motion.div>
  );
};


