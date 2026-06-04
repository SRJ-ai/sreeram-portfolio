import React from 'react';
import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';

const GithubIcon = ({ size = 24 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.2c3-.3 6-1.5 6-6.5a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 0 0-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.5c0 5 3 6.2 6 6.5a4.8 4.8 0 0 0-1 3.2v4"></path>
  </svg>
);

const LinkedinIcon = ({ size = 24 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

const Contact = () => {
  return (
    <footer id="contact" style={{ padding: '6rem 2rem 4rem 2rem', background: '#02040a', borderTop: '1px solid var(--card-border)', textAlign: 'center' }}>
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 style={{ fontSize: '3rem', marginBottom: '1.5rem' }}>Let's <span className="text-gradient">Connect</span></h2>
        <p style={{ color: 'var(--text-muted)', fontSize: '1.2rem', marginBottom: '3rem', maxWidth: '600px', margin: '0 auto 3rem auto' }}>
          Open to opportunities in Machine Learning, Computer Vision, Medical AI, and Edge AI.
        </p>
        
        <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', marginBottom: '4rem' }}>
          <a href="https://github.com/SRJ-ai" target="_blank" rel="noreferrer" style={{ background: 'var(--card-bg)', padding: '1rem', borderRadius: '50%', border: '1px solid var(--card-border)', display: 'inline-flex', transition: 'all 0.3s ease' }}>
            <GithubIcon size={32} />
          </a>
          <a href="https://linkedin.com/in/jagadeeshwar-sreeram" target="_blank" rel="noreferrer" style={{ background: 'var(--card-bg)', padding: '1rem', borderRadius: '50%', border: '1px solid var(--card-border)', display: 'inline-flex', transition: 'all 0.3s ease' }}>
            <LinkedinIcon size={32} />
          </a>
          <a href="mailto:sreeram.jagadeeshwar@gmail.com" style={{ background: 'var(--card-bg)', padding: '1rem', borderRadius: '50%', border: '1px solid var(--card-border)', display: 'inline-flex', transition: 'all 0.3s ease' }}>
            <Mail size={32} />
          </a>
        </div>
        
        <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>
          © {new Date().getFullYear()} Sreeram Jagadeeshwar. Built with React & Vite.
        </p>
      </motion.div>
    </footer>
  );
};

export default Contact;
