// Mobile Menu Toggle
const mobileMenuButton = document.getElementById('mobile-menu-button');
const closeMenuButton = document.getElementById('close-menu');
const mobileMenu = document.getElementById('mobile-menu');
const mobileMenuOverlay = document.getElementById('mobile-menu-overlay');

function toggleMenu() {
    mobileMenu.classList.toggle('open');
    mobileMenuOverlay.classList.toggle('active');
    document.body.style.overflow = mobileMenu.classList.contains('open') ? 'hidden' : '';
}

mobileMenuButton.addEventListener('click', (e) => {
    e.stopPropagation();
    toggleMenu();
});

closeMenuButton.addEventListener('click', (e) => {
    e.stopPropagation();
    toggleMenu();
});

mobileMenuOverlay.addEventListener('click', () => {
    toggleMenu();
});

// Close menu when clicking on nav items (optional)
document.querySelectorAll('.mobile-nav-item').forEach(item => {
    item.addEventListener('click', () => {
        toggleMenu();
    });
});



        
// CV Button Functionality
document.getElementById('CVButton').addEventListener('click', function() {
    // Replace with actual CV download functionality
    alert('Downloading your CV...');
    // In a real implementation, this would trigger a file download
});

// Typing Animation
const typingElement = document.getElementById('typing');
const cursorElement = document.querySelector('.cursor');
const phrases = [
    "I build reliable backend systems with Java & Spring Boot",
    "I create scalable APIs that just work",
    "I optimize systems for performance and reliability",
    "I care about clean code and solid architecture"
];

let phraseIndex = 0;
let charIndex = 0;
let isDeleting = false;

function type() {
    const currentPhrase = phrases[phraseIndex];
    
    if (isDeleting) {
        // Delete character
        typingElement.textContent = currentPhrase.substring(0, charIndex - 1);
        charIndex--;
        typingSpeed = 20;
    } else {
        // Type character
        typingElement.textContent = currentPhrase.substring(0, charIndex + 1);
        charIndex++;
        typingSpeed = 30;
    }
    
    // When phrase is complete
    if (!isDeleting && charIndex === currentPhrase.length) {
        cursorElement.classList.add('typing');
        typingSpeed = 2000; // Pause at end
        isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
        typingSpeed = 500; // Pause
        isDeleting = false;
        phraseIndex = (phraseIndex + 1) % phrases.length;
        cursorElement.classList.remove('typing');
    }
    
    setTimeout(type, typingSpeed);
}

// Start typing animation
setTimeout(type, 1000);