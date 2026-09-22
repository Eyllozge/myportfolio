import React, { useState } from 'react';
import { Language } from './types';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ExperienceSection } from './components/ExperienceSection';
import { ProjectsSection } from './components/ProjectsSection';
import { SkillsSection } from './components/SkillsSection';
import { EducationLanguagesSection } from './components/EducationLanguagesSection';
import { CertificatesSection } from './components/CertificatesSection';
import { ContactSection } from './components/ContactSection';

export default function App() {
  const [lang, setLang] = useState<Language>('tr');

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#1C1917] font-sans antialiased selection:bg-[#6C3B24] selection:text-white">
      {/* Clean Editorial Navigation */}
      <Navbar
        lang={lang}
        onLanguageChange={setLang}
      />

      {/* Main Content Sections */}
      <main>
        <Hero lang={lang} />

        <ExperienceSection lang={lang} />

        <ProjectsSection lang={lang} />

        <SkillsSection lang={lang} />

        <EducationLanguagesSection lang={lang} />

        <CertificatesSection lang={lang} />
      </main>

      {/* Editorial Footer & Direct Contact */}
      <ContactSection lang={lang} />
    </div>
  );
}
