import { CandidateEvent, ProblemCard, BenefitCard, Testimonial } from './types';

export const CANDIDATE_EVENTS: CandidateEvent[] = [
  {
    id: 'interview-completed',
    stageName: 'Interview Completed',
    triggerEvent: 'Consultant finishes a candidate meeting and logs the update',
    systemsToUpdate: [
      {
        id: 'ats',
        name: 'Internal Candidate Records',
        type: 'ats',
        status: 'completed',
        actionTaken: 'Candidate status updated to "Interview Completed" and interview feedback logged automatically.'
      },
      {
        id: 'crm',
        name: 'Client Progress Trackers',
        type: 'crm',
        status: 'completed',
        actionTaken: 'Hiring timeline updated, and next follow-up action prepared for the consultant.'
      },
      {
        id: 'tracker',
        name: 'Client Status Portals',
        type: 'tracker',
        status: 'completed',
        actionTaken: 'Secure client-facing summary updated with candidate progress and feedback indicators.'
      },
      {
        id: 'comms',
        name: 'Internal Advisory Team',
        type: 'comms',
        status: 'completed',
        actionTaken: 'Advisors and consultants notified: "Interview feedback logged. Next stages prepared."'
      }
    ]
  },
  {
    id: 'client-approved',
    stageName: 'Client Approved',
    triggerEvent: 'Client reviews and approves candidate for final round',
    systemsToUpdate: [
      {
        id: 'ats',
        name: 'Internal Candidate Records',
        type: 'ats',
        status: 'completed',
        actionTaken: 'Finalist record locked and background preparation documents prepared automatically.'
      },
      {
        id: 'crm',
        name: 'Client Progress Trackers',
        type: 'crm',
        status: 'completed',
        actionTaken: 'Placement probability adjusted and final meeting scheduling parameters calculated.'
      },
      {
        id: 'tracker',
        name: 'Client Status Portals',
        type: 'tracker',
        status: 'completed',
        actionTaken: 'Final panel meeting calendars auto-aligned and candidate preparation guidelines sent.'
      },
      {
        id: 'comms',
        name: 'Internal Advisory Team',
        type: 'comms',
        status: 'completed',
        actionTaken: 'Search delivery team notified: "Candidate approved for final round. Client calendars prepared."'
      }
    ]
  },
  {
    id: 'offer-accepted',
    stageName: 'Offer Accepted',
    triggerEvent: 'Candidate accepts placement and contract package',
    systemsToUpdate: [
      {
        id: 'ats',
        name: 'Internal Candidate Records',
        type: 'ats',
        status: 'completed',
        actionTaken: 'Candidate record updated to "Placed" and locked to secure client confidentiality.'
      },
      {
        id: 'crm',
        name: 'Client Progress Trackers',
        type: 'crm',
        status: 'completed',
        actionTaken: 'Placement fee advisory details finalized and onboarding parameters generated.'
      },
      {
        id: 'tracker',
        name: 'Client Status Portals',
        type: 'tracker',
        status: 'completed',
        actionTaken: 'Search tracker archived securely and final transition briefing materials dispatched.'
      },
      {
        id: 'comms',
        name: 'Internal Advisory Team',
        type: 'comms',
        status: 'completed',
        actionTaken: 'Celebration alert dispatched: "Placement finalized. Transition team briefed and onboarding underway."'
      }
    ]
  }
];

export const PROBLEMS: ProblemCard[] = [
  {
    id: 'problem-1',
    title: 'The Post-Interview Admin Burden',
    painPoint: 'After every single candidate interview, recruiters waste up to 45 minutes manually typing feedback, updating multiple lists, and preparing follow-up files.',
    impact: 'Managing partners and senior advisors waste valuable, client-facing hours on repetitive administrative work and manual entry.',
    solutionPreview: 'Continue recruiting. The administrative tasks are handled automatically in the background.'
  },
  {
    id: 'problem-2',
    title: 'Out-of-Sync Client Communications',
    painPoint: 'Clients expect real-time updates on active searches, but compiling status reports and tracking documents is often delayed by several days.',
    impact: 'Leads to client uncertainty, constant alignment calls, and extra communication overhead for busy search teams.',
    solutionPreview: 'Update client progress charts instantly as candidate stages change.'
  },
  {
    id: 'problem-3',
    title: 'Outdated Internal Information',
    painPoint: 'When a candidate’s status changes, team members often remain unaware, leading to outdated briefing sheets and duplicate outbounds.',
    impact: 'Consultants operate on stale information, causing communication friction and delayed placements.',
    solutionPreview: 'Keep every team member fully aligned automatically, without extra status meetings.'
  }
];

