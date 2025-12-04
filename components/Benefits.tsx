import { benefits } from '@/lib/datas';
import React from 'react';
import { BenefitCard } from './BenefitCard';

const Benefits = () => {
  return (
    <section className="px-6 min-h-[50vh] flex items-center w-full pb-20">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col max-w-[80%] md:max-w-[55%] gap-3 mx-auto mb-16">
          <h2 className="md:text-4xl text-center text-2xl">
            Pourquoi avoir une présence digitale ?
          </h2>
          <div className="h-px bg-gris w-full" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-12 mb-6">
          {benefits.map((benefit, index) => (
            <BenefitCard
              key={index}
              title={benefit.title}
              description1={benefit.description1}
              description2={benefit.description2}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
