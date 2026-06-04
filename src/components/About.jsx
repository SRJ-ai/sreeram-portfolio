import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="section">
      <div className="blob" style={{ background: 'var(--accent-glow)', top: '10%', left: '10%', width: '400px', height: '400px' }}></div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        style={{ width: '100%', position: 'relative', zIndex: 1 }}
      >
        <h2 className="section-title">About <span className="text-gradient">Me</span></h2>
        <div className="glass" style={{ padding: '3rem', borderRadius: '24px', maxWidth: '800px', margin: '0 auto', fontSize: '1.2rem', lineHeight: 1.8, color: 'var(--text-muted)' }}>
          <p style={{ marginBottom: '1.5rem' }}>
            I am a passionate AI/ML Engineer with robust research experience in Deep Learning, Computer Vision, Explainable AI (XAI), Medical Image Analysis, and Edge AI Deployment.
          </p>
          <p>
            Currently, I am working under the guidance of Dr. P. Ranga Babu at IIITDM Kurnool on sophisticated AI-driven healthcare systems involving chest X-ray disease classification, ocular disease diagnosis, and oral cancer detection. My expertise lies in developing end-to-end machine learning pipelines—from comprehensive data preprocessing and model architecture design to lightweight deployment on embedded and edge devices.
          </p>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
