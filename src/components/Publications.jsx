import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen } from 'lucide-react';

const Publications = () => {
  return (
    <section id="publications" className="section" style={{ minHeight: 'auto', paddingBottom: '4rem' }}>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        style={{ width: '100%', position: 'relative', zIndex: 1 }}
      >
        <h2 className="section-title">Publications & <span className="text-gradient">Research</span></h2>
        
        <div className="card" style={{ maxWidth: '800px', margin: '0 auto', display: 'flex', gap: '2rem', alignItems: 'flex-start' }}>
          <div style={{ background: 'rgba(59, 130, 246, 0.1)', padding: '1rem', borderRadius: '12px', color: 'var(--accent-color)', flexShrink: 0 }}>
            <BookOpen size={32} />
          </div>
          <div>
            <h3 style={{ fontSize: '1.4rem', marginBottom: '0.5rem', color: 'var(--text-color)' }}>
              IoT-Based Modular P10 LED Notice Board System for Real-Time Industrial Communication using MQTT and Flask
            </h3>
            <p style={{ color: 'var(--text-muted)', marginBottom: '1rem', fontStyle: 'italic' }}>
              International Journal for Multidisciplinary Research (IJFMR) | Volume 8, Issue 2, March–April 2026
            </p>
            <p style={{ color: 'var(--text-color)', marginBottom: '1.5rem', lineHeight: 1.6 }}>
              Designed and deployed a modular industrial communication system for QTPL using ESP8266, MQTT, Flask, and P10 displays. Slashed deployment costs by {'>'}80% vs commercial signage and achieved sub-250ms message latency.
            </p>
            <a 
              href="https://doi.org/10.36948/IJFMR.2026.V08I02.74943" 
              target="_blank" 
              rel="noreferrer"
              style={{ color: 'var(--accent-color)', fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}
            >
              View Publication ↗
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Publications;
