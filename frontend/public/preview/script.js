// Language state
let currentLang = 'pt';

// Toggle language function
function toggleLanguage() {
    currentLang = currentLang === 'pt' ? 'en' : 'pt';
    updateContent();
    updateLangIndicator();
    localStorage.setItem('preferredLang', currentLang);
}

// Update all translatable content
function updateContent() {
    const elements = document.querySelectorAll('[data-pt][data-en]');
    elements.forEach(el => {
        const text = el.getAttribute(`data-${currentLang}`);
        if (text) {
            // Use innerHTML to preserve HTML tags like <strong>
            el.innerHTML = text;
        }
    });
    document.documentElement.lang = currentLang;
}

// Update the language indicator button
function updateLangIndicator() {
    const indicator = document.getElementById('lang-indicator');
    indicator.textContent = currentLang === 'pt' ? 'EN' : 'PT';
}

// Mobile menu functions
function toggleMobileMenu() {
    const menu = document.getElementById('mobileMenu');
    menu.classList.toggle('active');
}

function closeMobileMenu() {
    const menu = document.getElementById('mobileMenu');
    menu.classList.remove('active');
}

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    const menu = document.getElementById('mobileMenu');
    const menuBtn = document.querySelector('.mobile-menu-btn');
    if (menu && menuBtn && !menu.contains(e.target) && !menuBtn.contains(e.target)) {
        menu.classList.remove('active');
    }
});

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    // Ensure page starts at top
    window.scrollTo(0, 0);
    
    const storedLang = localStorage.getItem('preferredLang');
    if (storedLang && (storedLang === 'pt' || storedLang === 'en')) {
        currentLang = storedLang;
        updateContent();
        updateLangIndicator();
    }
});
