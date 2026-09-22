import React, { useState } from 'react';
import { Language, ExperienceItem } from '../types';
import { portfolioData } from '../data/portfolioData';
import {
  ChevronDown,
  ChevronUp,
  MapPin,
  CheckCircle2,
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface ExperienceSectionProps {
  lang: Language;
}

export const ExperienceSection: React.FC<ExperienceSectionProps> = ({ lang }) => {
  const content = portfolioData[lang];
  const [expandedId, setExpandedId] = useState<string>('firat-university-dit');

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? '' : id);
  };

  return (
    <section id="experience" className="py-20 md:py-28 border-b border-stone-200/80 bg-[#FAF8F5]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Section Header with Bold Sans + Italic Serif pairing */}
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-12 pb-5 border-b border-stone-200/90">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#6C3B24] block mb-1">
              {lang === 'tr' ? 'Mesleki Yolculuk' : 'Career Track'}
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
              {lang === 'tr' ? (
                <>
                  İş &amp; Proje <span className="font-serif italic font-normal text-[#6C3B24]">Deneyimi</span>
                </>
              ) : (
                <>
                  Professional <span className="font-serif italic font-normal text-[#6C3B24]">Experience</span>
                </>
              )}
            </h2>
          </div>
          <p className="text-sm text-stone-500 max-w-sm mt-2 sm:mt-0">
            {lang === 'tr'
              ? 'Akademik kurumlar, LegalTech platformları ve teknik koordinasyon rolleri.'
              : 'Institutional backend architecture, LegalTech platforms, and project coordination.'}
          </p>
        </div>

        {/* Linear Elegant Timeline */}
        <div className="divide-y divide-stone-200/90">
          {content.experiences.map((exp: ExperienceItem) => {
            const isExpanded = expandedId === exp.id;
            return (
              <div
                key={exp.id}
                id={`experience-entry-${exp.id}`}
                className="py-8 transition-colors"
              >
                {/* Header Row */}
                <div
                  onClick={() => toggleExpand(exp.id)}
                  className="flex flex-col md:flex-row md:items-baseline justify-between gap-3 cursor-pointer select-none group"
                >
                  <div className="space-y-1">
                    <div className="flex flex-wrap items-center gap-2.5">
                      <h3 className="text-lg sm:text-xl font-bold text-stone-900 group-hover:text-[#6C3B24] transition-colors">
                        {exp.role}
                      </h3>
                      <span className="text-stone-300 hidden sm:inline">•</span>
                      <span className="text-sm font-semibold text-stone-700">
                        {exp.organization}
                      </span>
                    </div>

                    {exp.location && (
                      <div className="flex items-center gap-1.5 text-xs text-stone-500 font-medium">
                        <MapPin className="w-3.5 h-3.5 text-stone-400" />
                        <span>{exp.location}</span>
                      </div>
                    )}
                  </div>

                  <div className="flex items-center gap-4 text-xs font-semibold text-stone-500">
                    <span className="px-2.5 py-1 rounded-md bg-stone-100 text-stone-800 border border-stone-200">
                      {exp.period}
                    </span>
                    <button
                      type="button"
                      className="p-1 rounded text-stone-400 group-hover:text-stone-800 transition-colors"
                      aria-label="Toggle details"
                    >
                      {isExpanded ? <ChevronUp className="w-4 h-4 text-[#6C3B24]" /> : <ChevronDown className="w-4 h-4" />}
                    </button>
                  </div>
                </div>

                {/* Primary Role Description */}
                <p className="text-sm sm:text-base text-stone-600 leading-relaxed mt-3 max-w-4xl">
                  {exp.description}
                </p>

                {/* Tech Tags inline */}
                {exp.techStack && exp.techStack.length > 0 && (
                  <div className="flex flex-wrap gap-1.5 pt-3">
                    {exp.techStack.map((tech, tIdx) => (
                      <span
                        key={tIdx}
                        className="text-xs px-2.5 py-0.5 rounded-md bg-stone-100/90 text-stone-700 border border-stone-200/70 font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                )}

                {/* Collapsible Deep Details */}
                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.28, ease: 'easeInOut' }}
                      className="overflow-hidden pt-6 mt-4 border-t border-stone-200/60 space-y-6"
                    >
                      {/* Sub-projects breakdown if any (Fırat Üniversitesi DİT) */}
                      {exp.subProjects && exp.subProjects.length > 0 && (
                        <div className="space-y-3">
                          <span className="text-xs font-bold uppercase tracking-wider text-stone-800 block">
                            {lang === 'tr' ? 'Geliştirilen Temel Sistemler' : 'Key Architectural Deliverables'}
                          </span>

                          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            {exp.subProjects.map((sub, sIdx) => (
                              <div
                                key={sIdx}
                                className="p-4 rounded-lg bg-white border border-stone-200 shadow-2xs space-y-2"
                              >
                                <h4 className="text-xs font-bold text-stone-900">
                                  {sub.title}
                                </h4>
                                <ul className="space-y-1 text-xs text-stone-600">
                                  {sub.description.map((desc, dIdx) => (
                                    <li key={dIdx} className="leading-relaxed">
                                      • {desc}
                                    </li>
                                  ))}
                                </ul>
                                <div className="flex flex-wrap gap-1 pt-1">
                                  {sub.techStack.map((tag, tIdx) => (
                                    <span
                                      key={tIdx}
                                      className="text-[10px] font-medium px-1.5 py-0.5 rounded bg-stone-50 border border-stone-200 text-stone-600"
                                    >
                                      {tag}
                                    </span>
                                  ))}
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Bullet Deliverables */}
                      {exp.responsibilities && exp.responsibilities.length > 0 && (
                        <div className="space-y-2">
                          <span className="text-xs font-bold uppercase tracking-wider text-stone-800 block">
                            {lang === 'tr' ? 'Sorumluluklar ve Somut Çıktılar' : 'Responsibilities & Concrete Outcomes'}
                          </span>
                          <ul className="space-y-2 text-xs sm:text-sm text-stone-700">
                            {exp.responsibilities.map((resp, rIdx) => (
                              <li key={rIdx} className="flex items-start gap-2.5">
                                <CheckCircle2 className="w-4 h-4 text-[#6C3B24] shrink-0 mt-0.5" />
                                <span className="leading-relaxed">{resp}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
