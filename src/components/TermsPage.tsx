import React from 'react';
import { motion } from 'motion/react';
import { Mail } from 'lucide-react';

export const TermsPage: React.FC = () => {
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
            Terms & Conditions
          </h1>
          <p className="text-xs sm:text-sm font-mono text-[#202124] font-semibold mt-3">
            Last Updated: July 2026 • Avantty
          </p>
        </div>

        {/* Content */}
        <div className="space-y-10 text-sm sm:text-base text-[#202124] font-medium leading-relaxed">
          
          <section className="space-y-4">
            <h2 className="font-display text-xl sm:text-2xl font-bold text-[#202124] tracking-tight">
              1. Agreement to Terms
            </h2>
            <p>
              By accessing Avantty's website or engaging our automation services, you agree to be bound by these Terms & Conditions. These terms establish the conditions under which Avantty provides custom workflow automation solutions for executive search firms, recruitment agencies, and professional service companies.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="font-display text-xl sm:text-2xl font-bold text-[#202124] tracking-tight">
              2. Description of Services
            </h2>
            <p>
              Avantty provides customized automation solutions designed to improve operational efficiency, reduce repetitive administrative work, and optimize internal workflows. Our services may include workflow automation design, process configuration, operational dashboards, automated meeting assistants, system integrations, and other technology solutions agreed upon with each client. Avantty does not provide recruitment decisions, legal advice, employment advice, or guarantee specific hiring outcomes.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="font-display text-xl sm:text-2xl font-bold text-[#202124] tracking-tight">
              3. Client Responsibilities & Recording Consent
            </h2>
            <p>
              Clients are strictly responsible for:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Providing accurate information required for workflow configuration.</li>
              <li>Maintaining appropriate access permissions to their internal systems.</li>
              <li>Obtaining explicit, legally compliant consent from all participants (including candidates, clients, and internal staff) before allowing any Avantty automated bot or assistant to join, record, or transcribe a meeting or call.</li>
              <li>Reviewing and verifying all automated outputs and AI-generated summaries before making business decisions or communicating with third parties.</li>
              <li>Ensuring their own compliance with applicable recruitment and employment regulations.</li>
            </ul>
            <p>
              Avantty's services are designed to assist internal operations and do not replace professional human judgment.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="font-display text-xl sm:text-2xl font-bold text-[#202124] tracking-tight">
              4. Data Processing Role
            </h2>
            <p>
              For the purposes of applicable data protection laws, the Client acts as the Data Controller, and Avantty acts solely as the Data Processor. Avantty processes candidate data, client records, and meeting intelligence strictly under the instruction of the Client and for the sole purpose of executing the agreed automation workflows.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="font-display text-xl sm:text-2xl font-bold text-[#202124] tracking-tight">
              5. Intellectual Property
            </h2>
            <p>
              All Avantty-created frameworks, automation structures, templates, processes, documentation, and proprietary methodologies remain the property of Avantty unless explicitly agreed otherwise. Clients may use implemented solutions for their own internal business operations but may not copy, resell, reproduce, distribute, or reverse-engineer Avantty's proprietary systems without prior written permission.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="font-display text-xl sm:text-2xl font-bold text-[#202124] tracking-tight">
              6. Service Availability & Third-Party Platforms
            </h2>
            <p>
              Avantty continuously works to maintain reliable automation services. However, our solutions rely entirely on third-party infrastructure and external software integrations (including but not limited to Zoom, Microsoft Teams, Google Meet, and various ATS/CRM platforms).
            </p>
            <p>
              Avantty is not responsible for service interruptions, data sync failures, or workflow disruptions caused by updates, API changes, downtime, or policy modifications implemented by these external platforms.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="font-display text-xl sm:text-2xl font-bold text-[#202124] tracking-tight">
              7. Payments & Service Agreements
            </h2>
            <p>
              Pricing, payment terms, and specific service requirements will be established through individual agreements between Avantty and each client. Any applicable subscription, implementation fee, or ongoing service agreement will be communicated before the start of work.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="font-display text-xl sm:text-2xl font-bold text-[#202124] tracking-tight">
              8. Limitation of Liability
            </h2>
            <p>
              Avantty provides automation solutions intended to improve efficiency and reduce manual workload.
            </p>
            <p>
              Avantty, its directors, and employees shall not be liable for any indirect, incidental, or consequential damages, including loss of profits, loss of data, recruitment outcomes, or business interruptions. Furthermore, Avantty is completely exempt from liability regarding inaccuracies, omissions, or errors generated by Artificial Intelligence models (AI hallucinations) during data extraction, meeting summaries, or automated communications. The Client retains ultimate responsibility for approving all operational decisions.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="font-display text-xl sm:text-2xl font-bold text-[#202124] tracking-tight">
              9. Termination
            </h2>
            <p>
              Either party may terminate a service agreement according to the conditions established in their individual agreement. Upon termination, clients must discontinue any unauthorized use of Avantty's proprietary materials or systems.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="font-display text-xl sm:text-2xl font-bold text-[#202124] tracking-tight">
              10. Contact Information
            </h2>
            <p>
              For questions regarding these Terms & Conditions, please contact:
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


