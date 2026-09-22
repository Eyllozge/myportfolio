import React, { useState } from 'react';
import { Language } from '../types';
import { portfolioData } from '../data/portfolioData';
import {
  Linkedin,
  Github,
  Check,
  ArrowRight,
  Copy,
  MapPin,
  Mail,
} from 'lucide-react';
import { motion } from 'motion/react';

interface HeroProps {
  lang: Language;
}

export const Hero: React.FC<HeroProps> = ({ lang }) => {
  const [copied, setCopied] = useState(false);
  const content = portfolioData[lang];
  const { meta } = content;

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(meta.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section
      id="hero"
      className="relative pt-28 pb-16 md:pt-36 md:pb-24 border-b border-stone-200/80 bg-[#FAF8F5]"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Subtle Location Tag */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: 'easeOut' }}
          className="flex items-center gap-1.5 text-xs font-medium text-stone-500 mb-5"
        >
          <MapPin className="w-3.5 h-3.5 text-stone-400" />
          <span>{meta.location}</span>
        </motion.div>

        {/* Editorial Headline & Identity */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.06, ease: 'easeOut' }}
          className="space-y-4 max-w-4xl"
        >
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-stone-900 tracking-tight leading-[1.12]">
            {meta.name}
          </h1>

          {/* Unified Realistic Title: bold sans + serif combination */}
          <div className="text-xl sm:text-2xl md:text-3xl text-stone-800 font-normal leading-snug">
            <span className="font-bold text-stone-900">
              {lang === 'tr' ? 'Backend Geliştirici' : 'Backend Developer'}
            </span>{' '}
            <span className="text-stone-400 font-light mx-1">|</span>{' '}
            <span className="font-serif italic text-[#6C3B24]">
              {lang === 'tr' ? 'LegalTech & AI Entegrasyonları' : 'LegalTech & AI Integrations'}
            </span>
          </div>

          <p className="text-base sm:text-lg text-stone-600 leading-relaxed pt-2 max-w-3xl">
            {meta.about}
          </p>
        </motion.div>

        {/* Core Expertise Strip (Clean architectural divider grid, warm tones) */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.12, ease: 'easeOut' }}
          className="my-10 py-6 border-y border-stone-200/90 grid grid-cols-2 md:grid-cols-4 gap-6 text-xs"
        >
          <div>
            <div className="text-stone-400 font-medium uppercase tracking-wider text-[11px] mb-1">
              Backend Core
            </div>
            <div className="text-stone-900 font-bold text-sm">FastAPI &amp; Python 3.12</div>
            <div className="text-stone-500 mt-0.5">Asenkron RESTful mimariler &amp; API</div>
          </div>

          <div>
            <div className="text-stone-400 font-medium uppercase tracking-wider text-[11px] mb-1">
              Database &amp; RAG
            </div>
            <div className="text-stone-900 font-bold text-sm">PostgreSQL &amp; pgvector</div>
            <div className="text-stone-500 mt-0.5">Vektör benzerlik aramaları &amp; RAG</div>
          </div>

          <div>
            <div className="text-stone-400 font-medium uppercase tracking-wider text-[11px] mb-1">
              Domain Focus
            </div>
            <div className="text-stone-900 font-bold text-sm">LegalTech Çözümleri</div>
            <div className="text-stone-500 mt-0.5">Marka-patent hukuku araçları, OCR</div>
          </div>

          <div>
            <div className="text-stone-400 font-medium uppercase tracking-wider text-[11px] mb-1">
              Project Ops
            </div>
            <div className="text-stone-900 font-bold text-sm">Süreç Koordinasyonu</div>
            <div className="text-stone-500 mt-0.5">150+ katılımcı, 5 kişilik proje ekibi</div>
          </div>
        </motion.div>

        {/* Call to Actions & Contacts */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.18, ease: 'easeOut' }}
          className="flex flex-wrap items-center gap-3"
        >
          <a
            href="#projects"
            id="hero-view-projects-btn"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md bg-stone-900 text-white font-semibold text-xs hover:bg-[#6C3B24] transition-all cursor-pointer shadow-2xs"
          >
            <span>{lang === 'tr' ? 'Projeleri İncele' : 'Explore Projects'}</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>

          <a
            href={`mailto:${meta.email}`}
            id="hero-direct-email-btn"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-md bg-stone-100/90 hover:bg-stone-200/80 border border-stone-200 text-stone-800 text-xs font-semibold transition-colors"
          >
            <Mail className="w-3.5 h-3.5 text-stone-500" />
            <span>{meta.email}</span>
          </a>

          <button
            onClick={handleCopyEmail}
            id="hero-copy-email-btn"
            className="inline-flex items-center gap-1.5 px-3.5 py-2.5 rounded-md bg-white hover:bg-stone-100 border border-stone-200 text-stone-700 text-xs font-medium transition-colors cursor-pointer shadow-2xs"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-[#6C3B24]" />
                <span className="text-[#6C3B24] font-semibold">{lang === 'tr' ? 'Kopyalandı' : 'Copied'}</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5 text-stone-400" />
                <span>{lang === 'tr' ? 'Kopyala' : 'Copy'}</span>
              </>
            )}
          </button>

          {/* Social links prominently positioned */}
          <a
            href={meta.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            id="hero-linkedin-btn"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-md bg-white hover:bg-stone-100 border border-stone-200 text-stone-800 text-xs font-semibold transition-colors shadow-2xs"
          >
            <Linkedin className="w-3.5 h-3.5 text-[#0A66C2]" />
            <span>LinkedIn</span>
          </a>

          <a
            href={meta.github}
            target="_blank"
            rel="noopener noreferrer"
            id="hero-github-btn"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-md bg-white hover:bg-stone-100 border border-stone-200 text-stone-800 text-xs font-semibold transition-colors shadow-2xs"
          >
            <Github className="w-3.5 h-3.5 text-stone-900" />
            <span>GitHub</span>
          </a>
        </motion.div>

      </div>
    </section>
  );
};
