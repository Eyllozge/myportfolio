import React, { useState } from 'react';
import { Language, ProjectItem } from '../types';
import { portfolioData } from '../data/portfolioData';
import {
  ArrowUpRight,
  CheckCircle2,
} from 'lucide-react';
import { motion } from 'motion/react';

interface ProjectsSectionProps {
  lang: Language;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ lang }) => {
  const content = portfolioData[lang];
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const filteredProjects = content.projects.filter((p) => {
    if (activeCategory === 'all') return true;
    return p.category === activeCategory;
  });

  return (
    <section id="projects" className="py-20 md:py-28 border-b border-stone-200/80 bg-[#FAF8F5]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-12 pb-5 border-b border-stone-200/90">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#6C3B24] block mb-1">
              {lang === 'tr' ? 'Seçilmiş Sistemler' : 'Portfolio Systems'}
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
              {lang === 'tr' ? (
                <>
                  <span className="font-serif italic font-normal text-[#6C3B24]">Projeler</span>
                </>
              ) : (
                <>
                  <span className="font-serif italic font-normal text-[#6C3B24]">Projects</span>
                </>
              )}
            </h2>
          </div>

          {/* Segmented Filter Tabs */}
          <div className="flex items-center gap-1 mt-4 sm:mt-0 p-1 bg-stone-100 rounded-md border border-stone-200">
            {[
              { id: 'all', label: lang === 'tr' ? 'Tümü' : 'All' },
              { id: 'legaltech', label: 'LegalTech' },
              { id: 'backend', label: 'Backend & Veri' },
              { id: 'ai', label: 'AI & RAG' },
            ].map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-3 py-1.5 rounded text-xs font-medium transition-all cursor-pointer ${
                  activeCategory === cat.id
                    ? 'bg-white text-stone-900 shadow-2xs font-semibold'
                    : 'text-stone-600 hover:text-stone-900'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Crisp Architectural Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
          {filteredProjects.map((project: ProjectItem) => (
            <motion.article
              key={project.id}
              layout
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="p-7 rounded-lg border border-stone-200 bg-white shadow-2xs hover:shadow-xs hover:border-stone-300 transition-all flex flex-col justify-between group"
            >
              <div className="space-y-4">
                <div className="flex flex-wrap items-center justify-between gap-2 text-xs font-medium text-stone-500">
                  <div className="flex items-center gap-2">
                    <span className="px-2 py-0.5 rounded bg-stone-100 text-stone-800 font-semibold text-[11px]">
                      {project.period}
                    </span>
                    <span className="text-stone-300">•</span>
                    <span className="uppercase text-[11px] font-bold text-stone-500 tracking-wider">
                      {project.category}
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    {project.statusBadge && (
                      <span className="inline-flex items-center px-2 py-0.5 rounded text-[11px] font-semibold bg-[#F7F2EB] text-[#6C3B24] border border-[#DFCAC0]">
                        {project.statusBadge}
                      </span>
                    )}

                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 text-[#6C3B24] hover:text-[#542D1B] font-semibold transition-colors"
                      >
                        <span>{lang === 'tr' ? 'Canlı İncele' : 'Live System'}</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </a>
                    )}
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-stone-900 group-hover:text-[#6C3B24] transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs font-semibold text-stone-500 mt-1">
                    {project.subtitle}
                  </p>
                </div>

                <p className="text-sm text-stone-600 leading-relaxed">
                  {project.description}
                </p>

                {/* Highlights */}
                <ul className="space-y-1.5 text-xs text-stone-700 pt-1">
                  {project.highlights.map((hl, hIdx) => (
                    <li key={hIdx} className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#6C3B24] shrink-0 mt-0.5" />
                      <span>{hl}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technologies */}
              <div className="pt-6 mt-6 border-t border-stone-100 flex flex-wrap gap-1.5 text-xs">
                {project.techStack.map((tech, tIdx) => (
                  <span
                    key={tIdx}
                    className="px-2 py-0.5 rounded bg-stone-50 border border-stone-200 text-stone-700 font-medium text-[11px]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>

      </div>
    </section>
  );
};
