import React from 'react';
import { Language } from '../types';
import { portfolioData } from '../data/portfolioData';
import { X, Printer, Mail, Linkedin, Github } from 'lucide-react';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang: Language;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({
  isOpen,
  onClose,
  lang,
}) => {
  if (!isOpen) return null;

  const content = portfolioData[lang];
  const { meta, experiences, projects, skillCategories, languages, certificates, education } = content;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-stone-900/60 backdrop-blur-xs overflow-y-auto no-print">
      <div className="relative w-full max-w-4xl bg-[#FAF8F5] border border-stone-300 rounded-xl shadow-2xl my-8 overflow-hidden flex flex-col max-h-[90vh]">
        
        {/* Modal Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 bg-stone-100/90 border-b border-stone-200">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#881337]"></span>
            <h3 className="text-sm font-bold text-stone-900">
              {lang === 'tr' ? 'Resmi Özgeçmiş (Curriculum Vitae)' : 'Official Curriculum Vitae'}
            </h3>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              id="resume-modal-print-btn"
              className="px-3.5 py-1.5 rounded-md bg-[#881337] hover:bg-[#9F1239] text-white text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer shadow-xs"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>{lang === 'tr' ? 'Yazdır / PDF Olarak Kaydet' : 'Print / Save PDF'}</span>
            </button>

            <button
              onClick={onClose}
              id="resume-modal-close-btn"
              className="p-1.5 rounded-md text-stone-500 hover:text-stone-900 hover:bg-stone-200 transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Executive Clean Printable Document */}
        <div className="overflow-y-auto p-6 sm:p-10 space-y-8 text-stone-800 text-sm font-sans bg-white">
          
          {/* Document Header */}
          <div className="border-b border-stone-200 pb-6">
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
              <div>
                <h1 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
                  {meta.name}
                </h1>
                <p className="text-base font-serif italic text-[#881337] mt-1">
                  {meta.tagline}
                </p>
                <p className="text-xs font-medium text-stone-500 mt-1">
                  {meta.location}
                </p>
              </div>

              <div className="space-y-1 text-xs text-stone-600 sm:text-right">
                <div className="flex sm:justify-end items-center gap-1.5">
                  <Mail className="w-3.5 h-3.5 text-stone-400" />
                  <span>{meta.email}</span>
                </div>
                <div className="flex sm:justify-end items-center gap-1.5">
                  <Linkedin className="w-3.5 h-3.5 text-stone-400" />
                  <span>linkedin.com/in/eozgegundogdu</span>
                </div>
                <div className="flex sm:justify-end items-center gap-1.5">
                  <Github className="w-3.5 h-3.5 text-stone-400" />
                  <span>github.com/Eyllozge</span>
                </div>
              </div>
            </div>

            <div className="mt-4 pt-4 border-t border-stone-100 text-xs text-stone-700 leading-relaxed">
              {meta.about}
            </div>
          </div>

          {/* Education */}
          <div className="space-y-3">
            <h2 className="text-xs font-bold uppercase tracking-wider text-stone-900 border-b border-stone-200 pb-1">
              {lang === 'tr' ? 'EĞİTİM' : 'EDUCATION'}
            </h2>
            {education.map((edu, i) => (
              <div key={i} className="flex justify-between items-start text-xs">
                <div>
                  <div className="font-bold text-stone-900">{edu.degree}</div>
                  <div className="text-stone-700 font-medium">{edu.institution}</div>
                  {edu.notes && <div className="text-stone-500 mt-0.5">{edu.notes}</div>}
                </div>
                <div className="text-right">
                  <span className="font-semibold text-stone-800">{edu.period}</span>
                  <div className="text-[#881337] font-bold">GPA {edu.gpa}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Experience */}
          <div className="space-y-4">
            <h2 className="text-xs font-bold uppercase tracking-wider text-stone-900 border-b border-stone-200 pb-1">
              {lang === 'tr' ? 'İŞ VE PROJE DENEYİMİ' : 'PROFESSIONAL EXPERIENCE'}
            </h2>
            {experiences.map((exp) => (
              <div key={exp.id} className="space-y-1.5 text-xs">
                <div className="flex justify-between items-start">
                  <div>
                    <span className="font-bold text-stone-900">{exp.role}</span>
                    <span className="text-stone-400 mx-1.5">•</span>
                    <span className="font-semibold text-stone-700">{exp.organization}</span>
                  </div>
                  <span className="text-stone-500 font-medium">{exp.period}</span>
                </div>
                <p className="text-stone-600 leading-normal">{exp.description}</p>
                {exp.responsibilities && (
                  <ul className="list-disc list-inside space-y-0.5 text-stone-700 pl-1">
                    {exp.responsibilities.map((hl, idx) => (
                      <li key={idx} className="leading-normal">{hl}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>

          {/* Key Projects */}
          <div className="space-y-3">
            <h2 className="text-xs font-bold uppercase tracking-wider text-stone-900 border-b border-stone-200 pb-1">
              {lang === 'tr' ? 'SEÇİLMİŞ MÜHENDİSLİK PROJELERİ' : 'SELECTED SYSTEMS'}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              {projects.map((proj) => (
                <div key={proj.id} className="p-3 rounded-lg border border-stone-200 bg-stone-50/50 space-y-1">
                  <div className="flex justify-between items-center">
                    <span className="font-bold text-stone-900">{proj.title}</span>
                    <span className="text-stone-500 text-[11px] font-medium">{proj.period}</span>
                  </div>
                  <p className="text-stone-600 text-[11px] leading-normal">{proj.description}</p>
                  <div className="text-[10px] text-stone-500 font-medium">
                    {proj.techStack.join(', ')}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Skills Grid */}
          <div className="space-y-3">
            <h2 className="text-xs font-bold uppercase tracking-wider text-stone-900 border-b border-stone-200 pb-1">
              {lang === 'tr' ? 'TEKNİK VE MESLEKİ YETKİNLİKLER' : 'TECHNICAL EXPERTISE'}
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-xs">
              {skillCategories.map((cat, idx) => (
                <div key={idx} className="p-2.5 rounded bg-stone-50 border border-stone-200">
                  <div className="font-bold text-stone-900 text-[11px] mb-1">{cat.title}</div>
                  <div className="text-[11px] text-stone-600 space-y-0.5">
                    {cat.skills.map((s, sIdx) => (
                      <div key={sIdx}>• {s.name}</div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Languages & Certifications footer */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2 text-xs">
            <div className="space-y-2">
              <h3 className="font-bold text-stone-900 border-b border-stone-200 pb-1">
                {lang === 'tr' ? 'DİLLER' : 'LANGUAGES'}
              </h3>
              <div className="space-y-1 text-stone-700">
                {languages.map((l, i) => (
                  <div key={i} className="flex justify-between">
                    <span>{l.name}</span>
                    <span className="font-medium text-stone-600">{l.level} ({l.cefr})</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-2">
              <h3 className="font-bold text-stone-900 border-b border-stone-200 pb-1">
                {lang === 'tr' ? 'SERTİFİKALAR' : 'CERTIFICATIONS'}
              </h3>
              <div className="space-y-1 text-stone-700">
                {certificates.slice(0, 5).map((c) => (
                  <div key={c.id} className="truncate">
                    <span className="font-semibold text-stone-900">{c.title}</span> - <span className="text-stone-500">{c.issuer}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Footer note */}
          <div className="pt-4 border-t border-stone-200 text-center text-[11px] text-stone-500">
            {meta.referencesNote}
          </div>

        </div>
      </div>
    </div>
  );
};
