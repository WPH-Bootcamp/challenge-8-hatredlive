import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import LogoDark from '../../assets/Navbar/Your Logo Icon Dark.png';
import LogoLight from '../../assets/Navbar/Your Logo Icon Light.png';

interface NavbarProps {
  theme: 'dark' | 'light';
  setTheme: (t: 'dark' | 'light') => void;
}

const Navbar: React.FC<NavbarProps> = ({ theme, setTheme }) => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) {
      document.body.style.overflow = 'unset';
      return;
    }

    document.body.style.overflow = 'hidden';

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = 'unset';
    };
  }, [open]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navBgClass = scrolled
    ? theme === 'dark'
      ? 'bg-slate-950/35 backdrop-blur-xl'
      : 'bg-white/35 backdrop-blur-xl'
    : 'bg-transparent';

  const textColorClass = theme === 'dark' ? 'text-white' : 'text-slate-950';

  return (
    <header
      className={`fixed w-full z-30 top-0 transition-colors duration-300 ${navBgClass}`}
    >
      <div className='max-w-7xl mx-auto px-6 py-4 flex items-center justify-between'>
        <div className='flex items-center'>
          <img
            src={theme === 'dark' ? LogoDark : LogoLight}
            alt='Logo'
            className='h-8 w-auto md:h-8 object-contain'
          />
        </div>

        <nav className={`hidden md:flex gap-8 text-sm ${textColorClass}`}>
          <a
            href='#about'
            className='transition hover:text-[var(--brand-orange)]'
          >
            About
          </a>
          <a
            href='#service'
            className='transition hover:text-[var(--brand-orange)]'
          >
            Service
          </a>
          <a
            href='#projects'
            className='transition hover:text-[var(--brand-orange)]'
          >
            Projects
          </a>
          <a
            href='#testimonials'
            className='transition hover:text-[var(--brand-orange)]'
          >
            Testimonials
          </a>
          <a
            href='#faq'
            className='transition hover:text-[var(--brand-orange)]'
          >
            FAQ
          </a>
        </nav>

        <div className='flex items-center gap-3'>
          <button
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            aria-label='Toggle theme'
            className={`flex items-center justify-center rounded-full p-2 transition ${theme === 'dark' ? 'text-white' : 'text-slate-950'} hover:bg-white/10`}
          >
            {theme === 'dark' ? (
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='18'
                height='18'
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                strokeWidth='2'
              >
                <path d='M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z' />
              </svg>
            ) : (
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='18'
                height='18'
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                strokeWidth='2'
              >
                <circle cx='12' cy='12' r='5' />
                <path d='M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42' />
              </svg>
            )}
          </button>
          <button
            className='hidden md:inline-flex h-12 min-w-[150px] items-center justify-center rounded-full bg-[var(--brand-orange)] px-5 text-sm font-semibold text-white shadow-[0_18px_60px_rgba(255,108,55,0.24)] transition hover:brightness-110'
            aria-label="Let's Talk"
          >
            Let's Talk
          </button>

          {}
          <button
            onClick={() => setOpen((prev) => !prev)}
            className='md:hidden inline-flex items-center justify-center p-2 rounded-md'
            aria-label={open ? 'Close menu' : 'Open menu'}
          >
            {open ? (
              <svg
                className={`w-6 h-6 ${textColorClass}`}
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M6 18L18 6M6 6l12 12'
                />
              </svg>
            ) : (
              <svg
                className={`w-6 h-6 ${textColorClass}`}
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M4 6h16M4 12h16M4 18h16'
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {}
      {open &&
        createPortal(
          <div className='fixed inset-0 z-[99999]'>
            <div
              className={`fixed inset-0 z-[99998] bg-black/50 backdrop-blur-sm`}
              onClick={() => setOpen(false)}
              aria-hidden='true'
              style={{ pointerEvents: 'auto' }}
            />

            <div className='fixed inset-0 z-[100000]'>
              <div
                className={`h-full ${theme === 'dark' ? 'text-white' : 'text-slate-950'}`}
              >
                <div
                  className={`h-full w-full max-w-full p-6 flex flex-col ${theme === 'dark' ? 'bg-black' : 'bg-white'}`}
                >
                  <div className='flex items-center justify-between mb-6'>
                    <img
                      src={theme === 'dark' ? LogoDark : LogoLight}
                      alt='Logo'
                      className='h-8 w-auto md:h-8 object-contain'
                    />
                    <div className='flex items-center gap-3'>
                      <button
                        onClick={() => setOpen(false)}
                        aria-label='Close menu'
                        className='p-2'
                      >
                        <svg
                          className={`w-6 h-6 ${theme === 'dark' ? 'text-white' : 'text-slate-950'}`}
                          fill='none'
                          stroke='currentColor'
                          viewBox='0 0 24 24'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth={2}
                            d='M6 18L18 6M6 6l12 12'
                          />
                        </svg>
                      </button>
                    </div>
                  </div>

                  <nav className='flex flex-col gap-4'>
                    <a
                      href='#about'
                      onClick={() => setOpen(false)}
                      className='text-sm font-normal'
                    >
                      About
                    </a>
                    <a
                      href='#service'
                      onClick={() => setOpen(false)}
                      className='text-sm font-normal'
                    >
                      Service
                    </a>
                    <a
                      href='#projects'
                      onClick={() => setOpen(false)}
                      className='text-sm font-normal'
                    >
                      Portfolio
                    </a>
                    <a
                      href='#testimonials'
                      onClick={() => setOpen(false)}
                      className='text-sm font-normal'
                    >
                      Testimonials
                    </a>
                    <a
                      href='#faq'
                      onClick={() => setOpen(false)}
                      className='text-sm font-normal'
                    >
                      FAQ
                    </a>

                    <div className='mt-8 w-full'>
                      <button className='w-full rounded-full bg-[var(--brand-orange)] px-6 py-3 text-sm font-semibold text-white'>
                        Let's Talk
                      </button>
                    </div>
                  </nav>
                </div>
              </div>
            </div>
          </div>,
          document.body
        )}
    </header>
  );
};

export default Navbar;
