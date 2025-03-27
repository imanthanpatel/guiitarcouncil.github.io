// src/components/Build.tsx
import React from "react";
import { HashLink } from "react-router-hash-link";

const BuildFuture: React.FC = () => {
  return (
    <section className="bg-[var(--primary-color)] text-[#fff] text-center py-[70px] px-5">
      <h1 className="text-[2.5rem] text-secondary mb-[30px] underline">
        Build the future with us
      </h1>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-[35px] mt-5 px-[50px] max-[750px]:px-0">
        <div className="bg-[#fff] border-2 border-[#e0e0e0] rounded-[10px] p-5 shadow-[0_4px_6px_rgba(0,0,0,0.1)] transition-transform duration-300 ease-in-out hover:-translate-y-[5px] hover:shadow-[0_6px_10px_rgba(0,0,0,0.4)] max-[750px]:my-[10px]">
          <img
            src="https://res.cloudinary.com/dopcjxehj/image/upload/v1743068849/money_goqk8b.png"
            alt="Funding"
            className="h-[70px] w-[70px] mx-auto mb-[10px] object-contain"
          />
          <h2 className="text-[1.5rem] text-[#2b5482] mb-[10px] ">Funding</h2>
          <p className="text-[1rem] text-[#666666] leading-[1.5]">
            Get access to financial support to turn your innovative ideas into
            reality.
          </p>
          <HashLink
            smooth
            to="/funding#funding-image"
            scroll={(el) =>
              el.scrollIntoView({ behavior: "smooth", block: "start" })
            }
          >
            <button className="mt-[15px] px-5 py-[10px] text-[1rem] font text-secondary bg-[#2b5482] border-none rounded-[5px] cursor-pointer transition-colors duration-300 ease-in-out">
              Learn More
            </button>
          </HashLink>
        </div>
        <div className="bg-[#f9f9f9] border-2 border-[#e0e0e0] rounded-[10px] p-5 shadow-[0_4px_6px_rgba(0,0,0,0.1)] transition-transform duration-300 ease-in-out hover:-translate-y-[5px] hover:shadow-[0_6px_10px_rgba(0,0,0,0.4)] max-[750px]:my-[10px]">
          <img
            src="https://res.cloudinary.com/dopcjxehj/image/upload/v1743068846/urban_jyvdup.png"
            alt="Infrastructure"
            className="h-[70px] w-[70px] mx-auto mb-[10px] object-contain"
          />
          <h2 className="text-[1.5rem] text-[#2b5482] mb-[10px]">
            Infrastructure
          </h2>
          <p className="text-[1rem] text-[#666666] leading-[1.5]">
            Work in state-of-the-art facilities designed for collaboration and
            growth.
          </p>
          <HashLink
            smooth
            to="/about#infra"
            scroll={(el) =>
              el.scrollIntoView({ behavior: "smooth", block: "start" })
            }
          >
            <button className="mt-[15px] px-5 py-[10px] text-[1rem] font text-secondary bg-[#2b5482] border-none rounded-[5px] cursor-pointer transition-colors duration-300 ease-in-out">
              Learn More
            </button>
          </HashLink>
        </div>
        <div className="bg-[#f9f9f9] border-2 border-[#e0e0e0] rounded-[10px] p-5 shadow-[0_4px_6px_rgba(0,0,0,0.1)] transition-transform duration-300 ease-in-out hover:-translate-y-[5px] hover:shadow-[0_6px_10px_rgba(0,0,0,0.4)] max-[750px]:my-[10px]">
          <img
            src="https://res.cloudinary.com/dopcjxehj/image/upload/v1743068847/community_aahpwt.png"
            alt="Mentorship"
            className="h-[70px] w-[70px] mx-auto mb-[10px] object-contain"
          />
          <h2 className="text-[1.5rem] text-[#2b5482] mb-[10px]">Mentorship</h2>
          <p className="text-[1rem] text-[#666666] leading-[1.5]">
            Learn from leading industry experts to sharpen your strategies and
            skills.
          </p>
          <HashLink
            smooth
            to="/about#leadership"
            scroll={(el) =>
              el.scrollIntoView({ behavior: "smooth", block: "start" })
            }
          >
            <button className="mt-[15px] px-5 py-[10px] text-[1rem] font text-secondary bg-[#2b5482] border-none rounded-[5px] cursor-pointer transition-colors duration-300 ease-in-out">
              Learn More
            </button>
          </HashLink>
        </div>
        <div className="bg-[#f9f9f9] border-2 border-[#e0e0e0] rounded-[10px] p-5 shadow-[0_4px_6px_rgba(0,0,0,0.1)] transition-transform duration-300 ease-in-out hover:-translate-y-[5px] hover:shadow-[0_6px_10px_rgba(0,0,0,0.4)] max-[750px]:my-[10px]">
          <img
            src="https://res.cloudinary.com/dopcjxehj/image/upload/v1743068846/brain_fvnaca.png"
            alt="IPR Support"
            className="h-[70px] w-[70px] mx-auto mb-[10px] object-contain"
          />
          <h2 className="text-[1.5rem] text-[#2b5482] mb-[10px]">IPR Support</h2>
          <p className="text-[1rem] text-[#666666] leading-[1.5]">
            Protect your ideas and innovations with intellectual property rights
            assistance.
          </p>
          <a
            href="https://drive.google.com/file/d/1krFQgyQ_nasChoSLrFF8zbHzNg1yM9G9/view"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="mt-[15px] px-5 py-[10px] text-[1rem] font text-secondary bg-[#2b5482] border-none rounded-[5px] cursor-pointer transition-colors duration-300 ease-in-out">
              Learn More
            </button>
          </a>
        </div>
      </div>
      <div className="text-center">
        <h2 className="text-[2rem] pb-[10px] text-secondary">
          Take the first step towards greatness!
        </h2>
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSchfX1JB-oZvQOm4ff9iJuQjD9f1Tu3T84OT3279RoHjq_ivg/viewform"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="text-[1.2rem] font text-[#2b5482] bg-white border-none rounded-[5px] cursor-pointer transition-shadow duration-300 ease-in-out px-[1.2em] py-[0.6em] hover:shadow-[0_6px_10px_rgba(0,0,0,0.4)]">
            Apply Now!
          </button>
        </a>
      </div>
    </section>
  );
};

export default BuildFuture;
