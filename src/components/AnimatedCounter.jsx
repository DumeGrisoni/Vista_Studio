import React from 'react';
import { counterItems } from '../constants';
import CountUp from 'react-countup';

const AnimatedCounter = () => {
  return (
    <div id="counter" className="padding-x-lg ">
      <div className="mx-auto grid-4-cols">
        {counterItems.map((item) => (
          <div
            key={item.label + item.value}
            className="bg-zinc-900 rounded-lg px-10 py-6 flex flex-col justify-center"
          >
            <div className="counter-number text-white text-5xl font-bold mb-2">
              <CountUp end={item.value} suffix={item.suffix} />
            </div>
            <div className="text-white-50 text-lg">{item.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AnimatedCounter;
