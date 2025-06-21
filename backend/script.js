// Language switcher functionality
const translations = {
    sv: {
        welcome: "Välkommen till Rosé Ateljé",
        description: "Upplev lyxig nagelvård som aldrig förr.",
        bookNow: "Boka en tid",
        aboutUs: "Om oss",
        aboutUsText: "Rosé Ateljé är en modern nagelsalong som fokuserar på att ge den bästa nagelvårdsupplevelsen.",
        productsTitle: "Våra Produkter",
        productsDescription: "Utforska vårt breda utbud av lyxiga nagelvårdsprodukter.",
        contact: "KONTAKTA OSS"
    },
    en: {
        welcome: "Welcome to Rosé Ateljé",
        description: "Experience luxury nail care like never before.",
        bookNow: "Book an Appointment",
        aboutUs: "About Us",
        aboutUsText: "Rosé Ateljé is a modern nail salon focused on providing the best nail care experience.",
        productsTitle: "Our Products",
        productsDescription: "Explore our wide range of luxury nail care products.",
        contact: "CONTACT US"
    },
};

document.getElementById('lang-sv').addEventListener('click', () => {
    switchLanguage('sv');
});

document.getElementById('lang-en').addEventListener('click', () => {
    switchLanguage('en');
});

function switchLanguage(lang) {
    // Find all elements with the data-lang attribute
    document.querySelectorAll('[data-lang]').forEach((element) => {
        const key = element.getAttribute('data-lang');
        if (translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });
}