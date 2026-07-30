import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'motion/react';
import { Bot, Building2, UserPlus } from 'lucide-react';
import TextType from './TextType';
import ShinyText from './ShinyText';

type InstantPhase = 
  | 'CANDIDATE_1'
  | 'CANDIDATE_2'
  | 'INTERMEDIATE_WHITE_SCREEN'
  | 'CLIENT_1'
  | 'CLIENT_2';

interface CandidateProfileData {
  type: 'CANDIDATE';
  badge: string;
  name: string;
  title: string;
  email: string;
  phone: string;
  salary: string;
  notice: string;
  techStack: string[];
  notes: string;
}

interface ClientProfileData {
  type: 'CLIENT';
  badge: string;
  companyName: string;
  contactName: string;
  email: string;
  phone: string;
  openRoles: string;
  budgetCap: string;
  notes: string;
}

const CANDIDATE_1_DATA: CandidateProfileData = {
  type: 'CANDIDATE',
  badge: 'Candidate Profile #1042',
  name: 'Sarah Jenkins',
  title: 'Senior Software Engineer',
  email: 'sarah.j@techdev.io',
  phone: '+1 (555) 382-9102',
  salary: '$165,000 / year',
  notice: '2 Weeks (Immediate)',
  techStack: ['TypeScript', 'React', 'Node.js', 'PostgreSQL'],
  notes: 'Extremely strong system design skills. Ex-Stripe engineer looking for high-growth AI startup.'
};

const CANDIDATE_2_DATA: CandidateProfileData = {
  type: 'CANDIDATE',
  badge: 'Candidate Profile #1043',
  name: 'Marcus Vance',
  title: 'VP of Product Management',
  email: 'marcus.vance@innovate.co',
  phone: '+1 (555) 749-2041',
  salary: '$190,000 / year',
  notice: '30 Days',
  techStack: ['Product Strategy', 'GTM', 'Analytics', 'Enterprise SaaS'],
  notes: 'Led 15+ product managers at Series B company. Strong focus on AI automation workflows.'
};

const CLIENT_1_DATA: ClientProfileData = {
  type: 'CLIENT',
  badge: 'Client Account Requisition',
  companyName: 'Acme Corp',
  contactName: 'David Miller (Hiring Manager)',
  email: 'd.miller@acme.com',
  phone: '+1 (555) 901-4422',
  openRoles: '3 Senior Fullstack Engineers',
  budgetCap: '$170k - $190k per candidate',
  notes: 'Urgent hiring budget approved Q3. Prefers candidates with heavy AI/LLM experience.'
};

const CLIENT_2_DATA: ClientProfileData = {
  type: 'CLIENT',
  badge: 'Client Account Requisition',
  companyName: 'Nexus AI Technologies',
  contactName: 'Elena Rostova (Head of People)',
  email: 'elena@nexusai.io',
  phone: '+1 (555) 620-1188',
  openRoles: '2 Lead AI Researchers, 1 VP Product',
  budgetCap: '$210k - $250k per candidate',
  notes: 'High-urgency series A expansion. Needs top 1% talent with fast turnaround.'
};

