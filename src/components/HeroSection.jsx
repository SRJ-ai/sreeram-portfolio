import React, { useRef, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';
import FadeIn from './FadeIn';
import Magnet from './Magnet';
import resumePdf from '../assets/S_JAGADEESHWAR_AI_ML.pdf';

/* ===== Inline Social Icons ===== */
const GithubIcon = ({ size = 20 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.2c3-.3 6-1.5 6-6.5a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 0 0-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.5c0 5 3 6.2 6 6.5a4.8 4.8 0 0 0-1 3.2v4" />
  </svg>
);

const LinkedinIcon = ({ size = 20 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const WhatsAppIcon = ({ size = 20 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/>
  </svg>
);

const InstagramIcon = ({ size = 20 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

const TwitterXIcon = ({ size = 20 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
);

/* ---------- 3D Neural Network Background ---------- */
const generateSphere = (count, radius) => {
  const pos = new Float32Array(count * 3);
  for (let i = 0; i < count; i++) {
    const r = radius * Math.cbrt(Math.random());
    const theta = Math.random() * 2 * Math.PI;
    const phi = Math.acos(2 * Math.random() - 1);
    pos[i * 3]     = r * Math.sin(phi) * Math.cos(theta);
    pos[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
    pos[i * 3 + 2] = r * Math.cos(phi);
  }
  return pos;
};

const NeuralField = () => {
  const ref = useRef();
  const positions = useMemo(() => generateSphere(5000, 1.8), []);

  useFrame((_, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 12;
      ref.current.rotation.y -= delta / 18;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 6]}>
      <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color="#7621B0"
          size={0.004}
          sizeAttenuation
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </Points>
    </group>
  );
};

const CircuitRings = () => {
  const ref = useRef();
  const positions = useMemo(() => generateSphere(2000, 2.2), []);

  useFrame((_, delta) => {
    if (ref.current) {
      ref.current.rotation.y += delta / 20;
      ref.current.rotation.z += delta / 25;
    }
  });

  return (
    <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#B600A8"
        size={0.003}
        sizeAttenuation
        depthWrite={false}
        blending={THREE.AdditiveBlending}
        opacity={0.6}
      />
    </Points>
  );
};

/* ---------- Social Icon Bar Style ---------- */
const socialBarStyle = {
  display: 'flex',
  gap: '0.6rem',
  alignItems: 'center'
};

const socialIconStyle = {
  width: '40px',
  height: '40px',
  borderRadius: '50%',
  border: '1px solid rgba(215, 226, 234, 0.15)',
  background: 'rgba(255, 255, 255, 0.04)',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  transition: 'all 0.3s ease',
  color: 'var(--white)'
};

/* ---------- Hero Section ---------- */
const HeroSection = () => {
  return (
    <section
      id="hero"
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
        overflowX: 'clip'
      }}
    >
      {/* 3D Background */}
      <div className="hero-canvas">
        <Canvas camera={{ position: [0, 0, 1] }}>
          <NeuralField />
          <CircuitRings />
        </Canvas>
      </div>

      {/* Navbar */}
      <FadeIn delay={0} y={-20} style={{ position: 'relative', zIndex: 2 }}>
        <nav style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '1.5rem 2.5rem',
          fontWeight: 500,
          textTransform: 'uppercase',
          letterSpacing: '0.12em',
          fontSize: 'clamp(0.75rem, 1.2vw, 1.4rem)'
        }}>
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
      </FadeIn>

      {/* Hero Content Area */}
      <div style={{
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        zIndex: 2,
        textAlign: 'center',
        padding: '0 1.5rem'
      }}>

        <FadeIn delay={0.1} y={40}>
          <div style={{ overflow: 'hidden' }}>
            <h1
              className="hero-heading"
              style={{
                fontSize: 'clamp(2.8rem, 12vw, 14rem)',
                fontWeight: 900,
                textTransform: 'uppercase',
                letterSpacing: '-0.03em',
                lineHeight: 0.95,
                whiteSpace: 'nowrap'
              }}
            >
              JAGADEESHWAR
            </h1>
          </div>
        </FadeIn>

        <FadeIn delay={0.25} y={40}>
          <div style={{ overflow: 'hidden' }}>
            <h1
              className="hero-heading"
              style={{
                fontSize: 'clamp(2.8rem, 12vw, 14rem)',
                fontWeight: 900,
                textTransform: 'uppercase',
                letterSpacing: '-0.03em',
                lineHeight: 0.95,
                whiteSpace: 'nowrap'
              }}
            >
              SREERAM
            </h1>
          </div>
        </FadeIn>

        <FadeIn delay={0.4} y={20}>
          <p style={{
            color: 'var(--white)',
            fontSize: 'clamp(0.8rem, 1.5vw, 1.2rem)',
            fontWeight: 300,
            letterSpacing: '0.1em',
            marginTop: '1.5rem',
            opacity: 0.8
          }}>
            AI Engineer &bull; Computer Vision Researcher &bull; Embedded Systems Developer
          </p>
        </FadeIn>

        {/* Social Icons row below subtitle */}
        <FadeIn delay={0.5} y={15}>
          <div style={{ ...socialBarStyle, marginTop: '1.8rem' }}>
            <a href="https://wa.me/919000846214" target="_blank" rel="noreferrer" style={socialIconStyle} title="WhatsApp">
              <WhatsAppIcon size={18} />
            </a>
            <a href="https://linkedin.com/in/jagadeeshwar-sreeram" target="_blank" rel="noreferrer" style={socialIconStyle} title="LinkedIn">
              <LinkedinIcon size={18} />
            </a>
            <a href="https://github.com/SRJ-ai" target="_blank" rel="noreferrer" style={socialIconStyle} title="GitHub">
              <GithubIcon size={18} />
            </a>
            <a href="https://www.instagram.com/jagadeeshwar_0456/" target="_blank" rel="noreferrer" style={socialIconStyle} title="Instagram">
              <InstagramIcon size={18} />
            </a>

          </div>
        </FadeIn>
      </div>

      {/* Bottom bar */}
      <div style={{
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'flex-end',
        padding: '0 2.5rem 2.5rem 2.5rem',
        position: 'relative',
        zIndex: 2,
        flexWrap: 'wrap',
        gap: '3rem'
      }}>
        <FadeIn delay={0.55} y={20}>
          <p style={{
            color: 'var(--white)',
            fontWeight: 300,
            textTransform: 'uppercase',
            letterSpacing: '0.08em',
            lineHeight: 1.4,
            fontSize: 'clamp(0.7rem, 1.2vw, 1rem)',
            maxWidth: '260px',
            opacity: 0.7
          }}>
            Building intelligent systems at the intersection of AI, Computer Vision, IoT & Embedded Engineering.
          </p>
        </FadeIn>

        <FadeIn delay={0.65} y={20}>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <Magnet padding={80} strength={4}>
              <a href="#projects" className="btn-contact">View Projects</a>
            </Magnet>
            <Magnet padding={80} strength={4}>
              <a href={resumePdf} download="S_JAGADEESHWAR_AI_ML.pdf" className="btn-ghost">Download Resume</a>
            </Magnet>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default HeroSection;