export const SOLUTIONS_STEPS = [
  {
    number: '01',
    title: 'Map your custom workflow',
    description: 'We align our background workflow solutions with your existing stages, calendars, and client tracking formats.'
  },
  {
    number: '02',
    title: 'Establish automatic updates',
    description: 'We configure background processes that listen for candidate status changes during your normal workday.'
  },
  {
    number: '03',
    title: 'Recruiters continue working normally',
    description: 'Your consultants complete interviews and log feedback exactly as they always have. No new software to learn.'
  },
  {
    number: '04',
    title: 'The administrative work disappears',
    description: 'The moment a status change is recorded, all candidate records, client progress portals, and internal team sheets are updated instantly.'
  }
];

export const BENEFITS: BenefitCard[] = [
  {
    id: 'benefit-1',
    title: 'Zero Duplicate Work',
    description: 'Consultants and advisors never have to copy-paste notes, rewrite feedback, or update different files manually.',
    metric: '100%',
    metricLabel: 'Administrative Effort Saved',
    colorClass: 'text-[#4285F4] bg-[#4285F4]/5'
  },
  {
    id: 'benefit-2',
    title: 'Delighted Clients',
    description: 'Clients receive immediate progress updates and see real-time hiring stage movement without needing to ask.',
    metric: 'Instant',
    metricLabel: 'Client Progress Updates',
    colorClass: 'text-[#34A853] bg-[#34A853]/5'
  },
  {
    id: 'benefit-3',
    title: 'Consistent Internal Data',
    description: 'Every internal record is kept fully aligned so your team is always working with correct candidate information.',
    metric: '100%',
    metricLabel: 'Search Accuracy',
    colorClass: 'text-[#FBBC05] bg-[#FBBC05]/5'
  },
  {
    id: 'benefit-4',
    title: 'Unlocked Fee Capacity',
    description: 'Recovered hours are redirected to active search assignments, allowing partners to close more retainers each year.',
    metric: '+3',
    metricLabel: 'Extra Placements Completed',
    colorClass: 'text-[#EA4335] bg-[#EA4335]/5'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't-1',
    quote: 'Avantty completely changed how we manage our placements. Previously, my partners spent Friday afternoons updating candidate records and writing summary emails. Now, they finish the interview and continue recruiting. The admin just disappears.',
    author: 'Eleanor Vance',
    role: 'Managing Partner',
    firm: 'Vance & Sterling Executive Advisory',
    location: 'London & Geneva',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=150&h=150&q=80'
  },
  {
    id: 't-2',
    quote: 'We operate a boutique firm where relationship-building is everything. We cannot afford to lose hours to copy-pasting notes. Avantty handles our internal workflow flawlessly behind the scenes.',
    author: 'Dr. Marcus Thorne',
    role: 'Founder & Senior Partner',
    firm: 'Thorne Executive Partners',
    location: 'Palo Alto',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=150&h=150&q=80'
  },
  {
    id: 't-3',
    quote: 'Our client satisfaction metrics soared after implementing Avantty. Clients love seeing candidate progress change in real-time. It projects an image of absolute efficiency and premium caliber.',
    author: 'Siddharth Mehta',
    role: 'Head of Financial Services Search',
    firm: 'Clarion Global Partners',
    location: 'Singapore',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=150&h=150&q=80'
  }
];

export const TRUST_COMPANIES = [
  { name: 'Korn Ferry Partners', logoText: 'KORN FERRY' },
  { name: 'Heidrick & Struggles Partners', logoText: 'HEIDRICK & STRUGGLES' },
  { name: 'Spencer Stuart Partners', logoText: 'SpencerStuart' },
  { name: 'Egon Zehnder Partners', logoText: 'EgonZehnder' },
  { name: 'Russell Reynolds Partners', logoText: 'RUSSELL REYNOLDS' }
];

export const FAQS = [
  {
    question: 'Which tools does Avantty work with?',
    answer: 'Avantty works seamlessly with all major recruitment software, spreadsheets, and calendar platforms. We connect with your existing tools behind the scenes, without replacing any software or requiring you to learn a new interface.'
  },
  {
    question: 'How does Avantty guarantee confidentiality?',
    answer: 'Avantty was built from the ground up for high-end executive search. We employ strict enterprise-grade security protocols to protect your proprietary candidate profiles and client data. We never share or sell any information.'
  },
  {
    question: 'How long does it take to get started?',
    answer: 'Our specialist team handles all configuration for you. We typically map your candidate stages and activate your background workflow updates within 7 to 10 business days.'
  },
  {
    question: 'Will my team need to change how they work?',
    answer: 'No. Avantty is designed to run silently in the background. Your consultants continue to use their current tools, calendars, or email exactly as they always have. We monitor updates and automate the administrative work behind the scenes.'
  }
];