export const IsInstantSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { amount: 0.2 });

  const [phase, setPhase] = useState<InstantPhase>('CANDIDATE_1');

  // Animation cycle sequence:
  // CANDIDATE_1 (3s) -> CANDIDATE_2 (3s) -> WHITE SCREEN (4s) -> CLIENT_1 (3s) -> CLIENT_2 (3s) -> CANDIDATE_1
  useEffect(() => {
    if (!isInView) {
      setPhase('CANDIDATE_1');
      return;
    }

    let timer: NodeJS.Timeout;

    if (phase === 'CANDIDATE_1') {
      timer = setTimeout(() => setPhase('CANDIDATE_2'), 3200);
    } else if (phase === 'CANDIDATE_2') {
      timer = setTimeout(() => setPhase('INTERMEDIATE_WHITE_SCREEN'), 3200);
    } else if (phase === 'INTERMEDIATE_WHITE_SCREEN') {
      timer = setTimeout(() => setPhase('CLIENT_1'), 4200);
    } else if (phase === 'CLIENT_1') {
      timer = setTimeout(() => setPhase('CLIENT_2'), 3200);
    } else if (phase === 'CLIENT_2') {
      timer = setTimeout(() => setPhase('CANDIDATE_1'), 3200);
    }

    return () => clearTimeout(timer);
  }, [phase, isInView]);

  return (
    <section ref={sectionRef} id="is-instant" className="relative bg-white pt-24 sm:pt-32 pb-24 sm:pb-32">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column Text */}
          <div className="lg:col-span-5 text-left">
            <TextType 
              as="h2"
              text="Is Instant"
              typingSpeed={100}
              pauseDuration={3000}
              showCursor={true}
              cursorCharacter="|"
              startOnVisible={true}
              loop={false}
              className="font-display text-3xl sm:text-5xl font-extrabold text-[#000000] tracking-tight leading-[1.15] mb-6"
            />

            <motion.p 
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="text-base sm:text-lg text-black font-medium leading-relaxed"
            >
              Right after the call, Avantty instantly creates the profile. Whether it belongs to a new candidate or a client, the bot populates the correct page automatically with zero delay.
            </motion.p>
          </div>

          {/* Right Column: Simulated Instant Auto-Populating Macbook Window */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-7 relative w-full"
          >
            {/* Outer Soft Lavender Gradient Container matching mockup style */}
            <div className="rounded-[32px] bg-gradient-to-b from-[#F3F0FD]/80 to-[#EAE5FA]/80 p-5 sm:p-10 shadow-xs">
              <div className="relative mx-auto rounded-2xl bg-white shadow-xl overflow-hidden min-h-[480px]">
                
                {/* macOS Window Header */}
                <div className="bg-white px-4 py-3 flex items-center justify-between border-b border-gray-200 relative">
                  <div className="flex items-center gap-2">
                    <div className="w-3.5 h-3.5 rounded-full bg-[#FF5F56]" />
                    <div className="w-3.5 h-3.5 rounded-full bg-[#FFBD2E]" />
                    <div className="w-3.5 h-3.5 rounded-full bg-[#27C93F]" />
                  </div>
                  <div className="absolute left-1/2 -translate-x-1/2 text-xs font-semibold text-gray-500 font-sans tracking-tight flex items-center gap-1.5">
                    <UserPlus className="w-3.5 h-3.5 text-black" />
                    <span>Avantty Auto-Creating Profile...</span>
                  </div>
                  <div className="w-12" />
                </div>

              {/* Window Body Container */}
              <div className="bg-[#FAFAFA] p-5 sm:p-6 text-left font-sans text-black min-h-[440px] flex flex-col justify-between relative overflow-hidden">
                
                {/* CANDIDATE PROFILES (1 and 2) */}
                <AnimatePresence mode="wait">
                  {(phase === 'CANDIDATE_1' || phase === 'CANDIDATE_2') && (
                    <CandidateProfileCard key={phase} data={phase === 'CANDIDATE_1' ? CANDIDATE_1_DATA : CANDIDATE_2_DATA} />
                  )}

                  {/* CLIENT PROFILES (1 and 2) */}
                  {(phase === 'CLIENT_1' || phase === 'CLIENT_2') && (
                    <ClientProfileCard key={phase} data={phase === 'CLIENT_1' ? CLIENT_1_DATA : CLIENT_2_DATA} />
                  )}
                </AnimatePresence>

                {/* INTERMEDIATE WHITE SCREEN OVERLAY */}
                <AnimatePresence>
                  {phase === 'INTERMEDIATE_WHITE_SCREEN' && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.97 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.35 }}
                      className="absolute inset-0 bg-white z-30 flex flex-col items-center justify-center p-6 sm:p-8 text-center shadow-inner rounded-2xl"
                    >
                      <motion.div
                        initial={{ scale: 0.92, y: 10 }}
                        animate={{ scale: 1, y: 0 }}
                        transition={{ duration: 0.4 }}
                        className="flex flex-col items-center max-w-lg"
                      >
                        <div className="w-16 h-16 rounded-2xl bg-gray-100 border border-gray-300 text-black flex items-center justify-center mb-5 shadow-sm relative">
                          <Bot className="w-8 h-8 text-black" />
                        </div>
                        
                        <h3 className="text-xl sm:text-2xl font-extrabold text-black tracking-tight mb-3 font-display leading-snug">
                          <ShinyText 
                            text="Not only does it populate candidate profiles, but client profiles as well" 
                            color="#000000" 
                            shineColor="#444444" 
                            speed={2.2} 
                            spread={120} 
                          />
                        </h3>
                      </motion.div>
                    </motion.div>
                  )}
                </AnimatePresence>

              </div>
            </div>
          </div>
        </motion.div>

        </div>
      </div>
    </section>
  );
};

