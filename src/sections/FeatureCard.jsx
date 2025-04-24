import React from 'react';
import { abilities } from '../constants';

const FeatureCard = () => {
  return (
    <section className="w-full padding-x-lg">
      <div className="mx-auto grid-3-cols">
        {abilities.map(({ imgPath, title, desc }) => (
          <div
            key={title}
            className="card-border p-8 flex flex-col gap-4 rounded-xl"
          >
            <div className="size-14 flex items-center justify-center rounded-full">
              <img src={imgPath} alt={title} />
            </div>
            <h3 className="tex-white text-2xl font-semibold">{title}</h3>
            <p className="text-white-50 text-lg">{desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeatureCard;
