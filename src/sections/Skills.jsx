import React from 'react';
import { skills } from '../constants/index.js';

const Skills = () => {
  return (
    <section className="mt-12 md:my-16 lg:my-20 px-4 sm:px-6 lg:px-8">
      <h3 className="text-3xl sm:text-4xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">
        SKILLS
      </h3>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3 sm:gap-4 md:gap-5 lg:gap-6 mt-8 sm:mt-10 md:mt-12">
        {skills.map((skill) => (
          <div
            key={skill.id}
            className="bg-gradient-to-br from-gray-800 to-gray-900/80 border border-gray-700 rounded-lg md:rounded-xl p-3 sm:p-4 md:p-5 lg:p-6 shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 md:hover:-translate-y-2 backdrop-blur-sm hover:backdrop-blur-md group">
            <div className="flex flex-col items-center">
              <img
                src={skill.icon}
                alt={skill.name}
                className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 mb-2 sm:mb-3 md:mb-4 transition-transform duration-300 group-hover:scale-110"
              />
              <h3 className="text-sm sm:text-base md:text-lg font-medium sm:font-semibold text-white text-center">
                {skill.name}
              </h3>
              <p className="text-xs text-gray-400 mt-0.5 sm:mt-1 text-center">{skill.level}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;


// SKILLS SECTION DONE