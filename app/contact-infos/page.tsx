import { ContactForm } from '@/components/Contact/ContactForm';
import React from 'react';

const page = () => {
  return (
    <section className="px-6  bg-white relative z-10 w-full min-h-[calc(100vh-160px)] mt-20">
      <div className="max-w-6xl mx-auto">
        <ContactForm />
      </div>
    </section>
  );
};

export default page;
