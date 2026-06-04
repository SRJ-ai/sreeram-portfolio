import React, { useRef, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';

const generatePoints = (count, radius) => {
  const points = new Float32Array(count * 3);
  for (let i = 0; i < count; i++) {
    const r = radius * Math.cbrt(Math.random());
    const theta = Math.random() * 2 * Math.PI;
    const phi = Math.acos(2 * Math.random() - 1);
    
    points[i * 3] = r * Math.sin(phi) * Math.cos(theta);
    points[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
    points[i * 3 + 2] = r * Math.cos(phi);
  }
  return points;
};

const StarField = (props) => {
  const ref = useRef();
  const sphere = useMemo(() => generatePoints(4000, 1.5), []);
  
  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 10;
      ref.current.rotation.y -= delta / 15;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled={false} {...props}>
        <PointMaterial transparent color="#3b82f6" size={0.005} sizeAttenuation={true} depthWrite={false} />
      </Points>
    </group>
  );
};

const Hero = () => {
  return (
    <section id="hero" style={{ height: '100vh', width: '100%', position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, zIndex: 0 }}>
        <Canvas camera={{ position: [0, 0, 1] }}>
          <StarField />
        </Canvas>
      </div>
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        style={{ zIndex: 1, textAlign: 'center', maxWidth: '800px', padding: '0 2rem' }}
      >
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          style={{ color: 'var(--accent-color)', fontSize: '1.2rem', marginBottom: '1.5rem', letterSpacing: '2px' }}
          className="mono"
        >
          HELLO WORLD, I'M
        </motion.p>
        <h1 style={{ fontSize: 'clamp(3rem, 8vw, 5.5rem)', marginBottom: '1rem', lineHeight: 1.1 }}>
          Sreeram <span className="text-gradient">Jagadeeshwar</span>
        </h1>
        <h2 style={{ fontSize: 'clamp(1.5rem, 4vw, 2.5rem)', color: 'var(--text-muted)', marginBottom: '2rem' }}>
          AI/ML Engineer & Researcher.
        </h2>
        <p style={{ fontSize: '1.2rem', color: 'var(--text-muted)', lineHeight: 1.6, marginBottom: '3rem', maxWidth: '600px', margin: '0 auto 3rem auto' }}>
          Specializing in Deep Learning, Computer Vision, Explainable AI, and Edge Deployment. 
          Building intelligent systems for healthcare and industry.
        </p>
        
        <motion.a 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          href="#projects"
          style={{
            background: 'var(--accent-color)',
            color: 'white',
            padding: '1rem 2.5rem',
            borderRadius: '30px',
            fontSize: '1.1rem',
            fontWeight: 600,
            display: 'inline-block',
            boxShadow: '0 0 20px var(--accent-glow)'
          }}
        >
          View My Work
        </motion.a>
      </motion.div>
    </section>
  );
};

export default Hero;
