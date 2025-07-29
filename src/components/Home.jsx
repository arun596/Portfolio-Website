import React from 'react';
import profileimage from '../assets/profile_photo.jpg';

const Home = () => {
  return (
    <section id='home'>

    <div className="min-h-screen flex flex-col justify-center items-center px-4">
      <div className="flex flex-col md:flex-row w-full max-w-6xl items-center gap-6">
        
        {/* Left Text Section */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl md:text-6xl text-white font-bold">
            <span className="text-red-500">Hii</span>, my name is Arun Kumar
          </h1>
          <h2 className="text-2xl text-red-500 md:text-4xl mt-4 animate-pulse font-serif">
            I am a full stack web developer
          </h2>
        </div>

        {/* Right Image Section */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src={profileimage}
            alt="Arun Kumar"
            className="w-64 h-64 md:w-96 md:h-96 rounded-full object-cover drop-shadow-[0_10px_20px_rgba(255,0,0,0.5)]"
            />
        </div>

      </div>
    </div>
            </section>
  );
};

export default Home;
