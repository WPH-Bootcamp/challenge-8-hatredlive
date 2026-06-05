import React, { useState } from 'react';

interface ProcessItem {
  title: string;
  description: string;
}

const processItems: ProcessItem[] = [
  {
    title: 'Discovery & Consultation',
    description: 'Understand your needs & goals',
  },
  {
    title: 'Planning & Strategy',
    description: 'Build a clear, scalable roadmap',
  },
  {
    title: 'Design & Prototyping',
    description: 'Craft UX that converts',
  },
  {
    title: 'Development & Implementation',
    description: 'Deliver with Speed & Precision',
  },
  {
    title: 'Testing & Optimization',
    description: 'Ensure quality at every step',
  },
  {
    title: 'Launch & Growth',
    description: 'Scale, Measure & Improve Continuously',
  },
];

interface ProcessSectionProps {
  theme: 'dark' | 'light';
}

const ProcessSection: React.FC<ProcessSectionProps> = ({ theme }) => {
  const [expandedIndices, setExpandedIndices] = useState<Set<number>>(
    new Set()
  );

  const toggleExpand = (index: number) => {
    const newIndices = new Set(expandedIndices);
    if (newIndices.has(index)) {
      newIndices.delete(index);
    } else {
      newIndices.add(index);
    }
    setExpandedIndices(newIndices);
  };

  const cardBgClass =
    theme === 'dark'
      ? 'bg-[#0A0D12] border-gray-700/20'
      : 'bg-[#FAFAFA] border-neutral-200';

  const textColorClass = theme === 'dark' ? 'text-white' : 'text-slate-950';
  const descriptionColorClass =
    theme === 'dark' ? 'text-gray-400' : 'text-gray-600';

  return (
    <section className='mt-16 leading-[28px] md:leading-normal'>
      <div className='max-w-4xl mx-auto px-6'>
        <div className='text-center mb-12'>
          <h2 className={`text-3xl md:text-3xl font-bold ${textColorClass}`}>
            Our Process
          </h2>
          <p className='mx-auto mt-3 text-base md:text-base text-[var(--neutral-400)] max-w-2xl'>
            Clear steps. Smart execution. Results you can count on.
          </p>
        </div>

        {}
        <div className='relative'>
          {}
          <div
            className='process-line absolute top-6 bottom-6 w-px left-6 md:left-1/2 md:-translate-x-1/2 transform opacity-100'
            style={{
              backgroundColor: '#252B37',
              backgroundImage: 'none',
              opacity: 1,
            }}
          />

          {}
          <div className='space-y-10'>
            {processItems.map((item, index) => {
              const isLeft = index % 2 === 0;
              const isExpanded = expandedIndices.has(index);

              const cardButton = (
                <button
                  onClick={() => toggleExpand(index)}
                  className={`w-full max-w-[420px] text-left p-4 border rounded-xl transition-all duration-300 ease-in-out transform-gpu overflow-hidden ${cardBgClass} ${
                    isExpanded
                      ? 'border-[var(--brand-orange)]/60 scale-[1.01] shadow-[0_18px_60px_-30px_rgba(255,108,55,0.85)]'
                      : 'hover:-translate-y-0.5 hover:shadow-lg'
                  }`}
                >
                  <div className='flex items-start justify-between'>
                    <div className='flex-1'>
                      <h3 className={`font-semibold ${textColorClass}`}>
                        {item.title}
                      </h3>
                      <div
                        className={`max-h-0 opacity-0 overflow-hidden transition-all duration-300 ease-in-out ${
                          isExpanded ? 'max-h-40 opacity-100 mt-4' : ''
                        }`}
                      >
                        <p className={`text-sm ${descriptionColorClass}`}>
                          {item.description}
                        </p>
                      </div>
                    </div>
                    <svg
                      width='20'
                      height='20'
                      viewBox='0 0 24 24'
                      fill='none'
                      stroke='currentColor'
                      strokeWidth='2'
                      className={`transition-transform duration-300 ${
                        isExpanded ? 'rotate-180' : ''
                      } ${theme === 'dark' ? 'text-white' : 'text-slate-950'} flex-shrink-0 ml-4 mt-1`}
                    >
                      <polyline points='6 9 12 15 18 9'></polyline>
                    </svg>
                  </div>
                </button>
              );

              return (
                <div key={index} className='relative'>
                  <div className='flex items-start gap-4 md:hidden'>
                    <div className='relative flex-none flex items-center justify-center w-12 h-12 rounded-full bg-[var(--brand-orange)] text-white font-bold text-lg shadow-lg z-10'>
                      {index + 1}
                    </div>
                    {cardButton}
                  </div>

                  <div className='hidden md:grid md:grid-cols-[1fr_auto_1fr] items-center gap-6'>
                    {isLeft ? (
                      <div className='flex justify-end'>{cardButton}</div>
                    ) : (
                      <div className='hidden md:block' />
                    )}

                    <div className='relative flex justify-center'>
                      <div className='flex-none w-12 h-12 rounded-full bg-[var(--brand-orange)] flex items-center justify-center text-white font-bold text-lg relative z-10 shadow-lg'>
                        {index + 1}
                      </div>
                    </div>

                    {isLeft ? (
                      <div className='hidden md:block' />
                    ) : (
                      <div className='flex justify-start'>{cardButton}</div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <style>{`
        .process-line {
          background-color: #252B37 !important;
          background-image: none !important;
          opacity: 1 !important;
        }
      `}</style>
    </section>
  );
};

export default ProcessSection;
