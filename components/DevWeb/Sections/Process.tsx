import { processSteps } from '@/lib/datas';
import React from 'react';
import { ProcessStep } from '../ProcessStep';

const Process = () => {
  return (
    <section className="px-6 py-20 bg-[#fafafa] w-full">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col max-w-[80%] md:max-w-[30%] gap-3 mx-auto mb-16">
          <h2 className="md:text-4xl text-2xl text-center ">
            De l&apos;idée au concept
          </h2>
          <div className="h-px bg-gris w-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
          {processSteps.map((step, index) => (
            <ProcessStep
              key={index}
              number={step.number}
              title={step.title}
              description1={step.description1}
              description2={step.description2}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
