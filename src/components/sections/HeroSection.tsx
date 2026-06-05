import React from 'react';
import HeroDark from '../../assets/Image Hero/Dark Mode.png';
import HeroLight from '../../assets/Image Hero/Light Mode.png';

interface HeroProps {
  theme: 'dark' | 'light';
}

const HeroSection: React.FC<HeroProps> = ({ theme }) => {
  const imgSrc = theme === 'dark' ? HeroDark : HeroLight;
  const headlineColor = theme === 'dark' ? 'text-white' : 'text-slate-950';
  const paragraphColor = theme === 'dark' ? 'text-white' : 'text-slate-950';

  return (
    <section className='pt-24 leading-[28px] md:leading-normal'>
      <div className='max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-12'>
        <div className='w-full lg:w-1/2 text-left'>
          <h1
            className={`text-4xl md:text-5xl font-extrabold ${headlineColor}`}
          >
            Your Tech Partner for
            <span className='block text-[var(--brand-orange)]'>
              Smarter Growth
            </span>
          </h1>
          <p
            className={`mt-4 text-base md:text-lg ${paragraphColor} max-w-lg mx-0 leading-7`}
          >
            We deliver tailored IT solutions to help you scale with speed and
            confidence.
          </p>
          <div className='mt-6 flex items-center justify-start w-full'>
            <button
              className='w-full md:inline-flex md:w-auto h-12 min-w-[150px] items-center justify-center rounded-full bg-[var(--brand-orange)] px-5 text-sm font-semibold text-white shadow-[0_18px_60px_rgba(255,108,55,0.24)] transition hover:brightness-110'
              aria-label="Let's Talk"
            >
              Let's Talk
            </button>
          </div>
        </div>

        <div className='w-full lg:w-1/2 flex justify-center lg:justify-end'>
          <img
            src={imgSrc}
            alt='Hero'
            className='w-full max-w-none md:max-w-[560px] rounded-[2rem]'
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
