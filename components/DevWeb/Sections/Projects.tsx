'use client';
import { projects } from '@/lib/datas';
import React from 'react';
import { ProjectCard } from '../ProjectCard';
import { Carousel } from '../Carousel';

const Projects = () => {
  return (
    <section className="px-6 py-20 relative z-10 bg-white w-full">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl text-center mb-4">Réalisations</h2>
        <p className="text-center text-noir/70 md:mb-16 text-lg">
          Découvrez quelques projets que j&apos;ai réalisés
        </p>
        <div className="md:w-[60%] w-[80%] mx-auto">
          <Carousel>
            {projects.map((project, index) => (
              <div key={index} className="px-4">
                <ProjectCard
                  title={project.title}
                  description={project.description}
                  category={project.category}
                  image={project.image}
                  link={project.link}
                  bg={project.bg}
                  littleImg={project.littleImg}
                />
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Projects;
