import React from 'react';
import LogoDark from '../../assets/Navbar/Your Logo Icon Dark.png';
import LogoLight from '../../assets/Navbar/Your Logo Icon Light.png';
import FacebookIcon from '../../assets/Footer/Type=Facebook.png';
import InstagramIcon from '../../assets/Footer/Type=Instagram.png';
import LinkedinIcon from '../../assets/Footer/Type=Linkedin.png';
import TikTokIcon from '../../assets/Footer/Type=Tik Tok.png';
import FacebookIconLight from '../../assets/Footer/Type=Facebook Light.png';
import InstagramIconLight from '../../assets/Footer/Type=Instagram Light.png';
import LinkedinIconLight from '../../assets/Footer/Type=Linkedin Light.png';
import TikTokIconLight from '../../assets/Footer/Type=Tik Tok Light.png';

interface FooterSectionProps {
  theme: 'dark' | 'light';
}

const FooterSection: React.FC<FooterSectionProps> = ({ theme }) => {
  const isDark = theme === 'dark';
  const textColorClass = isDark ? 'text-white' : 'text-slate-950';
  const borderColorClass = isDark ? 'border-white/10' : 'border-slate-200';
  const linkHoverClass = isDark ? 'hover:text-white' : 'hover:text-slate-950';

  const socialIcons = [
    { name: 'Facebook', src: isDark ? FacebookIcon : FacebookIconLight },
    { name: 'Instagram', src: isDark ? InstagramIcon : InstagramIconLight },
    { name: 'LinkedIn', src: isDark ? LinkedinIcon : LinkedinIconLight },
    { name: 'TikTok', src: isDark ? TikTokIcon : TikTokIconLight },
  ];

  const logoSrc = isDark ? LogoDark : LogoLight;

  return (
    <footer className={`py-12 md:py-16 ${isDark ? 'bg-black' : 'bg-slate-50'}`}>
      <div className='max-w-5xl mx-auto px-6'>
        <div
          className={`rounded-[2rem] border ${borderColorClass} ${isDark ? 'bg-[#0A0D12]' : 'bg-white'} py-4 px-8 md:py-6 md:px-12 mx-auto w-full`}
        >
          <div className='flex flex-col gap-6 md:gap-8'>
            <div className='flex flex-col gap-4 md:gap-8 md:flex-row md:items-start md:justify-between'>
              <div className='flex flex-col gap-4 items-start md:items-start'>
                <div className='inline-flex items-center gap-3 rounded-full px-2 py-1'>
                  <img
                    src={logoSrc}
                    alt='Logo'
                    className='h-8 w-auto md:h-8 object-contain'
                  />
                </div>
                <h2
                  className={`text-3xl md:text-3xl font-bold leading-tight ${textColorClass}`}
                  style={{ marginLeft: 4 }}
                >
                  LET&apos;S DISCUSS
                  <br />
                  YOUR IDEAS
                </h2>
              </div>
            </div>

            <div
              className={`flex flex-col gap-8 border-t ${borderColorClass} pt-12 md:pt-14 md:flex-row md:items-center md:justify-between`}
            >
              <div className='flex flex-col gap-5 text-sm font-medium md:flex-row md:gap-8'>
                <a href='#about' className={`transition ${linkHoverClass}`}>
                  About
                </a>
                <a href='#service' className={`transition ${linkHoverClass}`}>
                  Service
                </a>
                <a href='#projects' className={`transition ${linkHoverClass}`}>
                  Projects
                </a>
                <a
                  href='#testimonials'
                  className={`transition ${linkHoverClass}`}
                >
                  Testimonials
                </a>
                <a href='#faq' className={`transition ${linkHoverClass}`}>
                  FAQ
                </a>
              </div>

              <div className='flex items-center gap-1'>
                {socialIcons.map((social) => (
                  <a
                    key={social.name}
                    href='#'
                    title={social.name}
                    className={`inline-flex h-12 w-12 items-center justify-center rounded-full transition ${isDark ? 'border border-white/10 bg-white/5 hover:bg-white/10' : 'border border-slate-200 bg-white/5 hover:bg-slate-100'}`}
                  >
                    <img
                      src={social.src}
                      alt={social.name}
                      className='h-10 w-10 object-contain'
                    />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
