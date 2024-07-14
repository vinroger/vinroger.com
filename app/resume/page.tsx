'use client';

import { useEffect, useState } from 'react';

export default function ResumePage() {
  const [windowHeight, setWindowHeight] = useState('100vh');

  useEffect(() => {
    setWindowHeight(`${window.innerHeight}px`);
    const handleResize = () => setWindowHeight(`${window.innerHeight}px`);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div style={{ width: '100%', height: windowHeight }}>
      <iframe
        src="/resume.pdf"
        width="100%"
        height="100%"
        style={{ border: 'none' }}
      />
    </div>
  );
}
