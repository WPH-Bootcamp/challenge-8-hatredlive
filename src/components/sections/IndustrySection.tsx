import React, { useEffect, useState } from 'react';
import FintechImage from '../../assets/Industry Section/Fintech.png';
import ECommerceImage from '../../assets/Industry Section/E-Commerce.png';
import HealthcareImage from '../../assets/Industry Section/Healthcare.png';

interface IndustryTab {
  name: string;
  description: string;
  image: string;
}

const industryTabs: IndustryTab[] = [
  {
    name: 'Fintech',
    description:
      'We build secure, scalable, and compliant fintech solutions — from digital wallets to core banking systems — tailored to modern financial needs.',
    image: FintechImage,
  },
  {
    name: 'E-Commerce',
    description:
      'Boost your online sales with fast, reliable platforms designed for seamless shopping experiences, inventory management, and payment integration.',
    image: ECommerceImage,
  },
  {
    name: 'Healthcare',
    description:
      'Empowering healthcare providers with digital solutions that improve patient care, ensure data privacy, and streamline operational workflows.',
    image: HealthcareImage,
  },
];

interface IndustrySectionProps {
  theme: 'dark' | 'light';
}

const IndustrySection: React.FC<IndustrySectionProps> = ({ theme }) => {
  const [activeTab, setActiveTab] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveTab((prev) => (prev + 1) % industryTabs.length);
    }, 10000);
    return () => window.clearInterval(interval);
  }, []);

  const textColorClass = theme === 'dark' ? 'text-white' : 'text-slate-950';
  const descriptionColorClass =
    theme === 'dark' ? 'text-gray-400' : 'text-gray-600';
  const sectionBgClass = theme === 'dark' ? 'bg-black' : 'bg-white';

  const currentIndustry = industryTabs[activeTab];

  return (
    <section
      className={`py-16 md:py-24 leading-[28px] md:leading-normal ${sectionBgClass}`}
    >
      <div className='max-w-7xl mx-auto px-6 leading-[28px]'>
        <div className='mb-4 md:mb-12'>
          <h2 className={`text-3xl md:text-3xl font-bold ${textColorClass}`}>
            Built for Your Industry
          </h2>
          <p className='mt-3 text-base text-[var(--neutral-400)]'>
            We've helped companies across industries launch smarter, faster, and
            more securely.
          </p>
        </div>

        <div className='grid gap-6 lg:gap-10 lg:grid-cols-[240px_1fr] items-start'>
          <div className='space-y-2 pt-2 lg:pt-0'>
            {industryTabs.map((industry, idx) => (
              <button
                key={industry.name}
                type='button'
                onClick={() => setActiveTab(idx)}
                className={`flex items-center gap-3 rounded-full px-5 py-3 text-left transition-all duration-300 ease-out ${
                  activeTab === idx
                    ? theme === 'dark'
                      ? 'text-white'
                      : 'text-black'
                    : theme === 'dark'
                      ? 'text-gray-500 hover:text-white'
                      : 'text-gray-500 hover:text-black'
                }`}
              >
                <span
                  className={`block h-8 w-1 -ml-5 rounded-full transition-colors duration-300 ${
                    activeTab === idx ? 'bg-[#ff6c37]' : 'bg-gray-600'
                  }`}
                />
                <span className='font-semibold'>{industry.name}</span>
              </button>
            ))}
          </div>

          <div className='space-y-6'>
            <div className='space-y-6 animate-industry-swap' key={activeTab}>
              <p
                className={`text-base leading-[28px] ${descriptionColorClass}`}
              >
                {currentIndustry.description}
              </p>

              <div className='relative overflow-hidden rounded-[2rem]'>
                <img
                  src={currentIndustry.image}
                  alt={`${currentIndustry.name} illustration`}
                  className='h-full w-full object-cover'
                />
                <div className='pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,108,55,0.18),transparent_35%),radial-gradient(circle_at_bottom_left,rgba(0,135,255,0.12),transparent_20%)]' />
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes industrySwap {
          from {
            opacity: 0;
            transform: translateY(16px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-industry-swap {
          animation: industrySwap 0.34s ease-out;
        }
      `}</style>
    </section>
  );
};

export default IndustrySection;
