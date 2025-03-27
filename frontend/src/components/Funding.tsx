import React from "react";

const Funding: React.FC = () => {
  return (
    <>
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
          Funding Opportunities
        </div>
      </div>

      <div className="main-content flex justify-center items-center my-[100px] max-[768px]:my-[50px] max-[480px]:my-[30px]">
        <div className="grid-container grid grid-cols-2 gap-[50px] w-[90%] max-w-[1400px] max-[1024px]:gap-[40px] max-[768px]:grid-cols-1 max-[768px]:gap-[30px] max-[480px]:gap-[20px]">
          <div className="car flex flex-col justify-center items-center text-center rounded-[15px] p-[40px] gap-[30px] bg-white shadow-[0_4px_8px_rgba(0,0,0,0.1)] transition-all duration-300 ease-in hover:-translate-y-[5px] hover:shadow-[0_8px_16px_rgba(0,0,0,0.2)] max-[1024px]:p-[30px] max-[768px]:p-[20px] max-[480px]:p-[15px]">
            <h3 id="ssip" className="text-[#2b5482] text-[4rem] font m-0 max-[1024px]:text-[3rem] max-[768px]:text-[2.5rem] max-[480px]:text-[2rem]">
              SSIP 2.0
            </h3>
            <p className="text-[#333] text-[1.2rem] max-[1024px]:text-[1.1rem] max-[768px]:text-[1rem] max-[480px]:text-[0.875rem]">
              SSIP (Student Startup and Innovation Policy) is an initiative by Gujarat Government to empower students and young innovators by fostering a culture of entrepreneurship and innovation. It supports startups in both traditional and emerging technologies. Open to students and alumni across all education levels, SSIP offers financial assistance for prototype or proof of concept (POC) with mentorship and infrastructure to transform ideas into impactful ventures.
            </p>
            <div className="funding-btn-container flex justify-center gap-[40px] max-[480px]:gap-[20px]">
              <div className="funding-btn">
                <a
                  href="https://drive.google.com/drive/folders/1EspgxXUoavBlETSnxstEfpMGsI_fCFma"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Learn more about SSIP 2.0"
                >
                  <button className="mt-[20px] px-[20px] py-[10px] text-[1.2rem] bg-primary text-secondary border-none rounded-[8px] cursor-pointer transition-all duration-300 ease-in hover:bg-secondary hover:text-primary hover:border hover:border-[#333] max-[1024px]:text-[1.1rem] max-[768px]:text-[1rem] max-[480px]:text-[0.875rem] max-[480px]:px-[15px] max-[480px]:py-[8px]">
                    Learn More
                  </button>
                </a>
              </div>
              <div className="funding-btn">
                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLSchfX1JB-oZvQOm4ff9iJuQjD9f1Tu3T84OT3279RoHjq_ivg/viewform"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Apply for SSIP 2.0 funding"
                >
                  <button className="mt-[20px] px-[20px] py-[10px] text-[1.2rem] bg-primary text-secondary border-none rounded-[8px] cursor-pointer transition-all duration-300 ease-in hover:bg-secondary hover:text-primary hover:border hover:border-[#333] max-[1024px]:text-[1.1rem] max-[768px]:text-[1rem] max-[480px]:text-[0.875rem] max-[480px]:px-[15px] max-[480px]:py-[8px]">
                    Apply Now!
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div className="image-car flex flex-col justify-center items-center text-center rounded-[15px] p-[40px] gap-[30px] text-[3rem] text-primary font bg-[#f0f8ff] shadow-[0_4px_8px_rgba(0,0,0,0.1)] border-2 border-[#ccc] transition-all duration-300 ease-in hover:-translate-y-[5px] hover:shadow-[0_8px_16px_rgba(0,0,0,0.2)] max-[1024px]:p-[30px] max-[768px]:p-[20px] max-[480px]:p-[15px] max-[768px]:h-[200px] max-[480px]:h-[150px]">
            <img
              src="https://res.cloudinary.com/dopcjxehj/image/upload/v1743068561/as4-new_pufqeo.png"
              alt="SSIP 2.0 Logo"
              className="h-[180px] w-auto object-contain max-[768px]:h-[120px] max-[480px]:h-[100px]"
            />
          </div>
          <div className="image-car flex flex-col justify-center items-center text-center rounded-[15px] p-[40px] gap-[30px] text-[3rem] text-primary font bg-[#f0f8ff] shadow-[0_4px_8px_rgba(0,0,0,0.1)] border-2 border-[#ccc] transition-all duration-300 ease-in hover:-translate-y-[5px] hover:shadow-[0_8px_16px_rgba(0,0,0,0.2)] max-[1024px]:p-[30px] max-[768px]:p-[20px] max-[480px]:p-[15px] max-[768px]:h-[200px] max-[480px]:h-[150px]">
            <img
              src="https://res.cloudinary.com/dopcjxehj/image/upload/v1743068560/startupguj_wzfm2b.png"
              alt="Nodal Institute Logo"
              className="h-[400px] w-auto object-contain -mt-[40px] max-[768px]:h-[120px] max-[768px]:mt-0 max-[480px]:h-[100px]"
            />
          </div>
          <div className="car flex flex-col justify-center items-center text-center rounded-[15px] p-[40px] gap-[30px] bg-white shadow-[0_4px_8px_rgba(0,0,0,0.1)] transition-all duration-300 ease-in hover:-translate-y-[5px] hover:shadow-[0_8px_16px_rgba(0,0,0,0.2)] max-[1024px]:p-[30px] max-[768px]:p-[20px] max-[480px]:p-[15px]">
            <h3 id="nodal" className="text-[#2b5482] text-[4rem] font m-0 max-[1024px]:text-[3rem] max-[768px]:text-[2.5rem] max-[480px]:text-[2rem]">
              Nodal Institute
            </h3>
            <p className="text-[#333] text-[1.2rem] max-[1024px]:text-[1.1rem] max-[768px]:text-[1rem] max-[480px]:text-[0.875rem]">
              GUIITAR Council, recognized under the Gujarat Industrial Policy 2020, empowers startups and innovators by providing funding, mentorship, and resources. With a focus on sectors like AI, agriculture, clean-tech, and healthcare, it offers seed funding up to ₹30 lakhs, monthly sustenance allowances, skill development grants, and support for acceleration programs, fostering a thriving startup ecosystem in Vadodara and beyond.
            </p>
            <div className="funding-btn-container flex justify-center gap-[40px] max-[480px]:gap-[20px]">
              <div className="funding-btn">
                <a
                  href="https://drive.google.com/drive/folders/1eTX32wmbZudS-lHEtyVyEwtc8CM55iX5"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Learn more about Nodal Institute"
                >
                  <button className="mt-[20px] px-[20px] py-[10px] text-[1.2rem] bg-primary text-secondary border-none rounded-[8px] cursor-pointer transition-all duration-300 ease-in hover:bg-secondary hover:text-primary hover:border hover:border-[#333] max-[1024px]:text-[1.1rem] max-[768px]:text-[1rem] max-[480px]:text-[0.875rem] max-[480px]:px-[15px] max-[480px]:py-[8px]">
                    Learn More
                  </button>
                </a>
              </div>
              <div className="funding-btn">
                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLSchfX1JB-oZvQOm4ff9iJuQjD9f1Tu3T84OT3279RoHjq_ivg/viewform"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Apply for Nodal Institute funding"
                >
                  <button className="mt-[20px] px-[20px] py-[10px] text-[1.2rem] bg-primary text-secondary border-none rounded-[8px] cursor-pointer transition-all duration-300 ease-in hover:bg-secondary hover:text-primary hover:border hover:border-[#333] max-[1024px]:text-[1.1rem] max-[768px]:text-[1rem] max-[480px]:text-[0.875rem] max-[480px]:px-[15px] max-[480px]:py-[8px]">
                    Apply Now!
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div className="car flex flex-col justify-center items-center text-center rounded-[15px] p-[40px] gap-[30px] bg-white shadow-[0_4px_8px_rgba(0,0,0,0.1)] transition-all duration-300 ease-in hover:-translate-y-[5px] hover:shadow-[0_8px_16px_rgba(0,0,0,0.2)] max-[1024px]:p-[30px] max-[768px]:p-[20px] max-[480px]:p-[15px]">
            <h3 className="text-[#2b5482] text-[4rem] font m-0 max-[1024px]:text-[3rem] max-[768px]:text-[2.5rem] max-[480px]:text-[2rem]">
              IPR Centre
            </h3>
            <p className="text-[#333] text-[1.2rem] max-[1024px]:text-[1.1rem] max-[768px]:text-[1rem] max-[480px]:text-[0.875rem]">
              The IPR Centre at GSFC University supports students, faculty, and alumni in protecting their intellectual creations, including patents, copyrights, trademarks, and designs. It raises awareness, provides end-to-end guidance, and ensures effective IP management. Financial support is offered for IP filings under SSIP, covering domestic and international patents, trademarks, copyrights, and more, fostering innovation and securing intellectual Assets.
            </p>
            <div className="funding-btn-container flex justify-center gap-[40px] max-[480px]:gap-[20px]">
              <div className="funding-btn">
                <a
                  href="https://drive.google.com/file/d/1krFQgyQ_nasChoSLrFF8zbHzNg1yM9G9/view"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Learn more about IPR Centre"
                >
                  <button className="mt-[20px] px-[20px] py-[10px] text-[1.2rem] bg-primary text-secondary border-none rounded-[8px] cursor-pointer transition-all duration-300 ease-in hover:bg-secondary hover:text-primary hover:border hover:border-[#333] max-[1024px]:text-[1.1rem] max-[768px]:text-[1rem] max-[480px]:text-[0.875rem] max-[480px]:px-[15px] max-[480px]:py-[8px]">
                    Learn More
                  </button>
                </a>
              </div>
              <div className="funding-btn">
                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLSc0zfawCS7M_Q-uOzlA87ARxNCCx-wNUXAAx_54RAORIF_w6g/viewform"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Apply for IPR Centre support"
                >
                  <button className="mt-[20px] px-[20px] py-[10px] text-[1.2rem] bg-primary text-secondary border-none rounded-[8px] cursor-pointer transition-all duration-300 ease-in hover:bg-secondary hover:text-primary hover:border hover:border-[#333] max-[1024px]:text-[1.1rem] max-[768px]:text-[1rem] max-[480px]:text-[0.875rem] max-[480px]:px-[15px] max-[480px]:py-[8px]">
                    Apply Now!
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div className="image-car ipr-logo flex flex-col justify-center items-center text-center rounded-[15px] p-[40px] gap-[30px] text-[3rem] text-primary font bg-[#f0f8ff] shadow-[0_4px_8px_rgba(0,0,0,0.1)] border-2 border-[#ccc] transition-all duration-300 ease-in hover:-translate-y-[5px] hover:shadow-[0_8px_16px_rgba(0,0,0,0.2)] max-[1024px]:p-[30px] max-[768px]:p-[20px] max-[480px]:p-[15px] max-[768px]:h-[200px] max-[480px]:h-[150px]">
            <img
              // src={ipr_logo}
              alt="IPR Centre Logo"
              className="h-[400px] w-auto object-contain max-[768px]:h-[120px] max-[480px]:h-[100px]"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Funding;