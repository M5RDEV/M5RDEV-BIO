// --- Data ---------------------------------------------------------
const socialLinksData = [
  { platform: 'youtube', icon: 'fab fa-youtube', url: 'https://youtube.com/@M5RDEV' },
  { platform: 'instagram', icon: 'fab fa-instagram', url: 'https://instagram.com/M5RDEV' },
  { platform: 'github', icon: 'fab fa-github', url: 'https://github.com/M5RDEV' },
  { platform: 'website', icon: 'fas fa-globe', url: 'https://m5rdev.github.io/M5RDEV' },
  { platform: 'twitter', icon: 'fab fa-twitter', url: 'https://twitter.com/M5RDEV' },
  { platform: 'whatsapp', icon: 'fab fa-whatsapp', url: 'https://whatsapp.com/channel/0029Vb6KQUGGJP8EJv0tpG2v' },
  { platform: 'telegram', icon: 'fab fa-telegram-plane', url: 'https://t.me/m5rdevchannel' },
  { platform: 'linkedin', icon: 'fab fa-linkedin-in', url: 'https://linkedin.com/in/M5RDEV' }
];

const translations = {
  ar: { dir: 'rtl', langAttr: 'ar', bio: 'مبرمج مواقع و برامج ومطور ألعاب', location: 'دمنهور، البحيرة، مصر', social: ['قناة اليوتيوب','إنستجرام','جيت هاب','الموقع الإلكتروني','تويتر','واتساب','تيليجرام','لينكد إن'], copyright: '© 2025 جميع الحقوق محفوظة M5RDEV' },
  en: { dir: 'ltr', langAttr: 'en', bio: 'Web & software developer, game dev', location: 'Damanhur, Beheira, Egypt', social: ['YouTube','Instagram','GitHub','Website','Twitter','WhatsApp','Telegram','LinkedIn'], copyright: '© 2025 All rights reserved M5RDEV' },
  es: { dir: 'ltr', langAttr: 'es', bio: 'Desarrollador web, software y juegos', location: 'Damanhur, Beheira, Egipto', social: ['YouTube','Instagram','GitHub','Sitio web','Twitter','WhatsApp','Telegram','LinkedIn'], copyright: '© 2025 Todos los derechos reservados M5RDEV' },
  fr: { dir: 'ltr', langAttr: 'fr', bio: 'Développeur web, logiciel et jeux', location: 'Damanhour, Beheira, Égypte', social: ['Chaîne YouTube','Instagram','GitHub','Site web','Twitter','WhatsApp','Telegram','LinkedIn'], copyright: '© 2025 Tous droits réservés M5RDEV' },
  zh: { dir: 'ltr', langAttr: 'zh', bio: '网站与软件开发者，游戏开发', location: '达曼胡尔，贝海拉，埃及', social: ['YouTube','Instagram','GitHub','网站','Twitter','WhatsApp','Telegram','LinkedIn'], copyright: '© 2025 版权所有 M5RDEV' },
  hi: { dir: 'ltr', langAttr: 'hi', bio: 'वेब और सॉफ़्टवेयर डेवलपर, गेम डेवलपर', location: 'डमनहुर, बीचेरा, मिस्र', social: ['YouTube','Instagram','GitHub','वेबसाइट','Twitter','WhatsApp','Telegram','LinkedIn'], copyright: '© 2025 सर्वाधिकार सुरक्षित M5RDEV' },
  pt: { dir: 'ltr', langAttr: 'pt', bio: 'Desenvolvedor web, software e jogos', location: 'Damanhur, Beheira, Egito', social: ['YouTube','Instagram','GitHub','Website','Twitter','WhatsApp','Telegram','LinkedIn'], copyright: '© 2025 Todos os direitos reservados M5RDEV' },
  bn: { dir: 'ltr', langAttr: 'bn', bio: 'ওয়েব ও সফটওয়্যার ডেভেলপার, গেম ডেভ', location: 'ডামানহুর, বেহেইরা, মিশর', social: ['YouTube','Instagram','GitHub','ওয়েবসাইট','Twitter','WhatsApp','Telegram','LinkedIn'], copyright: '© 2025 সর্বস্বত্ব সংরক্ষিত M5RDEV' },
  ru: { dir: 'ltr', langAttr: 'ru', bio: 'Веб и софт разработчик, разработчик игр', location: 'Даманхур, Бехейра, Египет', social: ['YouTube','Instagram','GitHub','Веб-сайт','Twitter','WhatsApp','Telegram','LinkedIn'], copyright: '© 2025 Все права защищены M5RDEV' },
  tr: { dir: 'ltr', langAttr: 'tr', bio: 'Web ve yazılım geliştiricisi, oyun geliştiricisi', location: 'Damanhur, Beheira, Mısır', social: ['YouTube','Instagram','GitHub','Web Sitesi','Twitter','WhatsApp','Telegram','LinkedIn'], copyright: '© 2025 Tüm hakları saklıdır M5RDEV' },
  ur: { dir: 'rtl', langAttr: 'ur', bio: 'ویب اور سافٹ ویئر ڈویلپر، گیم ڈویلپر', location: 'ڈمنہور، بہیرہ، مصر', social: ['یوٹیوب','انسٹاگرام','گیٹ ہب','ویب سائٹ','ٹوئٹر','واٹس ایپ','ٹیلیگرام','لنکڈ اِن'], copyright: '© 2025 جملہ حقوق محفوظ ہیں M5RDEV' }
};

