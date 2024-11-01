// components/MazeGame.tsx
import React, { useState, useEffect } from 'react';
import Character from './Character';
import InfoModal from './InfoModal';
import { mazeLayout, careerData } from './mazeData';

const CELL_SIZE = 40;

const MazeGame: React.FC = () => {
  const [characterPosition, setCharacterPosition] = useState({ x: 0, y: 0 });
  const [collectedItems, setCollectedItems] = useState<string[]>([]);
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState({ title: '', content: '' });

  const moveCharacter = (dx: number, dy: number) => {
    const newX = characterPosition.x + dx;
    const newY = characterPosition.y + dy;

    if (
      newX >= 0 &&
      newX < mazeLayout[0].length &&
      newY >= 0 &&
      newY < mazeLayout.length &&
      mazeLayout[newY][newX] !== 1
    ) {
      setCharacterPosition({ x: newX, y: newY });
      checkCell(newX, newY);
    }
  };

  const checkCell = (x: number, y: number) => {
    const cellValue = mazeLayout[y][x];
    if (cellValue > 1) {
      const item = careerData[cellValue - 2];
      if (!collectedItems.includes(item.title)) {
        setCollectedItems([...collectedItems, item.title]);
        setModalContent(item);
        setShowModal(true);
      }
    }
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      switch (e.key) {
        case 'ArrowUp':
          moveCharacter(0, -1);
          break;
        case 'ArrowDown':
          moveCharacter(0, 1);
          break;
        case 'ArrowLeft':
          moveCharacter(-1, 0);
          break;
        case 'ArrowRight':
          moveCharacter(1, 0);
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [characterPosition]);

  return (
    <div className="relative">
      <div
        className="bg-white p-4 rounded-lg shadow-lg"
        style={{
          width: `${mazeLayout[0].length * CELL_SIZE}px`,
          height: `${mazeLayout.length * CELL_SIZE}px`,
        }}
      >
        {mazeLayout.map((row, y) =>
          row.map((cell, x) => (
            <div
              key={`${x}-${y}`}
              className={`absolute ${
                cell === 1 ? 'bg-gray-800' : 'bg-gray-200'
              }`}
              style={{
                width: `${CELL_SIZE}px`,
                height: `${CELL_SIZE}px`,
                left: `${x * CELL_SIZE}px`,
                top: `${y * CELL_SIZE}px`,
              }}
            />
          ))
        )}
        <Character
          x={characterPosition.x * CELL_SIZE}
          y={characterPosition.y * CELL_SIZE}
          size={CELL_SIZE}
        />
      </div>
      <div className="mt-4">
        <h2 className="text-xl font-bold">Collected Items:</h2>
        <ul>
          {collectedItems.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
      <InfoModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        title={modalContent.title}
        content={modalContent.content}
      />
    </div>
  );
};

export default MazeGame;
