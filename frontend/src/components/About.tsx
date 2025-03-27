import React, { useState } from "react";
import Navbar from "./Navbar";
import Team from "./Team";
import Footer from "./Footer";
import Infrastructure from "./Infrastructure";

const About: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mainabout">
      <Navbar isOpen={isOpen} setIsOpen={setIsOpen} />

      <div className="relative w-full h-[60vh] overflow-hidden bg-primary">
        <div
          className="absolute inset-0 bg-primary bg-opacity-80"
          style={{
            backgroundImage: `url("https://res.cloudinary.com/dopcjxehj/image/upload/v1743068853/contact_qbimui.jpg")`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="absolute top-[35%] left-[15%] -translate-x-[30%] -translate-y-1/2 text-secondary text-[60px] font max-[768px]:text-[40px] max-[480px]:text-[30px] text-white">
          About US
        </div>
      </div>

      <div className="about-content">
        <div className="flex flex-row items-center justify-center p-[40px] bg-secondary max-[750px]:flex-col">
          <div className="flex-1 p-[30px] text-[#333] text-left max-[750px]:flex-none max-[750px]:p-0 max-[750px]:text-center">
            <h2 className="text-primary mb-[20px]">About Us</h2>
            <p className="leading-[1.8] mb-[20px] max-[750px]:p-0">
              GU Incubation Innovation Technology and Applied Research (GUIITAR)
              Council has been established by GSFC University (GSFCU) at
              Vadodara, dedicated to promote and support creativity, innovation
              and spirit of enterprise among young minds and innovators. GUIITAR
              Council is registered under section 8 of Companies Act, 2013.
              GUIITAR Council is committed to nurture and develop startups
              through shared resources, infrastructure, cutting-edge
              laboratories, tailored mentorship, extended networking, and other
              common services such as co-working space, equipment, business
              support, and intellectual property protection.
            </p>
            <br />
            <h2 className="text-primary mb-[20px]">VISION</h2>
            <p className="leading-[1.8] mb-[20px] max-[750px]:p-0">
              To nurture young minds by providing platform to explore and
              showcase their potential along with generation of high added value
              with a focus on innovation as well as marketing of technologies
              for the betterment of Scientific, Engineering, Science &amp;
              Management Communities and the Society.
            </p>
            <h2 className="text-primary mb-[20px]">Our Mission</h2>
            <p className="leading-[1.8] mb-[20px] max-[750px]:p-0">
              Our aim is to establish global gold standards for innovation and
              entrepreneurship. By providing unparalleled support, resources,
              and opportunities, we want to create an environment where every
              startup can thrive, disrupt, and redefine industry norms.
            </p>
          </div>

          <div className="flex-1 flex justify-center items-center p-[20px]">
            <img
              src="https://res.cloudinary.com/dopcjxehj/image/upload/v1743068851/campus_vggvjo.jpg"
              alt="GUIITAR Image"
              className="max-w-full h-auto rounded-[8px]"
            />
          </div>
        </div>

        <div className="p-[40px] bg-[#f0f4f8] text-center">
          <h2 className="text-primary mb-[20px] text-[2.5rem] max-[768px]:text-[2rem]">
            Message From Leadership
          </h2>

          <div className="flex flex-wrap justify-around gap-5">
            <div className="flex-1 max-w-[300px] bg-secondary border border-[#ddd] rounded-[8px] p-5 shadow-[0_2px_4px_rgba(0,0,0,0.1)] max-[750px]:flex-none">
              <p className="text-[#555] leading-[1.6]">
                "Every great innovation starts with a single spark of curiosity.
                In the world of startups, it's not the resources you have, but
                the relentless pursuit of your vision that turns ideas into
                reality."
              </p>
              <p className="mt-[15px] italic text-[#777]">
                - Mr. Bimal Bhayani <br />
                CEO, GUIITAR
              </p>
            </div>
            <div className="flex-1 max-w-[300px] bg-secondary border border-[#ddd] rounded-[8px] p-5 shadow-[0_2px_4px_rgba(0,0,0,0.1)] max-[750px]:flex-none">
              <p className="text-[#555] leading-[1.6]">
                "Create an environment of excellence through innovation for you
                will forever be remembered for your contribution to the world.
                Innovation is a journey in which you have to say no to thousands
                of things which already exist while embracing the one which is
                yet to come."
              </p>
              <p className="mt-[15px] italic text-[#777]">
                - Shri P. K. Taneja, IAS (Retd.) <br />
                Chairman, GUIITAR
              </p>
            </div>

            <div className="flex-1 max-w-[300px] bg-secondary border border-[#ddd] rounded-[8px] p-5 shadow-[0_2px_4px_rgba(0,0,0,0.1)] max-[750px]:flex-none">
              <p className="text-[#555] leading-[1.6]">
                "Innovation is not to repeat a success story but to celebrate a
                failure. Pick-up and never Give-up is an attitude towards
                innovation."
              </p>
              <p className="mt-[15px] italic text-[#777]">
                - Dr. G. R. Sinha <br />
                Provost, GSFC University
              </p>
            </div>
          </div>
        </div>

        <div
          id="leadership"
          className="mt-[30px] border-t border-[#ddd] bg-[#2b5482]"
        >
          <h2 className="pt-[20px] text-white text-[2rem] mb-[20px] text-center max-[768px]:text-[1.5rem]">
            Meet our Leadership
          </h2>
          <Team />
        </div>
        <div id="infra" className="infra">
          <Infrastructure />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
