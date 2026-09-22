import React from 'react';
import { Language, EducationItem, CommunityItem, LanguageItem } from '../types';
import { portfolioData } from '../data/portfolioData';
import { GraduationCap, Users2, Globe2 } from 'lucide-react';

interface EducationLanguagesSectionProps {
  lang: Language;
}

export const EducationLanguagesSection: React.FC<EducationLanguagesSectionProps> = ({
  lang,
}) => {
  const content = portfolioData[lang];

  return (
    <section
      id="education-languages"
      className="py-20 md:py-28 border-b border-stone-200/80 bg-[#FAF8F5]"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-12 pb-5 border-b border-stone-200/90">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#6C3B24] block mb-1">
              {lang === 'tr' ? 'Akademik Geçmiş & Diller' : 'Academic Background & Languages'}
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
              {lang === 'tr' ? (
                <>
                  Diller, Eğitim &amp; <span className="font-serif italic font-normal text-[#6C3B24]">Topluluk</span>
                </>
              ) : (
                <>
                  Languages, Education &amp; <span className="font-serif italic font-normal text-[#6C3B24]">Leadership</span>
                </>
              )}
            </h2>
          </div>
          <p className="text-sm text-stone-500 max-w-xs mt-2 sm:mt-0">
            {lang === 'tr'
              ? 'Yabancı diller, formal akademik eğitim ve topluluk liderliği.'
              : 'Language proficiencies, formal education, and leadership engagements.'}
          </p>
        </div>

        {/* Two Column Layout: Left Diller (compact), Right Eğitim & Topluluklar */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          
          {/* Left Column: Narrowed Foreign Languages */}
          <div className="lg:col-span-5 space-y-5">
            <div className="flex items-center justify-between border-b-2 border-stone-900 pb-2.5">
              <div className="flex items-center gap-2">
                <Globe2 className="w-4 h-4 text-stone-900" />
                <h3 className="text-sm font-bold text-stone-900 uppercase tracking-wide">
                  {lang === 'tr' ? 'Yabancı Diller' : 'Foreign Languages'}
                </h3>
              </div>
              <span className="text-[11px] font-semibold text-stone-500">CEFR</span>
            </div>

            {/* Clean row list without middle descriptions, showing name + level + CEFR tag */}
            <div className="divide-y divide-stone-200/80 rounded-lg border border-stone-200 bg-white shadow-2xs overflow-hidden">
              {content.languages.map((item: LanguageItem, index: number) => (
                <div
                  key={index}
                  id={`lang-compact-entry-${index}`}
                  className="px-4 py-3.5 flex items-center justify-between gap-3 hover:bg-stone-50/70 transition-colors"
                >
                  <div>
                    <h4 className="text-sm font-bold text-stone-900 leading-tight">
                      {item.name}
                    </h4>
                    <span className="text-xs text-stone-500 font-medium">
                      {item.level}
                    </span>
                  </div>

                  <div className="flex items-center">
                    <span className="inline-flex items-center justify-center min-w-[38px] px-2.5 py-1 rounded text-xs font-bold bg-[#F7F2EB] text-[#6C3B24] border border-[#DFCAC0]">
                      {item.cefr}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Education and Communities */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Formal Education */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 border-b-2 border-stone-900 pb-2.5">
                <GraduationCap className="w-4 h-4 text-stone-900" />
                <h3 className="text-sm font-bold text-stone-900 uppercase tracking-wide">
                  {lang === 'tr' ? 'Akademik Eğitim' : 'Formal Education'}
                </h3>
              </div>

              <div className="space-y-3">
                {content.education.map((edu: EducationItem, idx: number) => (
                  <div
                    key={idx}
                    id={`education-entry-${idx}`}
                    className="p-5 rounded-lg border border-stone-200 bg-white shadow-2xs space-y-2"
                  >
                    <div className="flex flex-wrap items-baseline justify-between gap-2">
                      <h4 className="text-base font-bold text-stone-900">
                        {edu.degree}
                      </h4>
                      <span className="text-xs font-extrabold text-[#6C3B24] bg-[#F7F2EB] px-2.5 py-0.5 rounded border border-[#DFCAC0]">
                        GPA {edu.gpa}
                      </span>
                    </div>

                    <div className="flex items-center gap-2 text-xs font-semibold text-stone-600">
                      <span>{edu.institution}</span>
                      <span className="text-stone-300">•</span>
                      <span className="text-stone-500 font-normal">{edu.period}</span>
                    </div>

                    {edu.notes && (
                      <p className="text-xs text-stone-600 leading-relaxed pt-1">
                        {edu.notes}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Communities & Leadership */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 border-b-2 border-stone-900 pb-2.5">
                <Users2 className="w-4 h-4 text-stone-900" />
                <h3 className="text-sm font-bold text-stone-900 uppercase tracking-wide">
                  {lang === 'tr' ? 'Topluluk & Kulüp Rolleri' : 'Communities & Leadership'}
                </h3>
              </div>

              <div className="space-y-3">
                {content.communities.map((comm: CommunityItem, idx: number) => (
                  <div
                    key={idx}
                    id={`community-entry-${idx}`}
                    className="p-4 rounded-lg border border-stone-200 bg-white shadow-2xs space-y-1.5"
                  >
                    <div className="flex flex-wrap items-baseline justify-between gap-2">
                      <h4 className="text-sm font-bold text-stone-900">
                        {comm.name}
                      </h4>
                      <span className="text-[11px] font-semibold text-stone-700 bg-stone-100 px-2 py-0.5 rounded border border-stone-200/60">
                        {comm.role}
                      </span>
                    </div>

                    <p className="text-xs text-stone-600 leading-relaxed">
                      {comm.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
