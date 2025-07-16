import { useState } from 'react';
import Globe from 'react-globe.gl';

import Button from '../components/Button.jsx';

const About = () => {
  const [hasCopied, setHasCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText('salmannazeer.19500@gmail.com');
    setHasCopied(true);

    setTimeout(() => {
      setHasCopied(false);
    }, 2000);
  };

  const scrollToContact = () => {
    document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    // <section className="c-space my-20" id="about">
    //   <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">
    //     <div className="col-span-1 xl:row-span-3">
    //       <div className="grid-container">
    //         <img src="assets/grid1.png" alt="grid-1" className="w-full sm:h-[276px] h-fit object-contain" />

    //         <div>
    //           <p className="grid-headtext">Hi, I’m M.Salman Nazeer</p>
    //           <p className="grid-subtext">
    //             With 1.5 years of experience, I have honed my skills in both frontend and backend dev, creating dynamic
    //             and responsive websites.
    //           </p>
    //         </div>
    //       </div>
    //     </div>

    //     <div className="col-span-1 xl:row-span-3">
    //       <div className="grid-container">
    //         <img src="assets/grid2.png" alt="grid-2" className="w-full sm:h-[276px] h-fit object-contain" />

    //         <div>
    //           <p className="grid-headtext">Tech Stack</p>
    //           <p className="grid-subtext">
    //             I specialize in a variety of languages, frameworks, and tools that allow me to build robust and scalable
    //             applications
    //           </p>
    //         </div>
    //       </div>
    //     </div>

    //     <div className="col-span-1 xl:row-span-4">
    //       <div className="grid-container">
    //         <div className="rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center">
    //           <Globe
    //             height={326}
    //             width={326}
    //             backgroundColor="rgba(0, 0, 0, 0)"
    //             backgroundImageOpacity={0.5}
    //             showAtmosphere
    //             showGraticules
    //             globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
    //             bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
    //             labelsData={[{ lat: 40, lng: -100, text: 'Karachi, Pakistan', color: 'white', size: 15 }]}
    //           />
    //         </div>
    //         <div>
    //           <p className="grid-headtext">I’m very flexible with time zone communications & locations</p>
    //           <p className="grid-subtext">I&apos;m based in Karachi, Pakistan and open to remote work worldwide.</p>
    //           <Button
    //             name="Contact Me"
    //             isBeam
    //             containerClass="w-full mt-10"
    //             onClick={scrollToContact}
    //           />
    //         </div>
    //       </div>
    //     </div>

    //     <div className="xl:col-span-2 xl:row-span-3">
    //       <div className="grid-container">
    //         <img src="assets/grid3.png" alt="grid-3" className="w-full sm:h-[266px] h-fit object-contain" />

    //         <div>
    //           <p className="grid-headtext">My Passion for Coding</p>
    //           <p className="grid-subtext">
    //             I love solving problems and building things through code. Programming isn&apos;t just my
    //             profession—it&apos;s my passion. I enjoy exploring new technologies, and enhancing my skills.
    //           </p>
    //         </div>
    //       </div>
    //     </div>

    //     <div className="xl:col-span-1 xl:row-span-2">
    //       <div className="grid-container">
    //         <img
    //           src="assets/grid4.png"
    //           alt="grid-4"
    //           className="w-full md:h-[126px] sm:h-[276px] h-fit object-cover sm:object-top"
    //         />

    //         <div className="space-y-2">
    //           <p className="grid-subtext text-center">Contact me</p>
    //           <div className="copy-container" onClick={handleCopy}>
    //             <img src={hasCopied ? 'assets/tick.svg' : 'assets/copy.svg'} alt="copy" />
    //             <p className="lg:text-xl md:text-xl font-medium text-gray_gradient text-white">
    //               salmannazeer.19500@gmail.com
    //             </p>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </section>

    <section className="py-16 md:py-20 lg:py-24 bg-gradient-to-br from-gray-900 to-gray-800 text-white" id="about">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 md:mb-12 text-center">
          About <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 auto-rows-fr">
          {/* Card 1 - Introduction */}
          <div className="lg:row-span-2 rounded-2xl overflow-hidden bg-gray-800 hover:bg-gray-700 transition-all duration-300 shadow-lg hover:shadow-xl">
            <div className="p-4 md:p-6 flex flex-col h-full">
              <img
                src="assets/grid1.png"
                alt="Introduction"
                className="w-full h-40 md:h-48 lg:h-56 object-contain mb-4 md:mb-6"
              />
              <div className="flex-grow">
                <h3 className="text-xl md:text-2xl font-bold mb-2 md:mb-3 bg-gradient-to-r from-blue-400 to-emerald-400 text-transparent bg-clip-text">
                  Hi, I'm M.Salman Nazeer
                </h3>
                <p className="text-gray-300 text-sm md:text-base">
                  With 1.5 years of experience, I have honed my skills in both frontend and backend development,
                  creating dynamic and responsive websites.
                </p>
              </div>
            </div>
          </div>

          {/* Card 2 - Tech Stack */}
          <div className="lg:row-span-2 rounded-2xl overflow-hidden bg-gray-800 hover:bg-gray-700 transition-all duration-300 shadow-lg hover:shadow-xl">
            <div className="p-4 md:p-6 flex flex-col h-full">
              <img
                src="assets/grid2.png"
                alt="Tech Stack"
                className="w-full h-40 md:h-48 lg:h-56 object-contain mb-4 md:mb-6"
              />
              <div className="flex-grow">
                <h3 className="text-xl md:text-2xl font-bold mb-2 md:mb-3 bg-gradient-to-r from-blue-400 to-emerald-400 text-transparent bg-clip-text">
                  Tech Stack
                </h3>
                <p className="text-gray-300 text-sm md:text-base">
                  I specialize in a variety of languages, frameworks, and tools that allow me to build robust and
                  scalable applications.
                </p>
              </div>
            </div>
          </div>

          {/* Card 3 - Globe */}
          <div className="lg:row-span-2 rounded-2xl overflow-hidden bg-gray-800 hover:bg-gray-700 transition-all duration-300 shadow-lg hover:shadow-xl">
            <div className="p-4 md:p-6 flex flex-col h-full">
              <div className="w-full h-48 md:h-56 lg:h-64 flex justify-center items-center mb-4 md:mb-6">
                <Globe
                  height={250}
                  width={250}
                  backgroundColor="rgba(0, 0, 0, 0)"
                  backgroundImageOpacity={0.5}
                  showAtmosphere
                  showGraticules
                  globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
                  bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                  labelsData={[{ lat: 40, lng: -100, text: 'Karachi, Pakistan', color: 'white', size: 15 }]}
                />
              </div>
              <div className="flex-grow">
                <h3 className="text-xl md:text-2xl font-bold mb-2 md:mb-3 bg-gradient-to-r from-blue-400 to-emerald-400 text-transparent bg-clip-text">
                  Flexible with time zones & locations
                </h3>
                <p className="text-gray-300 text-sm md:text-base mb-4 md:mb-6">
                  I'm based in Karachi, Pakistan and open to remote work worldwide.
                </p>
                <Button name="Contact Me" isBeam containerClass="w-full mt-2 md:mt-4" onClick={scrollToContact} />
              </div>
            </div>
          </div>

          {/* Card 4 - Passion */}
          <div className="lg:row-span-2 rounded-2xl overflow-hidden bg-gray-800 hover:bg-gray-700 transition-all duration-300 shadow-lg hover:shadow-xl">
            <div className="p-4 md:p-6 flex flex-col h-full">
              <img
                src="assets/grid3.png"
                alt="Passion for Coding"
                className="w-full h-40 md:h-48 lg:h-56 object-contain mb-4 md:mb-6"
              />
              <div className="flex-grow">
                <h3 className="text-xl md:text-2xl font-bold mb-2 md:mb-3 bg-gradient-to-r from-blue-400 to-emerald-400 text-transparent bg-clip-text">
                  My Passion for Coding
                </h3>
                <p className="text-gray-300 text-sm md:text-base">
                  I love solving problems and building things through code. Programming isn't just my profession—it's my
                  passion. I enjoy exploring new technologies, and enhancing my skills.
                </p>
              </div>
            </div>
          </div>

          {/* Card 5 - Contact */}
          <div className="md:col-span-2 lg:row-span-2 rounded-2xl overflow-hidden bg-gradient-to-br from-blue-600 to-emerald-600 shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="p-4 md:p-6 flex flex-col h-full justify-center items-center text-center">
              <img
                src="assets/grid4.png"
                alt="Contact"
                className="w-full h-28 md:h-32 lg:h-40 object-contain mb-4 md:mb-6"
              />
              <div>
                <p className="text-gray-200 text-sm md:text-base mb-2 md:mb-4">Contact me</p>
                <div
                  className="flex items-center justify-center space-x-2 p-2 md:p-3 bg-black bg-opacity-20 rounded-lg cursor-pointer hover:bg-opacity-30 transition-all"
                  onClick={handleCopy}>
                  <img
                    src={hasCopied ? 'assets/tick.svg' : 'assets/copy.svg'}
                    alt="copy"
                    className="w-4 h-4 md:w-5 md:h-5"
                  />
                  <p className="text-sm md:text-lg font-medium text-white">salmannazeer.19500@gmail.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;



// ABOUT ME SECTION DONE