// Component for Candidate Profile Display with Auto-Typing Simulation
const CandidateProfileCard: React.FC<{ data: CandidateProfileData }> = ({ data }) => {
  const [typedProgress, setTypedProgress] = useState(0);

  useEffect(() => {
    setTypedProgress(0);
    const interval = setInterval(() => {
      setTypedProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 25; // 4 fast steps = ~0.8s
      });
    }, 180);

    return () => clearInterval(interval);
  }, [data]);

  return (
    <motion.div 
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.3 }}
      className="bg-white border border-gray-200 rounded-xl p-4 sm:p-5 flex-1 flex flex-col justify-between shadow-2xs relative"
    >
      {/* Profile Header */}
      <div className="flex items-center justify-between border-b border-gray-100 pb-3">
        <div className="flex items-center gap-2.5">
          <div className="w-10 h-10 rounded-full bg-black text-white font-bold flex items-center justify-center text-base shadow-sm ring-2 ring-gray-200">
            {typedProgress > 0 ? data.name.charAt(0) : '?'}
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-sm font-bold text-black">
                {typedProgress > 0 ? data.name : 'Writing profile name...'}
              </span>
            </div>
            <span className="text-xs text-black font-medium">
              {typedProgress > 25 ? data.title : '...'}
            </span>
          </div>
        </div>
        <div className="text-[10px] font-mono text-black bg-gray-100 px-2 py-1 rounded border border-gray-300">
          {data.badge}
        </div>
      </div>

      {/* Grid Fields Populated sequentially with cursor typing effect */}
      <div className="grid grid-cols-2 gap-3 my-3">
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-2.5 relative">
          <label className="text-[10px] font-bold text-black uppercase tracking-wider block mb-0.5">Email Address</label>
          <div className="text-xs font-semibold text-black font-mono truncate">
            {typedProgress >= 25 ? data.email : <span className="animate-pulse text-black">typing...</span>}
          </div>
        </div>

        <div className="bg-gray-50 border border-gray-200 rounded-lg p-2.5 relative">
          <label className="text-[10px] font-bold text-black uppercase tracking-wider block mb-0.5">Phone Number</label>
          <div className="text-xs font-semibold text-black font-mono truncate">
            {typedProgress >= 50 ? data.phone : <span className="animate-pulse text-black">typing...</span>}
          </div>
        </div>

        <div className="bg-gray-50 border border-gray-200 rounded-lg p-2.5 relative">
          <label className="text-[10px] font-bold text-black uppercase tracking-wider block mb-0.5">Expected Salary</label>
          <div className="text-xs font-semibold text-black font-mono truncate">
            {typedProgress >= 75 ? data.salary : <span className="animate-pulse text-black">typing...</span>}
          </div>
        </div>

        <div className="bg-gray-50 border border-gray-200 rounded-lg p-2.5 relative">
          <label className="text-[10px] font-bold text-black uppercase tracking-wider block mb-0.5">Notice Period</label>
          <div className="text-xs font-semibold text-black font-mono truncate">
            {typedProgress >= 75 ? data.notice : <span className="animate-pulse text-black">typing...</span>}
          </div>
        </div>
      </div>

      {/* Skills Badges */}
      <div className="mb-3">
        <label className="text-[10px] font-bold text-black uppercase tracking-wider block mb-1">Extracted Tech Stack & Skills</label>
        <div className="flex flex-wrap gap-1.5 min-h-[26px]">
          {typedProgress >= 75 ? (
            data.techStack.map((skill, idx) => (
              <motion.span 
                key={idx}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.2, delay: idx * 0.05 }}
                className="bg-gray-100 text-black text-[11px] font-semibold px-2 py-0.5 rounded-md border border-gray-300"
              >
                {skill}
              </motion.span>
            ))
          ) : (
            <span className="text-[11px] text-black font-mono animate-pulse">Extracting skills...</span>
          )}
        </div>
      </div>

      {/* Notes Box */}
      <div className="bg-gray-50 border border-gray-200 rounded-lg p-2.5">
        <label className="text-[10px] font-bold text-black uppercase tracking-wider block mb-0.5 flex items-center justify-between">
          <span>Avantty Extracted Summary</span>
        </label>
        <p className="text-xs text-black font-medium leading-relaxed">
          {typedProgress >= 100 ? data.notes : <span className="animate-pulse text-black font-mono">Writing meeting summary...</span>}
        </p>
      </div>
    </motion.div>
  );
};

