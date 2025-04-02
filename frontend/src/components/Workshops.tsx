import React from "react";
import "@google/model-viewer";
import EventGallery from "./EventGallery";
const Workshops: React.FC = () => {
  return (
    <div className="ac flex flex-col items-center gap-3 ">
      <div className="relative w-full h-[60vh] overflow-hidden bg-primary">
        <div
          className="absolute inset-0 bg-primary bg-opacity-80"
          style={{
            backgroundImage: `url("https://res.cloudinary.com/dopcjxehj/image/upload/v1743068853/contact_qbimui.jpg")`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-secondary text-[60px] font max-[768px]:text-[40px] max-[480px]:text-[30px] text-white">
          Workshop and Events
        </div>
      </div>
      <h1 className="main-heading text-[3rem] font text-[#2b5482] mb-[20px] text-center pt-[50px] max-[768px]:text-[2.5rem] max-[480px]:text-[2rem]">
        Explore Our Workshops
      </h1>

      {/* Drone Program */}
      <div className="drone text-center p-[40px] bg-[#f9f9f9] rounded-[12px] m-[20px_0] max-[768px]:p-[20px] max-[480px]:p-[15px]">
        <div className="drone-content flex flex-wrap justify-between items-center gap-[90px] max-[768px]:flex-col max-[768px]:gap-[30px]">
          {/* Drone Photo */}
          <div className="drone-i flex-1 w-full max-w-[700px] max-[768px]:max-w-full">
            <img
              src="https://res.cloudinary.com/dopcjxehj/image/upload/v1743068854/drone_jb2fdq.jpg"
              alt="Drone Program at GUIITAR"
              className="w-full h-[350px] object-cover rounded-[10px] max-[768px]:h-[250px] max-[480px]:h-[200px]"
              loading="lazy"
            />
          </div>
          {/* Drone Details */}
          <div className="drone-text flex-1 max-w-[700px] text-left p-[20px] max-[768px]:max-w-full max-[768px]:p-[15px]">
            <h2 className="text-[24px] text-[#2b5482] font mb-[15px] max-[768px]:text-[20px] max-[480px]:text-[18px]">
              Learn Building Drones
            </h2>
            <p className="text-[22px] text-[#555] leading-[1.6] max-[768px]:text-[18px] max-[480px]:text-[16px]">
              Our 3D printing program offers an exciting opportunity to explore
              the world of additive manufacturing. Whether you're a beginner or
              an experienced designer, you'll learn how to create prototypes,
              models, and even end-use products using cutting-edge 3D printers.
            </p>
            <p className="text-[22px] text-[#555] leading-[1.6] max-[768px]:text-[18px] max-[480px]:text-[16px]">
              In this course, you'll gain hands-on experience with the latest
              technologies, software, and design principles, all while creating
              unique and functional items.
            </p>
            <div className="drone-btn">
              <a
                href="droneworkshop"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Learn more about SSIP 2.0"
              >
                <button className="mt-[20px] px-[20px] py-[10px] text-[1.2rem] bg-[#2b5482] text-white border-none rounded-[8px] cursor-pointer transition-all duration-300 ease-in hover:bg-secondary hover:text-primary hover:border hover:border-[#333] max-[1024px]:text-[1.1rem] max-[768px]:text-[1rem] max-[480px]:text-[0.875rem] max-[480px]:px-[15px] max-[480px]:py-[8px]">
                  Learn More
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* 3D Printing Program */}
      <div className="drone text-center p-[40px] bg-[#f9f9f9] rounded-[12px] m-[20px_0] max-[768px]:p-[20px] max-[480px]:p-[15px]">
        <div className="drone-content flex flex-wrap justify-between items-center gap-[90px] max-[768px]:flex-col max-[768px]:gap-[30px]">
          {/* 3D Model Viewer (comes before text on mobile) */}
          <div className="printing-model flex-1 w-full max-w-[700px] max-[768px]:max-w-full">
            <model-viewer
              src="https://modelviewer.dev/shared-assets/models/Astronaut.glb"
              alt="3D Model of an Astronaut"
              auto-rotate
              camera-controls
              background-color="#f0f0f0"
              style={{ height: "450px" }}
              className="rounded-[10px] max-[768px]:h-[300px] max-[480px]:h-[250px]"
            ></model-viewer>
          </div>
          {/* 3D Printing Details */}
          <div className="drone-text flex-1 max-w-[700px] text-left p-[20px] max-[768px]:max-w-full max-[768px]:p-[15px]">
            <h2 className="text-[24px] text-[#2b5482] font mb-[15px] max-[768px]:text-[20px] max-[480px]:text-[18px]">
              Learn 3D Printing
            </h2>
            <p className="text-[22px] text-[#555] leading-[1.6] max-[768px]:text-[18px] max-[480px]:text-[16px]">
              Our 3D printing program offers an exciting opportunity to explore
              the world of additive manufacturing. Whether you're a beginner or
              an experienced designer, you'll learn how to create prototypes,
              models, and even end-use products using cutting-edge 3D printers.
            </p>
            <p className="text-[22px] text-[#555] leading-[1.6] max-[768px]:text-[18px] max-[480px]:text-[16px]">
              In this course, you'll gain hands-on experience with the latest
              technologies, software, and design principles, all while creating
              unique and functional items.
            </p>
            <div className="3d-btn">
              <a
                href="/3dprintingworkshop"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Learn more about SSIP 2.0"
              >
                <button className="mt-[20px] px-[20px] py-[10px] text-[1.2rem] bg-[#2b5482] text-white border-none rounded-[8px] cursor-pointer transition-all duration-300 ease-in hover:bg-secondary hover:text-primary hover:border hover:border-[#333] max-[1024px]:text-[1.1rem] max-[768px]:text-[1rem] max-[480px]:text-[0.875rem] max-[480px]:px-[15px] max-[480px]:py-[8px]">
                  Learn More
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Events */}
      <h1
        id="events"
        className="main-heading text-[3rem] font text-[#2b5482] mb-[20px] text-center pt-[50px] max-[768px]:text-[2.5rem] max-[480px]:text-[2rem]"
      >
        Event Gallery
      </h1>
      <EventGallery />
    </div>
  );
};

export default Workshops;
