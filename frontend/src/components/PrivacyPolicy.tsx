import React from "react";

const Privacy: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-[#2b4282] mb-4">Privacy Policy</h1>
      <h2 className="text-xl font text-gray-700 mb-6">
        Effective Date: April 08, 2025
      </h2>

      <section className="mb-8">
        <h2 className="text-2xl font text-[#2b4282] mb-3">Introduction</h2>
        <p className="text-gray-600 leading-relaxed">
          Welcome to GUIITAR Council ("we," "our," or "us"). As a Section 8
          company affiliated with GSFC University, we are committed to protecting
          your privacy. This Privacy Policy explains how we collect, use,
          disclose, and safeguard your information when you visit our{" "}
          <a 
            href="https://guiitarcouncil.vercel.app/" 
            className="text-[#2b4282] hover:underline"
          >
            website
          </a>.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font text-[#2b4282] mb-3">Information We Collect</h2>
        <p className="text-gray-600 mb-2">We may collect the following types of information:</p>
        <ul className="list-disc pl-5 text-gray-600 leading-relaxed">
          <li>
            <strong>Personal Information:</strong> Name, email address, phone
            number, designation, and any other details provided through forms or
            registrations.
          </li>
          <li>
            <strong>Non-Personal Information:</strong> IP addresses, browser type,
            operating system, and browsing behavior through cookies and analytics
            tools.
          </li>
          <li>
            <strong>Application & Business Information:</strong> If you apply for
            incubation, we may collect business-related details, including company
            name, business plans, and funding details.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font text-[#2b4282] mb-3">How We Use Your Information</h2>
        <p className="text-gray-600 mb-2">We use the collected data to:</p>
        <ul className="list-disc pl-5 text-gray-600 leading-relaxed">
          <li>Provide and manage incubation services and programs.</li>
          <li>Respond to inquiries and provide customer support.</li>
          <li>Improve website functionality and user experience.</li>
          <li>Analyze website traffic and trends for optimization.</li>
          <li>Comply with legal and regulatory obligations.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font text-[#2b4282] mb-3">Information Sharing & Disclosure</h2>
        <p className="text-gray-600 mb-2">
          We do not sell, rent, or trade your personal information. However, we
          may share data with:
        </p>
        <ul className="list-disc pl-5 text-gray-600 leading-relaxed">
          <li>
            <strong>University Affiliates & Partners:</strong> To facilitate
            incubation programs and business development.
          </li>
          <li>
            <strong>Service Providers:</strong> Third-party vendors who assist in
            website management, analytics, or communication services.
          </li>
          <li>
            <strong>Legal Authorities:</strong> If required by law, court order,
            or to protect our rights and interests.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font text-[#2b4282] mb-3">Data Security</h2>
        <p className="text-gray-600 leading-relaxed">
          We implement appropriate security measures to protect your personal
          information. However, no method of transmission over the internet is
          100% secure, and we cannot guarantee absolute security.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font text-[#2b4282] mb-3">Cookies & Tracking Technologies</h2>
        <p className="text-gray-600 leading-relaxed">
          Our website may use cookies and tracking technologies to enhance user
          experience. You can manage cookie preferences through your browser
          settings.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font text-[#2b4282] mb-3">Third-Party Content</h2>
        <p className="text-gray-600 leading-relaxed">
          Our website may contain links to third-party websites. We are not
          responsible for their privacy policies or content. Please review their
          policies before providing any information.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font text-[#2b4282] mb-3">Data Retention</h2>
        <p className="text-gray-600 leading-relaxed">
          We retain your information as long as necessary to fulfill the purposes
          outlined in this policy or as required by law.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font text-[#2b4282] mb-3">Your Rights & Choices</h2>
        <p className="text-gray-600 mb-2">You have the right to:</p>
        <ul className="list-disc pl-5 text-gray-600 leading-relaxed">
          <li>Access, update, or correct your personal information.</li>
          <li>Withdraw consent for marketing communications.</li>
          <li>
            Request the deletion of your data, subject to legal obligations.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font text-[#2b4282] mb-3">Updates to This Policy</h2>
        <p className="text-gray-600 leading-relaxed">
          We may update this Privacy Policy from time to time. The latest version
          will be posted on our website with the effective date.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font text-[#2b4282] mb-3">Contact Us</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          If you have any questions or concerns regarding this Privacy Policy,
          please contact us:
        </p>
        <div className="bg-gray-100 p-4 rounded-lg">
          <p className="font text-gray-800">GUITAR Council</p>
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

export default Privacy;