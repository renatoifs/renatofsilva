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
            el.textContent = text;
        }
    });
    document.documentElement.lang = currentLang;
}

// Update the language indicator button
function updateLangIndicator() {
    const indicator = document.getElementById('lang-indicator');
    indicator.textContent = currentLang === 'pt' ? 'EN' : 'PT';
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    const storedLang = localStorage.getItem('preferredLang');
    if (storedLang && (storedLang === 'pt' || storedLang === 'en')) {
        currentLang = storedLang;
        updateContent();
        updateLangIndicator();
    }
});
