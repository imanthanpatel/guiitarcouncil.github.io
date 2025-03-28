import React from "react";
import { Link } from "react-router-dom";

const NotFoundPage: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4 py-8">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-6xl md:text-8xl font-bold text-[#2b4282] mb-6">
          404
        </h1>
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4">
          Page Not Found
        </h2>
        <p className="text-gray-600 leading-relaxed mb-8 max-w-2xl mx-auto">
          Oops! It seems we've hit a wrong note. The page you're looking for
          doesn't exist or has been moved. Don't worry, let's get you back on
          track!
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/"
            className="inline-block bg-[#2b4282] text-white font py-3 px-6 rounded-lg hover:bg-opacity-90 transition-colors duration-200"
          >
            Return to Home
          </Link>
          <Link
            to="/contact"
            className="inline-block border-2 border-[#2b4282] text-[#2b4282] font py-3 px-6 rounded-lg hover:bg-[#2b4282] hover:text-white transition-colors duration-200"
          >
            Contact Us
          </Link>
        </div>

        <div className="mt-12 text-gray-600">
          <p className="mb-2">Still lost? Reach out to us directly:</p>
          <p>
            <strong>Email:</strong>{" "}
            <a
              href="mailto:guiitar@gsfcuniversity.ac.in"
              className="text-[#2b4282] hover:underline"
            >
              guiitar@gsfcuniversity.ac.in
            </a>
          </p>
          <p>
            <strong>Phone:</strong> +91 93132 62712
          </p>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
