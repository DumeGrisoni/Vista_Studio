import React from 'react';
import { ServiceCard } from './ServiceCard';
import { services } from '../lib/datas';

const Services = () => {
  return (
    <section className=" my-20 py-20 bg-light min-h-[50vh] w-full min-w-full">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col max-w-[30%] md:max-w-[15%] gap-3 mx-auto mb-16">
          <h2 className="md:text-4xl text-2xl text-center ">Services</h2>
          <div className="h-px bg-gris w-full" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 ">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
