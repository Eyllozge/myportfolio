import {
  ExperienceItem,
  ProjectItem,
  SkillCategory,
  LanguageItem,
  CertificateItem,
  EducationItem,
  CommunityItem,
} from '../types';

export interface PortfolioContent {
  meta: {
    name: string;
    tagline: string;
    subtagline: string;
    about: string;
    email: string;
    linkedin: string;
    github: string;
    location: string;
    statusBadge: string;
    referencesNote: string;
  };
  navigation: {
    about: string;
    experience: string;
    projects: string;
    skills: string;
    education: string;
    languages: string;
    certificates: string;
    contact: string;
    viewCv: string;
  };
  stats: {
    gpa: string;
    gpaLabel: string;
    participants: string;
    participantsLabel: string;
    legaltechApps: string;
    legaltechAppsLabel: string;
    focus: string;
    focusLabel: string;
  };
  experiences: ExperienceItem[];
  projects: ProjectItem[];
  skillCategories: SkillCategory[];
  languages: LanguageItem[];
  certificates: CertificateItem[];
  education: EducationItem[];
  communities: CommunityItem[];
  contact: {
    heading: string;
    primaryTitle: string;
    primarySub: string;
    subheading: string;
    emailPrompt: string;
    copied: string;
    copyEmail: string;
    openEmail: string;
    legalNote: string;
  };
}

