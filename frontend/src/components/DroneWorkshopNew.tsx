import React, { useState, useEffect, useRef } from "react";
import { createPortal } from "react-dom";

const DroneOverlay: React.FC<{
  position: { x: number; y: number };
  lastPosition: { x: number; y: number };
  speed: number;
  isClicked: boolean;
  trail: { x: number; y: number }[];
}> = ({ position, lastPosition, speed, isClicked, trail }) => {
  const droneRef = useRef<HTMLDivElement>(null);

  const getRotation = () => {
    const deltaX = position.x - lastPosition.x;
    const deltaY = position.y - lastPosition.y;
    return Math.atan2(deltaY, deltaX) * (180 / Math.PI);
  };

  return createPortal(
    <>
      {/* Trail Effect */}
      {trail.map((point, index) => (
        <div
          key={index}
          className="absolute w-2 h-2 bg-blue-400 rounded-full pointer-events-none"
          style={{
            left: point.x - 1,
            top: point.y - 1,
            opacity: (index + 1) / trail.length,
            transform: `scale(${(index + 1) / trail.length})`,
            transition: "all 0.2s ease-out",
            zIndex: 9998, // Just below drone
          }}
        />
      ))}

      {/* Drone */}
      <div
        ref={droneRef}
        className="drone-animation fixed top-0 left-0 pointer-events-none"
        style={{
          transform: `
            translate(${position.x - 64}px, ${position.y - 64}px)
            rotate(${getRotation()}deg)
            scale(${1 + Math.min(speed / 100, 0.5)})
          `,
          transition: "transform 0.1s ease-out",
          zIndex: 9999, // Very high to overlay everything
        }}
      >
        <svg
          className={`w-32 h-32 ${
            isClicked ? "text-orange-400" : "text-blue-400"
          } animate-drone drop-shadow-[0_0_15px_rgba(59,130,246,0.8)]`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 64 64"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g>
            <circle cx="32" cy="32" r="12" fill="none" strokeWidth="3" />
            <line x1="20" y1="20" x2="12" y2="12" strokeWidth="2" />
            <line x1="44" y1="20" x2="52" y2="12" strokeWidth="2" />
            <line x1="20" y1="44" x2="12" y2="52" strokeWidth="2" />
            <line x1="44" y1="44" x2="52" y2="52" strokeWidth="2" />
            <circle cx="12" cy="12" r="4" fill="none" strokeWidth="1.5" />
            <circle cx="52" cy="12" r="4" fill="none" strokeWidth="1.5" />
            <circle cx="12" cy="52" r="4" fill="none" strokeWidth="1.5" />
            <circle cx="52" cy="52" r="4" fill="none" strokeWidth="1.5" />
            <circle
              cx="32"
              cy="32"
              r="8"
              fill="none"
              stroke={
                isClicked ? "rgba(249,115,22,0.5)" : "rgba(59,130,246,0.5)"
              }
              strokeWidth="6"
            />
          </g>
        </svg>
      </div>
    </>,
    document.getElementById("drone-portal")!
  );
};

const DroneEvents: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [lastPosition, setLastPosition] = useState({ x: 0, y: 0 });
  const [speed, setSpeed] = useState(0);
  const [isClicked, setIsClicked] = useState(false);
  const [trail, setTrail] = useState<{ x: number; y: number }[]>([]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const newPos = { x: e.clientX, y: e.clientY };
      const deltaX = newPos.x - lastPosition.x;
      const deltaY = newPos.y - lastPosition.y;
      const newSpeed = Math.sqrt(deltaX * deltaX + deltaY * deltaY);

      setPosition(newPos);
      setLastPosition(newPos);
      setSpeed(newSpeed);

      setTrail((prev) => [...prev.slice(-10), newPos]);
    };

    const handleClick = () => {
      setIsClicked(true);
      setTimeout(() => setIsClicked(false), 200);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("click", handleClick);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("click", handleClick);
    };
  }, [lastPosition]);

  return (
    <>
      <div className="min-h-screen bg-gray-900 text-white relative overflow-hidden">
        {/* Starry Background */}
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-30 pointer-events-none z-0"></div>

        {/* Hero Section */}
        <header className="relative py-20 z-1 pointer-events-auto">
          <div className="container mx-auto px-6 text-center">
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-orange-500 animate-fade-in">
              Explore the Future of Drones
            </h1>
            <p className="mt-4 text-lg md:text-2xl text-gray-300">
              Join our exclusive drone events, workshops, and competitions to
              soar into innovation!
            </p>
            <a
              href="#events"
              className="mt-8 inline-block bg-gradient-to-r from-blue-500 to-orange-500 text-white px-8 py-3 rounded-full text-lg font-semibold hover:from-blue-600 hover:to-orange-600 transition-all duration-300 pointer-events-auto"
            >
              Discover Events
            </a>
          </div>
        </header>

        {/* Events Section */}
        <section
          id="events"
          className="py-20 bg-gray-800/50 relative z-1 pointer-events-auto"
        >
          <div className="container mx-auto px-6">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-white">
              Upcoming Drone Events
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-gray-700 rounded-lg shadow-lg p-6 transform hover:scale-105 transition-transform duration-300 pointer-events-auto">
                <div className="relative">
                  <img
                    src="https://via.placeholder.com/400x200?text=Drone+Workshop"
                    alt="Drone Workshop"
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                  <div className="absolute top-0 right-0 bg-blue-500 text-white px-3 py-1 rounded-bl-lg">
                    Feb 6-8, 2025
                  </div>
                </div>
                <h3 className="text-2xl font-semibold mt-4 text-white">
                  Drone Technician Workshop
                </h3>
                <p className="mt-2 text-gray-300">
                  Master the art of drone assembly, maintenance, and operation
                  in this hands-on workshop.
                </p>
                <p className="mt-4 font-bold text-orange-400">
                  Fees: ₹3,540 (₹3,000 + 18% GST)
                </p>
                <a
                  href="#register"
                  className="mt-6 block text-center bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition-colors pointer-events-auto"
                >
                  Register Now
                </a>
              </div>

              <div className="bg-gray-700 rounded-lg shadow-lg p-6 transform hover:scale-105 transition-transform duration-300 pointer-events-auto">
                <div className="relative">
                  <img
                    src="https://via.placeholder.com/400x200?text=Drone+Racing"
                    alt="Drone Racing"
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                  <div className="absolute top-0 right-0 bg-blue-500 text-white px-3 py-1 rounded-bl-lg">
                    Mar 15, 2025
                  </div>
                </div>
                <h3 className="text-2xl font-semibold mt-4 text-white">
                  Drone Racing Championship
                </h3>
                <p className="mt-2 text-gray-300">
                  Test your skills in a high-speed drone race through
                  challenging obstacle courses.
                </p>
                <p className="mt-4 font-bold text-orange-400">
                  Entry Fee: ₹1,500
                </p>
                <a
                  href="#register"
                  className="mt-6 block text-center bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition-colors pointer-events-auto"
                >
                  Join the Race
                </a>
              </div>

              <div className="bg-gray-700 rounded-lg shadow-lg p-6 transform hover:scale-105 transition-transform duration-300 pointer-events-auto">
                <div className="relative">
                  <img
                    src="https://via.placeholder.com/400x200?text=Drone+Innovation"
                    alt="Drone Innovation"
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                  <div className="absolute top-0 right-0 bg-blue-500 text-white px-3 py-1 rounded-bl-lg">
                    Apr 10, 2025
                  </div>
                </div>
                <h3 className="text-2xl font-semibold mt-4 text-white">
                  Drone Innovation Hackathon
                </h3>
                <p className="mt-2 text-gray-300">
                  Innovate and build cutting-edge drone solutions in this
                  48-hour hackathon.
                </p>
                <p className="mt-4 font-bold text-orange-400">
                  Team Fee: ₹5,000
                </p>
                <a
                  href="#register"
                  className="mt-6 block text-center bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition-colors pointer-events-auto"
                >
                  Apply Now
                </a>
              </div>
            </div>
          </div>
        </section>

        <style>{`
          .drone-animation {
            position: fixed; /* Changed to fixed for portal */
          }

          .animate-drone {
            animation: spin 0.8s infinite linear;
          }

          @keyframes spin {
            0% {
              transform: rotate(0deg);
            }
            100% {
              transform: rotate(360deg);
            }
          }

          .animate-fade-in {
            animation: fadeIn 2s ease-in-out;
          }

          @keyframes fadeIn {
            0% {
              opacity: 0;
              transform: translateY(20px);
            }
            100% {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}</style>
      </div>

      {/* Drone Overlay Portal */}
      <DroneOverlay
        position={position}
        lastPosition={lastPosition}
        speed={speed}
        isClicked={isClicked}
        trail={trail}
      />
    </>
  );
};

export default DroneEvents;
