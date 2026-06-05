import React, { useState } from 'react';
import ConsultationImage from '../../assets/Need Help Start Here/Consultation Image.png';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  theme: 'dark' | 'light';
}

const FAQSection: React.FC<FAQSectionProps> = ({ theme }) => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);
  const isDark = theme === 'dark';
  const textColorClass = isDark ? 'text-white' : 'text-slate-950';
  const subtitleColorClass = isDark ? 'text-gray-400' : 'text-slate-500';
  const borderColorClass = isDark ? 'border-white/10' : 'border-slate-200';
  const answerColorClass = isDark ? 'text-gray-300' : 'text-slate-700';

  const faqItems: FAQItem[] = [
    {
      question: 'What services do you offer?',
      answer:
        'We provide custom web/app development, cloud solutions, UX/UI design, and more.',
    },
    {
      question: 'How do I know if this is right for my business?',
      answer:
        "Book a free consult — we'll assess your goals and recommend the right approach.",
    },
    {
      question: 'How much does a project cost?',
      answer:
        "Every project is different. Let's talk about your needs to get a tailored estimate.",
    },
    {
      question: 'How long does it take?',
      answer:
        'Depends on scope — but we always prioritize quality and deadlines.',
    },
    {
      question: 'Can I start with a small project first?',
      answer: 'Absolutely. We often begin with MVPs or pilot projects.',
    },
  ];

  return (
    <section
      className={`py-16 md:py-24 leading-[28px] md:leading-normal transition-colors duration-500 ease-in-out ${isDark ? 'bg-black' : 'bg-white'}`}
    >
      <div className='max-w-7xl mx-auto px-6'>
        <div className='mb-10 grid gap-6 lg:grid-cols-[minmax(0,1fr)_360px] items-end'>
          <div>
            <h2
              className={`text-3xl md:text-3xl font-bold leading-tight transition-colors duration-500 ease-in-out ${textColorClass}`}
            >
              Need Help? Start <span className='md:block'>Here.</span>
            </h2>
          </div>
          <div className='flex justify-start md:justify-end'>
            <p
              className={`text-base md:text-base leading-tight text-left md:text-right transition-colors duration-500 ease-in-out ${subtitleColorClass}`}
            >
              Everything you need{' '}
              <span className='md:block'>to know — all in one place.</span>
            </p>
          </div>
        </div>

        <div className='mb-10 border-b border-white/10' />

        <div className='grid gap-10 lg:grid-cols-[minmax(0,1fr)_360px] items-start'>
          <div>
            <div className='space-y-4'>
              {faqItems.map((item, index) => {
                const isExpanded = expandedIndex === index;

                return (
                  <div
                    key={index}
                    className={`border-b ${borderColorClass} transition-colors duration-500 ease-in-out`}
                  >
                    <button
                      onClick={() =>
                        setExpandedIndex(isExpanded ? null : index)
                      }
                      className='w-full py-5 flex items-center justify-between gap-4 text-left group'
                    >
                      <h3
                        className={`text-lg md:text-xl font-semibold transition-colors duration-500 ease-in-out ${textColorClass}`}
                      >
                        {item.question}
                      </h3>
                      <span
                        className={`text-2xl font-bold transition-transform duration-300 ease-in-out ${textColorClass}`}
                      >
                        {isExpanded ? '−' : '+'}
                      </span>
                    </button>
                    <div
                      className={`max-h-0 opacity-0 overflow-hidden transition-all duration-300 ease-in-out ${
                        isExpanded ? 'max-h-40 opacity-100 mt-2' : ''
                      }`}
                    >
                      <p
                        className={`${answerColorClass} text-sm md:text-base leading-7 font-medium pb-3`}
                      >
                        {item.answer}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className='space-y-6'>
            <div className='self-stretch rounded-[2rem] bg-[#ff6c37] p-8 text-white shadow-[0_24px_80px_rgba(255,108,55,0.3)]'>
              <div className='flex h-full flex-col justify-between'>
                <div>
                  <h3 className='text-3xl font-bold leading-tight'>
                    Let’s talk it through
                  </h3>
                  <p className='mt-4 text-base font-semibold leading-6 text-white/90'>
                    book a free consultation with our team.
                  </p>
                  <div className='mt-8 overflow-hidden rounded-[1.5rem]'>
                    <img
                      src={ConsultationImage}
                      alt='Consultation meeting'
                      className='h-full w-full object-cover'
                    />
                  </div>
                </div>
                <button
                  type='button'
                  className={`mt-6 w-full rounded-full py-3 text-sm font-semibold shadow-lg transition ${isDark ? 'bg-white text-black hover:bg-slate-100' : 'bg-black text-white hover:brightness-110'}`}
                >
                  Free Consultation
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
