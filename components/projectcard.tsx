'use client';

import Image from 'next/image';
import { ArrowRight } from 'lucide-react'; // Make sure to install lucide-react
import { useState } from 'react';
import { cn } from '@/lib/utils';

interface ProjectCardProps {
  title: string;
  description: string;
  imageSrc: string;
  link: string;
  className?: string;
  noNewTab?: boolean;
}

export default function ProjectCard({
  title,
  description,
  imageSrc,
  link,
  className,
  noNewTab,
}: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <a
      href={link}
      target={noNewTab ? undefined : '_blank'}
      rel="noopener noreferrer"
      className={cn(
        'block bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300',
        className
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative aspect-[16/9] overflow-hidden">
        <Image
          src={imageSrc}
          alt={title}
          layout="fill"
          objectFit="cover"
          className="transition-transform duration-300 hover:scale-110"
        />
      </div>
      <div className="p-4 relative">
        <h3 className="font-semibold text-lg">{title}</h3>
        <p className="text-gray-600 text-sm mt-1">{description}</p>
        <div
          className={`absolute right-4 bottom-4 transition-opacity duration-300 text-neutral-500 ${
            isHovered ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <ArrowRight className="text-gray-600" size={20} />
        </div>
      </div>
    </a>
  );
}
