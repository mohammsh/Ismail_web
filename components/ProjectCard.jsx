// components/ProjectCard.jsx
import React from 'react';

const ProjectCard = ({ project }) => {
  return (
    <div className="p-6 border rounded-lg shadow-md hover:shadow-xl transition duration-300">
      <img
        src={project.image}
        alt={project.name}
        className="w-full h-48 object-cover mb-4 rounded-md"
      />
      <h3 className="text-xl font-semibold mb-2">{project.name}</h3>
      <p className="text-gray-700 mb-4">{project.description}</p>
      <div className="flex justify-between items-center">
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline"
        >
          View LinkedIn
        </a>
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 hover:underline"
        >
          View GitHub
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
