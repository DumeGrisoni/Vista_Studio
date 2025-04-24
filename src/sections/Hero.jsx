import React from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

//-------------- Import Interne ----------------
import { words } from '../constants/index.js';
import Button from '../components/Button.jsx';
import HeroExperience from '../components/Models/HeroModels/HeroExperience.jsx';
import AnimatedCounter from '../components/AnimatedCounter.jsx';

gsap.registerPlugin(useGSAP);

const Hero = () => {
  useGSAP(() => {
    gsap.fromTo(
      '.hero-text h1',
      {
        y: 50,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        stagger: 0.2,
        duration: 1,
        ease: 'power2.inOut',
      }
    );
  });
  return (
    <section id="hero" className="relative overflow-hidden">
      <div className="absolute top-0 left-0 z-10">
        <img src="./images/bg.png" alt="background" />
      </div>

      <div className="hero-layout">
        {/* GAUCHE : TEXT */}
        <header className="flex flex-col justify-center md:w-full w-screen md:px-20 px-5">
          <div className="flex flex-col gap-7">
            <div className="hero-text">
              <h1>
                Partir d'
                <span className="slide">
                  <span className="wrapper">
                    {words.map((word, index) => (
                      <span
                        key={word.text + index}
                        className="flex items-center md:gap-3 gap-1 pb-2"
                      >
                        <span>{word.text}</span>
                        <img
                          src={word.imgPath}
                          className="xl:size-12 md:size-10 size-7 md:p-2 p-1 rounded-full bg-white-50"
                          alt={word.text}
                        />
                      </span>
                    ))}
                  </span>
                </span>
              </h1>
              <h1> et finir avec</h1>
              <h1> un projet concret</h1>
            </div>

            <p className="text-sm lg:max-w-[50%]  text-white-50 relative z-10 ">
              Je m'appelle Dumè Grisoni, je suis un developpeur basé en Corse,
              spécialisé dans la création de sites et d'applications sur mesure
              dédier à valoriser votre activité en ligne.
            </p>
            <Button
              className="md:w-80 md:h-16 w-60 h-12"
              id="counter"
              text="Mes projets"
            />
          </div>
        </header>

        {/* DROITE : 3D MODEL */}
        <figure>
          <div className="hero-3d-layout">
            <HeroExperience />
          </div>
        </figure>
      </div>

      <AnimatedCounter />
    </section>
  );
};

export default Hero;
