import React from 'react';
import WebDevIcon from '../../assets/Smart IT Icon/Property 1=Web Development.png';
import MobileAppIcon from '../../assets/Smart IT Icon/Property 1=Mobile App Development.png';
import UIUXIcon from '../../assets/Smart IT Icon/Property 1=UI, Property 2=UX Design.png';
import CloudSolutionsIcon from '../../assets/Smart IT Icon/Property 1=Cloud Solutions.png';
import SoftwareDevIcon from '../../assets/Smart IT Icon/Property 1=Software Development.png';
import ITInfraIcon from '../../assets/Smart IT Icon/Property 1=IT Infrastructure.png';
import CybersecurityIcon from '../../assets/Smart IT Icon/Property 1=Cybersecurity Services.png';
import QAIcon from '../../assets/Smart IT Icon/Property 1=QA Solutions.png';
import ITConsultingIcon from '../../assets/Smart IT Icon/Property 1=IT Consulting & Support.png';

interface ITSolution {
  title: string;
  description: string;
  icon: string;
}

const solutions: ITSolution[] = [
  {
    title: 'Web Development',
    description: 'Build fast, scalable, and SEO-friendly websites.',
    icon: WebDevIcon,
  },
  {
    title: 'Mobile App Development',
    description: 'Native & cross-platform apps tailored to user needs.',
    icon: MobileAppIcon,
  },
  {
    title: 'UI/UX Design',
    description: 'Design users with intuitive and beautiful interfaces.',
    icon: UIUXIcon,
  },
  {
    title: 'Cloud Solutions',
    description: 'Secure and flexible cloud infrastructure for your growth.',
    icon: CloudSolutionsIcon,
  },
  {
    title: 'Software Development',
    description: 'Custom solutions built around your business logic.',
    icon: SoftwareDevIcon,
  },
  {
    title: 'IT Infrastructure',
    description: 'Scale your backend with reliable tech foundations.',
    icon: ITInfraIcon,
  },
  {
    title: 'Cybersecurity Services',
    description: 'Stay protected with enterprise-grade security.',
    icon: CybersecurityIcon,
  },
  {
    title: 'QA Solutions',
    description: 'Ensure performance with rigorous testing frameworks.',
    icon: QAIcon,
  },
  {
    title: 'IT Consulting & Support',
    description: 'Make smarter tech decisions with expert guidance.',
    icon: ITConsultingIcon,
  },
];

interface ITSolutionsSectionProps {
  theme: 'dark' | 'light';
}

const ITSolutionsSection: React.FC<ITSolutionsSectionProps> = ({ theme }) => {
  const textColorClass = theme === 'dark' ? 'text-white' : 'text-slate-950';
  const descriptionColorClass =
    theme === 'dark' ? 'text-gray-400' : 'text-gray-600';

  return (
    <section className='mt-16 leading-[28px] md:leading-normal'>
      <div className='max-w-7xl mx-auto px-6 text-center'>
        <h2 className={`text-3xl md:text-3xl font-bold ${textColorClass}`}>
          Smart IT Solutions That Grow With You
        </h2>
        <p className='mt-3 text-base md:text-base text-[var(--neutral-400)]'>
          Tailored tech to boost efficiency, security, and results.
        </p>

        <div className='mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
          {solutions.map((solution, index) => (
            <div
              key={index}
              className='group relative overflow-visible rounded-3xl transition-all duration-300 ease-in-out hover:-translate-y-0.5 hover:shadow-[0_20px_60px_-30px_rgba(255,108,55,0.45)]'
            >
              <div
                className='neon-border-card relative overflow-visible rounded-3xl'
                style={
                  {
                    '--card-bg': theme === 'dark' ? '#0A0D12' : '#FFFFFF',
                  } as React.CSSProperties
                }
              >
                <div className='relative rounded-3xl p-3 pt-10 pb-3 h-[150px]'>
                  <div className='absolute -top-6 left-3 z-10 h-14 w-14 overflow-visible'>
                    <img
                      src={solution.icon}
                      alt={solution.title}
                      className='h-full w-full object-contain'
                    />
                  </div>

                  <div className='text-left ml-1 pt-1'>
                    <h3 className={`text-lg font-semibold ${textColorClass}`}>
                      {solution.title}
                    </h3>
                    <p
                      className={`mt-3 text-sm leading-relaxed ${descriptionColorClass}`}
                    >
                      {solution.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ITSolutionsSection;
