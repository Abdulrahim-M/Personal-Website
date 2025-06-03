"use client";
import { useEffect, useState } from 'react';

export default function TypingBox({ phrases, typeSpeed, deleteSpeed, afterWait }) {
  const [text, setText] = useState('');
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  // For dots animation
  const [dotCount, setDotCount] = useState(0);
  const [dotCycles, setDotCycles] = useState(0);

  if (!phrases || phrases.length === 0) return null;

  useEffect(() => {
    const currentPhrase = phrases[phraseIndex];
    const basePhrase = currentPhrase.replace(/\.+$/, ''); // phrase without trailing dots
    const maxDots = 3;
    const maxDotCycles = 3;

    let typingSpeed = isDeleting ? deleteSpeed : typeSpeed;

    if (!isDeleting && charIndex === currentPhrase.length) {
      // Pause at the end of a typed phrase
      typingSpeed = afterWait;
      setTimeout(() => setIsDeleting(true), typingSpeed);
      return; // Stop here to avoid over-typing
    }
    
    if (isDeleting && charIndex === 0) {
      // Pause before starting next phrase
      setTimeout(() => {
          setIsDeleting(false);
          setPhraseIndex((prev) => (prev + 1) % phrases.length);
        }, 500);
      return;
    }

    const timeout = setTimeout(() => {
      const nextCharIndex = isDeleting ? charIndex - 1 : charIndex + 1;
      setCharIndex(nextCharIndex);
      setText(currentPhrase.substring(0, nextCharIndex));
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, phraseIndex]);

  return (
    <div>
      <code id="typing">{text}</code>
      <span className={isDeleting ? "cursor typing" : "cursor"}></span>
    </div>
  );
}

