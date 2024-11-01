// app/career-maze/page.tsx

'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Toaster } from '@/components/ui/toaster';
import { useToast } from '@/components/ui/use-toast';

const experiences = [
  {
    title: 'Intern Developer',
    description: 'Learned fundamentals of web development',
  },
  {
    title: 'Junior Developer',
    description: 'Worked on front-end projects using React',
  },
  {
    title: 'Mid-level Developer',
    description: 'Led small team projects and improved performance',
  },
  {
    title: 'Senior Developer',
    description: 'Architected large-scale applications',
  },
  {
    title: 'Tech Lead',
    description: 'Mentored junior developers and set technical direction',
  },
];

const Character = ({ position }: { position: number }) => (
  <motion.div
    className="absolute bottom-0 w-8 h-8 bg-blue-500 rounded-full"
    style={{ left: `${position}%` }}
    initial={{ y: 0 }}
    animate={{ y: [0, -10, 0] }}
    transition={{ repeat: Infinity, duration: 1 }}
  >
    <div className="w-4 h-2 bg-white rounded-full absolute top-1 left-1"></div>
    <div className="w-4 h-2 bg-white rounded-full absolute top-1 right-1"></div>
  </motion.div>
);

const Coin = ({ position }: { position: number }) => (
  <motion.div
    className="absolute bottom-12 w-6 h-6 bg-yellow-400 rounded-full border-2 border-yellow-600"
    style={{ left: `${position}%` }}
    initial={{ y: 0, rotate: 0 }}
    animate={{ y: [0, -5, 0], rotate: 360 }}
    transition={{ repeat: Infinity, duration: 1.5 }}
  />
);

export default function CareerMaze() {
  const [position, setPosition] = useState(0);
  const [coins, setCoins] = useState(0);
  const [currentExperience, setCurrentExperience] = useState(0);
  const [gameComplete, setGameComplete] = useState(false);
  const { toast } = useToast();

  const moveCharacter = (direction: 'left' | 'right') => {
    if (gameComplete) return;
    setPosition((prev) => {
      const newPosition = direction === 'right' ? prev + 5 : prev - 5;
      if (newPosition >= 0 && newPosition <= 100) {
        if (newPosition % 20 === 0) {
          setCoins((prev) => prev + 1);
          toast({
            title: 'Coin collected!',
            description: "You've gained a new skill.",
          });
        }
        if (newPosition === 100) {
          setGameComplete(true);
          toast({
            title: 'Congratulations!',
            description: "You've completed your career path!",
          });
        }
        setCurrentExperience(Math.floor(newPosition / 20));
        return newPosition;
      }
      return prev;
    });
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') moveCharacter('right');
      if (e.key === 'ArrowLeft') moveCharacter('left');
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="min-h-screen bg-neutral-100 p-8 flex flex-col items-center justify-center">
      <Card className="w-full max-w-3xl">
        <CardHeader>
          <CardTitle>Career Path Maze</CardTitle>
          <CardDescription>
            Navigate your career journey and collect experiences
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="relative h-24 bg-neutral-200 rounded-lg mb-4">
            <div className="absolute top-0 left-0 w-full h-2 bg-neutral-300"></div>
            <div
              className="absolute top-0 left-0 h-2 bg-blue-500 transition-all duration-300"
              style={{ width: `${position}%` }}
            ></div>
            {[0, 20, 40, 60, 80].map((pos) => (
              <Coin key={pos} position={pos} />
            ))}
            <Character position={position} />
          </div>
          <div className="flex justify-between mb-4">
            <Button
              onClick={() => moveCharacter('left')}
              disabled={position === 0}
            >
              ← Move Left
            </Button>
            <Button
              onClick={() => moveCharacter('right')}
              disabled={position === 100}
            >
              Move Right →
            </Button>
          </div>
          <Progress value={position} className="mb-4" />
          <div className="text-center mb-4">
            <p className="text-lg font-semibold">Coins: {coins}</p>
            <p className="text-sm text-neutral-600">
              Each coin represents a new skill or achievement
            </p>
          </div>
        </CardContent>
        <CardFooter className="flex flex-col items-start">
          <h3 className="text-lg font-semibold mb-2">Current Experience:</h3>
          {experiences[currentExperience] && (
            <div>
              <p className="font-medium">
                {experiences[currentExperience].title}
              </p>
              <p className="text-sm text-neutral-600">
                {experiences[currentExperience].description}
              </p>
            </div>
          )}
          {gameComplete && (
            <div className="mt-4 p-4 bg-green-100 rounded-lg">
              <p className="font-semibold text-green-800">
                Career Goal Achieved: Senior Tech Lead
              </p>
              <p className="text-sm text-green-700">
                You've mastered full-stack development and leadership skills!
              </p>
            </div>
          )}
        </CardFooter>
      </Card>
      <Toaster />
    </div>
  );
}
