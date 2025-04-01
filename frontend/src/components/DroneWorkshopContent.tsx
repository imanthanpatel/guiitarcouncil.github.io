import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAward,
  faChalkboardTeacher,
  faBook,
  faUsers,
  faTools,
} from "@fortawesome/free-solid-svg-icons";

const DroneWorkshopContent: React.FC = () => {
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

  const courseContent = [
    {
      title: "Basics of Aviation Technology",
      description: "Introduction to fundamental principles of flight and aviation.",
      details: [
        "Aerodynamics: Lift, thrust, drag, and weight",
        "Aircraft components and their functions",
        "Basic flight mechanics",
        "Introduction to drone-specific aviation concepts",
      ],
    },
    {
      title: "Drone Assembly & Maintenance",
      description: "Hands-on skills for building and maintaining drones.",
      details: [
        "Understanding drone components (motors, propellers, frame)",
        "Tools and techniques for assembly",
        "Troubleshooting common issues",
        "Routine maintenance practices",
      ],
    },
    {
      title: "Flight Operations & Safety",
      description: "Learn to operate drones safely and efficiently.",
      details: [
        "Pre-flight checks and planning",
        "Basic flight maneuvers",
        "Safety regulations and compliance",
        "Emergency procedures",
      ],
    },
    {
      title: "Drone Programming",
      description: "Introduction to coding drones for autonomous flight.",
      details: [
        "Basics of drone firmware",
        "Programming flight paths",
        "Using APIs for drone control",
        "Simple automation projects",
      ],
    },
  ];

  const workshopBenefits = [
    {
      text: "Live Hands-on Experience",
      icon: <FontAwesomeIcon icon={faTools} className="text-gray-400" style={{ fontSize: "70px" }} />,
    },
    {
      text: "Certificate to be Issued by GSFC University and GUIITAR Council",
      icon: <FontAwesomeIcon icon={faAward} className="text-gray-400" style={{ fontSize: "70px" }} />,
    },
    {
      text: "Training with domain experts and stakeholders",
      icon: <FontAwesomeIcon icon={faChalkboardTeacher} className="text-gray-400" style={{ fontSize: "70px" }} />,
    },
    {
      text: "Learning Resources are provided",
      icon: <FontAwesomeIcon icon={faBook} className="text-gray-400" style={{ fontSize: "70px" }} />,
    },
    {
      text: "Interactions and dedicated Q/A Sessions",
      icon: <FontAwesomeIcon icon={faUsers} className="text-gray-400" style={{ fontSize: "70px" }} />,
    },
  ];

  const toggleSection = (title: string) => {
    setExpandedSection(expandedSection === title ? null : title);
  };

  return (
    <div className="min-h-screen bg-white text-[#2b5482] py-12 px-6">
      {/* Hero Section */}
      <header className="text-center mb-12">
        <h1 className="text-4xl md:text-6xl font-extrabold bg-clip-text text-transparent bg-[#2b5482]">
          Course Content
        </h1>
        <p className="mt-4 text-lg md:text-xl text-black">
          Explore the comprehensive curriculum of our Drone Technician Workshop.
        </p>
      </header>

      {/* Course Content Section */}
      <section className="max-w-4xl mx-auto">
        {courseContent.map((section) => (
          <div
            key={section.title}
            className="mb-6 bg-gray-100 rounded-lg shadow-lg overflow-hidden"
          >
            {/* Section Header */}
            <button
              onClick={() => toggleSection(section.title)}
              className="w-full flex justify-between items-center p-6 text-left bg-gray-200 hover:bg-gray-300 transition-colors duration-100"
            >
              <div>
                <h2 className="text-2xl font-semibold text-[#2b5482]">
                  {section.title}
                </h2>
                <p className="mt-1 text-black">{section.description}</p>
              </div>
              <span className="text-[#2b5482] text-2xl">
                {expandedSection === section.title ? "-" : "+"}
              </span>
            </button>

            {/* Expandable Details */}
            {expandedSection === section.title && (
              <div className="p-6 bg-gray-100 animate-fade-in">
                <ul className="list-disc list-inside text-black">
                  {section.details.map((item, index) => (
                    <li key={index} className="mb-2">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}
      </section>

      {/* Workshop Benefits Section */}
      <section className="max-w-6xl mx-auto mt-12">
        <h2 className="text-3xl font-bold text-center mb-6 text-[#2b5482]">
          Workshop Benefits
        </h2>
        <div className="flex justify-center gap-6 flex-wrap md:flex-nowrap">
          {workshopBenefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-gray-200 p-6 rounded-lg shadow-lg w-64 text-center flex flex-col items-center transform transition duration-100 hover:scale-105 hover:bg-gray-200"
            >
              {benefit.icon}
              <p className="text-lg font-medium text-gray-800 mt-3">
                {benefit.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Global Styles */}
      <style>
        {`
          .animate-fade-in {
            animation: fadeIn 0.3s ease-in-out;
          }

          @keyframes fadeIn {
            0% {
              opacity: 0;
              transform: translateY(10px);
            }
            100% {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}
      </style>
    </div>
  );
};

export default DroneWorkshopContent;