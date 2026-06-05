import React, { useEffect, useRef, useState } from 'react';

interface StatItem {
  label: string;
  value: number;
  suffix?: string;
}

const stats: StatItem[] = [
  { label: 'Projects Delivered On Time', value: 50, suffix: '+' },
  { label: 'Years of Experience', value: 5, suffix: '+' },
  { label: 'Industry Awards Won', value: 10, suffix: '+' },
  { label: 'Client Satisfaction Rate', value: 100, suffix: '%' },
];

const StatsSection: React.FC<{ theme: 'dark' | 'light' }> = ({ theme }) => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const rafRef = useRef<number | null>(null);
  const [counts, setCounts] = useState<number[]>(stats.map(() => 0));
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsActive(entry.isIntersecting);
      },
      { threshold: 0.4 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isActive) {
      const id = requestAnimationFrame(() => setCounts(stats.map(() => 0)));
      return () => cancelAnimationFrame(id);
    }

    const duration = 1400;
    const startTime = performance.now();

    const animate = (time: number) => {
      const progress = Math.min((time - startTime) / duration, 1);
      setCounts(stats.map((stat) => Math.floor(progress * stat.value)));
      if (progress < 1) {
        rafRef.current = requestAnimationFrame(animate);
      }
    };

    rafRef.current = requestAnimationFrame(animate);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [isActive]);

  const cardBgClass =
    theme === 'dark'
      ? 'bg-[#0A0D12] border-slate-800/50'
      : 'bg-[#FAFAFA] border-neutral-200';
  const textColorClass = theme === 'dark' ? 'text-white' : 'text-slate-950';

  return (
    <section
      ref={sectionRef}
      className='mt-16 leading-[28px] md:leading-normal'
    >
      <div className='max-w-7xl mx-auto px-6 text-center'>
        <h2 className={`text-3xl md:text-3xl font-bold ${textColorClass}`}>
          End-to-End IT Solutions That Drive Results
        </h2>
        <p className='mt-3 text-base md:text-sm text-[var(--neutral-400)]'>
          From strategy to execution, we deliver solutions that grow your
          business.
        </p>

        <div className='mt-10 grid grid-cols-2 xl:grid-cols-4 gap-6 place-items-center'>
          {stats.map((s, i) => (
            <div
              key={s.label}
              className={`flex h-[220px] w-full max-w-[220px] flex-col items-center justify-center rounded-full border ${cardBgClass}`}
            >
              <div className='text-4xl font-semibold text-[var(--brand-orange)]'>
                {counts[i]}
                {s.suffix}
              </div>
              <div
                className={`mt-3 px-4 text-center text-sm font-medium ${theme === 'dark' ? 'text-white/90' : 'text-slate-950'}`}
              >
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
