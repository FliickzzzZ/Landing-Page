import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { AvanttyLogo } from './AvanttyLogo';
import { 
  Video, 
  CheckCircle2, 
  RefreshCw, 
  Send, 
  Calendar, 
  ShieldCheck, 
  Activity, 
  Bot, 
  Database, 
  FileText, 
  Check, 
  Sparkles,
  ArrowRight,
  Mail,
  Zap,
  Users,
  Search,
  CheckSquare,
  Clock,
  Layers,
  Terminal,
  MousePointer2,
  TrendingUp,
  Sliders,
  Server
} from 'lucide-react';

/* ============================================================================
   SECTION 1 ANIMATION: Every meeting documented
   ============================================================================ */
const Section1MeetingAnim: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);
  const [phase, setPhase] = useState<0 | 1 | 2 | 3>(0);
  const [pastedUrl, setPastedUrl] = useState('');
  const targetUrl = 'https://zoom.us/j/98234105932';

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        } else {
          setIsInView(false);
          setPhase(0);
          setPastedUrl('');
        }
      },
      { threshold: 0.2 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Loop through phases
  useEffect(() => {
    if (!isInView) return;

    let timeout: NodeJS.Timeout;

    if (phase === 0) {
      // Phase 0: Type paste URL
      let charIdx = 0;
      setPastedUrl('');
      const typeInterval = setInterval(() => {
        if (charIdx < targetUrl.length) {
          setPastedUrl(targetUrl.slice(0, charIdx + 1));
          charIdx++;
        } else {
          clearInterval(typeInterval);
          timeout = setTimeout(() => setPhase(1), 1000);
        }
      }, 40);
      return () => clearInterval(typeInterval);
    } else if (phase === 1) {
      // Phase 1: AI joins meeting
      timeout = setTimeout(() => setPhase(2), 2500);
    } else if (phase === 2) {
      // Phase 2: Processing
      timeout = setTimeout(() => setPhase(3), 2000);
    } else if (phase === 3) {
      // Phase 3: Display 5 cards one by one then restart
      timeout = setTimeout(() => setPhase(0), 6000);
    }

    return () => clearTimeout(timeout);
  }, [isInView, phase]);

  const cards = [
    { label: 'Transcript', detail: '38 min C-suite interview transcribed with speaker labels', tag: '38m audio' },
    { label: 'Executive Summary', detail: 'Leadership metrics, strategic vision & compensation targets extracted', tag: 'AI Summary' },
    { label: 'Candidate Information', detail: 'Notice period: 30 days • Relocation: Open • Target: $320k', tag: 'Dossier' },
    { label: 'Client Information', detail: 'Culture fit 95% • Aligned with Q3 expansion roadmap', tag: 'Client Notes' },
    { label: 'Action Items', detail: 'Schedule Round 2 Board Panel & request references', tag: 'Auto-Task' }
  ];

  return (
    <div ref={containerRef} className="bg-white border border-[#E8EAED] rounded-2xl p-5 sm:p-7 shadow-sm font-sans w-full max-w-2xl mx-auto overflow-hidden">
      {/* Zoom Mockup Window Bar */}
      <div className="flex items-center justify-between pb-4 mb-5 border-b border-gray-100">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-red-400" />
          <div className="w-3 h-3 rounded-full bg-amber-400" />
          <div className="w-3 h-3 rounded-full bg-emerald-400" />
          <span className="text-xs font-mono text-gray-400 ml-2">Zoom Meeting Integration</span>
        </div>
      </div>

      {/* Main Container */}
      <div className="min-h-[320px] flex flex-col justify-between">
        <AnimatePresence mode="wait">
          {phase === 0 && (
            <motion.div 
              key="phase-0"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="space-y-4 my-auto"
            >
              <div className="text-xs font-mono font-semibold text-gray-500 uppercase tracking-wider">Step 1: Link Detection</div>
              <div className="p-4 bg-gray-50 border border-gray-200 rounded-xl flex items-center justify-between gap-3 shadow-inner">
                <div className="flex items-center gap-3 w-full">
                  <Video className="w-5 h-5 text-blue-600 shrink-0" />
                  <span className="font-mono text-xs sm:text-sm text-gray-800 break-all">
                    {pastedUrl}<span className="animate-pulse font-bold text-blue-600">|</span>
                  </span>
                </div>
              </div>
              <div className="p-3 bg-blue-50/80 border border-blue-200/80 rounded-xl text-xs text-blue-900 flex items-center">
                <span>Avantty automatically detects calendar link and prepares recording bot...</span>
              </div>
            </motion.div>
          )}

          {phase === 1 && (
            <motion.div 
              key="phase-1"
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              className="my-auto text-center p-6 bg-gradient-to-b from-blue-50/50 to-white border border-blue-100 rounded-xl space-y-3"
            >
              <div className="w-12 h-12 rounded-full bg-blue-600 text-white mx-auto flex items-center justify-center shadow-md animate-bounce">
                <Bot className="w-6 h-6" />
              </div>
              <div className="font-bold text-gray-900 text-sm sm:text-base">Avantty AI Assistant Joined Meeting</div>
              <p className="text-xs text-gray-500 max-w-sm mx-auto">
                Recording executive interview • Speaker diarization active • Capturing key candidate responses
              </p>
            </motion.div>
          )}

          {phase === 2 && (
            <motion.div 
              key="phase-2"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="my-auto p-6 bg-gray-50 border border-gray-200 rounded-xl text-center space-y-4"
            >
              <RefreshCw className="w-8 h-8 text-blue-600 animate-spin mx-auto" />
              <div>
                <div className="font-bold text-gray-900 text-sm">Meeting Ended — Processing Audio & Notes</div>
                <div className="text-xs text-gray-500 mt-1">Extracting leadership attributes, transcripts & key decision metrics...</div>
              </div>
              <div className="w-full bg-gray-200 h-2 rounded-full overflow-hidden max-w-xs mx-auto">
                <motion.div 
                  initial={{ width: '0%' }}
                  animate={{ width: '100%' }}
                  transition={{ duration: 1.8, ease: 'easeInOut' }}
                  className="bg-blue-600 h-full rounded-full"
                />
              </div>
            </motion.div>
          )}

          {phase === 3 && (
            <motion.div 
              key="phase-3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="space-y-2.5 my-auto"
            >
              <div className="flex items-center justify-between text-xs font-mono font-bold text-gray-500 mb-2">
                <span>Extracted Executive Dossier</span>
              </div>

              {cards.map((card, idx) => (
                <motion.div
                  key={card.label}
                  initial={{ opacity: 0, x: -15 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.15, duration: 0.3 }}
                  className="p-3 bg-white border border-gray-200 rounded-xl shadow-2xs hover:border-blue-300 transition-colors flex items-start justify-between gap-3"
                >
                  <div className="flex items-start gap-2.5">
                    <div className="w-5 h-5 rounded-full bg-gray-100 text-gray-700 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                    </div>
                    <div>
                      <span className="font-bold text-gray-900 text-xs sm:text-sm block">{card.label}</span>
                      <span className="text-xs text-gray-500 block leading-tight">{card.detail}</span>
                    </div>
                  </div>
                  <span className="text-[10px] font-mono font-medium text-gray-600 bg-gray-100 border border-gray-200 px-2 py-0.5 rounded-md shrink-0">
                    {card.tag}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Footer bar */}
      <div className="mt-5 pt-3 border-t border-gray-100 flex items-center justify-between text-xs font-mono text-gray-400">
        <span>Zoom • Teams • Google Meet</span>
      </div>
    </div>
  );
};

/* ============================================================================
   SECTION 2 ANIMATION: Every update synchronized
   ============================================================================ */
const Section2SyncAnim: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % 3);
    }, 3500);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-white border border-[#E8EAED] rounded-2xl p-5 sm:p-7 shadow-sm font-sans w-full max-w-2xl mx-auto overflow-hidden">
      {/* Header Bar */}
      <div className="flex items-center justify-between pb-4 mb-6 border-b border-gray-100">
        <div className="flex items-center gap-2">
          <RefreshCw className="w-4 h-4 text-gray-600 animate-spin" style={{ animationDuration: '6s' }} />
          <span className="text-xs font-mono font-bold text-gray-800">Bi-Directional Auto Sync Pipeline</span>
        </div>
      </div>

      {/* Sync Flow Layout */}
      <div className="space-y-6">
        {/* Source: Meeting output in Avantty */}
        <div className="p-4 bg-gray-50 border border-gray-200 rounded-xl relative">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-mono font-bold text-gray-700 uppercase tracking-wider flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-gray-600" /> Avantty Intelligence Hub
            </span>
            <span className="text-[10px] font-mono bg-gray-800 text-white px-2 py-0.5 rounded font-semibold">Source Event</span>
          </div>
          <div className="bg-white p-3 rounded-lg border border-gray-200 shadow-2xs flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-gray-100 text-gray-800 flex items-center justify-center font-bold text-xs">
                AI
              </div>
              <div>
                <div className="text-xs sm:text-sm font-bold text-gray-900">Executive Candidate Evaluation Completed</div>
                <div className="text-xs text-gray-500">VP Marketing Search • Candidate: Elena Rostova</div>
              </div>
            </div>
          </div>
        </div>

        {/* Animated Connecting Flow Lines */}
        <div className="relative py-1 flex items-center justify-center">
          <div className="w-full border-t-2 border-dashed border-gray-300 relative">
            <motion.div 
              animate={{ x: ['0%', '100%'] }}
              transition={{ repeat: Infinity, duration: 1.8, ease: 'linear' }}
              className="w-3 h-3 rounded-full bg-gray-700 absolute -top-[7px] shadow-sm"
            />
          </div>
        </div>

        {/* Destinations: ATS & CRM */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* ATS Destination */}
          <motion.div 
            animate={{ scale: activeStep === 0 || activeStep === 2 ? 1.02 : 1 }}
            className="p-4 bg-white border border-gray-200 rounded-xl shadow-2xs hover:border-gray-300 transition-all space-y-2.5 relative overflow-hidden"
          >
            <div className="flex items-center justify-between border-b border-gray-100 pb-2">
              <div className="flex items-center gap-2">
                <Database className="w-4 h-4 text-gray-700" />
                <span className="text-xs font-mono font-bold text-gray-900">ATS (Bullhorn / Greenhouse)</span>
              </div>
            </div>

            <div className="space-y-1.5 text-xs">
              <div className="flex justify-between text-gray-600">
                <span>Candidate Stage:</span>
                <span className="font-bold text-gray-900 bg-gray-100 px-1.5 py-0.5 rounded border border-gray-200 text-[11px]">
                  Client Assessment
                </span>
              </div>
              <div className="flex justify-between text-gray-600">
                <span>Dossier File:</span>
                <span className="font-mono text-gray-800 font-semibold text-[11px]">Attached</span>
              </div>
              <div className="flex justify-between text-gray-600">
                <span>Recruiter Notes:</span>
                <span className="font-mono text-gray-800 font-semibold text-[11px]">Auto-Logged</span>
              </div>
            </div>
          </motion.div>

          {/* CRM Destination */}
          <motion.div 
            animate={{ scale: activeStep === 1 || activeStep === 2 ? 1.02 : 1 }}
            className="p-4 bg-white border border-gray-200 rounded-xl shadow-2xs hover:border-gray-300 transition-all space-y-2.5 relative overflow-hidden"
          >
            <div className="flex items-center justify-between border-b border-gray-100 pb-2">
              <div className="flex items-center gap-2">
                <Server className="w-4 h-4 text-gray-700" />
                <span className="text-xs font-mono font-bold text-gray-900">CRM (Salesforce / HubSpot)</span>
              </div>
            </div>

            <div className="space-y-1.5 text-xs">
              <div className="flex justify-between text-gray-600">
                <span>Client Activity:</span>
                <span className="font-bold text-gray-900 bg-gray-100 px-1.5 py-0.5 rounded border border-gray-200 text-[11px]">
                  Call Transcript Added
                </span>
              </div>
              <div className="flex justify-between text-gray-600">
                <span>Follow-Up Date:</span>
                <span className="font-mono text-gray-900 font-semibold text-[11px]">Thursday 10:00 AM</span>
              </div>
              <div className="flex justify-between text-gray-600">
                <span>Pipeline Health:</span>
                <span className="font-mono text-gray-800 font-semibold text-[11px]">Updated</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-6 pt-3 border-t border-gray-100 flex items-center justify-between text-xs font-mono text-gray-400">
        <span>No double entry • No lost records</span>
      </div>
    </div>
  );
};

