import React, { useState, useEffect } from 'react';
import { Language } from '../types';
import { portfolioData } from '../data/portfolioData';
import { Menu, X, FileText } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface NavbarProps {
  lang: Language;
  onLanguageChange: (lang: Language) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  lang,
  onLanguageChange,
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const content = portfolioData[lang];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#experience', label: content.navigation.experience },
    { href: '#projects', label: content.navigation.projects },
    { href: '#skills', label: content.navigation.skills },
    { href: '#education-languages', label: content.navigation.education },
    { href: '#certificates', label: content.navigation.certificates },
    { href: '#contact', label: content.navigation.contact },
  ];

  return (
    <motion.header
      id="main-navbar"
      initial={{ y: -16, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#FAF8F5]/92 backdrop-blur-md border-b border-stone-200/80 shadow-[0_1px_3px_rgba(0,0,0,0.03)] py-3'
          : 'bg-transparent py-4 sm:py-5'
      }`}
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Clean Editorial Navigation Links */}
        <nav className="hidden md:flex items-center gap-7 lg:gap-8" aria-label="Main Navigation">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              id={`nav-link-${link.href.replace('#', '')}`}
              className="text-xs font-semibold text-stone-600 hover:text-stone-950 transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1.5px] after:bg-[#6C3B24] hover:after:w-full after:transition-all after:duration-200"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Language Switcher on the right */}
        <div className="hidden md:flex items-center">
          <div
            id="language-switcher-pill"
            className="flex items-center text-xs font-medium text-stone-500 border border-stone-200 rounded-md p-0.5 bg-stone-100/70"
          >
            <button
              id="lang-switch-tr"
              onClick={() => onLanguageChange('tr')}
              className={`px-2.5 py-1 rounded transition-all cursor-pointer ${
                lang === 'tr'
                  ? 'text-stone-900 bg-white shadow-2xs font-bold'
                  : 'hover:text-stone-900'
              }`}
            >
              TR
            </button>
            <button
              id="lang-switch-en"
              onClick={() => onLanguageChange('en')}
              className={`px-2.5 py-1 rounded transition-all cursor-pointer ${
                lang === 'en'
                  ? 'text-stone-900 bg-white shadow-2xs font-bold'
                  : 'hover:text-stone-900'
              }`}
            >
              EN
            </button>
          </div>
        </div>

        {/* Mobile nav bar */}
        <div className="flex items-center justify-between w-full md:hidden">
          <div
            id="mobile-language-switcher"
            className="flex items-center text-xs font-medium text-stone-500 border border-stone-200 rounded-md p-0.5 bg-stone-100/70"
          >
            <button
              id="mobile-lang-switch-tr"
              onClick={() => onLanguageChange('tr')}
              className={`px-2.5 py-1 rounded transition-all ${
                lang === 'tr' ? 'text-stone-900 bg-white font-bold shadow-2xs' : 'text-stone-600'
              }`}
            >
              TR
            </button>
            <button
              id="mobile-lang-switch-en"
              onClick={() => onLanguageChange('en')}
              className={`px-2.5 py-1 rounded transition-all ${
                lang === 'en' ? 'text-stone-900 bg-white font-bold shadow-2xs' : 'text-stone-600'
              }`}
            >
              EN
            </button>
          </div>

          <button
            id="mobile-menu-toggle-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded text-stone-700 hover:bg-stone-100 focus:outline-none"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            id="mobile-nav-dropdown"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-[#FAF8F5] border-b border-stone-200 px-6 py-4 shadow-md overflow-hidden"
          >
            <div className="flex flex-col space-y-3">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-sm font-semibold text-stone-700 hover:text-[#6C3B24] py-1"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};
