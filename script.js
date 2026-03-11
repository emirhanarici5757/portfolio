/* ============================================
   EMIRHAN ARICI — CV Portfolio Website
   JavaScript: i18n, Theme, Interactions
   ============================================ */

// ── i18n Translations ──
const translations = {
  tr: {
    // Nav
    navAbout: "Hakkımda",
    navEducation: "Eğitim",
    navSkills: "Yetenekler",
    navPortfolio: "Portföy",
    navHobbies: "İlgi Alanları",
    navContact: "İletişim",

    // Hero
    heroBadge: "İş ve Staj Fırsatlarına Açık",
    heroName: "Emirhan Arıcı",
    heroSubtitle: "Yeni Medya ve İletişim öğrencisi | Sosyal medya ve dijital tasarım tutkunu",
    heroBtn1: "Portföyümü Gör",
    heroBtn2: "İletişime Geç",

    // About
    aboutTitle: "Hakkımda",
    aboutSubtitle: "Dijital dünyada hikayeler anlatan bir içerik üreticisi",
    aboutText1: "Sosyal medya kullanmaktan ve tasarım yapmaktan keyif alan bir Yeni Medya ve İletişim öğrencisiyim. Dijital medyaya ilgi duyuyorum ve Photoshop gibi programlar hakkında daha fazla bilgi edinmeye hevesliyim.",
    aboutText2: "Grafik tasarım, video düzenleme, sosyal medya yönetimi ve UI/UX tasarımı alanlarında projeler geliştiriyorum. Öğrenmeye açık ve yaratıcı çözümler üretmeye tutkulu biriyim.",
    statProjects: "Proje",
    statSkills: "Yetenek",
    statGPA: "Not Ort.",

    // Education
    eduTitle: "Eğitim",
    eduSubtitle: "Akademik yolculuğum",
    eduUniName: "Üsküdar Üniversitesi",
    eduUniDept: "Yeni Medya ve İletişim (3. Sınıf)",
    eduUniDetail: "Not Ortalaması: 3.12 / 4.00",
    eduHighName: "Ataşehir İbrahim Müteferrika MTAL",
    eduHighDept: "Bilişim Teknolojileri — Web Tasarımı",
    eduHighDetail: "Web tasarımı alanında mesleki eğitim aldım.",
    eduMiddleName: "Mustafa Zeki Demir Ortaokulu",
    eduMiddleDept: "Ortaokul Eğitimi",
    eduMiddleDetail: "Temel eğitim dönemi.",
    eduUniDate: "2023 — Devam Ediyor",
    eduHighDate: "2019 — 2023",
    eduMiddleDate: "2015 — 2019",

    // Skills
    skillsTitle: "Yetenekler & Programlar",
    skillsSubtitle: "Kullandığım araçlar ve yetkinliklerim",
    canvaDesc: "Görsel tasarım ve reels içerik oluşturma",
    premiereDesc: "Temel video düzenleme ve kısa içerikler",
    photoshopDesc: "Görsel paylaşımlar ve logo tasarımı",
    excelDesc: "Tablo oluşturma ve veri düzenleme",
    wordpressDesc: "SEO uyumlu içerik yazarlığı",
    rstudioDesc: "Blog oluşturma ve veri görselleştirme",
    levelIntermediate: "Orta Seviye",
    levelBeginner: "Başlangıç",

    // Portfolio
    portfolioTitle: "Portföy",
    portfolioSubtitle: "Seçilmiş projelerim ve çalışmalarım",
    filterAll: "Tümü",
    filterDesign: "Tasarım",
    filterVideo: "Video",
    filterSocial: "Sosyal Medya",
    filterAcademic: "Akademik",
    project1Title: "Sosyal Medya Gönderi Tasarımları",
    project1Desc: "HÜR teknoloji haber markası için profesyonel sosyal medya gönderi tasarımları. OnePlus, Redmi ve telefon teknolojileri hakkında içerikler.",
    project2Title: "Kartvizit Tasarımı",
    project2Desc: "WojkCast YouTube Kanal Editörü olarak kişisel kartvizit tasarımı. Profesyonel marka kimliği çalışması.",
    project3Title: "Video Reels İçerikleri",
    project3Desc: "Sosyal medya için kısa video içerikleri ve reels düzenlemeleri. Yaratıcı görsel anlatım projeleri.",
    project4Title: "True Crime Sesli İçerik",
    project4Desc: "Elizabeth Báthory hakkında hazırlanmış sesli içerik prodüksiyonu. Podcast ve seslendirme çalışması.",
    project5Title: "WojkCast YouTube Kanalı",
    project5Desc: "YouTube kanal yönetimi, sunum hazırlama ve kanal büyüme stratejileri. İçerik planlaması ve analiz.",
    project6Title: "UI/UX & Akademik Projeler",
    project6Desc: "Modalya wireframe prototipi, persona çalışması, rakip analizi ve sosyal medya yönetimi final projeleri.",
    viewProject: "Projeyi İncele →",

    // Hobbies
    hobbiesTitle: "İlgi Alanları",
    hobbiesSubtitle: "Boş zamanlarımda neler yapıyorum",
    hobby1: "Video Oyunları",
    hobby2: "Sosyal Medya",
    hobby3: "Çizgi Roman",
    hobby4: "Gündem Takibi",
    hobby5: "Tarih Araştırma",
    hobby6: "Seyahat",

    // Contact
    contactTitle: "İletişim",
    contactSubtitle: "Bana ulaşın, birlikte çalışalım",
    contactEmail: "E-posta",
    contactPhone: "Telefon",
    contactAddress: "Adres",
    contactAddressVal: "Sancaktepe, İstanbul",
    formTitle: "Mesaj Gönder",
    formName: "Adınız",
    formEmail: "E-posta adresiniz",
    formMessage: "Mesajınız",
    formSend: "Gönder ✉",

    // Footer
    footerRights: "Tüm hakları saklıdır.",
  },

  en: {
    // Nav
    navAbout: "About",
    navEducation: "Education",
    navSkills: "Skills",
    navPortfolio: "Portfolio",
    navHobbies: "Interests",
    navContact: "Contact",

    // Hero
    heroBadge: "Open to Work & Internship Opportunities",
    heroName: "Emirhan Arıcı",
    heroSubtitle: "New Media & Communication Student | Passionate about social media & digital design",
    heroBtn1: "View Portfolio",
    heroBtn2: "Get in Touch",

    // About
    aboutTitle: "About Me",
    aboutSubtitle: "A content creator telling stories in the digital world",
    aboutText1: "I'm a New Media and Communication student who enjoys using social media and designing. I'm interested in digital media and eager to learn more about programs like Photoshop.",
    aboutText2: "I develop projects in graphic design, video editing, social media management, and UI/UX design. I'm open to learning and passionate about creating innovative solutions.",
    statProjects: "Projects",
    statSkills: "Skills",
    statGPA: "GPA",

    // Education
    eduTitle: "Education",
    eduSubtitle: "My academic journey",
    eduUniName: "Üsküdar University",
    eduUniDept: "New Media and Communication (3rd Year)",
    eduUniDetail: "GPA: 3.12 / 4.00",
    eduHighName: "Ataşehir İbrahim Müteferrika MTAL",
    eduHighDept: "Information Technology — Web Design",
    eduHighDetail: "Received vocational training in web design.",
    eduMiddleName: "Mustafa Zeki Demir Middle School",
    eduMiddleDept: "Middle School Education",
    eduMiddleDetail: "Foundation education period.",
    eduUniDate: "2023 — Present",
    eduHighDate: "2019 — 2023",
    eduMiddleDate: "2015 — 2019",

    // Skills
    skillsTitle: "Skills & Programs",
    skillsSubtitle: "Tools and competencies I work with",
    canvaDesc: "Visual design and reels content creation",
    premiereDesc: "Basic video editing and short-form content",
    photoshopDesc: "Visual posts and logo design",
    excelDesc: "Table creation and data management",
    wordpressDesc: "SEO-friendly content writing",
    rstudioDesc: "Blog creation and data visualization",
    levelIntermediate: "Intermediate",
    levelBeginner: "Beginner",

    // Portfolio
    portfolioTitle: "Portfolio",
    portfolioSubtitle: "Selected projects and works",
    filterAll: "All",
    filterDesign: "Design",
    filterVideo: "Video",
    filterSocial: "Social Media",
    filterAcademic: "Academic",
    project1Title: "Social Media Post Designs",
    project1Desc: "Professional social media post designs for HÜR tech news brand. Content about OnePlus, Redmi, and phone technologies.",
    project2Title: "Business Card Design",
    project2Desc: "Personal business card design as WojkCast YouTube Channel Editor. Professional brand identity work.",
    project3Title: "Video Reels Content",
    project3Desc: "Short video content and reels editing for social media. Creative visual storytelling projects.",
    project4Title: "True Crime Audio Content",
    project4Desc: "Audio content production about Elizabeth Báthory. Podcast and voiceover work.",
    project5Title: "WojkCast YouTube Channel",
    project5Desc: "YouTube channel management, presentation preparation, and channel growth strategies. Content planning and analysis.",
    project6Title: "UI/UX & Academic Projects",
    project6Desc: "Modalya wireframe prototype, persona study, competitor analysis, and social media management final projects.",
    viewProject: "View Project →",

    // Hobbies
    hobbiesTitle: "Interests",
    hobbiesSubtitle: "What I do in my free time",
    hobby1: "Video Games",
    hobby2: "Social Media",
    hobby3: "Comic Books",
    hobby4: "Current Events",
    hobby5: "History Research",
    hobby6: "Traveling",

    // Contact
    contactTitle: "Contact",
    contactSubtitle: "Reach out, let's work together",
    contactEmail: "Email",
    contactPhone: "Phone",
    contactAddress: "Address",
    contactAddressVal: "Sancaktepe, Istanbul",
    formTitle: "Send Message",
    formName: "Your Name",
    formEmail: "Your Email",
    formMessage: "Your Message",
    formSend: "Send ✉",

    // Footer
    footerRights: "All rights reserved.",
  },
};

