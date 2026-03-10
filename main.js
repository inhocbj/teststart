const numberSpans = document.querySelectorAll('.number');
const generateButton = document.getElementById('generate');

generateButton.addEventListener('click', () => {
    const numbers = new Set();
    while (numbers.size < 6) {
        numbers.add(Math.floor(Math.random() * 45) + 1);
    }

    const sortedNumbers = Array.from(numbers).sort((a, b) => a - b);

    numberSpans.forEach((span, index) => {
        span.textContent = sortedNumbers[index];
        const number = sortedNumbers[index];
        let backgroundColor;
        if (number <= 10) {
            backgroundColor = '#f44336';
        } else if (number <= 20) {
            backgroundColor = '#ff9800';
        } else if (number <= 30) {
            backgroundColor = '#ffeb3b';
        } else if (number <= 40) {
            backgroundColor = '#4caf50';
        } else {
            backgroundColor = '#2196f3';
        }
        span.style.backgroundColor = backgroundColor;
        span.style.color = 'white';
    });
});