// --- State & DOM refs --------------------------------------------
let currentLang = localStorage.getItem('siteLang') || document.documentElement.lang || 'ar';
let currentPage = 0;
const linksPerPage = 4;

const socialLinksContainer = document.getElementById('socialLinks');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const langBtn = document.getElementById('langBtn');
const langDropdown = document.getElementById('langDropdown');

// --- Helpers -----------------------------------------------------
function updateNavForDirection(dir) {
  const prevIcon = prevBtn.querySelector('i');
  const nextIcon = nextBtn.querySelector('i');
  if (dir === 'rtl') {
    prevIcon.className = 'fas fa-chevron-right';
    nextIcon.className = 'fas fa-chevron-left';
  } else {
    prevIcon.className = 'fas fa-chevron-left';
    nextIcon.className = 'fas fa-chevron-right';
  }
}

function getTranslation(key) {
  return translations[currentLang] || translations.ar;
}

// --- Social links rendering -------------------------------------
function displayCurrentLinks() {
  socialLinksContainer.innerHTML = '';
  const totalPages = Math.ceil(socialLinksData.length / linksPerPage);
  if (currentPage < 0) currentPage = 0;
  if (currentPage > totalPages - 1) currentPage = totalPages - 1;

  const start = currentPage * linksPerPage;
  socialLinksData.slice(start, start + linksPerPage).forEach((link, idx) => {
    const globalIdx = start + idx;
    const text = (translations[currentLang] && translations[currentLang].social[globalIdx]) || link.platform;
    const a = document.createElement('a');
    a.href = link.url;
    a.target = '_blank';
    a.className = `social-link ${link.platform}`;
    a.style.animationDelay = `${0.1 + idx * 0.05}s`;
    a.innerHTML = `
      <div class="link-content">
        <div class="link-icon"><i class="${link.icon}"></i></div>
        <span class="link-text">${text}</span>
      </div>
      <i class="fas fa-arrow-left link-arrow"></i>
    `;
    socialLinksContainer.appendChild(a);
  });

  prevBtn.disabled = currentPage === 0;
  nextBtn.disabled = currentPage >= Math.ceil(socialLinksData.length / linksPerPage) - 1;
  prevBtn.classList.toggle('disabled', prevBtn.disabled);
  nextBtn.classList.toggle('disabled', nextBtn.disabled);
}

// --- Navigation --------------------------------------------------
prevBtn.addEventListener('click', () => {
  if (currentPage > 0) { currentPage--; displayCurrentLinks(); }
});
nextBtn.addEventListener('click', () => {
  if (currentPage < Math.ceil(socialLinksData.length / linksPerPage) - 1) { currentPage++; displayCurrentLinks(); }
});

