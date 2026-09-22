import React from 'react';
import { Language, EducationItem, CommunityItem } from '../types';
import { portfolioData } from '../data/portfolioData';
import { GraduationCap, Users2 } from 'lucide-react';

interface EducationCommunitiesSectionProps {
  lang: Language;
}

export const EducationCommunitiesSection: React.FC<EducationCommunitiesSectionProps> = ({
  lang,
}) => {
  const content = portfolioData[lang];

  return (
    <section id="education" className="py-20 md:py-28 border-b border-stone-200/80 bg-[#FAF8F5]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-14 pb-5 border-b border-stone-200/90">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#881337] block mb-1">
              {lang === 'tr' ? 'Akademik Geçmiş & Liderlik' : 'Academic & Engagement'}
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
              {lang === 'tr' ? (
                <>
                  Eğitim &amp; <span className="font-serif italic font-normal text-[#881337]">Topluluk</span>
                </>
              ) : (
                <>
                  Education &amp; <span className="font-serif italic font-normal text-[#881337]">Community</span>
                </>
              )}
            </h2>
          </div>
          <p className="text-sm text-stone-500 max-w-sm mt-2 sm:mt-0">
            {lang === 'tr'
              ? 'Akademik eğitim ve hukuk, yapay zeka ile mühendislik topluluklarındaki roller.'
              : 'Computer science education and active student chapter leadership.'}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Education Column */}
          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-center gap-2 border-b-2 border-stone-900 pb-2">
              <GraduationCap className="w-4 h-4 text-stone-900" />
              <h3 className="text-sm font-bold text-stone-900 uppercase tracking-wide">
                {lang === 'tr' ? 'Akademik Eğitim' : 'Formal Education'}
              </h3>
            </div>

            <div className="space-y-6">
              {content.education.map((edu: EducationItem, idx: number) => (
                <div
                  key={idx}
                  id={`education-entry-${idx}`}
                  className="space-y-2 py-4 border-b border-stone-200/80 last:border-b-0"
                >
                  <div className="flex justify-between items-baseline">
                    <h4 className="text-base font-bold text-stone-900">
                      {edu.degree}
                    </h4>
                    <span className="text-xs font-extrabold text-[#881337] bg-rose-50 px-2.5 py-0.5 rounded border border-rose-200/80">
                      GPA {edu.gpa}
                    </span>
                  </div>

                  <div className="flex items-center gap-2 text-xs font-semibold text-stone-600">
                    <span>{edu.institution}</span>
                    <span>•</span>
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
          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-center gap-2 border-b-2 border-stone-900 pb-2">
              <Users2 className="w-4 h-4 text-stone-900" />
              <h3 className="text-sm font-bold text-stone-900 uppercase tracking-wide">
                {lang === 'tr' ? 'Topluluk & Kulüp Rolleri' : 'Communities & Leadership'}
              </h3>
            </div>

            <div className="space-y-6">
              {content.communities.map((comm: CommunityItem, idx: number) => (
                <div
                  key={idx}
                  id={`community-entry-${idx}`}
                  className="space-y-1.5 py-4 border-b border-stone-200/80 last:border-b-0"
                >
                  <div className="flex justify-between items-baseline">
                    <h4 className="text-sm font-bold text-stone-900">
                      {comm.name}
                    </h4>
                    <span className="text-xs font-semibold text-stone-700 bg-stone-100 px-2 py-0.5 rounded">
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
    </section>
  );
};
