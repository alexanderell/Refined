const translations = {
    sv: {
        welcome: "Välkommen till Rosé Ateljé",
        productsTitle: "Våra Produkter",
        productsDescription: "Utforska vårt breda utbud av lyxiga nagelvårdsprodukter.",
        contact: "KONTAKTA OSS",
        subheader: "Rosé Ateljé är en modern nagelsalong som fokuserar på att ge den bästa nagelvårdsupplevelsen.",
        bookApointment: "Boka tid här!",
        home: "Hem",
        aboutUs: "Om oss",
        products: "Produkter",
        howTo: "Förberedelser",
        faq: "FAQ",
        aboutUsText: "Mitt namn är Linnea, Jag har arbetat med naglar, lash & browlift sedan jag blev certifierad 2023. Jag kan stolt säga att jag idag är Master utbildad i lashlift och browlift. Du är alltid mitt största fokus, var inte rädd för att fråga eller be om något! Jag brinner verkligen för detta yrke och strävar alltid efter allt lära mig något nytt. Jag håller mig uppdaterad inom trendiga stilar och tekniker för att alltid ge kunden det lilla extra. Mitt mål är att erbjuda fler tjänster och i framtiden lära ut andra i detta fantastiska yrke, är så tacksam och stolt över det jag åstadkommit hittills. Jag är utbildad inom naglar från Semilac och utbildad i lash & browlift av Vaidas lash academy. Master utbildad av Permalift. Hitta mig i socialamedier och spana in mitt arbete!"
    },
    en: {
        welcome: "Welcome to Rosé Ateljé",
        subheader: "Rosé Ateljé is a modern nail salon focused on providing the best nail care experience.",
        productsTitle: "Our Products",
        productsDescription: "Explore our wide range of luxury nail care products.",
        contact: "CONTACT US",
        bookApointment: "Book an appointment here!",
        home: "Home",
        aboutUs: "About Us",
        products: "Products",
        howTo: "How To's",
        faq: "FAQ",
        aboutUsText: "My name is Linnea. I have been working with nails, lash & brow lifts since I became certified in 2023. I can proudly say that I am now Master-certified in lash lifts and brow lifts. You are always my top priority – don’t hesitate to ask questions or request anything! I’m truly passionate about this profession and always strive to learn something new. I stay up to date with trendy styles and techniques to always give my clients that little extra. My goal is to offer more services and eventually teach others in this amazing profession. I am so grateful and proud of what I have accomplished so far. I am trained in nails by Semilac and certified in lash & brow lifts by Vaida’s Lash Academy. I received my Master certification from Permalift. Find me on social media and check out my work!"

    },
};

document.getElementById('lang-sv').addEventListener('click', () => {
    switchLanguage('sv');
});

document.getElementById('lang-en').addEventListener('click', () => {
    switchLanguage('en');
});

function switchLanguage(lang) {
    document.querySelectorAll('[data-lang]').forEach((element) => {
        const key = element.getAttribute('data-lang');
        if (translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });
}