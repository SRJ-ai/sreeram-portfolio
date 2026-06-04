import React, { useRef, useEffect, useState } from 'react';

const WORDS = [
  'TENSORFLOW', 'PYTORCH', 'OPENCV', 'DEEP LEARNING', 'VISION TRANSFORMERS',
  'RASPBERRY PI', 'ESP32', 'STM32', 'COMPUTER VISION', 'EDGE AI',
  'MEDICAL IMAGING', 'MQTT', 'FLASK', 'GRAD-CAM', 'EXPLAINABLE AI',
  'KERAS', 'SCIKIT-LEARN', 'ARDUINO', 'IoT', 'NEURAL NETWORKS',
  'ATTENTION MECHANISMS', 'TRANSFER LEARNING', 'OBJECT DETECTION',
  'IMAGE CLASSIFICATION', 'EMBEDDED SYSTEMS', 'PYTHON', 'TFLITE',
  'CBAM', 'SHAP', 'LIME'
];

const MarqueeSection = () => {
  const sectionRef = useRef(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const sectionTop = rect.top + window.scrollY;
      const val = (window.scrollY - sectionTop + window.innerHeight) * 0.15;
      setOffset(val);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const row1 = WORDS.slice(0, 15);
  const row2 = WORDS.slice(15);

  const renderRow = (words, direction) => {
    const tripled = [...words, ...words, ...words];
    const tx = direction === 'right'
      ? `translateX(${offset - 300}px)`
      : `translateX(${-(offset - 300)}px)`;

    return (
      <div style={{ overflow: 'hidden' }}>
        <div
          className="marquee-track"
          style={{ transform: tx }}
        >
          {tripled.map((word, i) => (
            <span
              key={i}
              style={{
                flexShrink: 0,
                padding: '0.7rem 1.8rem',
                borderRadius: '100px',
                border: '1px solid rgba(215, 226, 234, 0.12)',
                fontSize: 'clamp(0.7rem, 1.2vw, 1rem)',
                fontWeight: 500,
                letterSpacing: '0.08em',
                whiteSpace: 'nowrap',
                color: 'var(--white)',
                background: 'rgba(255,255,255,0.02)'
              }}
            >
              {word}
            </span>
          ))}
        </div>
      </div>
    );
  };

  return (
    <section
      ref={sectionRef}
      style={{
        background: 'var(--bg)',
        padding: '6rem 0 3rem 0',
        display: 'flex',
        flexDirection: 'column',
        gap: '12px',
        overflow: 'hidden'
      }}
    >
      {renderRow(row1, 'right')}
      {renderRow(row2, 'left')}
    </section>
  );
};

export default MarqueeSection;
