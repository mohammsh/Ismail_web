"use client";

const IncidentReportingGuide = () => {
  return (
    <div className="p-6 max-w-4xl mx-auto bg-white rounded-lg shadow-lg">
      {/* Title and Banner */}
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4 text-gray-800">
          Incident Reporting Guide
        </h1>
        <img
          src="/images/incident-reporting-banner.png"
          alt="Incident Reporting"
          className="w-full mb-6 rounded-md shadow-md"
        />
      </div>

      {/* What is a Security Incident Section */}
      <div className="mb-6">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">
          What is a Security Incident?
        </h2>
        <p className="mb-4 text-gray-700">
          A security incident is any event that compromises the confidentiality,
          integrity, or availability of information or systems.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {/* Icons for Examples */}
          <div className="flex items-center justify-center text-center bg-gray-50 p-4 rounded-lg shadow-md">
            <img
              src="/images/unauthorized-access-icon.png"
              alt="Unauthorized Access"
              className="w-12 h-12 mb-2"
            />
            <p className="text-sm text-gray-600">Unauthorized access to sensitive data</p>
          </div>
          <div className="flex items-center justify-center text-center bg-gray-50 p-4 rounded-lg shadow-md">
            <img
              src="/images/phishing-icon.png"
              alt="Phishing"
              className="w-12 h-12 mb-2"
            />
            <p className="text-sm text-gray-600">Phishing attempts or suspicious emails</p>
          </div>
          <div className="flex items-center justify-center text-center bg-gray-50 p-4 rounded-lg shadow-md">
            <img
              src="/images/data-breach-icon.png"
              alt="Data Breach"
              className="w-12 h-12 mb-2"
            />
            <p className="text-sm text-gray-600">Data breaches or leaks</p>
          </div>
          <div className="flex items-center justify-center text-center bg-gray-50 p-4 rounded-lg shadow-md">
            <img
              src="/images/malware-icon.png"
              alt="Malware"
              className="w-12 h-12 mb-2"
            />
            <p className="text-sm text-gray-600">Malware or ransomware attacks</p>
          </div>
        </div>
      </div>

      {/* How to Report an Incident Section */}
      <div className="mb-6">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">
          How to Report an Incident
        </h2>
        <p className="mb-4 text-gray-700">
          Follow these steps to report a security incident promptly:
        </p>
        <ol className="list-decimal ml-6 space-y-4 text-gray-700">
          <li className="flex items-center">
            <img
              src="/images/form-icon.png"
              alt="Form"
              className="w-6 h-6 mr-4"
            />
            Visit the{" "}
            <a
              href="https://security.example.com/report-incident"
              target="_blank"
              className="text-blue-600 underline"
            >
              Incident Reporting Form
            </a>
          </li>
          <li className="flex items-center">
            <img
              src="/images/description-icon.png"
              alt="Description"
              className="w-6 h-6 mr-4"
            />
            Provide a detailed description of the incident.
          </li>
          <li className="flex items-center">
            <img
              src="/images/attachment-icon.png"
              alt="Attachment"
              className="w-6 h-6 mr-4"
            />
            Attach any relevant files or screenshots.
          </li>
          <li className="flex items-center">
            <img
              src="/images/submit-icon.png"
              alt="Submit"
              className="w-6 h-6 mr-4"
            />
            Submit the form and await a response from the security team.
          </li>
        </ol>
      </div>

      {/* Who to Contact Section */}
      <div className="mb-6">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">
          Who to Contact
        </h2>
        <p className="mb-4 text-gray-700">
          For immediate assistance, contact the Security Team at{" "}
          <a
            href="mailto:security@example.com"
            className="text-blue-600 underline"
          >
            security@example.com
          </a>{" "}
          or call the 24/7 hotline at{" "}
          <span className="font-bold text-gray-700">1-800-SECURE</span>.
        </p>
        <div className="flex justify-center">
          <img
            src="/images/contact-icon.png"
            alt="Contact"
            className="w-16 h-16"
          />
        </div>
      </div>

      {/* Footer Section */}
      <div className="text-center text-gray-500 text-sm mt-6">
        <p>&copy; 2025 Security Department. All rights reserved.</p>
      </div>
    </div>
  );
};

export default IncidentReportingGuide;
