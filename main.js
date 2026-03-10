const numberSpans = document.querySelectorAll('.number');
const generateButton = document.getElementById('generate');
const themeToggle = document.getElementById('themeToggle');
const body = document.body;

// Theme logic
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
    body.classList.add('dark-mode');
}

themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    const isDark = body.classList.contains('dark-mode');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
});

// Generator logic
generateButton.addEventListener('click', () => {
    const numbers = new Set();
    while (numbers.size < 6) {
        numbers.add(Math.floor(Math.random() * 45) + 1);
    }

    const sortedNumbers = Array.from(numbers).sort((a, b) => a - b);

    numberSpans.forEach((span, index) => {
        const num = sortedNumbers[index];
        span.textContent = num;
        
        let bgColor;
        if (num <= 10) bgColor = '#fbc02d';
        else if (num <= 20) bgColor = '#1976d2';
        else if (num <= 30) bgColor = '#d32f2f';
        else if (num <= 40) bgColor = '#7b1fa2';
        else bgColor = '#388e3c';
        
        span.style.backgroundColor = bgColor;
        span.style.color = 'white';
        span.style.transform = 'scale(1.1) rotate(360deg)';
        setTimeout(() => {
            span.style.transform = 'scale(1) rotate(0deg)';
        }, 300);
    });
});

// Legal Modals Logic
const modal = document.getElementById('legalModal');
const modalBody = document.getElementById('modalBody');
const closeModal = document.querySelector('.close-modal');

const legalContent = {
    privacy: `
        <h2>Privacy Policy</h2>
        <p>Your privacy is important to us. LuckyPicker does not collect, store, or share any personal data from our users. Any information submitted via our contact form is used solely for the purpose of responding to your inquiry.</p>
        <h3>Cookies and Ads</h3>
        <p>We use Google AdSense to serve ads. Google may use cookies to serve ads based on your prior visits to our website or other websites.</p>
    `,
    terms: `
        <h2>Terms of Service</h2>
        <p>By using LuckyPicker, you agree to these terms. This tool is provided for entertainment purposes only. We do not guarantee any winnings and are not responsible for any financial losses incurred from playing the lottery.</p>
        <h3>Usage</h3>
        <p>You may use this tool freely for personal use. Any automated scraping or reproduction of our algorithm is prohibited.</p>
    `
};

document.getElementById('openPrivacy').onclick = (e) => {
    e.preventDefault();
    modalBody.innerHTML = legalContent.privacy;
    modal.style.display = 'block';
};

document.getElementById('openTerms').onclick = (e) => {
    e.preventDefault();
    modalBody.innerHTML = legalContent.terms;
    modal.style.display = 'block';
};

closeModal.onclick = () => modal.style.display = 'none';
window.onclick = (event) => {
    if (event.target == modal) modal.style.display = 'none';
};