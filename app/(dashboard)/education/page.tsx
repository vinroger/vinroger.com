'use client';

import { RefreshCw } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import { toast } from 'sonner';
import Details from './details';

const quotes = [
  {
    text: 'Education is the most powerful weapon which you can use to change the world.',
    author: 'Nelson Mandela',
  },
  {
    text: 'The function of education is to teach one to think intensively and to think critically. Intelligence plus character - that is the goal of true education.',
    author: 'Martin Luther King Jr.',
  },
  {
    text: 'Education is not the filling of a pail, but the lighting of a fire.',
    author: 'William Butler Yeats',
  },
  {
    text: 'The whole purpose of education is to turn mirrors into windows.',
    author: 'Sydney J. Harris',
  },
  {
    text: 'Education is not preparation for life; education is life itself.',
    author: 'John Dewey',
  },
  {
    text: 'The roots of education are bitter, but the fruit is sweet.',
    author: 'Aristotle',
  },
  {
    text: 'Education is the passport to the future, for tomorrow belongs to those who prepare for it today.',
    author: 'Malcolm X',
  },
  {
    text: 'An investment in knowledge pays the best interest.',
    author: 'Benjamin Franklin',
  },
  {
    text: 'Education is the kindling of a flame, not the filling of a vessel.',
    author: 'Socrates',
  },
  {
    text: 'The beautiful thing about learning is that nobody can take it away from you.',
    author: 'B.B. King',
  },
  {
    text: 'Education is not the learning of facts, but the training of the mind to think.',
    author: 'Albert Einstein',
  },
  {
    text: 'The aim of education should be to teach us rather how to think, than what to think.',
    author: 'James Beattie',
  },
  {
    text: 'Education is simply the soul of a society as it passes from one generation to another.',
    author: 'G.K. Chesterton',
  },
  {
    text: 'The only person who is educated is the one who has learned how to learn and change.',
    author: 'Carl Rogers',
  },
  {
    text: 'Education is the ability to listen to almost anything without losing your temper or your self-confidence.',
    author: 'Robert Frost',
  },
  {
    text: 'The purpose of education is to replace an empty mind with an open one.',
    author: 'Malcolm Forbes',
  },
  {
    text: 'Education is what remains after one has forgotten what one has learned in school.',
    author: 'Albert Einstein',
  },
  {
    text: 'The aim of education is the knowledge, not of facts, but of values.',
    author: 'William S. Burroughs',
  },
  {
    text: 'Education is the movement from darkness to light.',
    author: 'Allan Bloom',
  },
  {
    text: "Education is learning what you didn't even know you didn't know.",
    author: 'Daniel J. Boorstin',
  },
  {
    text: 'The highest result of education is tolerance.',
    author: 'Helen Keller',
  },
  {
    text: 'Education is the key to unlocking the world, a passport to freedom.',
    author: 'Oprah Winfrey',
  },
  {
    text: 'The goal of education is the advancement of knowledge and the dissemination of truth.',
    author: 'John F. Kennedy',
  },
  {
    text: 'Education is not to reform students or amuse them or to make them expert technicians. It is to unsettle their minds, widen their horizons, inflame their intellects, teach them to think straight, if possible.',
    author: 'Robert M. Hutchins',
  },
  {
    text: 'Education is the most powerful weapon for changing the world.',
    author: 'Nelson Mandela',
  },
  {
    text: 'The object of education is to prepare the young to educate themselves throughout their lives.',
    author: 'Robert M. Hutchins',
  },
  {
    text: 'Education is the art of making man ethical.',
    author: 'Georg Wilhelm Friedrich Hegel',
  },
  {
    text: 'Education is the best friend. An educated person is respected everywhere. Education beats the beauty and the youth.',
    author: 'Chanakya',
  },
  {
    text: 'Education is the foundation upon which we build our future.',
    author: 'Christine Gregoire',
  },
  {
    text: "Education's purpose is to replace an empty mind with an open one.",
    author: 'Malcolm Forbes',
  },
  {
    text: 'The aim of education should be to teach us rather how to think, than what to think - rather to improve our minds, so as to enable us to think for ourselves, than to load the memory with thoughts of other men.',
    author: 'Bill Beattie',
  },
  {
    text: 'Education is a progressive discovery of our own ignorance.',
    author: 'Will Durant',
  },
  {
    text: 'Education is the key to success in life, and teachers make a lasting impact in the lives of their students.',
    author: 'Solomon Ortiz',
  },
  {
    text: 'The great aim of education is not knowledge but action.',
    author: 'Herbert Spencer',
  },
  {
    text: 'Education is what survives when what has been learned has been forgotten.',
    author: 'B.F. Skinner',
  },
  {
    text: 'Education is the transmission of civilization.',
    author: 'Will Durant',
  },
  {
    text: 'Education is a better safeguard of liberty than a standing army.',
    author: 'Edward Everett',
  },
  { text: 'Education is the mother of leadership.', author: 'Wendell Willkie' },
  { text: 'Education is the best provision for old age.', author: 'Aristotle' },
  {
    text: 'Education is the gateway to the future, tomorrow belongs to those who prepare for it today.',
    author: 'Malcolm X',
  },
  {
    text: 'Education is not a problem. Education is an opportunity.',
    author: 'Lyndon B. Johnson',
  },
  {
    text: 'Education is the process of driving a set of prejudices down your throat.',
    author: 'Martin H. Fischer',
  },
  {
    text: "Education is the power to think clearly, the power to act well in the world's work, and the power to appreciate life.",
    author: 'Brigham Young',
  },
  {
    text: 'Education is the path from cocky ignorance to miserable uncertainty.',
    author: 'Mark Twain',
  },
  { text: 'Education is the road to freedom.', author: 'Epictetus' },
  {
    text: 'Education is the key to unlock the golden door of freedom.',
    author: 'George Washington Carver',
  },
  {
    text: 'Education is the movement from darkness to light.',
    author: 'Allan Bloom',
  },
  {
    text: "Education is not the piling on of learning, information, data, facts, skills, or abilities - that's training or instruction - but is rather making visible what is hidden as a seed.",
    author: 'Thomas More',
  },
  {
    text: 'Education is the best friend. An educated person is respected everywhere. Education beats the beauty and the youth.',
    author: 'Chanakya',
  },
  {
    text: 'Education is simply the soul of a society as it passes from one generation to another.',
    author: 'G.K. Chesterton',
  },
];

