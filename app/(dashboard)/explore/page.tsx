'use client';

/* eslint-disable react/no-unescaped-entities */
import { cn } from '@/lib/utils';
import useCopyToClipboard from '@/utils/hooks/useCopyPaste';
import { GraduationCap, Copy, Check } from 'lucide-react';
import React from 'react';

const IconButton = ({
  onClick,
  icon: Icon,
  text,
  className,
}: {
  onClick: () => void;
  icon: React.ReactNode;
  text: string;
  className?: string;
}) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        'flex flex-row p-2 px-4 hover:opacity-50 active:opacity-70 border-[1px] border-neutral-200 rounded-lg items-center',
        className
      )}
    >
      {Icon}
      <p className="font-semibold text-[14px]">{text}</p>
    </button>
  );
};

function Index() {
  const { copy, status } = useCopyToClipboard();
  const email = 'vincentiusrogerk@gmail.com';

  const handleCopyEmail = () => {
    copy(email);
  };

  return (
    <div className="flex justify-center items-center flex-col pt-[90px]">
      <div className="max-w-[850px] flex w-full flex-col">
        <p className="font-semibold text-[40px] tracking-tight">
          Hello, I am Roger.
        </p>
        <p className="font-semibold text-[40px] tracking-tight mb-4">
          I am a <span className="text-neutral-500">software developer.</span>
        </p>
        <div className="text-md text-neutral-600 leading-relaxed space-y-4 w-3/4">
          <p>
            and a final-year Computer Science student at SUTD (Singapore
            University of Technology and Design).
          </p>
        </div>
        <div className="flex flex-row items-start w-full mt-5 space-x-3">
          <IconButton
            onClick={() => console.log('Education clicked')}
            icon={
              <GraduationCap
                className="mr-2 text-neutral-500 h-5"
                strokeWidth={1.2}
              />
            }
            text="Education"
          />
          <IconButton
            onClick={() => console.log('Another button clicked')}
            icon={
              <GraduationCap
                className="mr-2 text-neutral-500 h-5"
                strokeWidth={1.2}
              />
            }
            text="Education"
            className="bg-neutral-100"
          />
          <IconButton
            onClick={handleCopyEmail}
            icon={
              status === 'copied' ? (
                <Check className="mr-2 text-green-500 h-5" strokeWidth={1.2} />
              ) : (
                <Copy className="mr-2 text-neutral-500 h-4" strokeWidth={1.2} />
              )
            }
            text={status === 'copied' ? 'Copied!' : 'Copy Email'}
            className={status === 'copied' ? 'bg-green-100' : ''}
          />
        </div>
      </div>
    </div>
  );
}

export default Index;
