// Import existing logic
// Assuming existing app.js is already handling theme, nav, modal, etc.
// Additional Typing Animation logic

document.addEventListener('DOMContentLoaded', () => {
    initializeApp();
    initTypingAnimation();
});

function initTypingAnimation() {
    const typingElements = document.querySelectorAll('.typing-animation');
    typingElements.forEach((el) => {
        const text = el.getAttribute('data-text');
        const delay = parseInt(el.getAttribute('data-delay') || 0, 10);
        el.textContent = '';
        setTimeout(() => typeText(el, text), delay);
    });
}

function typeText(element, text, index = 0) {
    if (index < text.length) {
        element.textContent += text.charAt(index);
        requestAnimationFrame(() => typeText(element, text, index + 1));
    } else {
        element.classList.remove('typing-animation');
    }
}