export const portfolioData: Record<'tr' | 'en', PortfolioContent> = {
  tr: {
    meta: {
      name: 'Özge Gündoğdu',
      tagline: 'Backend Geliştirici | LegalTech & AI Entegrasyonları',
      subtagline: 'Bilgisayar Programcılığı Öğrencisi · Python / FastAPI · Sistem Mimarisi & Proje Yönetimi',
      about:
        'Hukuk teknolojileri (LegalTech), veri hatları ve yapay zeka entegrasyonlu backend sistemleri geliştiren bir yazılımcıyım. Fırat Üniversitesi bünyesinde Scopus entegrasyonlu atıf sistemleri ve RAG mimarileri kurdum; Lawducation ekosisteminde marka-patent hukuku eğitim yazılımları ve OCR tabanlı yoklama otomasyonları üreterek 150+ katılımcılı süreçlerin teknik ve operasyonel koordinasyonunu üstlendim.',
      email: 'e.ozgegndogdu@gmail.com',
      linkedin: 'https://www.linkedin.com/in/eozgegundogdu',
      github: 'https://github.com/Eyllozge',
      location: 'Türkiye',
      statusBadge: 'Yeni Proje & İş Birliklerine Açık',
      referencesNote: 'Referanslar talep doğrultusunda memnuniyetle sunulacaktır.',
    },
    navigation: {
      about: 'Hakkımda',
      experience: 'Deneyim',
      projects: 'Projeler',
      skills: 'Yetenekler',
      education: 'Eğitim & Diller',
      languages: 'Diller',
      certificates: 'Sertifikalar',
      contact: 'İletişim',
      viewCv: 'Özgeçmiş Özeti (CV)',
    },
    stats: {
      gpa: '3.51',
      gpaLabel: 'GNO (Fırat Üniversitesi)',
      participants: '150+',
      participantsLabel: 'Yönetilen Katılımcı & 13 Aşama',
      legaltechApps: '4+',
      legaltechAppsLabel: 'Canlı LegalTech & Eğitim Sistemi',
      focus: 'FastAPI & RAG',
      focusLabel: 'Backend & Hukuk Teknolojisi Odağı',
    },
    experiences: [
      {
        id: 'firat-university-dit',
        role: 'Backend Geliştirici Stajyer (Backend Development Intern)',
        organization: 'Fırat Üniversitesi Dijital Dönüşüm ve Yazılım Ofisi',
        period: 'Temmuz 2026 – Eylül 2026',
        location: 'Elazığ, Türkiye',
        description:
          'Fırat Üniversitesi Rektörlüğü ve akademik kadrosu için kurum genelinde veri analitiği, dış API entegrasyonları, RAG tabanlı doküman analiz platformları ve araştırma raporlama sistemlerinin tasarımı ve devreye alınması.',
        impactMetrics: [
          { label: 'Kapsam', value: 'Tüm Üniversite Akademisyenleri' },
          { label: 'Senkronizasyon', value: '30 Günlük Otomatik Döngü' },
          { label: 'Hata & Kota Yönetimi', value: '429 Kota Algılayıcı Anahtar Rotasyonu' },
        ],
        subProjects: [
          {
            title: 'Scopus Entegre Yayın Takip Sistemi (Fırat Akademik Atıf Sistemi)',
            subtitle: 'Rektörlük Kurumsal ABS Alternatifi',
            description: [
              'Rektörlük için mevcut üniversite ABS sistemine alternatif olarak geliştirilen, kurum çapında fakülte düzeyinde Scopus yayın raporlaması sağlayan full-stack sistem tasarlandı ve canlıya alındı.',
              'Fırat Üniversitesi’ndeki tüm akademisyenlerin taranıp Scopus Author ID’leri ile eşleştirilmesi gerçekleştirildi.',
              'Makale/fakülte/akademisyen araması, akademisyen bazlı yayın listelemeleri, fakülte bazında yıllık ve aylık (ulusal/uluslararası kırılımlı) raporlama paneli ve gösterge paneli (toplam yayın, atıf, son 30 gün eklenenler) inşa edildi.',
              'Hibrit meta veri boru hattı (DOI üzerinden OpenAlex, yedekleme için Scopus abstract-retrieval; atıflar her zaman Scopus) içeren tazelik/önbellek mimarisi geliştirildi. Kota (429) aşımlarında otomatik Scopus API anahtar rotasyonu ve her çalışmayı SyncLog tablosuna kaydeden 30 günlük otomatik senkronizasyon motoru kuruldu.',
            ],
            techStack: ['FastAPI', 'SQLAlchemy', 'Alembic', 'PostgreSQL (Neon)', 'Render', 'Vercel', 'Elsevier Scopus API (ULAKBİM EKUAL)', 'OpenAlex API'],
            keyArchitecture: 'Hibrit Metadata Pipeline + Otomatik API Key Rotation + SyncLog Engine',
          },
          {
            title: 'NVIDIA Build Platform Araştırması & Teknik Raporu',
            subtitle: 'Model & Yetenek Değerlendirme Raporu',
            description: [
              'NVIDIA Build platformundaki gelişmiş modeller ve yetenekler (özellikle Nemotron OCR v2 ve NeMo Retriever) üzerinde kapsamlı araştırma yapıldı.',
              'Pratik test senaryoları, performans kıyaslamaları ve dokümantasyon içeren resmi teknik değerlendirme raporu hazırlandı.',
            ],
            techStack: ['NVIDIA Build', 'Nemotron OCR v2', 'NeMo Retriever', 'Teknik Raporlama'],
            keyArchitecture: 'Gelişmiş Belge Okuma ve Bilgi Getirme Mimarisi Analizi',
          },
          {
            title: 'SmartDocs AI — RAG Tabanlı PDF Soru-Cevap Platformu',
            subtitle: 'Retrieval-Augmented Generation Belge Zekası',
            description: [
              'Kullanıcıların yükledikleri PDF dokümanları üzerinden doğal dille sorular sormasını ve yanıtların doğrudan belge içeriğine dayandırılmasını sağlayan RAG platformu geliştirildi.',
              'Kapsam, staj süresine en verimli şekilde uyarlanarak çoklu belge analizinden optimize edilmiş çekirdek RAG mimarisine odaklandı.',
              'RAG mimarileriyle çalışılarak yerel vektör gömme (local embedding) modeli ile Google Gemini API cevap üretim motoru başarıyla birleştirildi.',
            ],
            techStack: ['Python 3.12', 'FastAPI', 'PostgreSQL', 'SQLAlchemy', 'pgvector', 'JWT Auth', 'pdfplumber', 'sentence-transformers', 'Google Gemini API', 'React + Vite (TypeScript)'],
            keyArchitecture: 'Local Embedding (sentence-transformers) + pgvector + Google Gemini API',
          },
        ],
        techStack: ['Python 3.12', 'FastAPI', 'PostgreSQL (Neon)', 'pgvector', 'SQLAlchemy', 'Alembic', 'Google Gemini API', 'Scopus API', 'OpenAlex', 'React'],
      },
      {
        id: 'lawducation-planning-tech',
        role: 'Eğitim Planlama Ekibi Üyesi & Teknik Geliştirici',
        organization: 'Lawducation Nitelikli Hukuk Programı (Qualified Law Program)',
        period: 'Temmuz 2024 – Eylül 2026',
        location: 'Türkiye (Hibrit / Uzaktan)',
        description:
          'Hukuk teknolojileri, marka-patent hukuku ve etkileşimli eğitim süreçlerinde hem uçtan uca yazılım geliştirme hem de 150+ katılımcı ve konuşmacıyı kapsayan operasyonel ve proje yönetimi.',
        responsibilities: [
          'Teknik Geliştirme: Canlı eğitim oturumlarında kullanılan üç interaktif eğitim uygulamasını (görsel tabanlı test, doğru/yanlış testi, sürükle-bırak eşleştirme egzersizi) FastAPI, PostgreSQL/Supabase ve vanilla JS/CSS kullanarak tek başına tasarladı, kodladı ve Vercel üzerinde devreye aldı. Backend mimarisi, veritabanı şeması, Supabase RLS yetkilendirmesi ve dağıtım yapılandırmasını uçtan uca yönetti.',
          'Katılımcı İletişimi & Yönetimi: 13 farklı aşamada yaklaşık 150+ katılımcıyla birebir iletişim süreçlerini yürüttü.',
          'Proje Süreç Yönetimi: 5 kişilik bir ekiple aşamaları planladı, zamanında ilerlemeyi sağladı ve operasyonel süreçleri yönetti.',
          'Etkinlik Moderasyonu: Oturumların ve çevrim içi etkinliklerin kesintisiz akışını sağlamak amacıyla moderatörlük yaptı.',
          'Paydaş İletişimi: Konuk konuşmacılar ve katılımcılarla tüm iletişim süreçlerini (e-posta trafiği, davet yönetimi, geri bildirim toplama) başarıyla koordine etti.',
        ],
        impactMetrics: [
          { label: 'Katılımcı', value: '150+ Kişi (13 Aşama)' },
          { label: 'Uygulama', value: '3 İnteraktif Eğitim Aracı' },
          { label: 'Ekip Büyüklüğü', value: '5 Kişilik Proje Ekibi' },
        ],
        techStack: ['FastAPI', 'PostgreSQL', 'Supabase', 'Supabase RLS', 'JavaScript', 'CSS', 'Vercel', 'Proje Yönetimi', 'Etkinlik Moderasyonu'],
      },
      {
        id: 'work-with-us',
        role: 'Kurucu (Founder)',
        organization: 'Work With Us Topluluğu',
        period: 'Eylül 2023 – Kasım 2025',
        location: 'Türkiye & Azerbaycan',
        description:
          'Öğrencilerin hayatlarını organize etmelerine, akademik ve kişisel hedeflerine ulaşmalarına destek olmak amacıyla kurulan uluslararası dijital topluluk projesi.',
        responsibilities: [
          'Akran Öğrenmesi (Peer Learning): Öğrencilerin çalışma rutinlerini yapılandırmalarına ve birbirlerine mentorluk desteği vermelerine odaklanan dijital topluluk projesini sıfırdan başlattı.',
          'Kültürlerarası İletişim: Türkiye ve Azerbaycan’dan katılımcıların yer aldığı projede kültürlerarası iş birliği ve iletişim süreçlerini yönetti.',
          'Eğitim Koordinasyonu: Kişisel gelişim ve akademik konulara odaklanan çevrim içi derslerin ve atölyelerin içeriklerini planladı ve oturumları modere etti.',
          'Gönüllü Yönetimi: Tamamı gönüllü öğrencilerden oluşan ekibin görev dağılımı, motivasyon takibi ve takım dinamiklerini idare etti.',
        ],
        impactMetrics: [
          { label: 'Erişim', value: 'Türkiye & Azerbaycan' },
          { label: 'Yapı', value: 'Tamamı Gönüllü Ekip' },
          { label: 'Faaliyet', value: 'Akran Öğrenmesi & Çevrim İçi Eğitimler' },
        ],
        techStack: ['Topluluk Liderliği', 'Kültürlerarası İletişim', 'Eğitim Planlama', 'Gönüllü Yönetimi', 'Discord / Notion'],
      },
    ],
    projects: [
      {
        id: 'lawducation-yoklama',
        title: 'Lawducation Yoklama Otomasyonu',
        subtitle: 'Tesseract OCR & Google Sheets Tabanlı Gerçek Zamanlı Katılım Takip Sistemi',
        category: 'legaltech',
        period: '2026',
        description:
          'Lawducation eğitim oturumları için geliştirilen, Türkçe dil destekli Tesseract OCR motoru ile ekran görüntülerinden veya yoklama listelerinden katılımcı verilerini saniyeler içinde ayıklayan ve servis hesabı (Service Account) API ile doğrudan Google E-Tablolar’a senkronize eden otomasyon sistemi.',
        highlights: [
          'Türkçe karakter desteğiyle eğitilmiş Tesseract OCR motoru entegrasyonu',
          'Google Sheets API (Google Service Account) ile anlık otomatik loglama',
          'Render ve Vercel üzerinde kesintisiz çalışan otomatik servis mimarisi',
          'Hukuk eğitimi süreçlerinde manuel yoklama yükünü sıfıra indiren pratik kullanıcı arayüzü',
        ],
        techStack: ['FastAPI', 'Python', 'Tesseract OCR (TR)', 'Google Sheets API', 'Render', 'Vercel'],
        deployment: 'Render (Backend) & Vercel (Frontend)',
        liveUrl: 'https://lawducationyoklama.vercel.app/',
        statusBadge: 'Canlıda / Aktif Kullanımda',
      },
      {
        id: 'lawducation-training-apps',
        title: 'Lawducation Eğitim Uygulamaları Serisi (Kurum için geliştirildi)',
        subtitle: 'Fikri Mülkiyet & Marka-Patent Hukuku İnteraktif Eğitim Paketi (Kurum İçin Geliştirildi)',
        category: 'legaltech',
        period: '2025 – Günümüz',
        description:
          'Hukuk öğrencileri ve stajyer avukatlar için marka, patent ve fikri mülkiyet eğitimlerinde canlı olarak kullanılan, kurum içi eğitim süreçlerine özel 3 adet web tabanlı interaktif sınav ve alıştırma modülü.',
        highlights: [
          'Canlıda deploy edilmiş interaktif sistemler (Kurum için geliştirildi)',
          'Görsel Tabanlı Marka Testi (M-P-GÖRSEL): Canlı marka/patent eğitimlerinde kullanılan interaktif görsel vaka testi.',
          'Doğru/Yanlış Testi (marka-patentdy): Marka ve patent hukuku mevzuatı için hızlı bilgi denetleme uygulaması.',
          'Sürükle-Bırak Eşleştirme Egzersizi: İlk SheetDB prototipinden FastAPI + PostgreSQL mimarisine yeniden yazılarak 30+ katılımcıya canlı sunuldu.',
          'Tüm sistemlerin REST API tasarımı, veritabanı şeması, Supabase RLS (Satır Düzeyinde Güvenlik) kuralları ve CORS yapılandırması tek elden üstlenildi.',
          'Geliştirilen ve dağıtılan tüm projeler 60+ kişilik bir kullanıcı grubuna açıldı ve Lawducation arşivinde kalıcı olarak kayıt altına alındı.',
        ],
        techStack: ['FastAPI', 'PostgreSQL (Supabase)', 'Supabase RLS', 'HTML5', 'CSS3', 'JavaScript', 'Vercel'],
        deployment: 'Vercel Serverless (Canlıda / Kurum İçi Kullanım)',
        database: 'Supabase PostgreSQL (RLS Korumalı)',
        statusBadge: 'Canlıda Deploy Edildi (Kurum İçin Geliştirildi)',
      },
      {
        id: 'smartdocs-ai',
        title: 'SmartDocs AI — RAG Tabanlı PDF Soru-Cevap Platformu',
        subtitle: 'Doküman Zekası & Hukuki/Akademik Metin Analizi',
        category: 'ai',
        period: '2026',
        description:
          'Hukuki sözleşmeler, makaleler ve akademik PDF dosyaları üzerinde doğal dille sorgulama yapmayı sağlayan, yanıtları doğrudan dokümanın ilgili paragraflarına referansla üreten RAG (Retrieval-Augmented Generation) mimarisi.',
        highlights: [
          'Yerel gömme modeli (sentence-transformers) ile harici servis maliyeti ve veri sızıntısı olmadan vektörleştirme',
          'PostgreSQL üzerinde pgvector eklentisiyle kosinüs benzerliği araması',
          'Google Gemini API entegrasyonu ile doküman bağlamına sıkı sıkıya bağlı cevap üretimi',
          'JWT kimlik doğrulama, pdfplumber ile yüksek doğruluklu metin ayıklama ve React + Vite arayüzü',
        ],
        techStack: ['Python 3.12', 'FastAPI', 'PostgreSQL', 'pgvector', 'sentence-transformers', 'Google Gemini API', 'pdfplumber', 'JWT Auth', 'React + Vite (TypeScript)'],
        deployment: 'Render (Backend) & Vercel (Frontend)',
        database: 'PostgreSQL + pgvector',
        statusBadge: 'RAG & LLM Entegrasyonu',
      },
      {
        id: 'scopus-tracking-system',
        title: 'Fırat Akademik Atıf Sistemi (Scopus Entegrasyonu)',
        subtitle: 'Kurum Çapında Fakülte ve Akademisyen Yayın Analitiği',
        category: 'backend',
        period: '2026',
        description:
          'Fırat Üniversitesi Rektörlüğü için üniversitenin tüm akademik personelinin Scopus yayın ve atıf metriklerini otomatik toplayan, kurumsal ABS sistemine alternatif olarak geliştirilen yüksek verimli veri boru hattı.',
        highlights: [
          'Hibrit meta veri boru hattı: DOI üzerinden OpenAlex ile hızlı tarama, eksik durumlarda Scopus abstract-retrieval; atıflar ise doğrudan Scopus API ile temin',
          '429 Kota aşımlarını algılayıp otomatik olarak yedek Scopus API anahtarlarına geçen rotasyon mimarisi',
          'Her çalışmayı SyncLog tablosuna kaydeden 30 günlük otomatik arka plan senkronizasyon motoru',
          'Fakülte bazında ulusal/uluslararası yayın oranı ve son 30 günün artış metriklerini sunan rektörlük gösterge paneli',
        ],
        techStack: ['FastAPI', 'SQLAlchemy', 'Alembic', 'PostgreSQL (Neon)', 'Elsevier Scopus API (ULAKBİM EKUAL)', 'OpenAlex API', 'Vercel', 'Render'],
        deployment: 'Render (Backend) & Vercel (Frontend)',
        database: 'Neon Serverless PostgreSQL',
        statusBadge: 'Üniversite Çapında Sistem',
      },
    ],
    skillCategories: [
      {
        title: 'Backend Geliştirme',
        iconName: 'Server',
        skills: [
          { name: 'Python', level: 'İleri Düzey', context: 'FastAPI, veri işleme, otomasyon, RAG mimarileri' },
          { name: 'FastAPI', level: 'Uzman / Çekirdek', context: 'Asenkron REST API, JWT auth, dependency injection, CORS' },
          { name: 'Java', level: 'Yetkin', context: 'Nesne yönelimli programlama, algoritma temelleri' },
          { name: 'SQLAlchemy & Alembic', level: 'İleri Düzey', context: 'ORM modelleme, veritabanı migrasyonları, pgvector entegrasyonu' },
          { name: 'RESTful API Mimarisi', level: 'Uzman', context: 'Sözleşme tabanlı API tasarımı, hata yönetimi, kota rotasyonu' },
        ],
      },
      {
        title: 'Veritabanı & Altyapı',
        iconName: 'Database',
        skills: [
          { name: 'PostgreSQL', level: 'İleri Düzey', context: 'İlişkisel modelleme, indeksleme, Neon serverless' },
          { name: 'pgvector', level: 'Yetkin', context: 'Vektör benzerlik aramaları (kosinüs/L2), RAG depolaması' },
          { name: 'Supabase & RLS', level: 'İleri Düzey', context: 'Satır Düzeyinde Güvenlik (RLS) politikaları, auth servisleri' },
          { name: 'Neon & Render', level: 'Yetkin', context: 'Bulut veritabanı yönetimi, mikroservis ve backend dağıtımı' },
          { name: 'Vercel Dağıtımı', level: 'Yetkin', context: 'Serverless mimari, frontend ve API yapılandırması' },
        ],
      },
      {
        title: 'LegalTech & Yapay Zeka',
        iconName: 'Scale',
        skills: [
          { name: 'LegalTech Uygulamaları', level: 'Uzmanlık', context: 'Marka-patent hukuku eğitim yazılımları, hukuk otomasyonu' },
          { name: 'RAG Mimarileri', level: 'Yetkin', context: 'Belge tabanlı soru-cevap, chunking, vektör arama' },
          { name: 'Google Gemini API', level: 'Yetkin', context: 'Doğal dil yanıtlama, doküman bağlamı ile yönlendirme' },
          { name: 'Local Embeddings (sentence-transformers)', level: 'Yetkin', context: 'Maliyet tasarruflu ve gizlilik odaklı vektör üretimi' },
          { name: 'Tesseract OCR (TR)', level: 'Yetkin', context: 'Türkçe doküman ve ekran görüntülerinden metin ayıklama' },
          { name: 'NVIDIA Build (Nemotron OCR v2 / NeMo Retriever)', level: 'Araştırma', context: 'Kurumsal model değerlendirme ve teknik raporlama' },
        ],
      },
      {
        title: 'Frontend & Kullanıcı Arayüzü',
        iconName: 'Layout',
        skills: [
          { name: 'HTML5 & CSS3', level: 'İleri Düzey', context: 'Semantik işaretleme, responsive tasarım, modern düzen' },
          { name: 'JavaScript (Vanilla & Modern ES6+)', level: 'Yetkin', context: 'Dinamik DOM manipülasyonu, asenkron fetch akışları' },
          { name: 'React & TypeScript', level: 'Yetkin', context: 'Bileşen mimarisi, tip güvenliği, Vite araç zinciri' },
          { name: 'Tailwind CSS', level: 'İleri Düzey', context: 'Hızlı ve kurumsal UI tasarımı, responsive arayüzler' },
        ],
      },
      {
        title: 'Araçlar & Proje Yönetimi',
        iconName: 'Cpu',
        skills: [
          { name: 'AI Geliştirme Araçları (AI Tools)', level: 'Yetkin', context: 'Google AI Studio, Gemini API, Claude, ChatGPT (Prompt mühendisliği & API entegrasyonu)' },
          { name: 'Git & GitHub', level: 'İleri Düzey', context: 'Versiyon kontrolü, repo yönetimi, açık kaynak iş birliği' },
          { name: 'Google Sheets API', level: 'Yetkin', context: 'Service Account entegrasyonu, gerçek zamanlı veri yazma' },
          { name: 'Proje & Süreç Yönetimi', level: 'Uygulamalı', context: '5 kişilik takım yönetimi, 150+ katılımcı koordinasyonu' },
          { name: 'Tasarım Araçları', level: 'Yetkin', context: 'Adobe Photoshop, Canva (eğitim ve arayüz görselleştirmeleri)' },
          { name: 'MS Office & İş Dokümantasyonu', level: 'İleri Düzey', context: 'Resmi raporlama, teknik dokümantasyon' },
        ],
      },
    ],
    languages: [
      {
        name: 'Türkçe',
        level: 'Anadil',
        cefr: 'C2',
        description: 'Yetkin ve akıcı ana dil iletişimi, teknik ve hukuki yazım.',
        percentage: 100,
      },
      {
        name: 'İngilizce',
        level: 'Mesleki Yeterlilik',
        cefr: 'B2',
        description: 'Teknik dokümantasyon, uluslararası API entegrasyonları ve profesyonel yazışma.',
        percentage: 75,
      },
      {
        name: 'Osmanlı Türkçesi',
        level: 'Metin Okuma & Arşiv',
        cefr: 'B1',
        description: 'Tarihi ve hukuki arşiv metinlerini anlama ve çözümleme yetkinliği.',
        percentage: 55,
      },
      {
        name: 'İspanyolca',
        level: 'Temel Seviye',
        cefr: 'A2',
        description: 'Günlük ve temel mesleki diyalog yeteneği.',
        percentage: 35,
      },
      {
        name: 'Almanca',
        level: 'Temel Seviye',
        cefr: 'A2',
        description: 'Temel iletişim ve temel yazılı metin kavrama.',
        percentage: 35,
      },
    ],
    certificates: [
      {
        id: 'c-quantum',
        title: 'QSummer Eğitimi',
        issuer: 'Quantum Turkey',
        category: 'ai',
      },
      {
        id: 'c-ai4future',
        title: 'AI4Future Programı',
        issuer: 'IBM & Kodluyoruz',
        category: 'ai',
      },
      {
        id: 'c-ibm-literacy',
        title: 'IBM AI Literacy (Yapay Zeka Okuryazarlığı)',
        issuer: 'IBM',
        category: 'ai',
      },
      {
        id: 'c-mef-ai',
        title: 'Understanding AI — An Introductory Guide',
        issuer: 'MEF Üniversitesi',
        category: 'ai',
      },
      {
        id: 'c-ibm-law',
        title: 'IBM AI in Law (Hukukta Yapay Zeka)',
        issuer: 'IBM',
        category: 'legal',
      },
      {
        id: 'c-lawducation-series',
        title: 'Hukuk Eğitimleri Dizisi (Bilişim Hukuku 101 / Fikri Mülkiyet 101 / Ceza Hukuku 101 / Hukukta Kariyer / 21. Yüzyıl Yetkinlikleri)',
        issuer: 'Lawducation',
        category: 'legal',
      },
      {
        id: 'c-yetgen',
        title: '21. Yüzyıl Yetkinlikleri Eğitim Programı',
        issuer: 'YetGen (Yetkin Gençler)',
        category: 'competency',
      },
      {
        id: 'c-hsbc-finance',
        title: 'Liseli Gençler İçin Finansal Okuryazarlık',
        issuer: 'HSBC',
        category: 'competency',
      },
      {
        id: 'c-linkedin-writing',
        title: 'Business Writing Principles (İş Yazımı İlkeleri)',
        issuer: 'LinkedIn Learning',
        category: 'writing',
      },
    ],
    education: [
      {
        degree: 'Bilgisayar Programcılığı (Ön Lisans)',
        institution: 'Fırat Üniversitesi',
        period: '2025 – 2027',
        gpa: '3.51 / 4.00 (GNO)',
        notes: 'Yüksek Onur Seviyesi Başarı, Algoritmalar, Veritabanı Sistemleri ve Yazılım Mimarisi.',
      },
    ],
    communities: [
      {
        name: 'Mühendert – Mühendis Üretkenlik Grubu',
        role: 'Üye',
        description: 'Mühendislik üretkenliği, yazılım disiplini ve teknik çalışma metodolojileri üzerine aktif katılım.',
      },
      {
        name: 'Lawducation',
        role: 'Eğitim Planlama Ekibi Üyesi & Teknik Geliştirici',
        description: 'Hukuk teknolojisi araçları geliştirme, 150+ katılımcılı eğitim aşamaları koordinasyonu.',
      },
      {
        name: 'YZGII – Fırat Üniversitesi Yapay Zeka & Görüntü İşleme Kulübü',
        role: 'Kulüp Üyesi',
        description: 'Bilgisayarlı görü, makine öğrenimi ve akademik yapay zeka projelerinde iş birliği.',
      },
    ],
    contact: {
      heading: 'İletişime Geçin',
      primaryTitle: 'Backend ve Fullstack Sistemler',
      primarySub: 'Özel olarak LegalTech veya herhangi bir yazılım konusunda ulaşabilirsiniz.',
      subheading: 'Hukuk teknolojileri (LegalTech), veri hatları, API mimarileri ve modern backend çözümleri üzerine her türlü iş birliği veya proje için iletişime geçebilirsiniz.',
      emailPrompt: 'Resmi iletişim adresi:',
      copyEmail: 'E-postayı Kopyala',
      copied: 'E-posta Kopyalandı!',
      openEmail: 'Doğrudan E-posta Gönder',
      legalNote: 'Referanslar ve detaylı proje dokümanları talep doğrultusunda sunulacaktır.',
    },
  },
  en: {
    meta: {
      name: 'Özge Gündoğdu',
      tagline: 'Backend Developer | LegalTech & AI Integrations',
      subtagline: 'Computer Programming Student · Python / FastAPI · System Architecture & Project Management',
      about:
        'Software developer specialized in LegalTech, data pipelines, and AI-grounded backend systems. Engineered institutional Scopus-integrated citation analytics and RAG architectures at Fırat University; built trademark & patent interactive law education platforms and OCR attendance automation within the Lawducation ecosystem, coordinating technical development and operations for 150+ participants.',
      email: 'e.ozgegndogdu@gmail.com',
      linkedin: 'https://www.linkedin.com/in/eozgegundogdu',
      github: 'https://github.com/Eyllozge',
      location: 'Turkey',
      statusBadge: 'Available for New Projects & Collaborations',
      referencesNote: 'References will be provided upon request.',
    },
    navigation: {
      about: 'About',
      experience: 'Experience',
      projects: 'Projects',
      skills: 'Skills',
      education: 'Education & Languages',
      languages: 'Languages',
      certificates: 'Certifications',
      contact: 'Contact',
      viewCv: 'Resume View (CV)',
    },
    stats: {
      gpa: '3.51',
      gpaLabel: 'GPA (Fırat University)',
      participants: '150+',
      participantsLabel: 'Managed Participants across 13 Phases',
      legaltechApps: '4+',
      legaltechAppsLabel: 'Production LegalTech Systems',
      focus: 'FastAPI & RAG',
      focusLabel: 'Backend & LegalTech Focus',
    },
    experiences: [
      {
        id: 'firat-university-dit',
        role: 'Backend Development Intern',
        organization: 'Fırat University Digital Transformation and Software Office',
        period: 'July 2026 – September 2026',
        location: 'Elazığ, Turkey',
        description:
          'Designed and deployed research analytics, hybrid metadata pipelines, RAG-based document Q&A platforms, and model evaluation reports for the Rectorate.',
        impactMetrics: [
          { label: 'Scope', value: 'All University Faculty & Academics' },
          { label: 'Sync Pipeline', value: '30-Day Automated Sync Cycle' },
          { label: 'Resilience', value: 'Auto Scopus 429 Key Rotation' },
        ],
        subProjects: [
          {
            title: 'Scopus-Integrated Publication Tracking System (Fırat Akademik Atıf Sistemi)',
            subtitle: 'Rectorate Institutional Alternative to Existing ABS System',
            description: [
              'Designed and deployed a full-stack system providing institution-wide, faculty-level Scopus publication reporting for the Rectorate — built as a streamlined alternative to the university’s existing ABS system; tracks all Fırat University academics and maps them to Scopus Author IDs.',
              'Implemented article/faculty/academic search, per-academic publication listings, faculty-based yearly/monthly reporting (national/international breakdown), and an executive dashboard (total publications, citations, last-30-days additions).',
              'Engineered a freshness/cache architecture with a hybrid metadata pipeline (OpenAlex via DOI, Scopus abstract-retrieval as fallback; citations always retrieved from Scopus). Built automatic Scopus API key rotation on quota (429) rate limits and a 30-day automated sync engine logging each run to a SyncLog table.',
            ],
            techStack: ['FastAPI', 'SQLAlchemy', 'Alembic', 'PostgreSQL (Neon)', 'Render', 'Vercel', 'Elsevier Scopus API (ULAKBİM EKUAL)', 'OpenAlex API'],
            keyArchitecture: 'Hybrid Metadata Pipeline + Dynamic 429 Key Rotation + SyncLog Engine',
          },
          {
            title: 'NVIDIA Build Platform Research & Technical Report',
            subtitle: 'Model & Skill Benchmarking',
            description: [
              'Researched and authored an extensive technical evaluation report analyzing models and skills on the NVIDIA Build platform, specifically Nemotron OCR v2 and NeMo Retriever.',
              'Conducted practical testing, performance benchmarks, and end-to-end documentation.',
            ],
            techStack: ['NVIDIA Build', 'Nemotron OCR v2', 'NeMo Retriever', 'Technical Documentation'],
            keyArchitecture: 'Evaluation of High-Throughput OCR and Information Retrieval Skills',
          },
          {
            title: 'SmartDocs AI — RAG-Based PDF Q&A Platform',
            subtitle: 'Retrieval-Augmented Generation Document Intelligence',
            description: [
              'Engineered a Retrieval-Augmented Generation (RAG) platform enabling users to ask natural-language questions over complex PDF documents and receive precise, grounded answers extracted from content.',
              'Scope was purposefully focused to deliver a hardened, complete RAG pipeline within the internship timeline.',
              'Combined local embedding generation (sentence-transformers) with Google Gemini API answer generation, leveraging pgvector for low-latency cosine similarity queries.',
            ],
            techStack: ['Python 3.12', 'FastAPI', 'PostgreSQL', 'SQLAlchemy', 'pgvector', 'JWT Auth', 'pdfplumber', 'sentence-transformers', 'Google Gemini API', 'React + Vite (TypeScript)'],
            keyArchitecture: 'Local Embedding (sentence-transformers) + pgvector + Google Gemini API',
          },
        ],
        techStack: ['Python 3.12', 'FastAPI', 'PostgreSQL (Neon)', 'pgvector', 'SQLAlchemy', 'Alembic', 'Google Gemini API', 'Scopus API', 'OpenAlex', 'React'],
      },
      {
        id: 'lawducation-planning-tech',
        role: 'Education Planning Team Member & Technical Developer',
        organization: 'Lawducation Qualified Law Program (Nitelikli Hukuk Programı)',
        period: 'July 2024 – September 2026',
        location: 'Turkey (Hybrid / Remote)',
        description:
          'Full-stack development of interactive legal education applications and led project operations, participant management, and moderation for 150+ legal participants across 13 phases.',
        responsibilities: [
          'Technical Development: Designed and built three interactive training applications (image-based quiz, true/false quiz, drag-and-drop matching exercise) for live training sessions using FastAPI, PostgreSQL/Supabase, and vanilla JS/CSS on Vercel — acting as the sole technical contributor across backend architecture, database schema, Supabase RLS security, and deployment.',
          'Participant Communication & Management: Managed one-on-one communication workflows with approximately 150+ participants across 13 distinct phases.',
          'Project Process Management: Planned project milestones, ensured timely progress, and managed operational execution with a 5-person team.',
          'Event Moderation: Moderated sessions and interactive online events to guarantee smooth delivery.',
          'Stakeholder Communication: Coordinated all communication streams (email traffic, speaker invitations, feedback aggregation) with guest jurists, attorneys, and participants.',
        ],
        impactMetrics: [
          { label: 'Participants', value: '150+ Across 13 Phases' },
          { label: 'Applications', value: '3 Interactive Legal Tools' },
          { label: 'Team Size', value: '5-Person Operational Team' },
        ],
        techStack: ['FastAPI', 'PostgreSQL', 'Supabase', 'Supabase RLS', 'JavaScript', 'CSS', 'Vercel', 'Project Management', 'Event Moderation'],
      },
      {
        id: 'work-with-us',
        role: 'Founder',
        organization: 'Work With Us Community',
        period: 'September 2023 – November 2025',
        location: 'Turkey & Azerbaijan',
        description:
          'Founded a digital peer-learning community empowering university and high school students to build structured daily habits, academic productivity, and cross-border collaboration.',
        responsibilities: [
          'Peer Learning: Initiated a digital community project focused on helping students organize their daily lives, study habits, and support one another.',
          'Intercultural Communication: Managed cross-cultural communication and collaborative programs between students from Turkey and Azerbaijan.',
          'Education Coordination: Planned and moderated online courses and interactive workshops focusing on personal development and academic growth.',
          'Volunteer Management: Handled task assignment, performance tracking, and motivation management for an all-volunteer student team.',
        ],
        impactMetrics: [
          { label: 'Reach', value: 'Turkey & Azerbaijan' },
          { label: 'Structure', value: 'All-Volunteer Student Team' },
          { label: 'Focus', value: 'Peer Mentorship & Academic Growth' },
        ],
        techStack: ['Community Leadership', 'Cross-Cultural Communication', 'Curriculum Planning', 'Volunteer Operations'],
      },
    ],
    projects: [
      {
        id: 'lawducation-yoklama',
        title: 'Lawducation Attendance Automation',
        subtitle: 'Real-Time Attendance Extraction with Tesseract OCR & Google Sheets API',
        category: 'legaltech',
        period: '2026',
        description:
          'An automated attendance tool built for Lawducation legal training cohorts, utilizing Turkish-trained Tesseract OCR to parse roster screenshots and participant lists, automatically synchronizing attendance to Google Sheets in real-time via a service-account API.',
        highlights: [
          'Tesseract OCR integration fine-tuned for Turkish legal names and characters',
          'Direct synchronization to Google Sheets via secure Google Service Account credentials',
          'Automated cloud deployment on Render and Vercel for continuous reliability',
          'Eliminated manual attendance logging overhead across multi-session training cohorts',
        ],
        techStack: ['FastAPI', 'Python', 'Tesseract OCR (TR)', 'Google Sheets API', 'Render', 'Vercel'],
        deployment: 'Render (Backend) & Vercel (Frontend)',
        liveUrl: 'https://lawducationyoklama.vercel.app/',
        statusBadge: 'Live in Production',
      },
      {
        id: 'lawducation-training-apps',
        title: 'Lawducation Training Applications Series (Developed for the Institution)',
        subtitle: 'Interactive Intellectual Property & Trademark-Patent Law Learning Suite (Institutional Deployment)',
        category: 'legaltech',
        period: '2025 – Present',
        description:
          'A suite of three web-based interactive training tools actively deployed and utilized in live trademark and patent law seminars for over 60+ participants, engineered specifically for internal cohort learning.',
        highlights: [
          'Production-deployed interactive suites (Developed for the institution)',
          'Image-Based Trademark Quiz (M-P-GÖRSEL): Interactive visual dispute quiz deployed in live patent/trademark sessions.',
          'True/False Quiz (marka-patentdy): Rapid-response knowledge-check tool for statutory trademark and patent provisions.',
          'Drag-and-Drop Matching Exercise: Rebuilt from an earlier SheetDB prototype into a clean FastAPI + PostgreSQL architecture; showcased live to 30+ participants.',
          'Owned the complete stack: REST API design, relational schema, Supabase RLS policies, CORS, and Vercel serverless deployment.',
          'All software tools were delivered to 60+ users and permanently archived within Lawducation institutional databases.',
        ],
        techStack: ['FastAPI', 'PostgreSQL (Supabase)', 'Supabase RLS', 'HTML5', 'CSS3', 'JavaScript', 'Vercel'],
        deployment: 'Vercel Serverless (Live / Internal Institutional Use)',
        database: 'Supabase PostgreSQL (RLS Protected)',
        statusBadge: 'Live in Production (Developed for Institution)',
      },
      {
        id: 'smartdocs-ai',
        title: 'SmartDocs AI — RAG-Based PDF Q&A Platform',
        subtitle: 'Document Intelligence & Legal/Academic Text Analysis',
        category: 'ai',
        period: '2026',
        description:
          'Retrieval-Augmented Generation (RAG) platform allowing users to interrogate legal contracts, research publications, and dense PDF documents in natural language, delivering grounded responses with source citations.',
        highlights: [
          'Local embedding model (sentence-transformers) eliminating third-party latency and protecting document privacy',
          'Vector similarity search powered by PostgreSQL with pgvector extension',
          'Google Gemini API integration delivering contextualized, hallucination-resistant answers',
          'JWT authentication, precision text extraction with pdfplumber, and React + Vite modern interface',
        ],
        techStack: ['Python 3.12', 'FastAPI', 'PostgreSQL', 'pgvector', 'sentence-transformers', 'Google Gemini API', 'pdfplumber', 'JWT Auth', 'React + Vite (TypeScript)'],
        deployment: 'Render (Backend) & Vercel (Frontend)',
        database: 'PostgreSQL + pgvector',
        statusBadge: 'RAG & LLM Integration',
      },
      {
        id: 'scopus-tracking-system',
        title: 'Fırat Academic Citation Tracking System (Scopus Integration)',
        subtitle: 'Institution-Wide Faculty & Scholar Publication Analytics',
        category: 'backend',
        period: '2026',
        description:
          'A backend analytics pipeline built for the Fırat University Rectorate as an alternative to the existing ABS system, tracking and aggregating publication metrics across all faculty academics via official Scopus APIs.',
        highlights: [
          'Hybrid metadata pipeline: Fast indexing via OpenAlex by DOI, falling back to Scopus abstract-retrieval; citations always verified via Scopus API',
          'Dynamic Scopus API key rotation architecture triggered on 429 quota exhaustion',
          '30-day automated background sync engine logging every execution to a dedicated SyncLog table',
          'Executive dashboard showing national vs. international breakdowns, monthly trends, and last-30-day velocity',
        ],
        techStack: ['FastAPI', 'SQLAlchemy', 'Alembic', 'PostgreSQL (Neon)', 'Elsevier Scopus API (ULAKBİM EKUAL)', 'OpenAlex API', 'Vercel', 'Render'],
        deployment: 'Render (Backend) & Vercel (Frontend)',
        database: 'Neon Serverless PostgreSQL',
        statusBadge: 'University-Wide Deployment',
      },
    ],
    skillCategories: [
      {
        title: 'Backend Engineering',
        iconName: 'Server',
        skills: [
          { name: 'Python', level: 'Advanced', context: 'FastAPI, data processing, automation, RAG pipelines' },
          { name: 'FastAPI', level: 'Expert / Core', context: 'Async REST APIs, JWT authentication, dependency injection, CORS' },
          { name: 'Java', level: 'Competent', context: 'OOP principles, software design patterns, data structures' },
          { name: 'SQLAlchemy & Alembic', level: 'Advanced', context: 'Relational ORM modeling, migrations, pgvector integration' },
          { name: 'RESTful Architecture', level: 'Expert', context: 'Contract-driven API design, quota failover, error logging' },
        ],
      },
      {
        title: 'Database & Infrastructure',
        iconName: 'Database',
        skills: [
          { name: 'PostgreSQL', level: 'Advanced', context: 'Relational modeling, indexing, Neon serverless architecture' },
          { name: 'pgvector', level: 'Proficient', context: 'Vector cosine/L2 distance search for RAG storage' },
          { name: 'Supabase & RLS', level: 'Advanced', context: 'Row Level Security policies, serverless auth' },
          { name: 'Neon & Render', level: 'Proficient', context: 'Cloud database administration, backend deployment' },
          { name: 'Vercel Deployment', level: 'Proficient', context: 'Serverless deployment, edge configuration, static hosting' },
        ],
      },
      {
        title: 'LegalTech & Artificial Intelligence',
        iconName: 'Scale',
        skills: [
          { name: 'LegalTech Applications', level: 'Specialization', context: 'Trademark/patent law interactive suites, legal automation' },
          { name: 'RAG Architectures', level: 'Proficient', context: 'Document Q&A, chunking strategies, vector embeddings' },
          { name: 'Google Gemini API', level: 'Proficient', context: 'Context-grounded answer generation, document reasoning' },
          { name: 'Local Embeddings (sentence-transformers)', level: 'Proficient', context: 'Cost-efficient, privacy-preserving semantic vectors' },
          { name: 'Tesseract OCR (TR)', level: 'Proficient', context: 'Turkish text extraction from rosters and documents' },
          { name: 'NVIDIA Build (Nemotron OCR v2 / NeMo Retriever)', level: 'Research', context: 'Model vision & retrieval skill evaluation' },
        ],
      },
      {
        title: 'Frontend & UI Development',
        iconName: 'Layout',
        skills: [
          { name: 'HTML5 & CSS3', level: 'Advanced', context: 'Semantic layout, responsive design, modern CSS' },
          { name: 'JavaScript (Vanilla & Modern ES6+)', level: 'Proficient', context: 'DOM interaction, asynchronous fetch pipelines' },
          { name: 'React & TypeScript', level: 'Proficient', context: 'Component architecture, type safety, Vite tooling' },
          { name: 'Tailwind CSS', level: 'Advanced', context: 'Utility-first styling, corporate aesthetic, adaptive density' },
        ],
      },
      {
        title: 'Tools & Project Leadership',
        iconName: 'Cpu',
        skills: [
          { name: 'AI Developer Tools (AI Tools)', level: 'Proficient', context: 'Google AI Studio, Gemini API, Claude, ChatGPT (Prompt engineering & API integration)' },
          { name: 'Git & GitHub', level: 'Advanced', context: 'Version control, branch management, collaborative workflows' },
          { name: 'Google Sheets API', level: 'Proficient', context: 'Service Account integration, real-time spreadsheet sync' },
          { name: 'Project & Operations Management', level: 'Applied', context: '5-person team leadership, 150+ participant coordination' },
          { name: 'Design Tools', level: 'Proficient', context: 'Adobe Photoshop, Canva (UI & educational collateral)' },
          { name: 'MS Office & Technical Documentation', level: 'Advanced', context: 'Formal reporting, specification sheets' },
        ],
      },
    ],
    languages: [
      {
        name: 'Turkish',
        level: 'Native Speaker',
        cefr: 'C2',
        description: 'Native mastery in legal, technical, and academic expression.',
        percentage: 100,
      },
      {
        name: 'English',
        level: 'Professional Working Proficiency',
        cefr: 'B2',
        description: 'Technical documentation, global API integrations, and professional writing.',
        percentage: 75,
      },
      {
        name: 'Ottoman Turkish',
        level: 'Archival & Text Reading',
        cefr: 'B1',
        description: 'Ability to comprehend, transcribe, and analyze historical and legal archival texts.',
        percentage: 55,
      },
      {
        name: 'Spanish',
        level: 'Elementary',
        cefr: 'A2',
        description: 'Basic daily conversational fluency and elementary reading.',
        percentage: 35,
      },
      {
        name: 'German',
        level: 'Elementary',
        cefr: 'A2',
        description: 'Fundamental conversational abilities and basic text comprehension.',
        percentage: 35,
      },
    ],
    certificates: [
      {
        id: 'c-quantum',
        title: 'QSummer Training',
        issuer: 'Quantum Turkey',
        category: 'ai',
      },
      {
        id: 'c-ai4future',
        title: 'AI4Future Program',
        issuer: 'IBM & Kodluyoruz',
        category: 'ai',
      },
      {
        id: 'c-ibm-literacy',
        title: 'IBM AI Literacy',
        issuer: 'IBM',
        category: 'ai',
      },
      {
        id: 'c-mef-ai',
        title: 'Understanding AI — An Introductory Guide',
        issuer: 'MEF University',
        category: 'ai',
      },
      {
        id: 'c-ibm-law',
        title: 'IBM AI in Law',
        issuer: 'IBM',
        category: 'legal',
      },
      {
        id: 'c-lawducation-series',
        title: 'Law Program Series (IT Law 101 / IP Law 101 / Criminal Law 101 / Career in Law / 21st Century Competencies)',
        issuer: 'Lawducation',
        category: 'legal',
      },
      {
        id: 'c-yetgen',
        title: '21st Century Competencies Training Program',
        issuer: 'YetGen (Yetkin Gençler)',
        category: 'competency',
      },
      {
        id: 'c-hsbc-finance',
        title: 'Financial Literacy for High School Students',
        issuer: 'HSBC',
        category: 'competency',
      },
      {
        id: 'c-linkedin-writing',
        title: 'Business Writing Principles',
        issuer: 'LinkedIn Learning',
        category: 'writing',
      },
    ],
    education: [
      {
        degree: 'Computer Programming (Associate Degree)',
        institution: 'Fırat University',
        period: '2025 – 2027',
        gpa: '3.51 / 4.00 (GPA)',
        notes: 'High Honors Standing, Algorithms, Database Systems, and Software Architecture.',
      },
    ],
    communities: [
      {
        name: 'Mühendert – Engineer Productivity Group',
        role: 'Member',
        description: 'Active participation in engineering productivity, developer discipline, and software methodology.',
      },
      {
        name: 'Lawducation',
        role: 'Education Planning Team Member & Technical Developer',
        description: 'Building legaltech tooling, managing 150+ participants across 13 phases.',
      },
      {
        name: 'YZGII – Fırat University AI & Image Processing Club',
        role: 'Club Member',
        description: 'Collaboration on computer vision, machine learning, and academic AI initiatives.',
      },
    ],
    contact: {
      heading: 'Get in Touch',
      primaryTitle: 'Backend & Fullstack Systems',
      primarySub: 'Feel free to reach out regarding LegalTech or any software development initiative.',
      subheading: 'Open for collaborations, technical architecture discussions, and development across LegalTech, robust backend systems, and API pipelines.',
      emailPrompt: 'Official contact email:',
      copyEmail: 'Copy Email Address',
      copied: 'Email Copied!',
      openEmail: 'Send Direct Email',
      legalNote: 'Formal references and detailed architectural documentation will be provided upon request.',
    },
  },
};
