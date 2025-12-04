import React from 'react';
import { ContactForm } from './ContactForm';

const Contact = () => {
  return (
    <section className="px-6 py-20 bg-white relative z-10 w-full">
      <div className="max-w-6xl mx-auto">
        <ContactForm />
      </div>
    </section>
  );
};

export default Contact;
