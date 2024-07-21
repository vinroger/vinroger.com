import React from 'react';
import Details from './details';

function Index() {
  return (
    <div className="flex justify-center items-center flex-col pt-[90px]">
      <div className="max-w-[850px] flex w-full flex-col pb-[100px] px-5 lg:px-0">
        <h1 className="font-semibold text-[40px] tracking-tight">Experience</h1>
        <h2 className="text-neutral-700 text-md mt-[10px] mb-10">
          My internships and work experiences.
        </h2>
        <Details />
      </div>
    </div>
  );
}

export default Index;
