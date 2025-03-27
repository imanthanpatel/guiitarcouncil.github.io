import Footer from "./Footer";
import React, { useState } from "react";

const Contact: React.FC = () => {
  const socialLinks = [
    { name: "Facebook", url: "https://www.facebook.com/gsfcuniversity" },
    {
      name: "Youtube",
      url: "https://www.youtube.com/c/GSFCUniversityOfficial",
    },
    { name: "Twitter", url: "https://x.com/GSFCUniversity" },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/company/guiitarcouncil/",
    },
    { name: "Instagram", url: "https://www.instagram.com/gsfcuniversity" },
  ];

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [statusMessage, setStatusMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setStatusMessage("Contact form submitted successfully!");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      setStatusMessage("There was an error submitting the form.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="font">
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
          Contact Us
        </div>
      </div>

      <div className="contact-card-container flex justify-between items-start p-[50px] text-[#2b5482] bg-secondary max-[1024px]:p-[30px] max-[768px]:flex-col max-[768px]:items-center max-[768px]:text-center max-[480px]:p-[20px]">
        <div className="contact-card-address flex-1 mr-[30px] ml-[100px] max-[1024px]:ml-[50px] max-[768px]:m-[30px] max-[480px]:m-[15px]">
          <h4 className="text-primary text-[3.5rem] font mb-[10px] max-[1024px]:text-[2.5rem] max-[768px]:text-[2rem] max-[480px]:text-[1.5rem]">
            Office Address
          </h4>
          <p className="text-[#555] text-[1.4rem] m-[8px_0] max-[1024px]:text-[1.2rem] max-[768px]:text-[1rem] max-[480px]:text-[0.875rem]">
            Event Room, Second Floor,
          </p>
          <p className="text-[#555] text-[1.4rem] m-[8px_0] max-[1024px]:text-[1.2rem] max-[768px]:text-[1rem] max-[480px]:text-[0.875rem]">
            Anviksha - GSFC University,
          </p>
          <p className="text-[#555] text-[1.4rem] m-[8px_0] max-[1024px]:text-[1.2rem] max-[768px]:text-[1rem] max-[480px]:text-[0.875rem]">
            Vadodara, Gujarat - 391750, India
          </p>
        </div>
        <div className="contact-card-address flex-1 mr-[30px] max-[1024px]:mr-[15px] max-[768px]:m-[30px] max-[480px]:m-[15px]">
          <h4 className="text-primary text-[3.5rem] font mb-[10px] max-[1024px]:text-[2.5rem] max-[768px]:text-[2rem] max-[480px]:text-[1.5rem]">
            Mr. Kiran Parmar
          </h4>
          <p className="text-[#555] text-[1.4rem] m-[8px_0] max-[1024px]:text-[1.2rem] max-[768px]:text-[1rem] max-[480px]:text-[0.875rem]">
            Sr. Manager, GUIITAR COUNCIL
          </p>
          <p className="text-[#555] text-[1.4rem] m-[8px_0] max-[1024px]:text-[1.2rem] max-[768px]:text-[1rem] max-[480px]:text-[0.875rem]">
            +91 9313262712
          </p>
          <p className="text-[#555] text-[1.4rem] m-[8px_0] max-[1024px]:text-[1.2rem] max-[768px]:text-[1rem] max-[480px]:text-[0.875rem]">
            Email:{" "}
            <a
              href="mailto:guiitar@gsfcuniversity.ac.in"
              className="text-[#555] hover:underline"
              aria-label="Email GUIITAR Council"
            >
              guiitar@gsfcuniversity.ac.in
            </a>
          </p>
        </div>
      </div>

      <div className="follow-us-section flex items-start justify-start p-[7rem] text-white bg-[#2b5482] gap-[8rem] text-secondary max-[1024px]:p-[5rem] max-[1024px]:gap-[5rem] max-[768px]:justify-center max-[768px]:p-[3rem] max-[768px]:gap-[3rem] max-[480px]:p-[2rem]">
        <div className="follow-us-content max-w-[40%] max-[768px]:max-w-[100%]">
          <h1 className="follow-us-title text-[3rem] font mb-[2rem] text-left border-b-2 border-secondary max-[1024px]:text-[2.5rem] max-[768px]:text-[10vw] max-[768px]:text-center max-[768px]:w-full">
            Follow us to stay updated!
          </h1>
          <ul className="contact-links list-none p-0 m-0 flex flex-col gap-4 items-center">
            {socialLinks.map((link, index) => (
              <li
                key={index}
                className="text-[1.8rem] max-[1024px]:text-[1.5rem] max-[768px]:text-[1.2rem] max-[480px]:text-[1rem]"
              >
                <a
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-secondary font transition-colors duration-300 ease-in hover:text-[#b3b3b3]"
                  aria-label={`Follow us on ${link.name}`}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="follow-us-image w-[600px] max-[768px]:hidden">
          <img
            src="https://res.cloudinary.com/dopcjxehj/image/upload/v1743068862/trial_roaybi.png"
            alt="Social gathering at GUIITAR"
            className="w-[600px] h-auto rounded-[10px] pl-[60px] max-[1024px]:w-[500px] max-[1024px]:pl-[40px]"
          />
        </div>
      </div>

      <div
        id="ask"
        className="form-container flex flex-row h-screen bg-secondary text-secondary max-[768px]:flex-col max-[768px]:h-auto"
      >
        <div className="map-container flex-1 flex justify-center items-center max-[768px]:p-[30px_50px] max-[768px]:flex-col max-[480px]:p-[20px]">
          <div className="gmap w-full flex flex-col items-center">
            <h2 className="map-title text-[#2b5482] text-[50px] text-center mb-[30px] max-[1024px]:text-[40px] max-[768px]:text-[11vw] max-[480px]:text-[30px] max-[480px]:mb-[20px]">
              Visit Us
            </h2>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29514.989203451187!2d73.14472959999999!3d22.377267200000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395fc97b15555555%3A0x86e6773a36e1a153!2sGSFC%20University!5e0!3m2!1sen!2sin!4v1737613685120!5m2!1sen!2sin"
              className="w-[85%] h-[500px] rounded-[15px] border border-[#0d0c0c] shadow-[0_10px_20px_rgba(0,0,0,0.3)] 
             max-[1024px]:w-[90%] max-[1024px]:h-[500px] max-[768px]:w-full max-[768px]:h-[400px] max-[480px]:h-[350px]"
              style={{ border: "0" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="GSFC University Location Map"
            ></iframe>
          </div>
        </div>

        <div className="feedback-container flex-1 p-[30px_50px] flex flex-col justify-center items-center bg-secondary max-[768px]:p-0 max-[480px]:pb-[20px]">
          <h2 className="feedback-title text-[#2b5482] text-[50px] text-center mb-[30px] max-[1024px]:text-[40px] max-[768px]:text-[11vw] max-[480px]:text-[30px] max-[480px]:mb-[20px]">
            Ask a Query
          </h2>
          <form
            className="feedback-form flex flex-col gap-5 items-center w-[70%] max-[768px]:w-[80vw] max-[480px]:w-[90vw]"
            onSubmit={handleSubmit}
          >
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              className="input-field w-full p-[15px] rounded-[8px] border-2 border-[#0d0c0c] bg-secondary text-black text-[18px] focus:outline-none focus:border-primary max-[480px]:text-[16px] max-[480px]:p-[10px]"
              aria-label="Your Name"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="input-field w-full p-[15px] rounded-[8px] border-2 border-[#0d0c0c] bg-secondary text-black text-[18px] focus:outline-none focus:border-primary max-[480px]:text-[16px] max-[480px]:p-[10px]"
              aria-label="Your Email"
              required
            />
            <textarea
              name="message"
              placeholder="Message"
              rows={5}
              value={formData.message}
              onChange={handleChange}
              className="textarea-field w-full p-[15px] rounded-[8px] border-2 border-[#0d0c0c] bg-secondary text-black text-[18px] focus:outline-none focus:border-primary max-[480px]:text-[16px] max-[480px]:p-[10px] max-[480px]:rows-4"
              aria-label="Your Message"
              required
            ></textarea>
            <button className="submit-button w-[50%] p-[12px] rounded-[8px] bg-[#2b5482] text-white border-0 cursor-pointer text-[18px] transition-all duration-300 ease-in hover:bg-white hover:text-[#2b5482] hover:border-3 hover:border-black disabled:opacity-50 disabled:cursor-not-allowed max-[480px]:w-[70%] max-[480px]:text-[16px] max-[480px]:p-[10px]">
              Submit
            </button>
          </form>
          {statusMessage && (
            <p className="footer-note mt-[25px] text-[16px] text-[#ccc] text-center max-[480px]:text-[14px]">
              {statusMessage}
            </p>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
