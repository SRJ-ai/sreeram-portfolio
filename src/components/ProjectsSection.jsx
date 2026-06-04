import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import FadeIn from './FadeIn';

const projects = [
  {
    num: '01',
    category: 'Medical AI Research',
    name: 'Oral Cancer Detection using Deep Learning',
    tech: ['TensorFlow', 'VGG19', 'MobileNetV2', 'ViT', 'Grad-CAM'],
    achievements: [
      'Medical image classification',
      'Attention-enhanced CNN architecture',
      'Explainable AI analysis',
      'TensorFlow Lite deployment'
    ]
  },
  {
    num: '02',
    category: 'Computer Vision',
    name: 'Vision Transformer Chest X-Ray Analysis',
    tech: ['TensorFlow', 'Xception', 'CBAM', 'Wavelet Denoising'],
    achievements: [
      '97.57% accuracy achieved',
      'COVID-19 & disease detection',
      'Edge deployment on Raspberry Pi',
      'Macro F1-score: 0.9697'
    ]
  },
  {
    num: '03',
    category: 'Computer Vision',
    name: 'Gesture Controlled Virtual Mouse',
    tech: ['Python', 'OpenCV', 'MediaPipe', 'Computer Vision'],
    achievements: [
      'Real-time hand tracking',
      'Touchless interaction',
      'Gesture recognition',
      'Human-computer interaction'
    ]
  },
  {
    num: '04',
    category: 'IoT — Published Research',
    name: 'Smart Digital Notice Board (PALS-QTPL)',
    tech: ['ESP8266', 'MQTT', 'Flask', 'P10 LED'],
    achievements: [
      '₹80K funded project',
      'Sub-250ms latency',
      '80% cost reduction',
      'Peer-reviewed publication'
    ]
  },
  {
    num: '05',
    category: 'Automation',
    name: 'Inventory Management Platform',
    tech: ['QR Systems', 'Analytics Dashboard', 'Python'],
    achievements: [
      'Asset tracking',
      'QR generation',
      'Workflow automation',
      'Audit trail management'
    ]
  }
];

const ProjectCard = ({ project, index, totalCards }) => {
  const cardRef = useRef(null);
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'start start']
  });

  const targetScale = 1 - (totalCards - 1 - index) * 0.025;
  const scale = useTransform(scrollYProgress, [0, 1], [1, targetScale]);

  return (
    <div ref={containerRef} style={{ height: '85vh' }}>
      <motion.div
        ref={cardRef}
        className="project-card"
        style={{ scale, top: `${96 + index * 28}px` }}
      >
        {/* Header */}
        <div className="project-card-header">
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1.5rem', flex: 1, flexWrap: 'wrap' }}>
            <span className="project-number hero-heading">{project.num}</span>
            <div className="project-meta">
              <span className="project-category">{project.category}</span>
              <span className="project-name">{project.name}</span>
            </div>
          </div>
        </div>

        {/* Tech tags */}
        <div className="project-tech-row">
          {project.tech.map((t, i) => (
            <span key={i} className="project-tech">{t}</span>
          ))}
        </div>

        {/* Achievements */}
        <div className="project-achievements">
          {project.achievements.map((a, i) => (
            <span key={i} className="project-tag">{a}</span>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

const ProjectsSection = () => {
  return (
    <section
      id="projects"
      className="section-dark-overlay"
      style={{ padding: 'clamp(4rem, 8vw, 8rem) clamp(1rem, 3vw, 2.5rem)' }}
    >
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
          Projects
        </h2>
      </FadeIn>

      <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
        {projects.map((p, i) => (
          <ProjectCard key={i} project={p} index={i} totalCards={projects.length} />
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
