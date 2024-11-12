import React from 'react';
import { FaEnvelope, FaGithub } from 'react-icons/fa';

const Home = () => {
  return (
    <section
      id="home"
      className="flex items-center justify-center min-h-screen bg-black text-white px-8 md:px-16"
    >
      <div className="w-full md:w-2/3 flex flex-col justify-center space-y-8 text-center lg:mt-14">
        <h1 className="text-4xl md:text-6xl font-bold animate-fade-in-down">
          Hey there! I'm <span className="effect-shine">Shivam Singh</span>
        </h1>
        <p className="text-lg">
          Aspiring web developer eager to apply my skills to real-world projects. Have a look at my portfolio to see what I’ve been working on.
        </p>
        <p className="text-lg">
          Open to new opportunities and excited to learn and grow in a dynamic environment.
        </p>

        <div>
          <a
            href="/Portfolio-Site/files/Resume.pdf"
            download
            className="inline-block bg-emerald-500 text-white font-semibold py-2 px-6 rounded-lg hover:bg-emerald-600 hover:scale-105 transition-transform duration-300"
          >
            Download Resume
          </a>
        </div>

        <div className="flex justify-center space-x-8 mt-4">
          <a
            href="mailto:shivamsingh113355@gmail.com"
            className="text-white text-2xl hover:text-emerald-400 transition-colors duration-300"
            aria-label="Email"
          >
            <FaEnvelope />
          </a>
          <a
            href="https://github.com/kraken300"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white text-2xl hover:text-emerald-400 transition-colors duration-300"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Home;
