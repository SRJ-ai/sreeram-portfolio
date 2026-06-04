import React, { useRef, useState, useCallback } from 'react';

const Magnet = ({
  children,
  padding = 100,
  strength = 3,
  activeTransition = 'transform 0.3s ease-out',
  inactiveTransition = 'transform 0.6s ease-in-out',
  style = {},
  className = ''
}) => {
  const ref = useRef(null);
  const [active, setActive] = useState(false);
  const [transform, setTransform] = useState('translate3d(0,0,0)');

  const handleMouseMove = useCallback((e) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const distX = e.clientX - centerX;
    const distY = e.clientY - centerY;
    const dist = Math.sqrt(distX * distX + distY * distY);
    const limit = Math.max(rect.width, rect.height) / 2 + padding;

    if (dist < limit) {
      setActive(true);
      setTransform(`translate3d(${distX / strength}px, ${distY / strength}px, 0)`);
    } else if (active) {
      setActive(false);
      setTransform('translate3d(0,0,0)');
    }
  }, [active, padding, strength]);

  const handleMouseLeave = useCallback(() => {
    setActive(false);
    setTransform('translate3d(0,0,0)');
  }, []);

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={className}
      style={{
        ...style,
        transform,
        willChange: 'transform',
        transition: active ? activeTransition : inactiveTransition
      }}
    >
      {children}
    </div>
  );
};

export default Magnet;
