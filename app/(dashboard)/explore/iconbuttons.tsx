'use client';

/* eslint-disable react/no-unescaped-entities */
import { cn } from '@/lib/utils';
import useCopyToClipboard from '@/utils/hooks/useCopyPaste';
import { GraduationCap, Copy, Check, ArrowUpRight } from 'lucide-react';
import React from 'react';
import Link from 'next/link';

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

function IconButtons() {
  const { copy, status } = useCopyToClipboard();
  const email = 'vincentiusrogerk@gmail.com';

  const handleCopyEmail = () => {
    copy(email);
  };

  return (
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
        onClick={handleCopyEmail}
        icon={
          status === 'copied' ? (
            <Check className="mr-2 text-green-500 h-5" strokeWidth={1.2} />
          ) : (
            <Copy className="mr-2 text-neutral-500 h-4" strokeWidth={1.2} />
          )
        }
        text={status === 'copied' ? 'Copied!' : 'Copy Email'}
        className={status === 'copied' ? 'bg-green-100 hover:opacity-100' : ''}
      />
      <IconButton
        href="/resume"
        icon={
          <ArrowUpRight
            className="mr-2 text-neutral-500 h-5"
            strokeWidth={1.2}
          />
        }
        text="View Resume"
      />
    </div>
  );
}

export default IconButtons;
