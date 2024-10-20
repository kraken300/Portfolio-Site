import React from 'react';
import { FaEye, FaGithub } from 'react-icons/fa';

const projectsData = [
  {
    title: 'Country Search App',
    description: 'A web app to search country details using the REST Countries API and display them in an organized grid.',
    link: 'https://countries-api-react-z30b.onrender.com',
    github: 'https://github.com/kraken300/Countries-API-React',
    image: '/Portfolio-Site/projects/countries.png',
  },
  {
    title: 'MealsDB App',
    description: 'A meal search app to explore global recipes using the MealsDB API, featuring a favorites save option.',
    link: 'https://mealsdb-api-react.onrender.com',
    github: 'https://github.com/kraken300/MealsDB-API-React',
    image: '/Portfolio-Site/projects/mealsDB.png',
  },
  {
    title: 'Full Stack Note App',
    description: 'A full-stack note-taking app with user authentication and database integration.',
    link: 'https://full-stack-note-app-frontend.onrender.com',
    github: 'https://github.com/kraken300/Full-Stack-Note-App',
    image: '/Portfolio-Site/projects/note.png',
  },
  {
    title: 'Portfolio Site',
    description: 'A personal portfolio website built using modern web technologies and fully responsive.',
    link: 'https://kraken300.github.io/Portfolio-Site/',
    github: 'https://github.com/kraken300/Portfolio-Site/',
    image: '/Portfolio-Site/projects/portfolio_home.png',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-12 animate-fade-in-down">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-fade-in">
          {projectsData.map((project, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-lg shadow-lg overflow-hidden transition-transform duration-500 hover:scale-105"
              style={{ maxHeight: '450px' }}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-40 object-cover"
              />
              <div className="p-4 flex flex-col justify-between h-[200px]">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-sm mb-4">{project.description}</p>
                <div className="flex justify-between">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-purple-400 hover:underline"
                  >
                    <FaEye className="mr-1" /> View Project
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-purple-400 hover:underline"
                  >
                    <FaGithub className="mr-1" /> GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
