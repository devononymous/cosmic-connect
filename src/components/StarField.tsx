import React, { useEffect, useRef } from 'react';
import './StarrField.css';

const Starfield: React.FC = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const starCount = 1000;
    const container = containerRef.current;

    if (!container) return;

    for (let i = 0; i < starCount; i++) {
      const star = document.createElement('div');
      star.className = 'star';

      // Randomize position and animation
      star.style.left = `${Math.random() * 100}vw`;
      star.style.top = `${Math.random() * 100}vh`;
      star.style.animationDuration = `${3 + Math.random() * 9}s`;
      container.appendChild(star);
    }

    return () => {
      if (container) {
        container.innerHTML = '';
      }
    };
  }, []);

  return <div ref={containerRef} className="starfield" />;
};

export default Starfield;
