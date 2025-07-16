import { Suspense, useState, useRef, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

import Developer from '../components/Developer.jsx';
import CanvasLoader from '../components/Loading.jsx';
import { workExperiences } from '../constants/index.js';

const WorkExperience = () => {
  const [animationName, setAnimationName] = useState('idle');

  return (
    <section className="pt-16 md:pt-20 lg:pt-24 px-4 sm:px-6 lg:px-8 mb-5" id="experience">
      <div className="w-full text-gray-300">
        <p className="text-3xl sm:text-4xl font-bold text-center mb-8 md:mb-12 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">
          My Work Experience
        </p>

        <div className="flex flex-col lg:flex-row gap-8 md:gap-10">
          {/* 3D Developer Model - Changed width to 1/3 on large screens */}
          <div className="lg:w-1/3 h-64 sm:h-80 md:h-96 lg:h-[618px] rounded-xl overflow-hidden border border-gray-700">
            <Canvas>
              <ambientLight intensity={7} />
              <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
              <directionalLight position={[10, 10, 10]} intensity={1} />
              <OrbitControls enableZoom={false} maxPolarAngle={Math.PI / 2} />
              <Suspense fallback={<CanvasLoader />}>
                <Developer position-y={-3} scale={3} animationName={animationName} />
              </Suspense>
            </Canvas>
          </div>

          {/* Experience List - Changed width to 2/3 on large screens */}
          <div className="lg:w-2/3">
            <div className="space-y-4 sm:space-y-6">
              {workExperiences.map((item, index) => {
                const [expanded, setExpanded] = useState(false);
                const [needsReadMore, setNeedsReadMore] = useState(false);
                const textRef = useRef(null);

                useEffect(() => {
                  const checkTextOverflow = () => {
                    if (textRef.current && window.innerWidth < 640) {
                      setNeedsReadMore(textRef.current.scrollHeight > textRef.current.clientHeight);
                    } else {
                      setNeedsReadMore(false);
                    }
                  };

                  checkTextOverflow();
                  window.addEventListener('resize', checkTextOverflow);

                  return () => {
                    window.removeEventListener('resize', checkTextOverflow);
                  };
                }, []);

                return (
                  <div
                    key={index}
                    onClick={() => {
                      setAnimationName(item.animation.toLowerCase());
                    }}
                    onPointerOver={() => setAnimationName(item.animation.toLowerCase())}
                    onPointerOut={() => setAnimationName('idle')}
                    className="bg-gray-800/50 hover:bg-gray-800/70 border border-gray-700 rounded-lg transition-all duration-300 group cursor-pointer">
                    <div className="flex p-4 sm:p-6">
                      {/* Company Logo */}
                      <div className="flex-shrink-0 mr-4 sm:mr-6">
                        <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-gray-900 p-2 flex items-center justify-center border border-gray-700">
                          <img className="w-full h-full object-contain" src={item.icon} alt={item.name} />
                        </div>
                      </div>

                      {/* Experience Details */}
                      <div className="flex-grow">
                        <h3 className="font-bold text-white text-lg sm:text-xl mb-1">{item.name}</h3>
                        <p className="text-sm sm:text-base text-gray-400 mb-2 sm:mb-3">
                          {item.pos} — <span className="text-blue-400">{item.duration}</span>
                        </p>
                        <div
                          ref={textRef}
                          className={`text-sm sm:text-base text-gray-300 ${
                            expanded ? '' : 'line-clamp-3'
                          } transition-all duration-300`}>
                          {item.title}
                        </div>
                        {needsReadMore && (
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              setExpanded(!expanded);
                            }}
                            className="text-blue-400 text-sm mt-1 hover:underline focus:outline-none">
                            {expanded ? 'Read Less' : 'Read More'}
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;



// EXPERIENCE SECTION IS DONE