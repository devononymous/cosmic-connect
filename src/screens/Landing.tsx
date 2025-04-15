import React from 'react';
import Starfield from '../components/StarField';
import '../App.css';
import Particles from '../components/utils/Particles';
import FancyButton from '../components/FancyButton';

const Landing: React.FC = () => {
 return(
 <div className="relative w-full h-screen overflow-hidden">
      <Starfield />
  <Particles
    particleColors={['#ffffff', '#ffffff']}
    particleCount={200}
    particleSpread={10}
    speed={0.1}
    particleBaseSize={100}
    moveParticlesOnHover={true}
    alphaParticles={false}
    disableRotation={false}
  />
      {/* Centered content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white z-10 text-center px-2">
        <div className="text-9xl mb-4"> Cosmic Connect</div>
        <div className="text-xl mb-4">Fasten your seatbelt, explorer.</div>
        <p className="text-4xl font-bold">Prepare for a cosmic journey!</p>

        <FancyButton
  label="Get Started"
  icon="🚀" 
  onClick={() => console.log("Let's go!")}
 />
      </div>
    </div>
  );
}

export default Landing