let currentLang = localStorage.getItem("lang") || "tr";
let currentTheme = localStorage.getItem("theme") || "light";

// ── Initialize ──
document.addEventListener("DOMContentLoaded", () => {
  applyTheme(currentTheme);
  applyLanguage(currentLang);
  initScrollReveal();
  initNavbar();
  initPortfolioFilter();
  initSkillBars();
  initMobileNav();
});

// ── Theme Toggle ──
function applyTheme(theme) {
  document.documentElement.setAttribute("data-theme", theme);
  currentTheme = theme;
  localStorage.setItem("theme", theme);

  const themeIcon = document.querySelector(".theme-toggle .icon");
  const themeLabel = document.querySelector(".theme-toggle .label");
  if (themeIcon) themeIcon.textContent = theme === "dark" ? "☀️" : "🌙";
  if (themeLabel) themeLabel.textContent = theme === "dark" ? "Light" : "Dark";
}

function toggleTheme() {
  applyTheme(currentTheme === "dark" ? "light" : "dark");
}

// ── Language Toggle ──
function applyLanguage(lang) {
  currentLang = lang;
  localStorage.setItem("lang", lang);

  const t = translations[lang];
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (t[key]) {
      if (el.tagName === "INPUT" || el.tagName === "TEXTAREA") {
        el.placeholder = t[key];
      } else {
        el.textContent = t[key];
      }
    }
  });

  const langLabel = document.querySelector(".lang-toggle .label");
  if (langLabel) langLabel.textContent = lang === "tr" ? "EN" : "TR";

  document.documentElement.setAttribute("lang", lang);
}

