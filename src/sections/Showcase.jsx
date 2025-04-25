import React, { useRef } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Showcase = () => {
  const sectionRef = useRef(null);
  const project1Ref = useRef(null);
  const project2Ref = useRef(null);
  const project3Ref = useRef(null);

  useGSAP(() => {
    gsap.fromTo(
      sectionRef.current,
      {
        opacity: 0,
      },
      {
        opacity: 1,
        duration: 1.5,
      }
    );

    const projects = [
      project1Ref.current,
      project2Ref.current,
      project3Ref.current,
    ];

    projects.forEach((project, index) => {
      gsap.fromTo(
        project,
        {
          y: 50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.3 * (index + 1),
          scrollTrigger: {
            trigger: project,
            start: 'top bottom-=100',
          },
        }
      );
    });
  }, []);

  return (
    <section id="work" ref={sectionRef} className="app-showcase">
      <div className="w-full ">
        <div className="showcaselayout">
          {/* GAUCHE  */}
          <a
            target="_blank"
            href="https://hotel-petra-serena.vercel.app/"
            className="first-project-wrapper border border-[#05070a] rounded-xl hover:border-gray-900 p-6 cursor-pointer overflow-hidden"
            ref={project1Ref}
          >
            <div className={`image-wrapper`}>
              <img src="./images/project1.png" alt="first-project" />
            </div>
            <div className="text-content text-center">
              <h2>Hotel - Reservation de chambres</h2>
              <p className="text-white-50 md:text-xl">
                Application web développée avec Next.js et Appwrite, permettant
                de réserver des chambres en ligne facilement, avec gestion des
                disponibilités et espace admin.
              </p>
            </div>
          </a>

          {/* DROITE  */}

          <div className="project-list-wrapper overflow-hidden">
            <a
              href="https://frisca.vercel.app/"
              target="_blank"
              className="project border border-[#05070a] rounded-xl hover:border-gray-900 p-2 cursor-pointer overflow-hidden"
              ref={project2Ref}
            >
              <div className="image-wrapper ">
                <img src="./images/project2.png" alt="Library" />
              </div>
              <div className="flex gap-2 items-center justify-center">
                <div className="text-content text-center">
                  <h2>Frizzi - Démonstration de produit</h2>
                  <p className="text-white-50 max-w-[80%] mx-auto ">
                    Site interactif pour une boisson gazeuse fictive, avec
                    animations 3D déclenchées par l'utilisateur. Développé avec
                    Next.js, Three.js et GSAP.
                  </p>
                </div>
              </div>
            </a>
            <a
              href="https://house-booking-smoky.vercel.app/"
              target="_blank"
              className="project border border-[#05070a] rounded-xl hover:border-gray-900 p-2 cursor-pointer overflow-hidden"
              ref={project3Ref}
            >
              <div className="image-wrapper ">
                <img src="./images/project3.png" alt="YC Directory" />
              </div>
              <div className="text-content text-center">
                <h2>Location - Reservations estivales</h2>
                <div className="text-white-50 max-w-[80%] mx-auto ">
                  Site de réservation pour locations de vacances, développé avec
                  Next.js et Node.js, avec gestion des logements, calendrier de
                  disponibilité et espace client.
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Showcase;