// Component for Client Profile Display with Auto-Typing Simulation
const ClientProfileCard: React.FC<{ data: ClientProfileData }> = ({ data }) => {
  const [typedProgress, setTypedProgress] = useState(0);

  useEffect(() => {
    setTypedProgress(0);
    const interval = setInterval(() => {
      setTypedProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 25; // 4 fast steps = ~0.8s
      });
    }, 180);

    return () => clearInterval(interval);
  }, [data]);

  return (
    <motion.div 
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.3 }}
      className="bg-white border border-gray-200 rounded-xl p-4 sm:p-5 flex-1 flex flex-col justify-between shadow-2xs relative"
    >
      {/* Profile Header */}
      <div className="flex items-center justify-between border-b border-gray-100 pb-3">
        <div className="flex items-center gap-2.5">
          <div className="w-10 h-10 rounded-full bg-black text-white font-bold flex items-center justify-center text-base shadow-sm ring-2 ring-gray-200">
            <Building2 className="w-5 h-5 text-white" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-sm font-bold text-black">
                {typedProgress > 0 ? data.companyName : 'Creating client profile...'}
              </span>
            </div>
            <span className="text-xs text-black font-medium">
              {typedProgress > 25 ? data.contactName : '...'}
            </span>
          </div>
        </div>
        <div className="text-[10px] font-mono text-black bg-gray-100 px-2 py-1 rounded border border-gray-300">
          {data.badge}
        </div>
      </div>

      {/* Grid Fields Populated sequentially with cursor typing effect */}
      <div className="grid grid-cols-2 gap-3 my-3">
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-2.5 relative">
          <label className="text-[10px] font-bold text-black uppercase tracking-wider block mb-0.5">Contact Email</label>
          <div className="text-xs font-semibold text-black font-mono truncate">
            {typedProgress >= 25 ? data.email : <span className="animate-pulse text-black">typing...</span>}
          </div>
        </div>

        <div className="bg-gray-50 border border-gray-200 rounded-lg p-2.5 relative">
          <label className="text-[10px] font-bold text-black uppercase tracking-wider block mb-0.5">Contact Phone</label>
          <div className="text-xs font-semibold text-black font-mono truncate">
            {typedProgress >= 50 ? data.phone : <span className="animate-pulse text-black">typing...</span>}
          </div>
        </div>

        <div className="bg-gray-50 border border-gray-200 rounded-lg p-2.5 relative">
          <label className="text-[10px] font-bold text-black uppercase tracking-wider block mb-0.5">Open Requisitions</label>
          <div className="text-xs font-semibold text-black font-mono truncate">
            {typedProgress >= 75 ? data.openRoles : <span className="animate-pulse text-black">typing...</span>}
          </div>
        </div>

        <div className="bg-gray-50 border border-gray-200 rounded-lg p-2.5 relative">
          <label className="text-[10px] font-bold text-black uppercase tracking-wider block mb-0.5">Approved Budget Cap</label>
          <div className="text-xs font-semibold text-black font-mono truncate">
            {typedProgress >= 75 ? data.budgetCap : <span className="animate-pulse text-black">typing...</span>}
          </div>
        </div>
      </div>

      {/* Notes Box */}
      <div className="bg-gray-50 border border-gray-200 rounded-lg p-2.5">
        <label className="text-[10px] font-bold text-black uppercase tracking-wider block mb-0.5 flex items-center justify-between">
          <span>Client Meeting Deal Terms & Requisition Notes</span>
        </label>
        <p className="text-xs text-black font-medium leading-relaxed">
          {typedProgress >= 100 ? data.notes : <span className="animate-pulse text-black font-mono">Writing client deal terms...</span>}
        </p>
      </div>
    </motion.div>
  );
};


