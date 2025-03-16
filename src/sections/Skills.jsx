import React from 'react';
import { skills } from '../constants/index.js';

const Skills = () => {
  return (
    <section className="c-space my-20">
      <h3 className="head-text">SKILLS</h3>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6 px-4 sm:px-8 mt-10">
        {skills.map((skill) => (
          <div
            key={skill.id}
            className="bg-gradient-to-br from-gray-800 to-gray-900/80 border border-gray-700 rounded-xl p-6 shadow-md hover:shadow-xl transition duration-300 transform hover:-translate-y-2 backdrop-blur-lg hover:scale-105">
            <div className="flex flex-col items-center">
              <img
                src={skill.icon}
                alt={skill.name}
                className="w-14 h-14 mb-4 transition-transform duration-300 hover:scale-110"
              />
              <h3 className="text-lg font-semibold text-white">{skill.name}</h3>
              <p className="text-xs text-gray-400 mt-1">{skill.level}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
