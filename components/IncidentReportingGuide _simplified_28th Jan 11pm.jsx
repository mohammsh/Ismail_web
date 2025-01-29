"use client";

const IncidentReportingGuide = () => {
  return (
    <div className="p-6 max-w-4xl mx-auto bg-gradient-to-r from-purple-100 to-indigo-200 rounded-lg shadow-2xl">
      {/* Title and Banner */}
      <div className="text-center mb-8 relative">
        <h1 className="text-3xl font-bold text-gray-900 mb-2 tracking-wide z-10">
          Incident Reporting Guide
        </h1>
        <p className="text-lg text-gray-700 mb-1">
          A quick reference guide for reporting security incidents and events.
        </p>
        <img
          src="/images/incident-reporting-banner.png"
          alt="Incident Reporting Banner"
          className="w-40 mx-auto opacity-80"
        />
      </div>

      {/* Two-Column Section for Security Incident and Security Event */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-6">
        {/* Security Incident */}
        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <h2 className="text-2xl font-semibold mb-2 text-purple-800 flex items-center">
            What is a Security Incident?
          </h2>
          <p className="text-gray-700 leading-relaxed">
            A security incident is an event that compromises or threatens the protection of sensitive information, such as personal, customer, or corporate data.
          </p>
        </div>

        {/* Security Event */}
        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <h2 className="text-2xl font-semibold mb-2 text-indigo-800 flex items-center">
            What is a Security Event?
          </h2>
          <p className="text-gray-700 leading-relaxed">
            A security event refers to any case that has not developed into an incident but shows potential or signs of one.
          </p>
        </div>
      </div>

      {/* When to Report Section */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-3 text-center">
          When to Report{" "}
          <span className="text-sm font-normal">(few examples are below...)</span>
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
          {[
            { img: "/images/unauthorized-access-icon.png", label: "Unauthorized Access" },
            { img: "/images/phishing-icon.png", label: "Phishing Attempts" },
            { img: "/images/data-breach-icon.png", label: "Data Breaches" },
            { img: "/images/malware-icon.png", label: "Malware Attacks" },
            { img: "/images/social-engineering-icon.png", label: "Social Engineering" },
            { img: "/images/theft-icon.png", label: "Theft" },
          ].map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <img src={item.img} alt={item.label} className="w-12 h-12 mb-2" />
              <p className="text-sm text-gray-700 text-center font-medium">{item.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* How to Report Section */}
      <div className="mb-12 bg-white p-8 rounded-lg shadow-lg relative">
        <h2 className="text-2xl font-bold text-gray-900 mb-3">
          How to Report an Incident
        </h2>
        <ol className="space-y-2 text-gray-700">
          {[
            { icon: "/images/new-user-guide-icon.png", text: "Refer to the User Guide on how to fill the report." },
            { icon: "/images/form-icon.png", text: "Check the ISM Organization List for contacts." },
            { icon: "/images/description-icon.png", text: "Describe the incident in detail." },
            { icon: "/images/attachment-icon.png", text: "Attach relevant files or screenshots." },
            { icon: "/images/new-submit-icon.png", text: "Submit the report using the provided template." },
          ].map((step, index) => (
            <li key={index} className="flex items-center space-x-5">
              <img src={step.icon} alt={`Step ${index + 1}`} className="w-8 h-8" />
              <span>{step.text}</span>
            </li>
          ))}
        </ol>
        <img
          src="/images/what-to-do-icon.png"
          alt="What to Do Icon"
          className="absolute top-16 right-12 w-36 opacity-60"
        />
      </div>

      {/* Who to Contact Section */}
      <div className="bg-indigo-100 p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-gray-900 mb-3">
          Who to Contact
        </h2>
        <div className="flex items-center space-x-6">
          <img
            src="/images/contact-icon.png"
            alt="Contact Icon"
            className="w-16 h-16"
          />
          <div>
            <p className="text-sm font-semibold text-gray-800">
              Email the Panasonic Regional ISM team at:
            </p>
            <a
              href="mailto:PNA-ISM-Incidents@us.panasonic.com"
              className="text-indigo-600 hover:underline text-lg"
            >
              PNA-ISM-Incidents@us.panasonic.com
            </a>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="text-center mt-12 text-sm text-gray-500">
        <p>&copy; {new Date().getFullYear()} Panasonic. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default IncidentReportingGuide;