import React from 'react';
import { Language, LanguageItem } from '../types';
import { portfolioData } from '../data/portfolioData';

interface LanguagesSectionProps {
  lang: Language;
}

export const LanguagesSection: React.FC<LanguagesSectionProps> = ({ lang }) => {
  const content = portfolioData[lang];

  return (
    <section id="languages" className="py-20 md:py-28 border-b border-stone-200/80 bg-[#FAF8F5]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-12 pb-5 border-b border-stone-200/90">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#881337] block mb-1">
              {lang === 'tr' ? 'Dil Yetkinliği' : 'Language Proficiencies'}
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
              {lang === 'tr' ? (
                <>
                  Yabancı <span className="font-serif italic font-normal text-[#881337]">Diller</span>
                </>
              ) : (
                <>
                  Foreign <span className="font-serif italic font-normal text-[#881337]">Languages</span>
                </>
              )}
            </h2>
          </div>
          <span className="text-xs font-semibold text-stone-500 mt-2 sm:mt-0">
            {lang === 'tr' ? 'CEFR Standartları' : 'CEFR Standardized'}
          </span>
        </div>

        {/* Clean Line-item Breakdown */}
        <div className="divide-y divide-stone-200/80">
          {content.languages.map((item: LanguageItem, index: number) => (
            <div
              key={index}
              id={`lang-entry-${index}`}
              className="py-6 flex flex-col sm:flex-row sm:items-baseline justify-between gap-4 group"
            >
              <div className="sm:w-1/3">
                <h3 className="text-lg font-bold text-stone-900 group-hover:text-[#881337] transition-colors">
                  {item.name}
                </h3>
                <span className="text-xs font-medium text-stone-500">
                  {item.level}
                </span>
              </div>

              <div className="sm:w-1/2 text-sm text-stone-600 leading-relaxed">
                {item.description}
              </div>

              <div className="sm:w-1/6 flex sm:justify-end items-center">
                <span className="text-xs font-bold text-stone-800 bg-stone-100 px-3 py-1 rounded-md border border-stone-200">
                  {item.cefr}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
