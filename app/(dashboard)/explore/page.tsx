/* eslint-disable react/no-unescaped-entities */
import { cn } from '@/lib/utils';

import React from 'react';
import Link from 'next/link';
import Experience from './experience';
import FeaturedProjects from './featuredProject';
import IconButtons from './iconbuttons';

const IconButton = ({
  onClick,
  icon: Icon,
  text,
  className,
  href,
}: {
  onClick?: () => void;
  icon: React.ReactNode;
  text: string;
  className?: string;
  href?: string;
}) => {
  const ButtonContent = () => (
    <>
      {Icon}
      <p className="font-semibold text-[14px]">{text}</p>
    </>
  );

  if (href) {
    return (
      <Link
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={cn(
          'flex flex-row p-2 px-4 hover:opacity-50 active:opacity-70 border-[1px] border-neutral-200 rounded-lg items-center',
          className
        )}
      >
        <ButtonContent />
      </Link>
    );
  }

  return (
    <button
      onClick={onClick}
      className={cn(
        'flex flex-row p-2 px-4 hover:opacity-50 active:opacity-70 border-[1px] border-neutral-200 rounded-lg items-center',
        className
      )}
    >
      <ButtonContent />
    </button>
  );
};

function Index() {
  return (
    <div className="flex justify-center items-center flex-col pt-[90px]">
      <div className="max-w-[850px] flex w-full flex-col pb-[100px] px-5 lg:px-0">
        <p className="font-semibold text-[40px] tracking-tight">
          Hello, I am Roger.
        </p>
        <p className="font-semibold text-[40px] tracking-tight mb-4">
          I am a <span className="text-neutral-500">software developer.</span>
        </p>
        <div className="text-md text-neutral-600 leading-relaxed space-y-4 w-3/4">
          <p>
            Final-year Computer Science student at SUTD (Singapore University of
            Technology and Design)
          </p>
        </div>
        <IconButtons />
        <Experience />
        <FeaturedProjects />
      </div>
    </div>
  );
}

export default Index;
