import React from 'react';
import FadeIn from './FadeIn';

const skillCategories = [
  {
    title: 'Artificial Intelligence',
    skills: ['TensorFlow', 'PyTorch', 'Keras', 'Scikit-Learn']
  },
  {
    title: 'Computer Vision',
    skills: ['OpenCV', 'Vision Transformers', 'Object Detection', 'Medical Imaging']
  },
  {
    title: 'Embedded Systems',
    skills: ['STM32', 'ESP32', 'Arduino', 'Raspberry Pi']
  },
  {
    title: 'Programming',
    skills: ['Python', 'C', 'SQL', 'JavaScript']
  },
  {
    title: 'Semiconductor',
    skills: ['Cadence', 'TCAD', 'CMOS Fundamentals']
  }
];

const achievements = [
  'Funded IoT Development Project (₹80,000)',
  'Microchip Embedded Systems Certification',
  'Multiple AI Research Implementations',
  'Medical Imaging Projects',
  'Real-Time Computer Vision Systems',
  'Edge AI Deployment Experience'
];

const SkillsSection = () => {
  return (
    <section
      id="skills"
      style={{
        padding: 'clamp(4rem, 8vw, 8rem) clamp(1.5rem, 4vw, 2.5rem)',
        background: 'var(--bg)'
      }}
    >
      {/* Skills heading */}
      <FadeIn delay={0} y={40}>
        <h2
          className="hero-heading"
          style={{
            fontWeight: 900,
            textTransform: 'uppercase',
            textAlign: 'center',
            fontSize: 'clamp(3rem, 12vw, 160px)',
            lineHeight: 1,
            letterSpacing: '-0.03em',
            marginBottom: 'clamp(3rem, 6vw, 5rem)'
          }}
        >
          Skills
        </h2>
      </FadeIn>

      {/* Skills grid */}
      <div className="skills-grid">
        {skillCategories.map((cat, i) => (
          <FadeIn key={i} delay={i * 0.08} y={20}>
            <div className="skill-card">
              <h3>{cat.title}</h3>
              <div className="skill-tags">
                {cat.skills.map((s, j) => (
                  <span key={j} className="skill-tag">{s}</span>
                ))}
              </div>
            </div>
          </FadeIn>
        ))}
      </div>

      {/* Achievements heading */}
      <FadeIn delay={0} y={40}>
        <h2
          className="hero-heading"
          style={{
            fontWeight: 900,
            textTransform: 'uppercase',
            textAlign: 'center',
            fontSize: 'clamp(2.5rem, 10vw, 120px)',
            lineHeight: 1,
            letterSpacing: '-0.03em',
            marginTop: 'clamp(5rem, 10vw, 10rem)',
            marginBottom: 'clamp(2rem, 4vw, 3rem)'
          }}
        >
          Achievements
        </h2>
      </FadeIn>

      {/* Achievements list */}
      <div className="achievements-list">
        {achievements.map((a, i) => (
          <FadeIn key={i} delay={i * 0.06} y={15}>
            <div className="achievement-item">
              <div className="achievement-dot" />
              <span style={{ fontWeight: 400, fontSize: 'clamp(0.85rem, 1.4vw, 1.1rem)' }}>{a}</span>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;
