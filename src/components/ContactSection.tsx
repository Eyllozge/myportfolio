import React, { useState } from 'react';
import { Language } from '../types';
import { portfolioData } from '../data/portfolioData';
import {
  Mail,
  Copy,
  Check,
  ArrowUp,
  MapPin,
  Linkedin,
  Github,
} from 'lucide-react';

interface ContactSectionProps {
  lang: Language;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ lang }) => {
  const content = portfolioData[lang];
  const { meta, contact } = content;
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(meta.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="bg-[#1C1917] text-stone-300 pt-20 pb-14 border-t border-stone-800">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
        
        {/* Contact Banner with Editorial Typography */}
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-10">
          <div className="space-y-4 max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-widest text-[#DFCAC0] block">
              {contact.heading}
            </span>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-stone-100 tracking-tight leading-tight">
              {lang === 'tr' ? (
                <>
                  Backend &amp; Fullstack <span className="font-serif italic font-normal text-[#DFCAC0]">Sistemler</span>
                </>
              ) : (
                <>
                  Backend &amp; Fullstack <span className="font-serif italic font-normal text-[#DFCAC0]">Systems</span>
                </>
              )}
            </h2>

            <p className="text-sm sm:text-base text-stone-300 leading-relaxed">
              {lang === 'tr'
                ? 'Özel olarak LegalTech ya da herhangi bir yazılım konusunda dilediğiniz zaman iletişime geçebilirsiniz.'
                : 'Feel free to reach out regarding LegalTech or any software and backend development challenges.'}
            </p>

            <div className="flex items-center gap-2 text-xs font-medium text-stone-400 pt-1">
              <MapPin className="w-3.5 h-3.5 text-stone-500" />
              <span>{meta.location}</span>
              <span className="text-stone-600">•</span>
              <span>{lang === 'tr' ? 'Tam Zamanlı / Uzaktan / Hibrit' : 'Full-time / Remote / Hybrid'}</span>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-2.5 shrink-0">
            <a
              href={`mailto:${meta.email}`}
              id="footer-mail-link"
              className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-md bg-[#6C3B24] hover:bg-[#542D1B] text-white font-semibold text-xs transition-colors shadow-xs"
            >
              <Mail className="w-3.5 h-3.5 text-white" />
              <span>{meta.email}</span>
            </a>

            <button
              onClick={handleCopy}
              id="footer-copy-email-btn"
              className="inline-flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-md bg-stone-900 hover:bg-stone-800 text-stone-200 hover:text-white font-medium text-xs border border-stone-800 transition-colors cursor-pointer"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-emerald-400">{lang === 'tr' ? 'Kopyalandı' : 'Copied'}</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5 text-stone-400" />
                  <span>{lang === 'tr' ? 'Kopyala' : 'Copy'}</span>
                </>
              )}
            </button>

            <a
              href={meta.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              id="footer-linkedin-btn"
              className="inline-flex items-center gap-1.5 px-3.5 py-2.5 rounded-md bg-stone-900 hover:bg-stone-800 border border-stone-800 text-stone-200 hover:text-white text-xs font-semibold transition-colors"
            >
              <Linkedin className="w-3.5 h-3.5 text-[#0A66C2]" />
              <span>LinkedIn</span>
            </a>

            <a
              href={meta.github}
              target="_blank"
              rel="noopener noreferrer"
              id="footer-github-btn"
              className="inline-flex items-center gap-1.5 px-3.5 py-2.5 rounded-md bg-stone-900 hover:bg-stone-800 border border-stone-800 text-stone-200 hover:text-white text-xs font-semibold transition-colors"
            >
              <Github className="w-3.5 h-3.5 text-stone-200" />
              <span>GitHub</span>
            </a>
          </div>
        </div>

        {/* Footer Meta Row */}
        <div className="pt-8 border-t border-stone-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-400">
          <div>
            <span className="text-stone-200 font-bold">Özge Gündoğdu</span>
            <span className="mx-2 text-stone-600">•</span>
            <span>{meta.referencesNote}</span>
          </div>

          <div className="flex items-center gap-5">
            <a
              href={meta.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-stone-100 transition-colors font-medium"
            >
              LinkedIn
            </a>
            <a
              href={meta.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-stone-100 transition-colors font-medium"
            >
              GitHub
            </a>
            <a
              href={`mailto:${meta.email}`}
              className="hover:text-stone-100 transition-colors font-medium"
            >
              Email
            </a>
            <button
              onClick={scrollToTop}
              className="p-2 rounded bg-stone-900 text-stone-400 hover:text-stone-100 hover:bg-stone-800 transition-colors cursor-pointer ml-1"
              title="Yukarı Çık / Scroll top"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
