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
          <div className="first-project-wrapper" ref={project1Ref}>
            <div className="image-wrapper">
              <img src="./images/project1.png" alt="first-project" />
            </div>
            <div className="text-content">
              <h2>On-Demand Rides Made Simple With Our App Ryde</h2>
              <p className="text-white-50 md:text-xl">
                Un application créer avec React Native, compatible avec tous les
                smartphones, permettant aux utilisateurs de trouver des services
                de transport en un seul clic.
              </p>
            </div>
          </div>

          {/* DROITE  */}

          <div className="project-list-wrapper overflow-hidden">
            <div className="project" ref={project2Ref}>
              <div className="image-wrapper bg-[#ffefdb]">
                <img src="./images/project2.png" alt="Library" />
              </div>
              <h2>Gestion de bibliothèque</h2>
            </div>
            <div className="project" ref={project3Ref}>
              <div className="image-wrapper bg-[#ffe7eb]">
                <img src="./images/project3.png" alt="YC Directory" />
              </div>
              <h2>Application de showcase d'une entreprise</h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Showcase;
