// DOM Element Selection using dedicated js- hooks
const themeToggleBtn = document.querySelector('.js-theme-toggle');
const menuToggleBtn = document.querySelector('.js-menu-toggle');
const menuElement = document.querySelector('.js-menu');
const cartCountElement = document.querySelector('.js-cart-count');
const addToCartButtons = document.querySelectorAll('.js-add-to-cart');
const bodyElement = document.body;

// State Management: Load user theme preference from localStorage on initialization
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
    bodyElement.classList.add('dark-mode');
    themeToggleBtn.textContent = '☀️';
}

// Input / Process / Output: Dark Mode Toggle Event
themeToggleBtn.addEventListener('click', () => {
    bodyElement.classList.toggle('dark-mode');
    
    const isDark = bodyElement.classList.contains('dark-mode');
    themeToggleBtn.textContent = isDark ? '☀️' : '🌙';
    
    // Persist state
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
});

// Input / Output: Mobile Navigation Menu Toggle
menuToggleBtn.addEventListener('click', () => {
    menuElement.classList.toggle('is-open');
});

// State Management: Cart counter logic
let cartCount = 0;

// Input / Process / Output Loop for interactive product actions
addToCartButtons.forEach(button => {
    button.addEventListener('click', (event) => {
        const product = event.target.getAttribute('data-product');
        
        // Process: Update state data
        cartCount++;
        cartCountElement.textContent = cartCount;

        // Output / Mutation: Apply visual state classes (.is-active)
        button.textContent = 'Added ✓';
        button.classList.add('is-active');

        // Reset button state after a brief interaction delay
        setTimeout(() => {
            button.textContent = 'Add to Cart';
            button.classList.remove('is-active');
        }, 1500);
    });
});