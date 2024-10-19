import React from 'react';
import Typewriter from 'typewriter-effect';

const Home = () => {
  return (
    <section id="home" className="flex items-center justify-between h-screen bg-black text-white px-8 md:px-16">
      <div className="w-full md:w-1/2 flex flex-col justify-center space-y-6">
        <h1 className="text-4xl md:text-6xl font-bold animate-fade-in-down">
          This is <span className="effect-shine">Shivam Singh</span>
        </h1>
        <h2 className="text-lg md:text-xl">
          <Typewriter
            options={{
              strings: [
                "Welcome to my portfolio!",
                "I am a Web Developer.",
                "Let's build something amazing together!",
                "Each line of JavaScript is a step in my learning journey."
              ],
              autoStart: true,
              loop: true,
              deleteSpeed: 50,
              delay: 100,
              pauseFor: 1500,
            }}
          />
        </h2>
        <p className="text-lg">
          I’m a passionate web developer dedicated to creating dynamic and user-friendly websites. Here, you’ll find a collection of my projects that highlight my skills in front-end and back-end development.
        </p>
        <p className="text-lg">
          Feel free to explore my work below and get in touch if you have any questions!
        </p>
        <div>
          <a
            href="/Portfolio-Site/files/Resume.pdf"
            download
            className="inline-block bg-purple-500 text-white font-semibold py-2 px-6 rounded-lg hover:bg-purple-600 hover:scale-105 transition-transform duration-300"
          >
            Download Resume
          </a>
        </div>
      </div>

      <div className="hidden md:flex w-full md:w-1/2 justify-end">
        <img
          src="/Portfolio-Site/images/profile.png"
          alt="A portrait"
          className="w-2/3 h-auto object-contain"
        />
      </div>
    </section>
  );
};

export default Home;
