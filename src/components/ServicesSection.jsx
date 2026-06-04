import React from 'react';
import FadeIn from './FadeIn';

const services = [
  {
    num: '01',
    name: 'AI & Machine Learning',
    desc: 'Designing deep learning solutions for image classification, object detection, medical imaging, and predictive analytics using TensorFlow, Keras, and PyTorch.'
  },
  {
    num: '02',
    name: 'Computer Vision',
    desc: 'Building systems using OpenCV, TensorFlow, Vision Transformers, and real-time image processing pipelines for healthcare and industrial applications.'
  },
  {
    num: '03',
    name: 'Embedded Systems',
    desc: 'Developing firmware and intelligent hardware solutions using ESP32, STM32, Arduino, and Raspberry Pi for edge computing and smart devices.'
  },
  {
    num: '04',
    name: 'IoT Solutions',
    desc: 'Creating cloud-connected IoT platforms with MQTT, Home Assistant, sensors, automation, and real-time monitoring for industrial deployment.'
  },
  {
    num: '05',
    name: 'Research & Prototyping',
    desc: 'Transforming research concepts into deployable products through experimentation, optimization, validation, and peer-reviewed publication.'
  }
];

const ServicesSection = () => {
  return (
    <section
      id="services"
      className="section-white"
      style={{ padding: 'clamp(4rem, 8vw, 8rem) clamp(1.5rem, 4vw, 2.5rem)' }}
    >
      <FadeIn delay={0} y={40}>
        <h2 style={{
          fontWeight: 900,
          textTransform: 'uppercase',
          textAlign: 'center',
          fontSize: 'clamp(3rem, 12vw, 160px)',
          color: '#0C0C0C',
          lineHeight: 1,
          letterSpacing: '-0.03em',
          marginBottom: 'clamp(3rem, 6vw, 7rem)'
        }}>
          Services
        </h2>
      </FadeIn>

      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        {services.map((s, i) => (
          <FadeIn key={i} delay={i * 0.08} y={20}>
            <div className="service-item">
              <span className="service-number">{s.num}</span>
              <div>
                <div className="service-name">{s.name}</div>
                <div className="service-desc">{s.desc}</div>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
