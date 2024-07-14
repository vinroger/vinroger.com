'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react'; // Make sure to install lucide-react

interface ProjectCardProps {
  title: string;
  description: string;
  imageSrc: string;
  link: string;
}

function ProjectCard({ title, description, imageSrc, link }: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="block bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
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

function FeaturedProjects() {
  return (
    <div className="mt-10">
      <p className="font-semibold text-lg mb-4">Featured Projects</p>
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-6">
        <ProjectCard
          title="UImagine.io"
          description="Transform ideas to design and code in seconds."
          imageSrc="/uimagine.png"
          link="https://uimagine.io"
        />
        <ProjectCard
          title="OneLLM.co"
          description="End-to-end no code LLM fine-tuning studio."
          imageSrc="/onellm.png"
          link="https://onellm.co"
        />
        {/* <ProjectCard
          title="Project 3"
          description="Another amazing project description."
          imageSrc="/datature.png"
          link="https://example.com/project3"
        />
        <ProjectCard
          title="Project 4"
          description="Yet another cool project description."
          imageSrc="/project4.png"
          link="https://example.com/project4"
        /> */}
      </div>
    </div>
  );
}

export default FeaturedProjects;
