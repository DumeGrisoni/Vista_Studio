import { pricing } from '@/lib/datas';
import React from 'react';
import { PricingCard } from '../PricingCard';
import Link from 'next/link';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Pricing = () => {
  return (
    <section className="px-6 py-20 relative z-10 ">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl text-center mb-4">Les Formules</h2>
        <p className="text-center text-noir/70 mb-16 text-lg">
          Des solutions adaptées à chaque projet et à chaque budget
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pricing.map((plan, index) => (
            <PricingCard
              key={index}
              name={plan.name}
              price={plan.price}
              description={plan.description}
            />
          ))}
        </div>
        <Link
          href={'/contact-infos'}
          className="flex items-center justify-center mt-8  text-xl hover:text-gris text-noir hover:scale-101 transition-all"
        >
          <ChevronRight className="w-4 h-4" />{' '}
          <p>Prêt à démarrer votre projet ? Contactez-moi.</p>{' '}
          <ChevronLeft className="w-4 h-4" />
        </Link>
      </div>
    </section>
  );
};

export default Pricing;
