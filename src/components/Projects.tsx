// import React from 'react'
import animalBiometricsImage from "../assets/animal-biometrics.png";
import tweeterAppImage from "../assets/tweeter-app.png";
import portfolioImage from "../assets/portfolioImage.png";
import sudokuImage from "../assets/sudokuImage.png";
import drawImage from "../assets/draw.svg";

const projects = [
  {
    id: 1,
    name: "This Page!",
    technologies: "React, TypeScript, Tailwind CSS",
    image: portfolioImage,
    github: "https://github.com/isaacerdman/portfolio",
  },
  {
    id: 2,
    name: "Tweeter app",
    technologies: "React, TypeScript, Node.js",
    image: tweeterAppImage,
    github: "https://github.com/isaacerdman",
  },
  {
    id: 3,
    name: "Animal Biometrics",
    technologies: "OpenCV, PyTorch",
    image: animalBiometricsImage,
    github: "https://github.com/isaacerdman",
  },
  {
    id: 4,
    name: "Sudoku Solver",
    technologies: "C++",
    image: sudokuImage,
    github: "https://github.com/isaacerdman",
  },
  {
    id: 5,
    name: "Draw-app",
    technologies: "React, Typescript, Tailwind CSS",
    image: drawImage,
    github: "https://github.com/isaacerdman/draw-app",
  },
];

const Projects = () => {
  return (
    <div className="bg-black text-white py-20" id="projects">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-gray-800 p-6 rounded-lg hover:shadow-lg
                        transform transition-transform duration-300 hover:scale-105"
            >
              <img
                src={project.image}
                alt={project.name}
                className="rounded-lg mb-4
                            w-full h-48 object-cover"
              />
              <h3 className="text-2xl font-bold mb-2">{project.name}</h3>
              <p className="text-gray-400 mb-4">{project.technologies}</p>
              <a
                href={project.github}
                className="inline-block bg-gradient-to-r from-orange-500 to-yellow-500
                            text-white px-4 py-2 rounded-full hover:scale-105"
                target="_blank"
                rel="noopener noreferrer"
              >
                Github
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
