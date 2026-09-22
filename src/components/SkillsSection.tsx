import React from 'react';
import { Language, SkillCategory } from '../types';
import { portfolioData } from '../data/portfolioData';

interface SkillsSectionProps {
  lang: Language;
}

export const SkillsSection: React.FC<SkillsSectionProps> = ({ lang }) => {
  const content = portfolioData[lang];

  return (
    <section id="skills" className="py-20 md:py-28 border-b border-stone-200/80 bg-[#FAF8F5]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-14 pb-5 border-b border-stone-200/90">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#6C3B24] block mb-1">
              {lang === 'tr' ? 'Teknik Yetkinlikler' : 'Technical Proficiencies'}
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
              {lang === 'tr' ? (
                <>
                  Uzmanlık &amp; <span className="font-serif italic font-normal text-[#6C3B24]">Yetenekler</span>
                </>
              ) : (
                <>
                  Skills &amp; <span className="font-serif italic font-normal text-[#6C3B24]">Expertise</span>
                </>
              )}
            </h2>
          </div>
          <p className="text-sm text-stone-500 max-w-sm mt-2 sm:mt-0">
            {lang === 'tr'
              ? 'Backend mimarileri, veri mühendisliği ve yapay zeka entegrasyon deneyimi.'
              : 'Backend architectures, data engineering, and applied AI integration experience.'}
          </p>
        </div>

        {/* Crisp Tabular Matrix (No templated counters like '5 Yetkinlik', pure clean rows) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-14 gap-y-12">
          {content.skillCategories.map((cat: SkillCategory, idx: number) => (
            <div key={idx} className="space-y-4">
              <div className="border-b-2 border-stone-900 pb-2.5">
                <h3 className="text-sm font-bold text-stone-900 uppercase tracking-wide">
                  {cat.title}
                </h3>
              </div>

              <div className="divide-y divide-stone-200/70">
                {cat.skills.map((skill, sIdx) => (
                  <div
                    key={sIdx}
                    className="py-2.5 flex items-baseline justify-between gap-4 group"
                  >
                    <span className="text-sm font-semibold text-stone-900 group-hover:text-[#6C3B24] transition-colors">
                      {skill.name}
                    </span>

                    {skill.context && (
                      <span className="text-xs text-stone-500 font-medium text-right">
                        {skill.context}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
