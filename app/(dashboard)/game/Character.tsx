// components/Character.tsx
import React from 'react';

interface CharacterProps {
  x: number;
  y: number;
  size: number;
}

const Character: React.FC<CharacterProps> = ({ x, y, size }) => {
  return (
    <div
      className="absolute bg-blue-500 rounded-full"
      style={{
        width: `${size}px`,
        height: `${size}px`,
        left: `${x}px`,
        top: `${y}px`,
        transition: 'all 0.2s',
      }}
    />
  );
};

export default Character;
