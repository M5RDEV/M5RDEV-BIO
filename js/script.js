// Social links data and page logic (moved from index.html)
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

// Translations for top 10 languages (names and key UI strings)
const translations = {
    ar: {
        dir: 'rtl', langAttr: 'ar',
        bio: 'مبرمج مواقع و برامج ومطور ألعاب',
        location: 'دمنهور، البحيرة، مصر',
        social: ['قناة اليوتيوب', 'إنستجرام', 'جيت هاب', 'الموقع الإلكتروني', 'تويتر', 'واتساب', 'تيليجرام', 'لينكد إن'],
        copyright: '© 2025 جميع الحقوق محفوظة M5RDEV'
    },
    en: {
        dir: 'ltr', langAttr: 'en',
        bio: 'Web & software developer, game dev',
        location: 'Damanhur, Beheira, Egypt',
        social: ['YouTube', 'Instagram', 'GitHub', 'Website', 'Twitter', 'WhatsApp', 'Telegram', 'LinkedIn'],
        copyright: '© 2025 All rights reserved M5RDEV'
    },
    es: {
        dir: 'ltr', langAttr: 'es',
        bio: 'Desarrollador web, software y juegos',
        location: 'Damanhur, Beheira, Egipto',
        social: ['YouTube', 'Instagram', 'GitHub', 'Sitio web', 'Twitter', 'WhatsApp', 'Telegram', 'LinkedIn'],
        copyright: '© 2025 Todos los derechos reservados M5RDEV'
    },
    fr: {
        dir: 'ltr', langAttr: 'fr',
        bio: 'Développeur web, logiciel et jeux',
        location: 'Damanhour, Beheira, Égypte',
        social: ['Chaîne YouTube', 'Instagram', 'GitHub', 'Site web', 'Twitter', 'WhatsApp', 'Telegram', 'LinkedIn'],
        copyright: '© 2025 Tous droits réservés M5RDEV'
    },
    zh: {
        dir: 'ltr', langAttr: 'zh',
        bio: '网站与软件开发者，游戏开发',
        location: '达曼胡尔，贝海拉，埃及',
        social: ['YouTube', 'Instagram', 'GitHub', '网站', 'Twitter', 'WhatsApp', 'Telegram', 'LinkedIn'],
        copyright: '© 2025 版权所有 M5RDEV'
    },
    hi: {
        dir: 'ltr', langAttr: 'hi',
        bio: 'वेब और सॉफ़्टवेयर डेवलपर, गेम डेवलपर',
        location: 'डमनहुर, बीचेरा, मिस्र',
        social: ['YouTube', 'Instagram', 'GitHub', 'वेबसाइट', 'Twitter', 'WhatsApp', 'Telegram', 'LinkedIn'],
        copyright: '© 2025 सर्वाधिकार सुरक्षित M5RDEV'
    },
    pt: {
        dir: 'ltr', langAttr: 'pt',
        bio: 'Desenvolvedor web, software e jogos',
        location: 'Damanhur, Beheira, Egito',
        social: ['YouTube', 'Instagram', 'GitHub', 'Website', 'Twitter', 'WhatsApp', 'Telegram', 'LinkedIn'],
        copyright: '© 2025 Todos os direitos reservados M5RDEV'
    },
    bn: {
        dir: 'ltr', langAttr: 'bn',
        bio: 'ওয়েব ও সফটওয়্যার ডেভেলপার, গেম ডেভ',
        location: 'ডামানহুর, বেহেইরা, মিশর',
        social: ['YouTube', 'Instagram', 'GitHub', 'ওয়েবসাইট', 'Twitter', 'WhatsApp', 'Telegram', 'LinkedIn'],
        copyright: '© 2025 সর্বস্বত্ব সংরক্ষিত M5RDEV'
    },
    ru: {
        dir: 'ltr', langAttr: 'ru',
        bio: 'Веб и софт разработчик, разработчик игр',
        location: 'Даманхур, Бехейра, Египет',
        social: ['YouTube', 'Instagram', 'GitHub', 'Веб-сайт', 'Twitter', 'WhatsApp', 'Telegram', 'LinkedIn'],
        copyright: '© 2025 Все права защищены M5RDEV'
    },
    tr: {
        dir: 'ltr', langAttr: 'tr',
        bio: 'Web ve yazılım geliştiricisi, oyun geliştiricisi',
        location: 'Damanhur, Beheira, Mısır',
        social: ['YouTube', 'Instagram', 'GitHub', 'Web Sitesi', 'Twitter', 'WhatsApp', 'Telegram', 'LinkedIn'],
        copyright: '© 2025 Tüm hakları saklıdır M5RDEV'
    },
    ur: {
        dir: 'rtl', langAttr: 'ur',
        bio: 'ویب اور سافٹ ویئر ڈویلپر، گیم ڈویلپر',
        location: 'ڈمنہور، بہیرہ، مصر',
        social: ['یوٹیوب', 'انسٹاگرام', 'گیٹ ہب', 'ویب سائٹ', 'ٹوئٹر', 'واٹس ایپ', 'ٹیلیگرام', 'لنکڈ اِن'],
        copyright: '© 2025 جملہ حقوق محفوظ ہیں M5RDEV'
    }
};

