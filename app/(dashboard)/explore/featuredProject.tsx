'use client';

import ProjectCard from '@/components/projectcard';
import React, { useState } from 'react';

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
          description="End-to-end no-code LLM fine-tuning studio."
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
