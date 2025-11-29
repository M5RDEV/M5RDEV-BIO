// Social links data and page logic (moved from index.html)
const socialLinksData = [
    { platform: 'youtube', icon: 'fab fa-youtube', text: 'قناة اليوتيوب', url: 'https://youtube.com/@M5RDEV' },
    { platform: 'instagram', icon: 'fab fa-instagram', text: 'إنستجرام', url: 'https://instagram.com/M5RDEV' },
    { platform: 'github', icon: 'fab fa-github', text: 'جيت هاب', url: 'https://github.com/M5RDEV' },
    { platform: 'website', icon: 'fas fa-globe', text: 'الموقع الإلكتروني', url: 'https://m5rdev.github.io/M5RDEV' },
    { platform: 'twitter', icon: 'fab fa-twitter', text: 'تويتر', url: 'https://twitter.com/M5RDEV' },
    { platform: 'whatsapp', icon: 'fab fa-whatsapp', text: 'واتساب', url: 'https://whatsapp.com/channel/0029Vb6KQUGGJP8EJv0tpG2v' },
    { platform: 'telegram', icon: 'fab fa-telegram-plane', text: 'تيليجرام', url: 'https://t.me/m5rdevchannel' },
    { platform: 'linkedin', icon: 'fab fa-linkedin-in', text: 'لينكد إن', url: 'https://linkedin.com/in/M5RDEV' }
];

let currentPage = 0;
const linksPerPage = 4;
const totalPages = Math.ceil(socialLinksData.length / linksPerPage);
const socialLinksContainer = document.getElementById('socialLinks');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

function displayCurrentLinks() {
    socialLinksContainer.innerHTML = '';

    const startIndex = currentPage * linksPerPage;
    const endIndex = startIndex + linksPerPage;
    const currentLinks = socialLinksData.slice(startIndex, endIndex);

    currentLinks.forEach((link, index) => {
        const linkElement = document.createElement('a');
        linkElement.href = link.url;
        linkElement.className = `social-link ${link.platform}`;
        linkElement.target = '_blank';

        linkElement.innerHTML = `
            <div class="link-content">
                <div class="link-icon">
                    <i class="${link.icon}"></i>
                </div>
                <span class="link-text">${link.text}</span>
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

// Initialize
displayCurrentLinks();

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
