// src/components/Mission.tsx
import React from "react";
import { Link } from "react-router-dom";

const missionImage = "/trial.png";

const Mission: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center px-[3vw] py-8 text-center bg-[#f9f9f9] text-[var(--primary-color)]">
      {/* Title */}
      <h1 className="text-[2.5rem] font text-primary mb-[30px] max-[1024px]:text-[2.2rem] max-[768px]:text-[2rem] max-[480px]:text-[1.8rem]">
        Our Mission at GUIITAR
      </h1>

      {/* Image Wrapper */}
      <div className="max-w-full w-[650px] my-[30px] shadow-[0_4px_8px_rgba(0,0,0,0.1)] rounded-[10px] overflow-hidden max-[768px]:max-w-full max-[480px]:w-[300px]">
        <img
          src={missionImage}
          alt="MassChallenge Overview"
          className="w-[650px] h-auto max-[480px]:w-[300px]"
        />
      </div>

      {/* Description */}
      <p className="text-justify text-[1.4rem] leading-[1.6] text-[#333] my-5 mx-[5%] max-w-[900px] max-[1024px]:text-[1.1rem] max-[768px]:text-[1rem] max-[480px]:text-[0.95rem]">
        The GUIITAR Council, established by GSFC University in Vadodara, is a
        Section 8 company dedicated to fostering creativity, innovation, and
        entrepreneurship among young minds. With cutting-edge infrastructure,
        mentorship, networking opportunities, and resources like co-working
        spaces and business support, we empower innovators to transform ideas
        into impactful technologies. Our goal is to nurture confident,
        independent leaders and drive advancements that benefit society &
        industries.
      </p>

      {/* Learn More Link */}
      <p className="text-justify text-[1.4rem] leading-[1.6] my-5 mx-[5%] max-w-[900px] max-[1024px]:text-[1.1rem] max-[768px]:text-[1rem] max-[480px]:text-[0.95rem] text-[var(--primary-color)]">
        <Link
          to="/about"
          className="text-primary font hover:underline"
        >
          Learn more
        </Link>
      </p>
    </div>
  );
};

export default Mission;