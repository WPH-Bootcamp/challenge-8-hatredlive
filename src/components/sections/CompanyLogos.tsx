import React from 'react';
import ContainerImg from '../../assets/Company Section/Container.png';

interface CompanyLogosProps {
  theme: 'dark' | 'light';
}

const CompanyLogos: React.FC<CompanyLogosProps> = ({ theme }) => {
  const items = Array.from({ length: 3 }, () => ContainerImg);
  const edgeGradient = theme === 'dark' ? 'from-black/90' : 'from-white/100';

  return (
    <section className='mt-16 leading-[28px] md:leading-normal'>
      <div className='max-w-7xl mx-auto px-6'>
        <div className='flex flex-col items-center gap-2'>
          <h2
            className={`text-center text-base md:text-xl font-semibold ${theme === 'dark' ? 'text-white' : 'text-slate-950'}`}
          >
            Trusted by Global Innovators & Leading Brands
          </h2>
          <div className='relative w-full overflow-hidden'>
            <div className='marquee w-full'>
              <div className='marquee-track'>
                {items.concat(items).map((src, idx) => (
                  <div
                    key={idx}
                    className='logo-item flex-shrink-0 w-[200%] md:w-full flex items-center justify-center px-3 transition duration-500'
                  >
                    <img
                      src={src}
                      alt={`container-${idx}`}
                      className='w-full object-contain max-w-none md:object-cover md:max-w-none'
                    />
                  </div>
                ))}
              </div>
            </div>
            <div
              className={`pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r ${edgeGradient} to-transparent`}
            />
            <div
              className={`pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l ${edgeGradient} to-transparent`}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyLogos;
