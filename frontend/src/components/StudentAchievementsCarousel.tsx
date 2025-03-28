import React, { useState, useEffect, useRef } from "react";

type Student = { name: string; photoUrl: string };
type Project = {
  students: Student[];
  grantAmount: string;
  mentor: string;
  project: string;
  usp: string;
  projectLink: string;
};

const logos = [
  "https://res.cloudinary.com/dopcjxehj/image/upload/v1743065708/new_f92wp6.png",
  "https://res.cloudinary.com/dopcjxehj/image/upload/v1743068561/as4-new_pufqeo.png",
  "https://res.cloudinary.com/dopcjxehj/image/upload/v1743142843/02-logo_upojbc.png",
];

const projects: Project[] = [


  // Ayurtrix
  {
    students: [
      {
        name: "Mr. Dev Shitole",
        photoUrl:
          "https://res.cloudinary.com/dopcjxehj/image/upload/v1743142750/devShitole_vt40xu.jpg",
      },
      {
        name: "Ms. Reeya Prajapati",
        photoUrl:
          "https://res.cloudinary.com/dopcjxehj/image/upload/v1743142753/reeyaPrajapati_iznblp.jpg",
      },
      {
        name: "Ms. Tanuja vadi",
        photoUrl:
          "https://res.cloudinary.com/dopcjxehj/image/upload/v1743142752/tanujaVadi_qp3qvp.jpg",
      },
    ],
    grantAmount: "₹250,000",
    mentor: "Prof. Devjani Banerjee",
    project: "Ayurtrix - Three Folding Life",
    usp: "Ayurtrix is working to increase the production of authentic Ayurvedic products. to meet the growing demand and provide consumers with products that have the desired health benefits.",
    projectLink: "/",
  },

  // BioLastic
  {
    students: [
      {
        name: "Mr. Aayush Varia",
        photoUrl:
          "https://res.cloudinary.com/dopcjxehj/image/upload/v1743142776/Aayush_r2n04h.jpg",
      },
      {
        name: "Ms. Foram Mistry",
        photoUrl:
          "https://res.cloudinary.com/dopcjxehj/image/upload/v1743142774/Foram_xsj4vq.png",
      },
      {
        name: "Mr. Urmil Patel",
        photoUrl:
          "https://res.cloudinary.com/dopcjxehj/image/upload/v1743142778/urmil_yeqyz2.jpg",
      },
    ],
    grantAmount: " ₹100,000",
    mentor: "Dr. Priya Goel, Assistant Professor (Chemistry)",
    project: "Bio-Lastic: A Safe Future with Flowers",
    usp: "BIO-LASTIC was conceived by Foram Mistry and Aayush Varia, two BSc Chemistry students. With guidance from Dr. Priya Goel, we realized the importance of finding sustainable solutions for the future. Inspired by the beauty and abundance of flowers in ritual places, we decided to harness their potential and transform them into a biodegradable polymer",
    projectLink: "/",
  },

  // Chewable Oral Toothpaste
  {
    students: [
      {
        name: "Ms. Aakanksha Yadav",
        photoUrl:
          "https://res.cloudinary.com/dopcjxehj/image/upload/v1743142719/aakankshaYadav_hflreb.jpg",
      },
      {
        name: "Ms. Diya Visavni",
        photoUrl:
          "https://res.cloudinary.com/dopcjxehj/image/upload/v1743142717/diyaVisani_gbixx8.jpg",
      },
    ],
    grantAmount: "₹83,500",
    mentor:
      "Dr. Akhilesh Prajapati, Sr. Assistant Professor (Biological Science)",
    project: "Chewable Oral Toothpaste",
    usp: "No Chemicals & 100% Herbal Secures Oral Health with the Help of Ancient Indian Ayurvedic medicine User friendly & Easy to Carry Multi Purpose (Serves as Toothpaste & Mouth freshner)",
    projectLink: "/",
  },

  // Defense Robot
  {
    students: [
      {
        name: "Aksha Vohra",
        photoUrl:
          "https://res.cloudinary.com/dopcjxehj/image/upload/v1743141727/aksha_peo1ke.jpg",
      },
      {
        name: "Khushi Bhingradiya",
        photoUrl:
          "https://res.cloudinary.com/dopcjxehj/image/upload/v1743141728/khushi_bi9zqn.jpg",
      },
      {
        name: "Tirth Patel",
        photoUrl:
          "https://res.cloudinary.com/dopcjxehj/image/upload/v1743141729/tirth_qfkov5.jpg",
      },
    ],
    grantAmount: "₹184,800",
    mentor: "Mr. Yatharth Bhatt, Lab Assistant, SOT, GSFCU",
    project: "Defense Robot",
    usp: "Durable, Multi-terrain, with advanced cameras and a professional-grade design for unmatched reliability in critical operations.",
    projectLink: "/",
  },

  //Emotion detection through speech using AI/ML
  {
    students: [
      {
        name: "Ms. Mittal Punwar",
        photoUrl:
          "https://res.cloudinary.com/dopcjxehj/image/upload/v1743142597/mittal_flf71m.jpg",
      },
      {
        name: "Mr. Smit Dave",
        photoUrl:
          "https://res.cloudinary.com/dopcjxehj/image/upload/v1743142607/smit_ssip_ifflir.jpg",
      },
    ],
    grantAmount: "₹37,000",
    mentor: "Ms. Mosam Patel, Program Coordinator, CSE",
    project: "Emotion detection through speech using AI/ML",
    usp: "Emotion detection through speech is a technology that utilizes advanced signal processing and machine learning techniques to analyze vocal cues and identify human emotions in real-time. By extracting features from speech signals and applying neural network models, this system aims to enhance human-computer interactions and various applications such as customer service and mental health monitoring.",
    projectLink: "/",
  },

  //ESRT-ALOU
  {
    students: [
      {
        name: "Mr. Madhav Trivedi",
        photoUrl:
          "https://res.cloudinary.com/dopcjxehj/image/upload/v1743142756/Madhav_Trivedi_n2kmpz.png",
      },
      {
        name: "Ms. Shambhavi J Vyas",
        photoUrl:
          "https://res.cloudinary.com/dopcjxehj/image/upload/v1743142762/shambhavi_jkjl3b.jpg",
      },
      {
        name: "Mr. Theerth K R",
        photoUrl:
          "https://res.cloudinary.com/dopcjxehj/image/upload/v1743142761/teerth_lfhzdh.jpg",
      },
    ],
    grantAmount: "₹88,000",
    mentor: "Dr. Deepak Parashar, Associate Professor (CSE)",
    project: "ESRT-ALOU - The Emotional Support Robot Teddy",
    usp: "ALOU is designed to be a source of genuine comfort and companionship. The robot teddy bear will serve as an emotional support system, providing users with tactile, conversational, and emotional engagement. It aims to fill the gaps where traditional support systems may be unavailable or inadequate.",
    projectLink: "/",
  },

  // Nutriblend Pro
  {
    students: [
      {
        name: "Mr. Janmejay Borad",
        photoUrl:
          "https://res.cloudinary.com/dopcjxehj/image/upload/v1743142728/janmejayBorad_tjq4fv.jpg",
      },
      {
        name: "Mr. Parth Gol",
        photoUrl:
          "https://res.cloudinary.com/dopcjxehj/image/upload/v1743142729/parthGol_tmrq4z.jpg",
      },
      {
        name: "Mr. Pranav Kadam",
        photoUrl:
          "https://res.cloudinary.com/dopcjxehj/image/upload/v1743142731/pranav_q6sja8.png",
      },
    ],
    grantAmount: "₹30,000",
    mentor:
      "Dr. Akhilesh Prajapati, Sr. Assistant Professor (Biological Science)",
    project: "Nutriblend Pro",
    usp: "We're tackling the issue of the growing occurrence of nutritional deficiencies and the demand for a practical, eco-friendly, and health-conscious remedy. Numerous individuals following vegan or vegetarian diets encounter challenges in meeting their daily nutrient needs due to dietary constraints, hectic routines, and limited availability of nourishing foods. The typical nutrient gaps among vegans and vegetarians encompass Vitamin B₁₂, Vitamin D, Omega-3 fatty acids, Iodine, Iron, Calcium, and Zinc.",
    projectLink: "/",
  },

  //Super food spirulina based nutritious chocolates
  {
    students: [
      {
        name: "Ms. Khyati Shah",
        photoUrl: "https://res.cloudinary.com/dopcjxehj/image/upload/v1743068744/dummy_yky2vq.jpg",
      },
      {
        name: "Mr. Viraj Patel",
        photoUrl: "https://res.cloudinary.com/dopcjxehj/image/upload/v1743068744/dummy_yky2vq.jpg ",
      },

    ],
    grantAmount: "₹87,000",
    mentor: "Dr. Akhilesh Prajapati, Sr. Assistant Professor (Biological Science)",
    project: "Super food spirulina based nutritious chocolates",
    usp: "The Spirulina chocolate can be the potential solution considering the future advances. People of every age can consume it without bothering with the bitter taste of spirulina alone.",
    projectLink: "/",
  },


  //UGV
  {
    students: [
      {
        name: "Ms. Chahana Kamdar",
        photoUrl:
          "https://res.cloudinary.com/dopcjxehj/image/upload/v1743142784/chahana_rcc5vz.jpg",
      },
      {
        name: "Ms. Kartavi Patel",
        photoUrl:
          "https://res.cloudinary.com/dopcjxehj/image/upload/v1743142782/kartavi_aeamjb.jpg",
      },
    ],
    grantAmount: "₹152,665",
    mentor: "Mr. Yatharth Bhatt, Lab Assistant, SOT, GSFCU",
    project: "Unmanned Ground Vehicle (UGV)",
    usp: "Modular, eco-friendly, GPS-enabled, built for high tasks like survelliance. and industrial monitoring and military and disaster response",
    projectLink: "/",
  },

  // USV Neil
  {
    students: [
      {
        name: "Mr. Atharva Sisodiya",
        photoUrl:
          "https://res.cloudinary.com/dopcjxehj/image/upload/v1743142740/AtharvaSisodiya_p0qqve.png",
      },
      {
        name: "Ms. Dhruvi Gohel",
        photoUrl:
          "https://res.cloudinary.com/dopcjxehj/image/upload/v1743142743/dhruviGohel_wxkcar.png",
      },
      {
        name: "Mr. Eshan Devadhara",
        photoUrl:
          "https://res.cloudinary.com/dopcjxehj/image/upload/v1743142738/eshanDevadhara_mkkptr.jpg",
      },
      {
        name: "Mr. Ryaan Shaikh",
        photoUrl:
          "https://res.cloudinary.com/dopcjxehj/image/upload/v1743142745/Reeyan_mrk07q.jpg",
      },
    ],
    grantAmount: "₹158,000",
    mentor: "Mr. Yatharth Bhatt, Lab Assistant, SOT, GSFCU",
    project: "USV Neil",
    usp: "A versatile solution for sustainable unmanned surface vehicle. Our innovative technology redefines maritime operations with multifunctional capabilities, from surveillance and monitoring to research and rescue missions.",
    projectLink: "/",
  },

  // Vegano Joy
  {
    students: [
      {
        name: "Mr. Aditya S. Prajapati",
        photoUrl:
          "https://res.cloudinary.com/dopcjxehj/image/upload/v1743142660/adityaprajapati_l6cvuu.jpg",
      },
      {
        name: "Mr. Ankush Makwana",
        photoUrl:
          "https://res.cloudinary.com/dopcjxehj/image/upload/v1743142659/ankush_vvcrh1.jpg",
      },
      {
        name: "Mr. Rohan Asthana",
        photoUrl:
          "https://res.cloudinary.com/dopcjxehj/image/upload/v1743142668/rohan_hq18av.jpg",
      },
      {
        name: "Ms. Shreya Lad",
        photoUrl:
          "https://res.cloudinary.com/dopcjxehj/image/upload/v1743142703/shreyaLad_xodrt3.jpg",
      },
    ],
    grantAmount: "₹25,000",
    mentor:
      "Dr. Akhilesh Prajapati, Sr. Assistant Professor (Biological Science)",
    project: "Vegano Joy",
    usp: "Durable, Multi-terrain, with advanced cameras and a professional-grade design for unmatched reliability in critical operations.",
    projectLink: "/",
  },


  //project
  // {
  //   students: [
  //     {
  //       name: "",
  //       photoUrl: "",
  //     },

  //   ],
  //   grantAmount: "₹",
  //   mentor: "",
  //   project: "",
  //   usp: "",
  //   projectLink: "/",
  // },

  //project
  // {
  //   students: [
  //     {
  //       name: "",
  //       photoUrl: "",
  //     },

  //   ],
  //   grantAmount: "₹",
  //   mentor: "",
  //   project: "",
  //   usp: "",
  //   projectLink: "/",
  // },








  //INFORMATION ADDING TEMPLATE - Create copy of this dont use it directly
  // {
  //   students: [
  //     {
  //       name: "",
  //       photoUrl: "",
  //     },

  //   ],
  //   grantAmount: "₹",
  //   mentor: "",
  //   project: "",
  //   usp: "",
  //   projectLink: "/",
  // },
];

const StudentAchievementsCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 10000); // Auto-scroll every 10s
    return () => clearInterval(interval);
  }, []);

  // Touch event handlers
  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartX.current !== null && touchEndX.current !== null) {
      const swipeDistance = touchStartX.current - touchEndX.current;
      const swipeThreshold = 50; // Minimum distance to trigger a swipe

      if (swipeDistance > swipeThreshold) {
        // Swipe left -> next slide
        nextSlide();
      } else if (swipeDistance < -swipeThreshold) {
        // Swipe right -> previous slide
        prevSlide();
      }
    }
    // Reset touch positions
    touchStartX.current = null;
    touchEndX.current = null;
  };

  // const currentProject = projects[currentIndex];

  return (
    <div id="achievement"className="relative w-full max-w-5xl mx-auto py-8 px-2 sm:px-4 lg:py-12">
      {/* Wrapper for Carousel and Buttons */}
      <div className="relative flex items-center">
        {/* Left Navigation Button (Hidden on small screens) */}
        <button
          onClick={prevSlide}
          className="hidden sm:flex absolute -left-8 lg:-left-12 top-1/2 transform -translate-y-1/2 text-white p-2 sm:p-3 rounded-full shadow-lg hover:scale-110 transition-all focus:outline-none z-10"
          style={{ backgroundColor: "#2b5482" }}
          onMouseEnter={(e) =>
            (e.currentTarget.style.backgroundColor = "#1f3a5e")
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.backgroundColor = "#2b5482")
          }
        >
          <svg
            className="w-5 h-5 sm:w-6 sm:h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>

        {/* Carousel Container */}
        <div
          className="w-full overflow-hidden"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {projects.map((project, index) => {
              // Determine photo size based on team size
              const teamSize = project.students.length;
              let photoSizeClass = "w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28"; // Large size for ≤3 students
              if (teamSize > 3) {
                photoSizeClass = "w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24"; // Medium size for 4 students
              }
              if (teamSize > 4) {
                photoSizeClass = "w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16"; // Small size for >4 students
              }

              return (
                <div key={index} className="min-w-full px-2 sm:px-4">
                  <div className="bg-white shadow-xl rounded-2xl p-4 sm:p-6 lg:p-8 flex flex-col md:flex-row gap-4 sm:gap-6 lg:gap-8 transform hover:scale-[1.01] transition-transform duration-300">
                    {/* Left: Student Photos & Names */}
                    <div className="flex-1 min-h-[300px] sm:min-h-[350px] lg:min-h-[400px]">
                      <h3
                        className="text-xl sm:text-2xl font-medium mb-4 sm:mb-6"
                        style={{ color: "#2b5482" }}
                      >
                        Team
                      </h3>
                      <div
                        className={`grid gap-3 sm:gap-4 ${
                          project.students.length > 3
                            ? "grid-cols-2"
                            : "grid-cols-1"
                        } sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2`}
                      >
                        {project.students.map((student, idx) => (
                          <div
                            key={idx}
                            className="flex items-center gap-3 sm:gap-4"
                          >
                            <img
                              src={student.photoUrl}
                              alt={student.name}
                              className={`${photoSizeClass} rounded-full object-cover border-2 border-gray-200 shadow-sm`}
                            />
                            <span className="text-base sm:text-lg text-gray-800 font-medium">
                              {student.name}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Right: Details */}
                    <div className="flex-1">
                      <h3
                        className="text-xl sm:text-2xl font-medium mb-3 sm:mb-4"
                        style={{ color: "#2b5482" }}
                      >
                        Project Details
                      </h3>
                      <div className="space-y-2 sm:space-y-3 text-gray-700 text-sm sm:text-base">
                        <p>
                          <span className="font" style={{ color: "#2b5482" }}>
                            Project:
                          </span>{" "}
                          {project.project}
                        </p>
                        <p>
                          <span className="font" style={{ color: "#2b5482" }}>
                            Grant:
                          </span>{" "}
                          <span className="text-green-600 font">
                            {project.grantAmount}
                          </span>
                        </p>
                        <p>
                          <span className="font" style={{ color: "#2b5482" }}>
                            Mentor:
                          </span>{" "}
                          {project.mentor}
                        </p>
                      </div>

                      {/* USP Section */}
                      <div className="mt-4 sm:mt-6">
                        <h4
                          className="text-base sm:text-lg font-medium mb-2 sm:mb-3"
                          style={{ color: "#2b5482" }}
                        >
                          USP of Project
                        </h4>
                        <p className="text-gray-700 text-sm sm:text-base line-clamp-3">
                          {project.usp}
                        </p>
                      </div>

                      {/* View Project Link */}
                      <div className="mt-3 sm:mt-4">
                        <a
                          href={project.projectLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-block text-white px-3 py-1 sm:px-4 sm:py-2 rounded-md text-sm sm:text-base transition-colors"
                          style={{ backgroundColor: "#2b5482" }}
                          onMouseEnter={(e) =>
                            (e.currentTarget.style.backgroundColor = "#1f3a5e")
                          }
                          onMouseLeave={(e) =>
                            (e.currentTarget.style.backgroundColor = "#2b5482")
                          }
                        >
                          View Project
                        </a>
                      </div>

                      {/* Logos */}
                      <div className="mt-4 sm:mt-6">
                        <h4
                          className="text-base sm:text-lg font-medium mb-2 sm:mb-3"
                          style={{ color: "#2b5482" }}
                        >
                          Supported by
                        </h4>
                        <div className="flex flex-wrap gap-4 sm:gap-6">
                          {logos.map((logo, idx) => (
                            <img
                              key={idx}
                              src={logo}
                              alt={`Logo ${idx + 1}`}
                              className="w-16 h-16 sm:w-18 sm:h-18 lg:w-20 lg:h-20 object-contain rounded-md bg-gray-100 p-1 sm:p-2 shadow-sm hover:shadow-md transition-shadow"
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right Navigation Button (Hidden on small screens) */}
        <button
          onClick={nextSlide}
          className="hidden sm:flex absolute -right-8 lg:-right-12 top-1/2 transform -translate-y-1/2 text-white p-2 sm:p-3 rounded-full shadow-lg hover:scale-110 transition-all focus:outline-none z-10"
          style={{ backgroundColor: "#2b5482" }}
          onMouseEnter={(e) =>
            (e.currentTarget.style.backgroundColor = "#1f3a5e")
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.backgroundColor = "#2b5482")
          }
        >
          <svg
            className="w-5 h-5 sm:w-6 sm:h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>

      {/* Navigation Dots */}
      <div className="flex justify-center mt-4 sm:mt-6 gap-1 sm:gap-2">
        {projects.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all ${
              idx === currentIndex ? "scale-125" : "bg-gray-300"
            }`}
            style={{
              backgroundColor: idx === currentIndex ? "#2b5482" : undefined,
            }}
            onMouseEnter={(e) =>
              idx !== currentIndex &&
              (e.currentTarget.style.backgroundColor = "#3b6a9f")
            }
            onMouseLeave={(e) =>
              idx !== currentIndex &&
              (e.currentTarget.style.backgroundColor = "#d1d5db")
            }
          />
        ))}
      </div>
    </div>
  );
};

export default StudentAchievementsCarousel;
