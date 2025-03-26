// src/Components/Newsletter.tsx
import React, { useState } from "react";

const Newsletter: React.FC = () => {
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [email, setEmail] = useState<string>("");
  const [statusMessage, setStatusMessage] = useState<string>("");

  // Get the API URL from environment variables (fallback to local IP)
  // const API_URL = import.meta.env.VITE_API_URL || "http://192.168.154.10:8000";

  // const handleSubmit = async (e: React.FormEvent) => {
  //   e.preventDefault();
  //   try {
  //     const response = await axios.post(`${API_URL}/api/newsletter/submit/`, {
  //       email,
  //     });

  //     setStatusMessage("Email submitted successfully!");
  //     setEmail(""); // Reset email field
  //     setSubmitted(true); // Mark as submitted
  //   } catch (error) {
  //     setStatusMessage("There was an error submitting the form.");
  //   }
  // };

  return (
    <div className="flex flex-col md:flex-row items-center justify-center h-[25vh] w-full py-12 md:py-12 bg-[var(--primary-color)] text-white gap-5 px-4 font">
      {/* Newsletter Title */}
      <div className="text-secondary text-[30px] md:text-[30px] whitespace-nowrap md:whitespace-nowrap text-center mb-4 md:mb-0 font-medium">
        Sign Up for News & Events
      </div>

      {/* Newsletter Form */}
      <div className="flex items-center justify-center w-full md:w-auto">
        <form
          className="flex items-center bg-white rounded-[25px] p-3 w-full max-w-[300px] md:w-[300px] border border-gray-200 shadow-md"
          // onSubmit={handleSubmit}
        >
          <input
            type="email"
            placeholder="Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="flex-1 border-none outline-none text-[16px] md:text-[16px] text-gray-600 bg-transparent px-3 py-2 placeholder-gray-400"
          />
          <button
            type="submit"
            className={`flex items-center justify-center w-10 h-10 transition-transform duration-300 active:scale-90 ${submitted ? "submitted" : ""}`}
          >
            {!submitted ? (
              <svg
                className={`w-5 h-5 transition-opacity duration-300 transform scale-100 opacity-100 ${submitted ? "opacity-0 scale-50" : "opacity-100 scale-100"}`}
                viewBox="0 -3 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="#2b5482"
                  strokeWidth="2"
                />
                <path
                  d="M9 12H15M15 12L12 9M15 12L12 15"
                  stroke="#2b5482"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            ) : (
              <svg
                className={`w-5 h-5 transition-opacity duration-300 transform scale-100 opacity-100 ${submitted ? "opacity-100 scale-100" : "opacity-0 scale-50"}`}
                viewBox="0 -3 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="#28a745"
                  strokeWidth="2"
                />
                <path
                  d="M7 12L10 15L17 8"
                  stroke="#28a745"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            )}
          </button>
        </form>
      </div>

      {/* Status Message */}
      <div className="flex justify-center text-center mt-4">
        {statusMessage && (
          <div className="text-white text-[16px]">{statusMessage}</div>
        )}
      </div>
    </div>
  );
};

export default Newsletter;