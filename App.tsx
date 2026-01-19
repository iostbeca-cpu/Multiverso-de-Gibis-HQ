import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import LibraryPreview from './components/LibraryPreview';
import VideoShowcase from './components/VideoShowcase';
import Features from './components/Features';
import BonusSection from './components/BonusSection';
import PriceSection from './components/PriceSection';
import Trust from './components/Trust';
import FAQ from './components/FAQ';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';
import PurchaseNotification from './components/PurchaseNotification';
import CookieConsent from './components/CookieConsent';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-50 font-sans selection:bg-yellow-500 selection:text-black">
      <Header />
      <main>
        <Hero />
        <LibraryPreview />
        <VideoShowcase />
        <Features />
        <BonusSection />
        <PriceSection />
        <Trust />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
      <PurchaseNotification />
      <CookieConsent />
    </div>
  );
};

export default App;