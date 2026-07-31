import { useState, useEffect } from 'react';
import { Analytics } from '@vercel/analytics/react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ManuallySection } from './components/ManuallySection';
import { WithAvanttySection } from './components/WithAvanttySection';
import { IsInstantSection } from './components/IsInstantSection';
import { TargetsDefinedSection } from './components/TargetsDefinedSection';
import { AutonomousFollowUpsSection } from './components/AutonomousFollowUpsSection';
import { WhyUsSection } from './components/WhyUsSection';
import { FaqSection } from './components/FaqSection';
import { BookDemoSection } from './components/BookDemoSection';
import { Footer } from './components/Footer';
import { DemoModal } from './components/DemoModal';
import { PrivacyPage } from './components/PrivacyPage';
import { TermsPage } from './components/TermsPage';

export default function App() {
  const [isDemoOpen, setIsDemoOpen] = useState(false);
  const [route, setRoute] = useState<string>(() => {
    return window.location.pathname;
  });

  useEffect(() => {
    const handlePopState = () => {
      setRoute(window.location.pathname);
    };
    window.addEventListener('popstate', handlePopState);
    return () => {
      window.removeEventListener('popstate', handlePopState);
    };
  }, []);

  const navigateTo = (path: string) => {
    window.history.pushState({}, '', path);
    setRoute(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigateAndScroll = (elementId: string) => {
    if (window.location.pathname !== '/') {
      window.history.pushState({}, '', '/');
      setRoute('/');
      setTimeout(() => {
        const el = document.getElementById(elementId);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }, 150);
    } else {
      const el = document.getElementById(elementId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const handleOpenDemo = () => setIsDemoOpen(true);
  const handleCloseDemo = () => setIsDemoOpen(false);

  return (
    <div className="relative min-h-screen bg-white text-[#202124] antialiased">
      
      {/* Structured Site Modules */}
      <div className="relative z-10 flex flex-col min-h-screen overflow-x-hidden bg-white">
        
        {/* Sticky Header */}
        <Header 
          onOpenDemo={handleOpenDemo} 
          onNavigate={navigateTo} 
          onNavigateAndScroll={navigateAndScroll} 
        />

        {/* Route Render logic */}
        {route === '/privacy' ? (
          <main className="flex-grow pt-24 pb-16 overflow-y-auto">
            <PrivacyPage />
          </main>
        ) : route === '/terms' ? (
          <main className="flex-grow pt-24 pb-16 overflow-y-auto">
            <TermsPage />
          </main>
        ) : (
          /* Main Visual Sections */
          <main className="flex-grow flex flex-col">
            <Hero onOpenDemo={handleOpenDemo} />
            <ManuallySection />
            <WithAvanttySection />
            <IsInstantSection />
            <TargetsDefinedSection />
            <AutonomousFollowUpsSection />
            <WhyUsSection />
            <FaqSection />
            <BookDemoSection onOpenDemo={handleOpenDemo} />
          </main>
        )}

        {/* Footing section */}
        <Footer 
          onNavigate={navigateTo} 
          onNavigateAndScroll={navigateAndScroll} 
        />

      </div>

      {/* Modular Multi-Step Scheduling Wizard Modal Dialog */}
      <DemoModal isOpen={isDemoOpen} onClose={handleCloseDemo} />

      {/* Vercel Web Analytics */}
      <Analytics />
    </div>
  );
}
