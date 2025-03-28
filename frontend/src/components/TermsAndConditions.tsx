import React from "react";

const TermsAndConditions: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-[#2b4282] mb-4">Terms & Conditions</h1>
      <h2 className="text-xl font text-gray-700 mb-6">
        Effective Date: April 08, 2025
      </h2>

      <section className="mb-8">
        <h2 className="text-2xl font text-[#2b4282] mb-3">Introduction</h2>
        <p className="text-gray-600 leading-relaxed">
          Welcome to GUIITAR Council ("we," "our," or "us"). By accessing or using our website, you agree to be bound by these Terms & Conditions. If you do not agree with any part of these terms, please refrain from using our services.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font text-[#2b4282] mb-3">Use of Website</h2>
        <p className="text-gray-600 leading-relaxed">
          You agree to use this website in compliance with all applicable laws and regulations. Unauthorized use, including attempting to gain unauthorized access, modifying content, or using it for unlawful purposes, is strictly prohibited.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text- text-[#2b4282] mb-3">Intellectual Property</h2>
        <p className="text-gray-600 leading-relaxed">
          All content, including logos, text, graphics, and other materials on this website, is the intellectual property of GUIITAR Council and may not be used, copied, or distributed without prior written consent.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font text-[#2b4282] mb-3">Limitation of Liability</h2>
        <p className="text-gray-600 leading-relaxed">
          GUIITAR Council is not liable for any direct, indirect, incidental, or consequential damages resulting from the use of our website or reliance on any information provided.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font text-[#2b4282] mb-3">Third-Party Links</h2>
        <p className="text-gray-600 leading-relaxed">
          Our website may contain links to third-party websites. We do not endorse or assume responsibility for the content, privacy policies, or practices of any third-party sites.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font text-[#2b4282] mb-3">Modification of Terms</h2>
        <p className="text-gray-600 leading-relaxed">
          We reserve the right to modify these Terms & Conditions at any time. Changes will be posted on this page, and your continued use of the website constitutes acceptance of the revised terms.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font text-[#2b4282] mb-3">Governing Law</h2>
        <p className="text-gray-600 leading-relaxed">
          These Terms & Conditions are governed by the laws of India. Any disputes arising from or related to the use of this website shall be subject to the jurisdiction of the courts in Vadodara, Gujarat.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font text-[#2b4282] mb-3">Contact Us</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          If you have any questions regarding these Terms & Conditions, please contact us at:
        </p>
        <div className="bg-gray-100 p-4 rounded-lg">
          <p className="font-semibold text-gray-800">GUITAR Council</p>
          <p className="text-gray-600">Event Room, Second Floor,</p>
          <p className="text-gray-600">Anviksha - GSFC University</p>
          <p className="text-gray-600">
            <strong>Email:</strong>{" "}
            <a 
              href="mailto:guiitar@gsfcuniversity.ac.in" 
              className="text-[#2b4282] hover:underline"
            >
              guiitar@gsfcuniversity.ac.in
            </a>
          </p>
          <p className="text-gray-600">
            <strong>Phone:</strong> +91 93132 62712
          </p>
        </div>
      </section>
    </div>
  );
};

export default TermsAndConditions;