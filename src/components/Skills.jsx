import React from 'react';

const skillsData = [
  { name: 'HTML', logo: '/Portfolio-Site/images/HTML5_logo.png' },
  { name: 'CSS', logo: '/Portfolio-Site/images/CSS3_logo.png' },
  { name: 'JavaScript', logo: '/Portfolio-Site/images/JavaScript_logo.png' }, 
  { name: 'React', logo: '/Portfolio-Site/images/React_logo.png' },
  { name: 'Node.js', logo: '/Portfolio-Site/images/Nodejs_logo.png' },
  { name: 'MongoDB', logo: '/Portfolio-Site/images/Mongo_logo.png' },
  { name: 'Tailwind CSS', logo: '/Portfolio-Site/images/Tailwind_logo.png' },
  { name: 'Git', logo: '/Portfolio-Site/images/Git_logo.png' },
];

const Skills = () => {
  return (
    <section id="skills" className="bg-gray-900 text-white py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-6xl font-bold text-center mb-8 animate-fade-in-down">My Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 animate-fade-in">
          {skillsData.map((skill, index) => (
            <div 
              key={index} 
              className="bg-gray-800 rounded-lg shadow-lg p-6 h-[150px] flex flex-col items-center justify-center transition-transform duration-500 hover:scale-105 hover:border-2 hover:border-purple-400 opacity-0 animate-fade-in"
            >
              <img
                src={skill.logo}
                alt={skill.name}
                className="w-16 h-20 mb-2" 
              />
              <h3 className="text-2xl font-semibold">{skill.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
