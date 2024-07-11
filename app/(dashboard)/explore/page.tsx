/* eslint-disable react/no-unescaped-entities */
import React from 'react';

function Index() {
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
            I'm a full-stack developer and CS student at SUTD with a passion for
            creating tech that people love. I've built cool stuff like{' '}
            <span className="font-semibold">UImagine.io</span> (AI app design)
            and <span className="font-semibold">OneLLM.co</span> (LLM
            fine-tuning).
          </p>
          <p>
            I'm all about solving problems and creating products that make a
            real impact. My skills? TypeScript, Python, React, and cloud
            platforms. I ship fast and focus on great user experiences.
          </p>
          <p>
            Got a groundbreaking idea? Need a developer who thinks like a
            product owner and cares about business? Let's chat and build
            something awesome together!
          </p>
        </div>
      </div>
    </div>
  );
}

export default Index;
