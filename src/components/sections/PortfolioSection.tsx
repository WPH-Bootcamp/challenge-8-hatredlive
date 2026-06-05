import React from 'react';
import Portfolio1Image from '../../assets/Portofolio Card/Portofolio 1.png';
import Portfolio2Image from '../../assets/Portofolio Card/Portofolio 2.png';
import Portfolio3Image from '../../assets/Portofolio Card/Portofolio 3.png';

interface PortfolioItem {
  title: string;
  category: string;
  image: string;
}

const portfolioItems: PortfolioItem[] = [
  {
    title: 'Portofolio 1',
    category: 'Landing Page',
    image: Portfolio1Image,
  },
  {
    title: 'Portofolio 2',
    category: 'Landing Page',
    image: Portfolio2Image,
  },
  {
    title: 'Portofolio 3',
    category: 'Landing Page',
    image: Portfolio3Image,
  },
];

interface PortfolioSectionProps {
  theme: 'dark' | 'light';
}

const PortfolioSection: React.FC<PortfolioSectionProps> = ({ theme }) => {
  const textColorClass = theme === 'dark' ? 'text-white' : 'text-slate-950';

  return (
    <section
      className={`py-16 md:py-24 leading-[28px] md:leading-normal ${theme === 'dark' ? 'bg-black' : 'bg-white'}`}
    >
      <div className='max-w-7xl mx-auto px-6'>
        <div className='mb-12 text-center'>
          <h2 className={`text-3xl md:text-3xl font-bold ${textColorClass}`}>
            From Vision to Launch! Projects We're Proud Of
          </h2>
          <p className='mt-3 mx-auto text-base text-[var(--neutral-400)] max-w-2xl'>
            Take a closer look at our recent work powering startups,
            enterprises, and everything in between.
          </p>
        </div>

        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
          {portfolioItems.map((item, index) => (
            <div
              key={index}
              className='group relative cursor-pointer rounded-2xl transition-all duration-300 ease-in-out hover:-translate-y-0.5 hover:shadow-[0_20px_60px_-30px_rgba(255,108,55,0.35)]'
            >
              {}
              <div className='neon-border-card relative overflow-hidden rounded-2xl aspect-square mb-5 transition-all duration-500'>
                <div className='h-full w-full overflow-hidden rounded-2xl bg-[#050A10]'>
                  <img
                    src={item.image}
                    alt={item.title}
                    className='h-full w-full object-cover'
                  />
                </div>
              </div>

              {}
              <div>
                <p className='text-sm font-semibold text-[#ff6c37] mb-1'>
                  {item.category}
                </p>
                <h3
                  className={`text-base font-bold ${textColorClass} transition-colors duration-300`}
                >
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
