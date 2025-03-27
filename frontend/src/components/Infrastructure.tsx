import React from "react";

const coWorkingSpace = "https://res.cloudinary.com/dopcjxehj/image/upload/v1743066520/coworking_space_ntgoh3.jpg";
const designLab = "https://res.cloudinary.com/dopcjxehj/image/upload/v1743066520/design_lab_kj2aaa.jpg";
const droneLab_GUIITAR = "https://res.cloudinary.com/dopcjxehj/image/upload/v1743066520/drone_lab_mkxvo9.jpg";
const giitarlab = "https://res.cloudinary.com/dopcjxehj/image/upload/v1743066520/guiitar_lab_lh8t0a.jpg";
const library = "https://res.cloudinary.com/dopcjxehj/image/upload/v1743066520/library_pt4z2o.jpg";
const printingLab = "https://res.cloudinary.com/dopcjxehj/image/upload/v1743066525/printing_lab_wrw93w.png";
const supercomputer_lab = "https://res.cloudinary.com/dopcjxehj/image/upload/v1743066520/supercomputer_lab_t0kplg.jpg";
const surjan = "https://res.cloudinary.com/dopcjxehj/image/upload/v1743066521/surjan_ground_wds1sg.jpg";
const tinkeringLab = "https://res.cloudinary.com/dopcjxehj/image/upload/v1743066521/tinkering_lab_xabcx4.jpg";

const Infrastructure: React.FC = () => {
  const cardsData = [
    {
      title: "Co Working Space",
      image: coWorkingSpace,
      text: "In today's dynamic world, our co-working space is the ultimate solution for those seeking a flexible, collaborative environment. Tailored for students and startups, it offers a quiet and comfortable setting that enhances creativity and productivity.",
    },
    {
      title: "IoT Lab",
      image: designLab,
      text: "A Design Lab serves as a platform for young students and academic researchers to transform their creative and innovative ideas into tangible forms, facilitating the development of ideas into deliverable projects on a lab scale or as pilot projects. It is particularly beneficial in Science, Engineering, and Technology fields, acting as a catalyst for generating intellectual properties such as patents and industrial designs.",
    },
    {
      title: "Advanced Drone Lab",
      image: droneLab_GUIITAR,
      text: "Signifying a major leap in utilizing drone technology, merging research with interdisciplinary education to lead academic innovation in the drone sector, the initiative promises to enhance student skills and foster innovation, driving societal and economic advancements.",
    },
    {
      title: "Makers Lab",
      image: giitarlab,
      text: "GUIITAR labs are available for idea generation, brain storming in groups, presentations and other admin activities of GUIITAR team. The ambiance of the space is quite suitable for incubators by bringing feel of entrepreneurial spirit all around.",
    },
    {
      title: "Library",
      image: library,
      text: "Books on Entrepreneurship, Start-ups, Innovation, IPR, and related subjects are available and accessible until 11:00 PM for study and learning purposes.",
    },
    {
      title: "3D Printing Lab",
      image: printingLab,
      text: "A spacious area is available for prototype development, testing, and demonstration, equipped with facilities such as a Laser Cutting Machine, 3D Printer, Vinyl Cutting Machine, and essential tools for Proof of Concept (PoC) or prototype development.",
    },
    {
      title: "Super Computer Lab",
      image: supercomputer_lab,
      text: "The Super Computer (Param Shavak DL GPU System) facility is available to accelerate the pace of training and development in advanced Artificial Intelligence fields, including Machine Learning and Deep Learning.",
    },
    {
      title: "Sarjan Ground",
      image: surjan,
      text: "'Sarjan' is an outdoor campus space designed for collaboration, offering a setting for discussions, meetings, and creative idea generation. It aims to foster innovation and entrepreneurship, extending learning beyond traditional classrooms.",
    },
    {
      title: "Tinkering Lab",
      image: tinkeringLab,
      text: "Large space is available for prototype development, testing and demonstration. The space will be having facilities like basic tools for modification and minor fixes.",
    },
  ];

  return (
    <div className="bg-secondary font text-secondary">
      <div className="infrastructure-heading pt-[10vh] flex justify-center bg-secondary">
        <h3 className="text-primary text-[3.5rem] max-[1024px]:text-[2.5rem] max-[768px]:text-[2rem] max-[480px]:text-[1.5rem] max-[480px]:pb-[20px]">
          Our Infrastructure
        </h3>
      </div>
      <div className="infrastructure-cards-container grid grid-cols-[repeat(auto-fit,minmax(350px,1fr))] gap-[30px] p-[100px] max-w-[1400px] mx-auto bg-secondary max-[1024px]:p-[50px] max-[1024px]:grid-cols-[repeat(auto-fit,minmax(300px,1fr))] max-[768px]:p-[30px] max-[768px]:grid-cols-[repeat(auto-fit,minmax(250px,1fr))] max-[768px]:gap-[20px] max-[480px]:p-[15px] max-[480px]:grid-cols-[repeat(auto-fit,minmax(200px,1fr))] max-[480px]:gap-[15px] max-[480px]:mb-[15px]">
        {cardsData.map((card, index) => (
          <div
            key={index}
            className="card border-2 border-primary rounded-[10px] w-full h-full bg-secondary flex flex-col items-center justify-between p-5 shadow-[0_6px_12px_rgba(0,0,0,0.1)] transition-all duration-300 ease-in hover:-translate-y-[5px] hover:shadow-[0_8px_16px_rgba(0,0,0,0.2)] max-[768px]:p-4 max-[480px]:p-3"
          >
            <div className="card-title text-primary text-[2.5rem] font mb-0 text-center max-[1024px]:text-[2rem] max-[768px]:text-[1.5rem] max-[480px]:text-[1.25rem]">
              {card.title}
            </div>
            <div className="card-image w-full">
              <img
                src={card.image}
                alt={`${card.title} at GUIITAR`}
                className="w-full h-auto max-h-[300px] rounded-[5px] object-cover transition-transform duration-300 ease-in hover:scale-105 max-[1024px]:max-h-[250px] max-[768px]:max-h-[200px] max-[480px]:max-h-[150px]"
              />
            </div>
            <div className="card-text mb-[10px] text-[#555] text-[1rem] font text-center max-[1024px]:text-[0.95rem] max-[768px]:text-[0.9rem] max-[480px]:text-[0.875rem]">
              {card.text}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Infrastructure;