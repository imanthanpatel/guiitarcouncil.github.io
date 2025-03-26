// src/components/Carousel.tsx
import React from "react";
import Particle from "./Particle";

const Carousel: React.FC = () => {
  return (
    <div className="relative h-screen flex items-center justify-start overflow-hidden p-0">
      {/* Particle Background */}
      <div className="absolute inset-0 z-0"> {/* Changed z-[-1] to z-0 */}
        <Particle />
      </div>

      {/* Carousel Content */}
      <div className="relative z-[1] text-secondary text-left max-w-[600px] ml-[50px] p-0 font">
        <h1 className="text-[3rem] font leading-[1.0] text-white max-[750px]:text-[2.5rem] max-[750px]:mt-[-8.5rem]">
          Fueling Students, Entrepreneurs and Innovators Through Education, Collaboration, and Acceleration.
        </h1>
      </div>
    </div>
  );
};

export default Carousel;