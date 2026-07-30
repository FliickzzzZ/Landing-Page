export interface TargetSystem {
  id: string;
  name: string;
  type: 'ats' | 'crm' | 'tracker' | 'comms';
  status: 'idle' | 'syncing' | 'completed';
  actionTaken: string;
}

export interface CandidateEvent {
  id: string;
  stageName: string;
  triggerEvent: string;
  systemsToUpdate: TargetSystem[];
}

export interface ProblemCard {
  id: string;
  title: string;
  painPoint: string;
  impact: string;
  solutionPreview: string;
}

export interface BenefitCard {
  id: string;
  title: string;
  description: string;
  metric: string;
  metricLabel: string;
  colorClass: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  firm: string;
  location: string;
  image: string;
}

export interface DemoRequest {
  firstName: string;
  lastName: string;
  workEmail: string;
  companyName: string;
  firmSize: string;
  focusIndustry: string;
  message?: string;
}

export interface ContactMessage {
  name: string;
  email: string;
  firmName: string;
  message: string;
}