function toggleLanguage() {
  applyLanguage(currentLang === "tr" ? "en" : "tr");
}

// ── Navbar Scroll ──
function initNavbar() {
  const navbar = document.querySelector(".navbar");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });

  // Active link highlighting
  const sections = document.querySelectorAll(".section[id]");
  const navLinks = document.querySelectorAll(".nav-links a[href^='#']");

  window.addEventListener("scroll", () => {
    let current = "";
    sections.forEach((section) => {
      const sectionTop = section.offsetTop - 100;
      if (window.scrollY >= sectionTop) {
        current = section.getAttribute("id");
      }
    });

    navLinks.forEach((link) => {
      link.classList.remove("active");
      if (link.getAttribute("href") === `#${current}`) {
        link.classList.add("active");
      }
    });
  });
}

// ── Mobile Nav ──
function initMobileNav() {
  const hamburger = document.querySelector(".hamburger");
  const navLinks = document.querySelector(".nav-links");

  if (hamburger) {
    hamburger.addEventListener("click", () => {
      hamburger.classList.toggle("active");
      navLinks.classList.toggle("open");
    });

    // Close on link click
    document.querySelectorAll(".nav-links a").forEach((link) => {
      link.addEventListener("click", () => {
        hamburger.classList.remove("active");
        navLinks.classList.remove("open");
      });
    });
  }
}

// ── Scroll Reveal ──
function initScrollReveal() {
  const reveals = document.querySelectorAll(".reveal");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
        }
      });
    },
    { threshold: 0.15 }
  );

  reveals.forEach((el) => observer.observe(el));
}

// ── Portfolio Filter ──
function initPortfolioFilter() {
  const filterBtns = document.querySelectorAll(".filter-btn");
  const cards = document.querySelectorAll(".portfolio-card");

  filterBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      filterBtns.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");

      const filter = btn.getAttribute("data-filter");

      cards.forEach((card) => {
        if (filter === "all" || card.getAttribute("data-category") === filter) {
          card.style.display = "block";
          card.style.animation = "fadeInUp 0.5s ease forwards";
        } else {
          card.style.display = "none";
        }
      });
    });
  });
}

// ── Skill Bars Animation ──
function initSkillBars() {
  const skillBars = document.querySelectorAll(".skill-bar");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const bar = entry.target;
          const width = bar.getAttribute("data-width");
          bar.style.width = width;
        }
      });
    },
    { threshold: 0.5 }
  );

  skillBars.forEach((bar) => observer.observe(bar));
}

// ── Fade In Up Animation (used by filter) ──
const styleSheet = document.createElement("style");
styleSheet.textContent = `
  @keyframes fadeInUp {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
  }
`;
document.head.appendChild(styleSheet);
