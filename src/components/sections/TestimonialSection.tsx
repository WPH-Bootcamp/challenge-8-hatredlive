import React, { useState, useEffect } from 'react';
import JohnLeeAvatar from '../../assets/Testimonial Card/Clients/John Lee.png';
import SarahTanAvatar from '../../assets/Testimonial Card/Clients/Sarah Tan.png';
import EmilyChenAvatar from '../../assets/Testimonial Card/Clients/Emily Chen.png';
import QuotationMarkImg from '../../assets/Testimonial Card/Raw/Quotation Mark.png';

interface Testimonial {
  quote: string;
  author: string;
  role: string;
  rating: number;
  avatar: string;
}

const testimonials: Testimonial[] = [
  {
    quote:
      'Working with this team was a game-changer for our project. They understood our vision and turned it into reality efficiently and effectively.',
    author: 'John Lee',
    role: 'Creative Director at Innovate Corp',
    rating: 5,
    avatar: JohnLeeAvatar,
  },
  {
    quote:
      'The team delivered exactly what we needed — on time and with outstanding quality. Their attention to detail and communication were top-notch.',
    author: 'Sarah Tan',
    role: 'Product Manager at Finovate',
    rating: 5,
    avatar: SarahTanAvatar,
  },
  {
    quote:
      'The collaboration was seamless, and the results surpassed our expectations. Their expertise transformed our ideas into a successful product.',
    author: 'Emily Chen',
    role: 'Marketing Head at Tech Solutions',
    rating: 5,
    avatar: EmilyChenAvatar,
  },
];

interface TestimonialSectionProps {
  theme: 'dark' | 'light';
}

