import React from 'react';
import ProjectCard from './ProjectCard';
import FoodvistaImg from "../assets/foodvista_image.png"
import InvestHubImg from "../assets/coffee.png"
import DevXops from "../assets/DevXops.png"

const projectsData = [
  {
    title: 'DevXops',
    description: 'Transform your IT infrastructure with DevXops Technology.',
    image: DevXops,
    link: 'https://github.com/Rhitesh47/devXops'
  },
  {
    title: 'Food Vista',
    description: 'FoodVista streamlines food browsing and ordering with a fast-loading app. Explore, order, and enjoy dishes effortlessly, all in a user-friendly interface.',
    image: FoodvistaImg, 
    link: 'https://food-vista.vercel.app/'
  },
  {
    title: 'coffee',
    description: 'online coffee shop .',
    image: InvestHubImg,
    link: 'https://github.com/Rhitesh47/IPExp_3'
  },
  
  // Add more projects here...
];

const Projects = () => {
  return (
    <section className="p-8 bg-violet-950 dark:bg-gray-800 text-white"
    style={{
      backgroundImage: `radial-gradient(rgba(255, 255, 255, 0.6) 10%, transparent 10%)`,
      backgroundSize: '20px 20px',
    }}
    >
      <h3 className="text-3xl font-bold mb-8 text-center"><span className='text-yellow-400'>My</span> Projects</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projectsData.map((project, index) => (
          <ProjectCard 
            key={index} 
            title={project.title} 
            description={project.description} 
            image={project.image}  
            link={project.link} 
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;