function Index() {
  const [currentQuote, setCurrentQuote] = useState(quotes[0]);
  const [showRefresh, setShowRefresh] = useState(false);
  const [easterEggFound, setEasterEggFound] = useState(false);

  const getRandomQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    return quotes[randomIndex];
  };

  const handleRefresh = () => {
    setCurrentQuote(getRandomQuote());
    if (!easterEggFound) {
      setEasterEggFound(true);
      toast.success("You've found Easter egg #1!", {
        description: 'Hover over the quote to change it!',
      });
    }
  };

  useEffect(() => {
    if (easterEggFound) {
      localStorage.setItem('easterEgg1Found', 'true');
    }
  }, [easterEggFound]);

  useEffect(() => {
    const eggFound = localStorage.getItem('easterEgg1Found');
    if (eggFound) {
      setEasterEggFound(true);
    }
  }, []);

  return (
    <div className="flex justify-center items-center flex-col pt-[90px]">
      <div className="max-w-[850px] flex w-full flex-col pb-[100px] px-5 lg:px-0">
        <h1 className="font-semibold text-[40px] tracking-tight mb-2">
          Education
        </h1>
        <div
          className="flex flex-col text-neutral-500 relative text-md mb-5"
          onMouseEnter={() => setShowRefresh(true)}
          onMouseLeave={() => setShowRefresh(false)}
        >
          <p className=" flex flex-1">
            &quot;{currentQuote.text}&quot; - {currentQuote.author}
          </p>
          {showRefresh && (
            <button
              className="absolute top-0 right-0 p-2 bg-white rounded-full shadow-md hover:bg-neutral-200 transition-colors duration-200"
              onClick={handleRefresh}
            >
              <RefreshCw size={20} />
            </button>
          )}
        </div>
        <Details />
      </div>
    </div>
  );
}

export default Index;