// State and DOM references
let currentLang = localStorage.getItem('siteLang') || document.documentElement.lang || 'ar';
const linksPerPage = 4;
const totalPages = Math.ceil(socialLinksData.length / linksPerPage);
const socialLinksContainer = document.getElementById('socialLinks');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const navContainer = document.querySelector('.navigation');
let currentPage = 0;

// Language selector elements
const langBtn = document.getElementById('langBtn');
const langDropdown = document.getElementById('langDropdown');
const langOptions = document.querySelectorAll('.lang-option');

// Helper: update navigation icons and order based on direction
function updateNavForDirection(dir) {
    // update icon classes only (do not change DOM order or CSS order)
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

    // Update navigation visuals for direction
    updateNavForDirection(t.dir);

    // update link texts
    displayCurrentLinks();
}

function displayCurrentLinks() {
    socialLinksContainer.innerHTML = '';

    const startIndex = currentPage * linksPerPage;
    const endIndex = startIndex + linksPerPage;
    const currentLinks = socialLinksData.slice(startIndex, endIndex);

    currentLinks.forEach((link, index) => {
        const globalIndex = startIndex + index; // index in whole array
        const linkElement = document.createElement('a');
        linkElement.href = link.url;
        linkElement.className = `social-link ${link.platform}`;
        linkElement.target = '_blank';

        const text = (translations[currentLang] && translations[currentLang].social[globalIndex]) || link.platform;

        linkElement.innerHTML = `
            <div class="link-content">
                <div class="link-icon">
                    <i class="${link.icon}"></i>
                </div>
                <span class="link-text">${text}</span>
            </div>
            <i class="fas fa-arrow-left link-arrow"></i>
        `;

        linkElement.style.animationDelay = `${0.1 + index * 0.05}s`;

        socialLinksContainer.appendChild(linkElement);
    });

    prevBtn.disabled = currentPage === 0;
    nextBtn.disabled = currentPage === totalPages - 1;

    if (prevBtn.disabled) {
        prevBtn.classList.add('disabled');
    } else {
        prevBtn.classList.remove('disabled');
    }

    if (nextBtn.disabled) {
        nextBtn.classList.add('disabled');
    } else {
        nextBtn.classList.remove('disabled');
    }
}

prevBtn.addEventListener('click', () => {
    if (currentPage > 0) {
        currentPage--;
        displayCurrentLinks();
    }
});

nextBtn.addEventListener('click', () => {
    if (currentPage < totalPages - 1) {
        currentPage++;
        displayCurrentLinks();
    }
});

