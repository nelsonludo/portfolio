import React from 'react';

const projects = [
  {
    title: 'Project One',
    description: 'A web application built with React and TypeScript that allows users to manage tasks efficiently.',
    technologies: ['React', 'TypeScript', 'Tailwind CSS'],
    link: 'https://github.com/yourusername/project-one',
  },
  {
    title: 'Project Two',
    description: 'A portfolio website showcasing my skills and projects, built using React and Vite.',
    technologies: ['React', 'Vite', 'Tailwind CSS'],
    link: 'https://github.com/yourusername/project-two',
  },
  // Add more projects here
];

const Projects = () => {
  return (
    <section className="p-8">
      <h1 className="text-4xl font-bold mb-8">Projects</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div key={index} className="bg-white shadow-lg rounded-lg p-6">
            <h2 className="text-2xl font-semibold mb-4">{project.title}</h2>
            <p className="mb-4">{project.description}</p>
            <p className="mb-4">
              <span className="font-semibold">Technologies: </span>{' '}
              {project.technologies.join(', ')}
            </p>
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
              View Project
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
