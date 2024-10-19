import React from 'react';
import { FaUserAlt, FaLaptopCode, FaCode } from 'react-icons/fa';

const About = () => {

  return (
    <section id="about" className="bg-gray-900 text-white py-20">
      <div className="container mx-auto px-4">
        <h2
          className="text-3xl md:text-5xl font-bold text-center mb-8 animate-fade-in-down"
        >
          About Me
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-fade-in">

          <div className="bg-gray-700 rounded-lg p-6 shadow-lg hover:bg-purple-700 transition duration-300">
            <div className="flex items-center mb-4">
              <FaUserAlt className="w-6 h-6 mr-2" />
              <h3 className="text-2xl md:text-3xl font-semibold">Who I Am</h3>
            </div>
            <p className="text-lg md:text-xl">
              Hello! I’m Shivam, I’m a web developer with a passion for crafting innovative digital solutions. With a background in Computer Science, I thrive on transforming ideas into functional, user-friendly websites. I’m committed to continuous learning and staying updated with the latest technologies in the web development landscape.
            </p>
          </div>

          <div className="bg-gray-700 rounded-lg p-6 shadow-lg hover:bg-purple-700 transition duration-300">
            <div className="flex items-center mb-4">
              <FaLaptopCode className="w-6 h-6 mr-2" />
              <h3 className="text-2xl md:text-3xl font-semibold">My Interests</h3>
            </div>
            <p className="text-lg md:text-xl">
              Outside of coding, I’m passionate about staying on top of the latest trends in web development and Android news. I often dive into tutorials to deepen my knowledge and spark new ideas. Exploring innovative concepts and applying them creatively fuels my enthusiasm and drives my growth as a developer.
            </p>
          </div>

          <div className="bg-gray-700 rounded-lg p-6 shadow-lg hover:bg-purple-700 transition duration-300">
            <div className="flex items-center mb-4">
              <FaCode className="w-6 h-6 mr-2" />
              <h3 className="text-2xl md:text-3xl font-semibold">Working with APIs</h3>
            </div>
            <p className="text-lg md:text-xl">
              I love working with APIs to integrate external data and services into my applications.
              Whether it's consuming RESTful APIs, I’m always excited to explore new ways to harness API capabilities in my projects.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
