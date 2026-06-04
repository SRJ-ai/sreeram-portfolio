import React from 'react';
import { motion } from 'framer-motion';

const skillCategories = [
  {
    title: "Machine Learning & AI",
    skills: ["TensorFlow", "Keras", "Scikit-Learn", "Deep Learning", "Vision Transformers (ViT)", "Explainable AI (Grad-CAM, SHAP, LIME)"]
  },
  {
    title: "Computer Vision",
    skills: ["OpenCV", "Image Classification", "Object Detection", "Attention Mechanisms (CBAM, SE, BAM)"]
  },
  {
    title: "Deployment & Edge AI",
    skills: ["TensorFlow Lite", "Flask", "Raspberry Pi", "Edge AI Deployment"]
  },
  {
    title: "Programming & Embedded",
    skills: ["Python", "C", "MATLAB", "STM32", "ESP32", "Arduino", "MQTT"]
  }
];

const Skills = () => {
  return (
    <section id="skills" className="section">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        style={{ width: '100%', position: 'relative', zIndex: 1 }}
      >
        <h2 className="section-title">Technical <span className="text-gradient">Skills</span></h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
          {skillCategories.map((category, index) => (
            <motion.div 
              key={index}
              className="card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <h3 style={{ marginBottom: '1.5rem', color: 'var(--text-color)' }}>{category.title}</h3>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.8rem' }}>
                {category.skills.map((skill, i) => (
                  <span 
                    key={i} 
                    style={{ 
                      background: 'rgba(59, 130, 246, 0.1)', 
                      border: '1px solid var(--accent-color)',
                      color: 'var(--accent-color)',
                      padding: '0.5rem 1rem',
                      borderRadius: '20px',
                      fontSize: '0.9rem',
                      fontWeight: 600,
                      transition: 'all 0.3s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.background = 'var(--accent-color)';
                      e.target.style.color = 'white';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.background = 'rgba(59, 130, 246, 0.1)';
                      e.target.style.color = 'var(--accent-color)';
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Skills;
