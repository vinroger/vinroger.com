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
      <div className="relative h-48 overflow-hidden">
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
          className={`absolute right-4 bottom-4 transition-opacity duration-300 ${
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
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <ProjectCard
          title="Billify"
          description="A digital invoice template for designers."
          imageSrc="/singtel.png"
          link="https://example.com/billify"
        />
        <ProjectCard
          title="Billify"
          description="A digital invoice template for designers."
          imageSrc="/singtel.png"
          link="https://example.com/billify"
        />
        <ProjectCard
          title="Supply"
          description="Lemonsqueezy-powered digital store template."
          imageSrc="/terrascope.png"
          link="https://example.com/supply"
        />
      </div>
    </div>
  );
}

export default FeaturedProjects;
