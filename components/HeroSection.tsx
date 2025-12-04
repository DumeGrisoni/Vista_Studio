import Image from 'next/image';
import React from 'react';

const HeroSection = ({ path }: { path: string }) => {
  return (
    <div className="text-center min-h-[calc(40vh-60px)] flex items-center justify-center flex-col bg-white w-full">
      <Image
        className="mx-auto"
        src="/Logo Texte.svg"
        alt="Vista Studio"
        width={250}
        height={100}
      />
      {path === 'dev-web' ? (
        <p className="mt-6 text-2xl leading-8 text-noir">
          Je transforme vos idées en expériences digitales exceptionnelles
        </p>
      ) : (
        <p className="mt-6 text-2xl leading-8 text-noir">
          Je fais de votre contenu un atout puissant pour développer votre
          audience et votre impact.
        </p>
      )}
    </div>
  );
};

export default HeroSection;
