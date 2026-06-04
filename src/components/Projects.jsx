import React from 'react';
import { motion } from 'framer-motion';

const projectData = [
  {
    title: "Oral Cancer Detection using Deep Learning",
    description: "Architected classification pipelines leveraging VGG19, MobileNetV2, and Vision Transformers (ViT). Validated clinical efficacy using ROC-AUC curves and Grad-CAM spatial visualizations.",
    tags: ["Python", "TensorFlow", "ViT", "Grad-CAM", "Transfer Learning"]
  },
  {
    title: "PALS-QTPL Real-Time Digital Notice Board",
    description: "Secured ₹80,000 innovation grant. Spearheaded embedded software development for an ESP8266-based industrial comms platform. Orchestrated live deployment resulting in a peer-reviewed publication.",
    tags: ["ESP8266", "MQTT", "Flask", "P10 LED", "IoT"]
  },
  {
    title: "Gesture-Controlled Virtual Mouse",
    description: "Created a highly responsive touchless HCI interface using OpenCV. Implemented real-time image processing arrays to translate complex hand gestures into precise cursor movements.",
    tags: ["Python", "OpenCV", "MediaPipe", "HCI", "Computer Vision"]
  }
];

const Projects = () => {
  return (
    <section id="projects" className="section">
      <div className="blob" style={{ background: 'rgba(167, 139, 250, 0.4)', bottom: '10%', right: '10%', width: '300px', height: '300px' }}></div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        style={{ width: '100%', position: 'relative', zIndex: 1 }}
      >
        <h2 className="section-title">Key <span className="text-gradient">Projects</span></h2>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2.5rem' }}>
          {projectData.map((project, index) => (
            <motion.div 
              key={index}
              className="card"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              style={{ display: 'flex', flexDirection: 'column' }}
            >
              <h3 style={{ fontSize: '1.4rem', marginBottom: '1rem', color: 'var(--text-color)' }}>{project.title}</h3>
              <p style={{ color: 'var(--text-muted)', lineHeight: 1.6, flexGrow: 1, marginBottom: '1.5rem' }}>
                {project.description}
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem' }}>
                {project.tags.map((tag, i) => (
                  <span 
                    key={i}
                    style={{
                      background: 'rgba(255, 255, 255, 0.05)',
                      padding: '0.4rem 0.8rem',
                      borderRadius: '8px',
                      fontSize: '0.8rem',
                      color: 'var(--text-color)'
                    }}
                  >
                    {tag}
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

export default Projects;