// --- Language dropdown & options --------------------------------
function setLangIconToX() {
  const icon = langBtn.querySelector('i');
  if (icon) icon.className = 'fas fa-xmark';
}
function setLangIconToGlobe() {
  const icon = langBtn.querySelector('i');
  if (icon) icon.className = 'fas fa-globe';
}

function showLangDropdown() {
  langDropdown.removeAttribute('hidden');
  langDropdown.classList.remove('hide');
  langDropdown.classList.add('show');
  langBtn.classList.add('open');
  langBtn.setAttribute('aria-expanded', 'true');
  setLangIconToX();
}
function hideLangDropdown() {
  langDropdown.classList.remove('show');
  langDropdown.classList.add('hide');
  langBtn.classList.remove('open');
  langBtn.setAttribute('aria-expanded', 'false');
  setLangIconToGlobe();
  setTimeout(() => langDropdown.setAttribute('hidden', ''), 180);
}

function renderLangOptions() {
  const opts = Array.from(document.querySelectorAll('.lang-option'));
  opts.forEach(opt => {
    // skip if already structured
    if (!opt.querySelector('.label')) {
      const lang = opt.getAttribute('data-lang');
      const label = document.createElement('span');
      label.className = 'label';
      label.textContent = opt.textContent.trim();
      opt.textContent = '';
      opt.appendChild(label);
      const check = document.createElement('span');
      check.className = 'check';
      check.innerHTML = '<i class="fas fa-check"></i>';
      opt.appendChild(check);
    }
    opt.classList.toggle('selected', opt.getAttribute('data-lang') === currentLang);

    // attach click handler (idempotent)
    if (!opt._langHandlerAttached) {
      opt.addEventListener('click', () => {
        const sel = opt.getAttribute('data-lang');
        applyLanguage(sel);
        currentLang = sel;
        renderLangOptions();
        hideLangDropdown();
      });
      opt._langHandlerAttached = true;
    }
  });
}

// toggle dropdown when pressing the button
langBtn.addEventListener('click', (e) => {
  if (langDropdown.hasAttribute('hidden')) showLangDropdown();
  else hideLangDropdown();
});

// close when clicking outside
document.addEventListener('click', (e) => {
  if (!e.target.closest('.lang-switcher') && !langDropdown.hasAttribute('hidden')) {
    hideLangDropdown();
  }
});

// --- Apply language (UI text + direction + nav icons) ------------
function applyLanguage(lang) {
  if (!translations[lang]) return;
  currentLang = lang;
  localStorage.setItem('siteLang', lang);
  const t = translations[lang];
  document.documentElement.lang = t.langAttr;
  document.documentElement.dir = t.dir;

  const bioEl = document.getElementById('profileBio');
  const locEl = document.getElementById('profileLocation');
  const copyrightEl = document.getElementById('copyrightText');
  if (bioEl) bioEl.textContent = t.bio;
  if (locEl) locEl.textContent = t.location;
  if (copyrightEl) copyrightEl.textContent = t.copyright;

  updateNavForDirection(t.dir);
  displayCurrentLinks();
}

// --- Init --------------------------------------------------------
renderLangOptions();
applyLanguage(currentLang);
currentPage = 0;
displayCurrentLinks();

// Keep existing hover/click feedback for social links
document.addEventListener('mouseover', e => {
  const link = e.target.closest('.social-link');
  if (link) link.style.transition = 'all 0.4s cubic-bezier(0.34,1.56,0.64,1)';
});
document.addEventListener('mouseout', e => {
  const link = e.target.closest('.social-link');
  if (link) link.style.transition = 'all 0.4s cubic-bezier(0.4,0,0.2,1)';
});
document.addEventListener('click', e => {
  const link = e.target.closest('.social-link');
  if (link) {
    link.style.transform = 'scale(0.95)';
    setTimeout(() => (link.style.transform = ''), 100);
  }
});