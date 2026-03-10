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
        
        // Dynamic coloring based on range
        let bgColor;
        if (num <= 10) bgColor = '#fbc02d'; // Yellow
        else if (num <= 20) bgColor = '#1976d2'; // Blue
        else if (num <= 30) bgColor = '#d32f2f'; // Red
        else if (num <= 40) bgColor = '#7b1fa2'; // Purple
        else bgColor = '#388e3c'; // Green
        
        span.style.backgroundColor = bgColor;
        span.style.color = 'white';
        span.style.border = 'none';
        
        // Add a small animation effect
        span.style.transform = 'scale(1.2)';
        setTimeout(() => {
            span.style.transform = 'scale(1)';
        }, 200);
    });
});