/* ============================================================================
   SECTION 3 ANIMATION: Every follow-up handled (Natural Typewriter Email Client)
   ============================================================================ */
const Section3EmailAnim: React.FC = () => {
  const EMAILS = [
    {
      to: 'sarah.jenkins@csuite-search.com',
      subject: 'Executive Candidate Dossier & Interview Summary — VP Engineering',
      body: `Hi Sarah,

Following today's interview with David Miller, Avantty has compiled the full executive dossier. 

Key takeaways:
• 14+ years scaling tech infrastructure in Series C-D startups
• Aligned with target compensation ($310k + equity)
• Candidate availability: Thursday or Friday morning.

The full transcript and leadership metrics have been attached.`
    },
    {
      to: 'david.miller@techleadership.io',
      subject: 'Next Steps & Panel Interview Confirmation — C-Suite Search',
      body: `Dear David,

Thank you for your time during today's interview. The client team was thoroughly impressed with your background and strategic approach.

We would like to invite you to the final board panel interview scheduled for Thursday at 10:00 AM EST. 

Please confirm if this time slot works for you.`
    }
  ];

  const containerRef = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);
  const [emailIdx, setEmailIdx] = useState(0);
  const [typedChars, setTypedChars] = useState(0);
  const [phase, setPhase] = useState<'typing' | 'finished_typing' | 'moving_cursor' | 'clicked_send' | 'sent_toast'>('typing');

  const currentEmail = EMAILS[emailIdx];

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        } else {
          setIsInView(false);
          setEmailIdx(0);
          setTypedChars(0);
          setPhase('typing');
        }
      },
      { threshold: 0.2 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isInView) return;

    let timeout: NodeJS.Timeout;

    if (phase === 'typing') {
      if (typedChars < currentEmail.body.length) {
        timeout = setTimeout(() => {
          setTypedChars((prev) => prev + 1);
        }, 18 + Math.random() * 20); // Natural typing speed cadence
      } else {
        setPhase('finished_typing');
      }
    } else if (phase === 'finished_typing') {
      timeout = setTimeout(() => setPhase('moving_cursor'), 700);
    } else if (phase === 'moving_cursor') {
      timeout = setTimeout(() => setPhase('clicked_send'), 750);
    } else if (phase === 'clicked_send') {
      timeout = setTimeout(() => setPhase('sent_toast'), 300);
    } else if (phase === 'sent_toast') {
      timeout = setTimeout(() => {
        // Reset and switch to next email
        setEmailIdx((prev) => (prev + 1) % EMAILS.length);
        setTypedChars(0);
        setPhase('typing');
      }, 2200);
    }

    return () => clearTimeout(timeout);
  }, [isInView, phase, typedChars, emailIdx, currentEmail.body.length]);

  return (
    <div ref={containerRef} className="bg-white border-2 border-gray-900 rounded-[24px] p-6 sm:p-8 shadow-xl font-sans w-full max-w-2xl mx-auto overflow-hidden relative">
      
      {/* Mac OS Window Header */}
      <div className="relative flex items-center justify-between pb-4 border-b border-gray-100">
        {/* Red, Yellow, Green Traffic Light Dots */}
        <div className="flex items-center gap-2">
          <div className="w-3.5 h-3.5 rounded-full bg-[#FF5F56] border border-[#E0443E]" />
          <div className="w-3.5 h-3.5 rounded-full bg-[#FFBD2E] border border-[#DEA123]" />
          <div className="w-3.5 h-3.5 rounded-full bg-[#27C93F] border border-[#1AAB29]" />
        </div>

        {/* Title Centered */}
        <span className="absolute left-1/2 -translate-x-1/2 text-xs sm:text-sm font-semibold text-gray-500">
          New Message
        </span>

        <div className="w-12" /> {/* Spacer */}
      </div>

      {/* Toolbar Row with Send button and formatting icons */}
      <div className="py-3 flex items-center gap-4 border-b border-gray-100 relative">
        {/* Blue Send Pill Button */}
        <div className="relative">
          <motion.button
            animate={phase === 'clicked_send' ? { scale: 0.92 } : { scale: 1 }}
            className={`px-5 py-2 rounded-full text-xs sm:text-sm font-bold transition-all flex items-center gap-2 shadow-sm ${
              phase === 'sent_toast' 
                ? 'bg-emerald-600 text-white' 
                : 'bg-[#1D61F2] hover:bg-blue-700 text-white'
            }`}
          >
            {phase === 'sent_toast' ? (
              <>
                <Check className="w-4 h-4 stroke-[3]" /> Sent
              </>
            ) : (
              <>
                <Send className="w-3.5 h-3.5 fill-white text-white" /> Send
              </>
            )}
          </motion.button>

          {/* Mouse pointer animating directly to the blue Send button */}
          <AnimatePresence>
            {(phase === 'moving_cursor' || phase === 'clicked_send') && (
              <motion.div 
                initial={{ opacity: 0, x: 140, y: 120 }}
                animate={
                  phase === 'moving_cursor' 
                    ? { opacity: 1, x: 28, y: 16, scale: 1 } 
                    : { opacity: 1, x: 28, y: 16, scale: 0.82 }
                }
                exit={{ opacity: 0 }}
                transition={{ duration: 0.65, ease: 'easeInOut' }}
                className="absolute top-0 left-0 z-30 pointer-events-none drop-shadow-lg"
              >
                <MousePointer2 className="w-6 h-6 fill-black text-white stroke-[1.5]" />
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Paperclip & Format Icon Tools */}
        <div className="flex items-center gap-3 text-gray-400">
          <span className="text-gray-200">|</span>
          <button className="p-1 hover:text-gray-600 transition-colors">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" />
            </svg>
          </button>
          <span className="text-gray-200">|</span>
          <div className="flex items-center gap-1">
            <span className="text-[11px] font-bold border border-gray-300 rounded px-1 py-0.5 text-gray-400">A</span>
            <span className="text-[11px] font-bold border border-gray-300 rounded px-1 py-0.5 text-gray-400">B</span>
          </div>
        </div>
      </div>

      {/* Email Header Input Fields */}
      <div className="py-2.5 space-y-2 text-xs sm:text-sm">
        <div className="flex items-center gap-3 py-1.5 border-b border-gray-100">
          <span className="text-gray-400 font-medium w-16 shrink-0">To:</span>
          <span className="font-medium text-gray-800">
            {currentEmail.to}
          </span>
        </div>
        <div className="flex items-center gap-3 py-1.5 border-b border-gray-100">
          <span className="text-gray-400 font-medium w-16 shrink-0">Subject:</span>
          <span className="font-bold text-gray-900 truncate">
            {currentEmail.subject}
          </span>
        </div>
      </div>

      {/* Email Content Area */}
      <div className="pt-4 min-h-[180px] text-xs sm:text-sm text-gray-800 whitespace-pre-wrap leading-relaxed relative font-sans">
        {currentEmail.body.slice(0, typedChars)}
        {phase === 'typing' && (
          <span className="inline-block w-0.5 h-4 bg-[#1D61F2] ml-0.5 animate-pulse vertical-middle" />
        )}
      </div>

      {/* Toast Overlay Banner when email is sent */}
      <AnimatePresence>
        {phase === 'sent_toast' && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute bottom-4 left-6 right-6 bg-white text-gray-900 px-4 py-3 rounded-xl shadow-xl border border-gray-200 flex items-center justify-between z-30"
          >
            <div className="flex items-center gap-2.5 text-xs font-semibold text-gray-800">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>Email dispatched & candidate timeline updated</span>
            </div>
            <span className="text-[10px] font-mono font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded">
              Sent
            </span>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

/* ============================================================================
   SECTION 4 ANIMATION: Everything under control (Avantty Control Center)
   ============================================================================ */
const Section4ControlCenterAnim: React.FC = () => {
  const [activeLogIdx, setActiveLogIdx] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveLogIdx((prev) => (prev + 1) % 5);
    }, 2200);
    return () => clearInterval(interval);
  }, []);

  const logs = [
    { time: '10:44:12 AM', actor: 'Recruiter Alex', action: 'Approved VP Engineering Candidate Shortlist', status: 'Approved' },
    { time: '10:44:05 AM', actor: 'AI Agent #2', action: 'Transcribed Zoom Meeting #98234105932', status: 'Completed' },
    { time: '10:43:52 AM', actor: 'Sync Engine', action: 'Synced Bullhorn ATS Candidate Record (ID: #4092)', status: 'Synced' },
    { time: '10:43:28 AM', actor: 'AI Agent #5', action: 'Sent Automated Client Follow-Up Email', status: 'Sent' },
    { time: '10:42:50 AM', actor: 'Sync Engine', action: 'Updated Salesforce CRM Opportunity Stage', status: 'Synced' }
  ];

  return (
    <div className="bg-white text-gray-900 border border-[#E8EAED] rounded-2xl p-5 sm:p-7 shadow-sm font-sans w-full max-w-4xl mx-auto overflow-hidden">
      {/* Top Bar Header */}
      <div className="flex flex-wrap items-center justify-between pb-4 mb-6 border-b border-gray-100 gap-3">
        <div className="flex items-center gap-3">
          <AvanttyLogo variant="circle" size="md" />
          <div>
            <h4 className="text-sm sm:text-base font-bold text-gray-900 tracking-tight">Avantty Executive Control Center</h4>
            <span className="text-xs font-mono text-gray-500">Live Organization & AI Oversight</span>
          </div>
        </div>
      </div>

      {/* Stats Summary Bar */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
        {[
          { label: 'Active AI Agents', value: '12 Running', icon: <Bot className="w-3.5 h-3.5 text-gray-500" /> },
          { label: 'Meetings Processed', value: '48 Today', icon: <Video className="w-3.5 h-3.5 text-gray-500" /> },
          { label: 'ATS/CRM Sync Rate', value: '100% Error-Free', icon: <Database className="w-3.5 h-3.5 text-gray-500" /> },
          { label: 'Hours Saved', value: '+142 hrs/wk', icon: <TrendingUp className="w-3.5 h-3.5 text-gray-500" /> },
        ].map((stat) => (
          <div key={stat.label} className="p-3 bg-gray-50 border border-gray-200 rounded-xl space-y-1">
            <div className="flex items-center justify-between text-[11px] text-gray-500 font-mono">
              <span>{stat.label}</span>
              {stat.icon}
            </div>
            <div className="text-xs sm:text-sm font-bold font-mono text-gray-900">{stat.value}</div>
          </div>
        ))}
      </div>

      {/* Main Grid: Real-time Activity Feed & System Logs */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {/* Left: Real-time Activity Stream (2 cols) */}
        <div className="lg:col-span-2 bg-gray-50/80 border border-gray-200 rounded-xl p-4 space-y-3">
          <div className="flex items-center justify-between border-b border-gray-200 pb-2">
            <span className="text-xs font-mono font-bold text-gray-700 uppercase tracking-wider flex items-center gap-2">
              <Activity className="w-3.5 h-3.5 text-gray-500" />
              Real-Time Audit Trail
            </span>
            <span className="text-[10px] font-mono text-gray-400">Live Updating</span>
          </div>

          <div className="space-y-2">
            {logs.map((log, idx) => {
              const isLatest = idx === activeLogIdx;
              return (
                <motion.div
                  key={log.time + idx}
                  animate={{ 
                    backgroundColor: isLatest ? '#FFFFFF' : '#F9FAFB',
                    borderColor: isLatest ? '#D1D5DB' : '#E5E7EB'
                  }}
                  className="p-2.5 rounded-lg border flex items-center justify-between text-xs transition-colors shadow-2xs"
                >
                  <div className="flex items-center gap-2.5 overflow-hidden">
                    <span className="font-mono text-[10px] text-gray-400 shrink-0">{log.time}</span>
                    <span className="font-bold text-gray-900 text-[11px] shrink-0">{log.actor}:</span>
                    <span className="text-gray-600 text-[11px] truncate">{log.action}</span>
                  </div>
                  <span className="text-[10px] font-mono font-bold text-gray-700 bg-gray-100 border border-gray-200 px-2 py-0.5 rounded shrink-0">
                    {log.status}
                  </span>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Right: Live Queue Status (1 col) */}
        <div className="bg-gray-50/80 border border-gray-200 rounded-xl p-4 space-y-3 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between border-b border-gray-200 pb-2 mb-3">
              <span className="text-xs font-mono font-bold text-gray-700 uppercase tracking-wider flex items-center gap-2">
                <Terminal className="w-3.5 h-3.5 text-gray-500" />
                Active Pipelines
              </span>
            </div>

            <div className="space-y-3 text-xs">
              <div>
                <div className="flex justify-between text-[11px] text-gray-600 mb-1">
                  <span>Zoom Call #108 Transcribing</span>
                  <span className="font-mono text-gray-900 font-bold">92%</span>
                </div>
                <div className="w-full bg-gray-200 h-1.5 rounded-full overflow-hidden">
                  <div className="bg-gray-800 h-full rounded-full w-[92%]" />
                </div>
              </div>

              <div>
                <div className="flex justify-between text-[11px] text-gray-600 mb-1">
                  <span>Bullhorn ATS Sync Queue</span>
                  <span className="font-mono text-gray-900 font-bold">100%</span>
                </div>
                <div className="w-full bg-gray-200 h-1.5 rounded-full overflow-hidden">
                  <div className="bg-gray-800 h-full rounded-full w-[100%]" />
                </div>
              </div>

              <div>
                <div className="flex justify-between text-[11px] text-gray-600 mb-1">
                  <span>Auto-Followup Dispatcher</span>
                  <span className="font-mono text-gray-900 font-bold">Active</span>
                </div>
                <div className="w-full bg-gray-200 h-1.5 rounded-full overflow-hidden">
                  <div className="bg-gray-800 h-full rounded-full w-[70%]" />
                </div>
              </div>
            </div>
          </div>

          <div className="pt-3 border-t border-gray-200 text-[10px] font-mono text-gray-400 flex items-center justify-between">
            <span>CEO Oversight Dashboard</span>
          </div>
        </div>
      </div>
    </div>
  );
};

/* ============================================================================
   MAIN COMPONENT: Vertical Storytelling Sections
   ============================================================================ */
export const WorkflowBlocksSection: React.FC = () => {
  return (
    <div id="workflow-story" className="bg-white text-[#202124] overflow-hidden">
      
      {/* SECTION 1: Every meeting documented */}
      <section id="automation-meeting" className="py-20 md:py-28 border-b border-[#E8EAED] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Text Left */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-5 space-y-4"
            >
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-[#202124] tracking-tight leading-tight">
                Every meeting documented.
              </h2>
              <p className="text-base sm:text-lg text-[#5F6368] leading-relaxed max-w-xl">
                Your AI joins every Zoom meeting, records the conversation, generates a transcript, creates an executive summary and extracts the information that matters. Nothing gets forgotten or written manually again.
              </p>
            </motion.div>

            {/* Animation Visual Right */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-7"
            >
              <Section1MeetingAnim />
            </motion.div>

          </div>
        </div>
      </section>

      {/* SECTION 2: Every update synchronized */}
      <section id="automation-sync" className="py-20 md:py-28 bg-[#F8F9FA] border-b border-[#E8EAED] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Visual Left on Desktop */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-7 order-2 lg:order-1"
            >
              <Section2SyncAnim />
            </motion.div>

            {/* Text Right */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-5 space-y-4 order-1 lg:order-2"
            >
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-[#202124] tracking-tight leading-tight">
                Every update synchronized.
              </h2>
              <p className="text-base sm:text-lg text-[#5F6368] leading-relaxed max-w-xl">
                The AI automatically updates your ATS and CRM after every meeting, email or recruiter action. No duplicate work. No manual data entry.
              </p>
            </motion.div>

          </div>
        </div>
      </section>

      {/* SECTION 3: Every follow-up handled */}
      <section id="automation-followup" className="py-20 md:py-28 border-b border-[#E8EAED] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Text Left */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-5 space-y-4"
            >
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-[#202124] tracking-tight leading-tight">
                Every follow-up handled.
              </h2>
              <p className="text-base sm:text-lg text-[#5F6368] leading-relaxed max-w-xl">
                The AI writes follow-up emails, schedules reminders and keeps every conversation moving, so recruiters never have to remember what comes next.
              </p>
            </motion.div>

            {/* Animation Visual Right */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-7"
            >
              <Section3EmailAnim />
            </motion.div>

          </div>
        </div>
      </section>

      {/* SECTION 4: Everything under control */}
      <section id="automation-control" className="py-20 md:py-28 bg-[#F8F9FA] text-[#202124] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-[#202124] tracking-tight leading-tight">
              Everything under control.
            </h2>
            <p className="text-base sm:text-lg text-[#5F6368] leading-relaxed max-w-2xl mx-auto">
              Track recruiters, AI agents, meetings, automations and system activity from one central control center. Every action is logged and fully traceable.
            </p>
          </div>

          {/* Full-width Control Center Dashboard Visual */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
          >
            <Section4ControlCenterAnim />
          </motion.div>
        </div>
      </section>

    </div>
  );
};