const TestimonialSection: React.FC<TestimonialSectionProps> = ({ theme }) => {
  const [activeIndex, setActiveIndex] = useState(1);
  const isDark = theme === 'dark';
  const textColorClass = isDark ? 'text-white' : 'text-slate-950';
  const subtitleColorClass = isDark ? 'text-gray-400' : 'text-slate-500';
  const quoteColorClass = isDark ? 'text-white' : 'text-slate-950';

  const prevIndex =
    (activeIndex - 1 + testimonials.length) % testimonials.length;
  const nextIndex = (activeIndex + 1) % testimonials.length;

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % testimonials.length);
    }, 8000);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <section
      className={`py-16 md:py-24 leading-[28px] md:leading-normal transition-colors duration-500 ease-in-out ${isDark ? 'bg-black' : 'bg-white'}`}
    >
      <div className='max-w-7xl mx-auto px-6'>
        <div className='text-center'>
          <h2
            className={`text-3xl md:text-3xl font-bold transition-colors duration-500 ease-in-out ${textColorClass}`}
          >
            What Partners Say About Working With Us
          </h2>
          <p className={`mt-4 mb-12 md:mb-12 text-base ${subtitleColorClass}`}>
            Trusted voices. Real experiences. Proven results.
          </p>
        </div>

        <div className='relative mt-[6rem] md:mt-16 overflow-visible group'>
          <div
            className={`pointer-events-none absolute inset-y-0 left-0 w-40 transition-colors duration-500 ease-in-out ${
              isDark
                ? 'bg-gradient-to-r from-black/95 to-transparent'
                : 'bg-gradient-to-r from-white/95 to-transparent'
            }`}
          />
          <div
            className={`pointer-events-none absolute inset-y-0 right-0 w-40 transition-colors duration-500 ease-in-out ${
              isDark
                ? 'bg-gradient-to-l from-black/95 to-transparent'
                : 'bg-gradient-to-l from-white/95 to-transparent'
            }`}
          />

          <div className='hidden md:flex items-center justify-center gap-8'>
            {[prevIndex, activeIndex, nextIndex].map((index, position) => {
              const kind =
                index === activeIndex
                  ? 'active'
                  : position === 0
                    ? 'prev'
                    : 'next';
              const testimonial = testimonials[index];
              const cardWidth = 'w-[60rem]';
              const cardOpacity = 'opacity-100';
              const cardScale = kind === 'active' ? 'scale-105' : 'scale-95';
              const cardTranslateX =
                kind === 'active'
                  ? 'translate-x-0'
                  : kind === 'prev'
                    ? '-translate-x-12'
                    : 'translate-x-12';
              const cardTranslateY =
                kind === 'active'
                  ? 'translate-y-0'
                  : kind === 'prev'
                    ? '-translate-y-4'
                    : '-translate-y-2';
              const cardZ = kind === 'active' ? 'z-20' : 'z-10';
              const cardGlow =
                kind === 'active' ? 'neon-testimonial-active' : '';
              const cardBorder = 'border-transparent';
              const cardBg = isDark ? 'bg-[#0A0D12]' : 'bg-white';

              const cardText = quoteColorClass;
              const cardMinHeight = 'min-h-[24rem]';

              return (
                <div
                  key={index}
                  className={`relative ${cardWidth} ${cardScale} ${cardOpacity} ${cardTranslateX} ${cardTranslateY} ${cardZ} transition-transform transition-opacity duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]`}
                  style={{ willChange: 'transform, opacity' }}
                >
                  <div
                    className={`relative overflow-visible rounded-[3rem] border-2 ${cardBorder} ${cardBg} transition-colors duration-500 ease-in-out px-14 pt-10 pb-16 ${cardMinHeight} ${cardGlow}`}
                    style={
                      kind === 'active' && !isDark
                        ? ({
                            '--neon-bg-color': '#FFFFFF',
                            backgroundImage: `linear-gradient(180deg, #FFFFFF, #FFFFFF), linear-gradient(90deg, rgba(255,108,55,0.95), rgba(248,183,112,0.55), rgba(182,187,193,0.35), rgba(255,108,55,0.95))`,
                          } as React.CSSProperties)
                        : undefined
                    }
                  >
                    <img
                      src={QuotationMarkImg}
                      alt='quote'
                      className='absolute -top-10 left-10 h-20 w-20 object-contain z-30'
                    />
                    <div className='flex justify-center mb-4'>
                      {Array.from({ length: testimonial.rating }).map(
                        (_, i) => (
                          <span key={i} className='text-lg text-[#ffcc77]'>
                            ⭐
                          </span>
                        )
                      )}
                    </div>
                    <p
                      className={`text-base leading-7 text-center ${cardText}`}
                    >
                      “{testimonial.quote}”
                    </p>
                    <div className='mt-8 text-center'>
                      <p className={`font-semibold ${quoteColorClass}`}>
                        {testimonial.author}
                      </p>
                      <p
                        className={`mt-2 text-sm font-semibold ${quoteColorClass}`}
                      >
                        {testimonial.role}
                      </p>
                    </div>
                    <div className='absolute left-1/2 bottom-[-2.5rem] -translate-x-1/2 h-20 w-20 rounded-full overflow-hidden shadow-[0_20px_40px_rgba(0,0,0,0.24)] z-30'>
                      <img
                        src={testimonial.avatar}
                        alt={testimonial.author}
                        className='h-full w-full rounded-full object-cover'
                      />
                    </div>
                    {kind !== 'active' && (
                      <div
                        className='absolute inset-0 pointer-events-none rounded-[3rem]'
                        style={{
                          zIndex: 5,
                          background: isDark
                            ? position === 0
                              ? 'linear-gradient(90deg, rgba(0,0,0,0.85), rgba(0,0,0,0))'
                              : 'linear-gradient(270deg, rgba(0,0,0,0.85), rgba(0,0,0,0))'
                            : position === 0
                              ? 'linear-gradient(90deg, rgba(255,255,255,0.85), rgba(255,255,255,0))'
                              : 'linear-gradient(270deg, rgba(255,255,255,0.85), rgba(255,255,255,0))',
                        }}
                      />
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          <div className='md:hidden flex justify-center'>
            <div
              className={`relative overflow-visible rounded-[2rem] border-2 border-transparent ${isDark ? 'bg-[#0A0D12]' : 'bg-white'} transition-colors duration-500 ease-in-out px-7 pt-10 pb-16 w-[88vw] max-w-[26rem] min-h-[24rem] neon-testimonial-active`}
              style={
                !isDark
                  ? ({ '--neon-bg-color': '#FFFFFF' } as React.CSSProperties)
                  : undefined
              }
            >
              <img
                src={QuotationMarkImg}
                alt='quote'
                className='absolute -top-10 left-8 h-20 w-20 object-contain'
              />
              <div className='flex justify-center mb-4'>
                {Array.from({ length: testimonials[activeIndex].rating }).map(
                  (_, i) => (
                    <span key={i} className='text-lg text-[#ffcc77]'>
                      ⭐
                    </span>
                  )
                )}
              </div>
              <p
                className={`text-base leading-7 text-center ${quoteColorClass}`}
              >
                “{testimonials[activeIndex].quote}”
              </p>
              <div className='mt-8 text-center'>
                <p className={`font-semibold ${quoteColorClass}`}>
                  {testimonials[activeIndex].author}
                </p>
                <p className='mt-2 text-sm font-semibold text-[#ff6c37]'>
                  {testimonials[activeIndex].role}
                </p>
              </div>
              <div className='absolute left-1/2 bottom-[-2.5rem] -translate-x-1/2 h-20 w-20 rounded-full overflow-hidden shadow-[0_20px_40px_rgba(0,0,0,0.24)]'>
                <img
                  src={testimonials[activeIndex].avatar}
                  alt={testimonials[activeIndex].author}
                  className='h-full w-full rounded-full object-cover'
                />
              </div>
            </div>
          </div>
        </div>

        <div className='mt-[5.5rem] md:mt-[5.5rem] flex justify-center gap-2'>
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              type='button'
              onClick={() => setActiveIndex(idx)}
              className={`h-[10px] w-[10px] rounded-full transition-colors duration-200 ${
                idx === activeIndex
                  ? 'bg-[#ff6c37]'
                  : isDark
                    ? 'bg-white/20'
                    : 'bg-slate-300'
              }`}
              aria-label={`testimonial ${idx + 1}`}
            />
          ))}
        </div>
      </div>

      <style>{`
        .neon-testimonial-active {
          position: relative;
          border: 2px solid transparent;
          border-radius: 3rem;
          background-image:
            linear-gradient(180deg, var(--neon-bg-color, rgba(10,13,18,1)), var(--neon-bg-color, rgba(10,13,18,1))),
            linear-gradient(90deg, rgba(255,108,55,0.95), rgba(248,183,112,0.55), rgba(182,187,193,0.35), rgba(255,108,55,0.95));
          background-origin: border-box;
          background-clip: padding-box, border-box;
          background-size: 100% 100%, 300% 100%;
          box-shadow:
            0 0 28px rgba(255, 108, 55, 0.18),
            0 0 66px rgba(255, 108, 55, 0.24),
            inset 0 0 24px rgba(255, 108, 55, 0.14);
          animation: neonGradientShift 4s linear infinite;
        }

        @keyframes neonGradientShift {
          0% {
            background-position: 0 0, 0 0;
          }
          100% {
            background-position: 0 0, 200% 0;
          }
        }
      `}</style>
    </section>
  );
};

export default TestimonialSection;
