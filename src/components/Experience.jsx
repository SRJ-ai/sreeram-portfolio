import React from 'react';
import { motion } from 'framer-motion';

const Experience = () => {
  return (
    <section id="experience" className="section">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        style={{ width: '100%', position: 'relative', zIndex: 1 }}
      >
        <h2 className="section-title">Experience & <span className="text-gradient">Education</span></h2>
        
        <div style={{ maxWidth: '800px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          
          <motion.div 
            className="card"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            style={{ borderLeft: '4px solid var(--accent-color)' }}
          >
            <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>Research Intern – Medical AI & Computer Vision</h3>
            <h4 style={{ color: 'var(--accent-color)', marginBottom: '1rem', fontWeight: 600 }}>IIITDM Kurnool</h4>
            <p style={{ color: 'var(--text-muted)', marginBottom: '1rem', fontStyle: 'italic' }}>Jan 2025 – Jul 2025 | Guided by Dr. P. Ranga Babu</p>
            <ul style={{ color: 'var(--text-color)', display: 'flex', flexDirection: 'column', gap: '0.8rem', paddingLeft: '1rem', listStyleType: 'disc' }}>
              <li><strong>Chest X-Ray Disease Classification:</strong> Developed a 4-class classification framework utilizing Wavelet Denoising, Xception architecture, and CBAM Attention. Achieved 97.57% accuracy.</li>
              <li><strong>Explainable Ocular Disease Diagnosis:</strong> Engineered an XAI framework utilizing EfficientNet-B3 integrated with Grad-CAM, SHAP, and LIME. Achieved 91.6% accuracy.</li>
            </ul>
          </motion.div>

          <motion.div 
            className="card"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            style={{ borderLeft: '4px solid #a78bfa' }}
          >
            <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>B.Tech — Electronics and Communication Engineering</h3>
            <h4 style={{ color: '#a78bfa', marginBottom: '1rem', fontWeight: 600 }}>G. Pulla Reddy Engineering College, Kurnool</h4>
            <p style={{ color: 'var(--text-muted)', marginBottom: '1rem', fontStyle: 'italic' }}>Oct 2022 – Jun 2026</p>
            <p style={{ color: 'var(--text-color)', fontWeight: 600 }}>CGPA: 8.23 / 10.0</p>
          </motion.div>

        </div>
      </motion.div>
    </section>
  );
};

export default Experience;
