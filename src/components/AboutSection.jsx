import React from 'react';
import FadeIn from './FadeIn';
import AnimatedText from './AnimatedText';
import Magnet from './Magnet';

const HIGHLIGHTS = [
  'Funded IoT Project (₹80,000)',
  'Microchip Embedded Certified',
  'Sentaurus TCAD Trained',
  'Computer Vision Research',
  'AI Model Deployment',
  'Raspberry Pi & STM32 Dev'
];

const AboutSection = () => {
  return (
    <section
      id="about"
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '5rem 1.5rem',
        position: 'relative'
      }}
    >
      {/* Heading */}
      <FadeIn delay={0} y={40}>
        <h2
          className="hero-heading"
          style={{
            fontWeight: 900,
            textTransform: 'uppercase',
            lineHeight: 1,
            letterSpacing: '-0.03em',
            textAlign: 'center',
            fontSize: 'clamp(3rem, 12vw, 160px)'
          }}
        >
          About me
        </h2>
      </FadeIn>

      {/* Animated paragraph */}
      <div style={{
        maxWidth: '620px',
        textAlign: 'center',
        marginTop: 'clamp(2.5rem, 5vw, 4rem)'
      }}>
        <AnimatedText
          text="I am an engineering student focused on Artificial Intelligence, Computer Vision, Embedded Systems, and IoT. My work spans medical image analysis, edge AI deployment, computer vision applications, and intelligent embedded systems. I have developed funded IoT projects, machine learning solutions for healthcare imaging, real-time computer vision applications, and embedded systems using ESP32, STM32, and Raspberry Pi platforms."
          style={{
            color: 'var(--white)',
            fontWeight: 400,
            textAlign: 'center',
            lineHeight: 1.7,
            fontSize: 'clamp(0.95rem, 1.8vw, 1.3rem)',
          }}
        />
      </div>

      {/* Highlight pills */}
      <FadeIn delay={0.2} y={20}>
        <div className="highlights-row" style={{ marginTop: '3rem' }}>
          {HIGHLIGHTS.map((h, i) => (
            <span key={i} className="highlight-pill">{h}</span>
          ))}
        </div>
      </FadeIn>

      {/* CTA */}
      <FadeIn delay={0.35} y={20}>
        <div style={{ marginTop: '3.5rem' }}>
          <Magnet padding={80} strength={4}>
            <a href="#contact" className="btn-contact">Contact Me</a>
          </Magnet>
        </div>
      </FadeIn>
    </section>
  );
};

export default AboutSection;