// Language selector behavior
langBtn.addEventListener('click', (e) => {
    const open = langDropdown.hasAttribute('hidden');
    const icon = langBtn.querySelector('i');
    if (open) {
        // show with animation classes
        langDropdown.removeAttribute('hidden');
        langDropdown.classList.remove('hide');
        langDropdown.classList.add('show');
        langBtn.classList.add('open');
        langBtn.setAttribute('aria-expanded', 'true');
        // change icon to X
        if (icon) icon.className = 'fas fa-xmark';
    } else {
        // hide with animation
        langDropdown.classList.remove('show');
        langDropdown.classList.add('hide');
        langBtn.classList.remove('open');
        langBtn.setAttribute('aria-expanded', 'false');
        // restore icon to globe
        if (icon) icon.className = 'fas fa-globe';
        // delay hiding attribute until animation ends
        setTimeout(() => {
            langDropdown.setAttribute('hidden', '');
        }, 180);
    }
});

// render checkmark elements inside each option and mark selected
function renderLangOptions() {
    langOptions.forEach(opt => {
        // add inner structure if not already
        if (!opt.querySelector('.check')) {
            const label = document.createElement('span');
            label.className = 'label';
            label.textContent = opt.textContent.trim();
            // replace text with label
            opt.textContent = '';
            opt.appendChild(label);

            const check = document.createElement('span');
            check.className = 'check';
            check.innerHTML = '<i class="fas fa-check"></i>';
            opt.appendChild(check);

            // preserve data-lang attribute
            opt.setAttribute('data-lang', opt.getAttribute('data-lang'));
        }

        // mark currently selected
        const lang = opt.getAttribute('data-lang');
        if (lang === currentLang) {
            opt.classList.add('selected');
        } else {
            opt.classList.remove('selected');
        }
    });
}

renderLangOptions();

langOptions.forEach(opt => {
    opt.addEventListener('click', () => {
        const selected = opt.getAttribute('data-lang');
        applyLanguage(selected);
        // update selected classes immediately
        currentLang = selected;
        renderLangOptions();

        // hide dropdown with animation
        langDropdown.classList.remove('show');
        langDropdown.classList.add('hide');
        langBtn.classList.remove('open');
        langBtn.setAttribute('aria-expanded', 'false');
        // restore icon to globe
        const icon = langBtn.querySelector('i');
        if (icon) icon.className = 'fas fa-globe';
        setTimeout(() => {
            langDropdown.setAttribute('hidden', '');
        }, 180);
    });
});

// Close dropdown when clicking outside
document.addEventListener('click', (e) => {
    if (!e.target.closest('.lang-switcher')) {
        if (!langDropdown.hasAttribute('hidden')) {
            langDropdown.classList.remove('show');
            langDropdown.classList.add('hide');
            langBtn.classList.remove('open');
            langBtn.setAttribute('aria-expanded', 'false');
            // restore icon to globe
            const icon = langBtn.querySelector('i');
            if (icon) icon.className = 'fas fa-globe';
            setTimeout(() => {
                langDropdown.setAttribute('hidden', '');
            }, 180);
        }
    }
});

// Smooth hover animations
document.addEventListener('mouseover', function (e) {
    if (e.target.closest('.social-link')) {
        const link = e.target.closest('.social-link');
        link.style.transition = 'all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)';
    }
});

document.addEventListener('mouseout', function (e) {
    if (e.target.closest('.social-link')) {
        const link = e.target.closest('.social-link');
        link.style.transition = 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)';
    }
});

// Click feedback
document.addEventListener('click', function (e) {
    if (e.target.closest('.social-link')) {
        const link = e.target.closest('.social-link');
        link.style.transform = 'scale(0.95)';
        setTimeout(() => {
            link.style.transform = '';
        }, 100);
    }
});

// Initialize
applyLanguage(currentLang);
currentPage = 0;
displayCurrentLinks();
