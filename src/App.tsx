

import { useEffect, useState } from 'react';
import Navbar from './components/layout/Navbar';
import HeroSection from './components/sections/HeroSection';
import CompanyLogos from './components/sections/CompanyLogos';
import StatsSection from './components/sections/StatsSection';
import ProcessSection from './components/sections/ProcessSection';
import ITSolutionsSection from './components/sections/ITSolutionsSection';
import IndustrySection from './components/sections/IndustrySection';
import PortfolioSection from './components/sections/PortfolioSection';
import TestimonialSection from './components/sections/TestimonialSection';
import FAQSection from './components/sections/FAQSection';
import CTASection from './components/sections/CTASection';
import FooterSection from './components/sections/FooterSection';

function App() {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');

  useEffect(() => {
    document.body.style.background = theme === 'dark' ? '#000000' : '#fff';
  }, [theme]);

  return (
    <div
      className={`min-h-screen ${theme === 'dark' ? 'bg-black text-white' : 'bg-white text-slate-950'}`}
    >
      <Navbar theme={theme} setTheme={setTheme} />

      <main>
        <HeroSection theme={theme} />
        <CompanyLogos theme={theme} />
        <StatsSection theme={theme} />
        <ProcessSection theme={theme} />
        <ITSolutionsSection theme={theme} />
        <IndustrySection theme={theme} />
        <PortfolioSection theme={theme} />
        <TestimonialSection theme={theme} />
        <FAQSection theme={theme} />
        <CTASection theme={theme} />
        <FooterSection theme={theme} />
      </main>
    </div>
  );
}

export default App;
