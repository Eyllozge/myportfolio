import React from 'react';
import { Language, CertificateItem } from '../types';
import { portfolioData } from '../data/portfolioData';

interface CertificatesSectionProps {
  lang: Language;
}

export const CertificatesSection: React.FC<CertificatesSectionProps> = ({ lang }) => {
  const content = portfolioData[lang];

  return (
    <section id="certificates" className="py-20 md:py-28 border-b border-stone-200/80 bg-[#FAF8F5]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-12 pb-5 border-b border-stone-200/90">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#6C3B24] block mb-1">
              {lang === 'tr' ? 'Akreditasyonlar' : 'Credentials'}
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
              {lang === 'tr' ? (
                <>
                  Sertifikalar &amp; <span className="font-serif italic font-normal text-[#6C3B24]">Eğitimler</span>
                </>
              ) : (
                <>
                  Certifications &amp; <span className="font-serif italic font-normal text-[#6C3B24]">Trainings</span>
                </>
              )}
            </h2>
          </div>
          <p className="text-sm text-stone-500 max-w-sm mt-2 sm:mt-0">
            {lang === 'tr'
              ? 'IBM, Quantum Turkey, Lawducation ve YetGen onaylı teknik programlar.'
              : 'Accredited certifications across AI, LegalTech, and leadership programs.'}
          </p>
        </div>

        {/* Clean Structured Table List */}
        <div className="divide-y divide-stone-200/80">
          {content.certificates.map((cert: CertificateItem) => (
            <div
              key={cert.id}
              id={`cert-entry-${cert.id}`}
              className="py-5 flex flex-col sm:flex-row sm:items-baseline justify-between gap-4 group"
            >
              <div className="sm:w-3/5">
                <h3 className="text-base font-bold text-stone-900 group-hover:text-[#6C3B24] transition-colors">
                  {cert.title}
                </h3>
              </div>

              <div className="sm:w-1/4 text-xs font-semibold text-stone-600">
                {cert.issuer}
              </div>

              <div className="sm:w-1/6 flex sm:justify-end items-center text-xs">
                {cert.status ? (
                  <span className="text-[#6C3B24] bg-[#F7F2EB] px-2.5 py-0.5 rounded-md border border-[#DFCAC0] font-semibold text-[11px]">
                    {cert.status}
                  </span>
                ) : (
                  <span className="font-semibold text-stone-500">
                    {cert.year}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
