import React, { useState } from 'react';
import SuccessIcon from '../../assets/Submission/Message Success.png';
import FailedIcon from '../../assets/Submission/Message Failed.png';

interface CTASectionProps {
  theme: 'dark' | 'light';
}

const CTASection: React.FC<CTASectionProps> = ({ theme }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    services: [] as string[],
  });
  const [submissionStatus, setSubmissionStatus] = useState<
    'idle' | 'success' | 'error'
  >('idle');
  const [statusMessage, setStatusMessage] = useState('');

  const isDark = theme === 'dark';
  const bgClass = isDark ? 'bg-black' : 'bg-white';
  const textColorClass = isDark ? 'text-white' : 'text-slate-950';
  const subtitleColorClass = isDark ? 'text-gray-400' : 'text-gray-600';
  const containerBgClass = isDark ? 'bg-black' : 'bg-slate-50/95';
  const modalBgClass = 'bg-[#0A0D12] border border-slate-700/40';
  const inputBgClass = isDark ? 'bg-black' : 'bg-white';
  const inputBorderClass = isDark ? 'border-[#29303D]' : 'border-slate-300';
  const inputTextClass = isDark
    ? 'text-white placeholder:text-gray-400'
    : 'text-slate-950 placeholder:text-gray-400';
  const textareaTextClass = isDark
    ? 'text-white placeholder:text-gray-400'
    : 'text-slate-950 placeholder:text-gray-400';
  const textareaBgClass = isDark ? 'bg-black' : inputBgClass;
  const labelClass = isDark
    ? 'text-white font-semibold'
    : 'text-slate-950 font-semibold';
  const serviceTextClass = isDark ? 'text-white' : 'text-slate-950';
  const serviceBorderClass = isDark ? 'border-[#29303D]' : 'border-slate-300';

  const services = [
    'Web Development',
    'Mobile App Development',
    'UI/UX Design',
    'Cloud Solutions',
    'Software Development',
    'Other',
  ];

  const handleServiceToggle = (service: string) => {
    setFormData((prev) => ({
      ...prev,
      services: prev.services.includes(service)
        ? prev.services.filter((s) => s !== service)
        : [...prev.services, service],
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const missingFields =
      !formData.name.trim() ||
      !formData.email.trim() ||
      !formData.message.trim() ||
      formData.services.length === 0;

    if (missingFields) {
      setStatusMessage(
        'Please complete all fields and select at least one service before sending.'
      );
      setSubmissionStatus('error');
      return;
    }

    setStatusMessage(
      'Thanks for reaching out — we’ll get back to you as soon as possible.'
    );
    setSubmissionStatus('success');
  };

  const closeStatusModal = () => {
    setSubmissionStatus('idle');
  };

  return (
    <section
      className={`relative py-16 md:py-24 leading-[28px] md:leading-normal ${bgClass}`}
    >
      <div className='max-w-5xl mx-auto px-6'>
        <div className='text-center mb-12'>
          <h2 className={`text-3xl md:text-3xl font-bold ${textColorClass}`}>
            Ready to Start? Let's Talk.
          </h2>
          <p className='mx-auto mt-3 max-w-2xl text-base md:text-base text-[var(--neutral-400)]'>
            Tell us what you need, and we'll get back to you soon.
          </p>
        </div>

        <div className='mx-auto w-full max-w-3xl px-0'>
          <div
            className={`rounded-[2rem] ${containerBgClass} px-6 md:px-8 py-8 backdrop-blur-sm`}
          >
            <form onSubmit={handleSubmit} className='space-y-8'>
              <div className='grid gap-6'>
                <div>
                  <label
                    className={`block text-sm font-medium ${labelClass} mb-3`}
                  >
                    Name
                  </label>
                  <input
                    type='text'
                    placeholder='Enter your name'
                    value={formData.name}
                    onChange={(e) =>
                      setFormData((prev) => ({ ...prev, name: e.target.value }))
                    }
                    className={`w-full rounded-2xl border px-5 py-4 text-base transition-all duration-300 ${inputBgClass} ${inputBorderClass} ${inputTextClass} focus:outline-none focus:ring-2 focus:ring-[#ff6c37]`}
                  />
                </div>
                <div>
                  <label
                    className={`block text-sm font-medium ${labelClass} mb-3`}
                  >
                    Email
                  </label>
                  <input
                    type='email'
                    placeholder='Enter your email'
                    value={formData.email}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        email: e.target.value,
                      }))
                    }
                    className={`w-full rounded-2xl border px-5 py-4 text-base transition-all duration-300 ${inputBgClass} ${inputBorderClass} ${inputTextClass} focus:outline-none focus:ring-2 focus:ring-[#ff6c37]`}
                  />
                </div>
              </div>

              <div>
                <label
                  className={`block text-sm font-medium ${labelClass} mb-3`}
                >
                  Message
                </label>
                <textarea
                  placeholder='Enter your message'
                  value={formData.message}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      message: e.target.value,
                    }))
                  }
                  rows={6}
                  className={`w-full rounded-2xl border px-5 py-4 text-base transition-all duration-300 ${textareaBgClass} ${inputBorderClass} ${textareaTextClass} focus:outline-none focus:ring-2 focus:ring-[#ff6c37] resize-none`}
                />
              </div>

              <div>
                <div className='mb-4 flex items-center justify-between'>
                  <label className={`text-sm font-medium ${labelClass}`}>
                    Services
                  </label>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-x-3 md:gap-x-6 gap-y-2 px-5 md:px-0'>
                  {services.map((service) => (
                    <label
                      key={service}
                      className={`flex cursor-pointer items-center gap-2 md:gap-3 rounded-2xl py-3 text-sm md:text-base ${serviceTextClass}`}
                    >
                      <input
                        type='checkbox'
                        checked={formData.services.includes(service)}
                        onChange={() => handleServiceToggle(service)}
                        className={`h-5 w-5 md:h-6 md:w-6 rounded-lg border-2 ${serviceBorderClass} bg-transparent focus:ring-[#ff6c37] cursor-pointer appearance-none flex-shrink-0`}
                        style={{
                          backgroundImage: formData.services.includes(service)
                            ? "url(\"data:image/svg+xml,%3csvg viewBox='0 0 16 16' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill='white' d='M6.173 11.414l-3.59-3.59 1.414-1.414 2.176 2.176 4.95-4.95 1.414 1.414z'/%3e%3c/svg%3e\")"
                            : 'none',
                          backgroundColor: formData.services.includes(service)
                            ? '#ff6c37'
                            : 'transparent',
                          backgroundRepeat: 'no-repeat',
                          backgroundPosition: 'center center',
                          backgroundSize: '85% 85%',
                        }}
                      />
                      <span>{service}</span>
                    </label>
                  ))}
                </div>
              </div>

              <button
                type='submit'
                className='mx-auto block w-full rounded-[2.5rem] bg-gradient-to-r from-[#ff6c37] to-[#ff7844] px-10 py-4 text-base font-semibold text-white shadow-[0_18px_45px_-18px_rgba(255,108,55,0.9)] transition duration-300 hover:from-[#ff7844] hover:to-[#ff6c37] focus:outline-none focus:ring-4 focus:ring-[#ff6c37]/30 active:scale-[0.98] cursor-pointer'
              >
                Send
              </button>
            </form>
          </div>
        </div>

        {submissionStatus !== 'idle' && (
          <div className='fixed inset-0 z-50 flex items-center justify-center bg-black/75 px-6 py-12'>
            <div
              className={`max-w-xl w-full rounded-[2rem] ${modalBgClass} p-8 text-center shadow-[0_30px_80px_rgba(0,0,0,0.55)]`}
            >
              <div className='mx-auto h-56 w-[24rem] rounded-[2rem] bg-[#0A0D12] p-2 relative flex items-center justify-center shadow-[0_30px_60px_rgba(0,0,0,0.35)]'>
                <img
                  src={
                    submissionStatus === 'success' ? SuccessIcon : FailedIcon
                  }
                  alt={
                    submissionStatus === 'success'
                      ? 'Message Received'
                      : 'Message Failed'
                  }
                  className='h-full w-full object-contain'
                />
              </div>
              <h3
                className={`mt-6 text-lg md:text-xl font-semibold ${textColorClass}`}
              >
                {submissionStatus === 'success'
                  ? 'Message Received!'
                  : 'Oops! Something went wrong.'}
              </h3>
              <p
                className={`mt-4 text-base leading-7 ${subtitleColorClass} mx-auto max-w-xl`}
              >
                {statusMessage}
              </p>
              <button
                type='button'
                onClick={closeStatusModal}
                className='mt-8 inline-flex w-full max-w-[22rem] mx-auto justify-center rounded-full bg-gradient-to-r from-[#ff6c37] to-[#ff7844] px-8 py-3 text-base font-semibold text-white shadow-lg shadow-[#ff6c37]/20 transition hover:from-[#ff7844] hover:to-[#ff6c37] focus:outline-none focus:ring-4 focus:ring-[#ff6c37]/30 active:scale-[0.98]'
              >
                {submissionStatus === 'success' ? 'Back to Home' : 'Try Again'}
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default CTASection;
