'use client';
import { useState, useEffect, useRef } from 'react';

export default function MobileMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const typingRef = useRef(null);
  const cursorRef = useRef(null);

  // Menu toggle function (same logic)
  function toggleMenu() {
    setIsMenuOpen(open => {
      // Lock scroll when menu open
      if (!open) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = '';
      }
      return !open;
    });
  }

  // CV Button click handler
  function onCVButtonClick() {
    alert('Downloading your CV...');
  }

  // Typing animation data
  const phrases = [
    "I build reliable backend systems with Java & Spring Boot",
    "I create scalable APIs that just work",
    "I optimize systems for performance and reliability",
    "I care about clean code and solid architecture"
  ];

  useEffect(() => {
    let phraseIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingSpeed = 100;
    let timeout;

    function type() {
      if (!typingRef.current || !cursorRef.current) return;

      const currentPhrase = phrases[phraseIndex];

      if (isDeleting) {
        typingRef.current.textContent = currentPhrase.substring(0, charIndex - 1);
        charIndex--;
        typingSpeed = 20;
      } else {
        typingRef.current.textContent = currentPhrase.substring(0, charIndex + 1);
        charIndex++;
        typingSpeed = 30;
      }

      if (!isDeleting && charIndex === currentPhrase.length) {
        cursorRef.current.classList.add('typing');
        typingSpeed = 2000; // pause at end
        isDeleting = true;
      } else if (isDeleting && charIndex === 0) {
        typingSpeed = 500; // pause
        isDeleting = false;
        phraseIndex = (phraseIndex + 1) % phrases.length;
        cursorRef.current.classList.remove('typing');
      }

      timeout = setTimeout(type, typingSpeed);
    }

    timeout = setTimeout(type, 1000);

    return () => clearTimeout(timeout);
  }, []);

  // Close menu when clicking nav item
  function onNavItemClick() {
    toggleMenu();
  }

  return (
    <>
      {/* Mobile Menu Button */}
      <button id="mobile-menu-button" onClick={(e) => { e.stopPropagation(); toggleMenu(); }}>
        Open Menu
      </button>

      {/* Mobile Menu Overlay */}
      <div
        id="mobile-menu-overlay"
        className={isMenuOpen ? 'active' : ''}
        onClick={toggleMenu}
        style={{
          display: isMenuOpen ? 'block' : 'none',
          position: 'fixed',
          top: 0, left: 0, right: 0, bottom: 0,
          backgroundColor: 'rgba(0,0,0,0.5)',
          zIndex: 10,
        }}
      />

      {/* Mobile Menu */}
      <nav
        id="mobile-menu"
        className={isMenuOpen ? 'open' : ''}
        style={{
          position: 'fixed',
          top: 0,
          right: isMenuOpen ? 0 : '-250px',
          width: '250px',
          height: '100%',
          backgroundColor: '#fff',
          transition: 'right 0.3s ease',
          zIndex: 20,
          padding: '1rem',
        }}
        onClick={e => e.stopPropagation()}
      >
        <button id="close-menu" onClick={(e) => { e.stopPropagation(); toggleMenu(); }}>
          Close
        </button>
        <ul>
          <li className="mobile-nav-item" onClick={onNavItemClick}>Home</li>
          <li className="mobile-nav-item" onClick={onNavItemClick}>About</li>
          <li className="mobile-nav-item" onClick={onNavItemClick}>Services</li>
          <li className="mobile-nav-item" onClick={onNavItemClick}>Contact</li>
        </ul>
      </nav>

      {/* CV Button */}
      <button id="CVButton" onClick={onCVButtonClick}>Download CV</button>

      {/* Typing Animation */}
      <div>
        <span id="typing" ref={typingRef}></span>
        <span className="cursor" ref={cursorRef}>|</span>
      </div>
    </>
  );
}
