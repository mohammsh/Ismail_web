"use client";

const IncidentReportingGuide = () => {
  return (
    <div className="p-6 max-w-5xl mx-auto bg-gradient-to-r from-purple-100 to-indigo-200 rounded-lg shadow-2xl">
      {/* Title and Banner */}
      <div className="text-center mb-8 flex flex-col items-center ">
        <h1 className="text-3xl font-bold text-gray-900 mb-40 tracking-wide z-10">
          Incident Reporting Guide
        </h1>
        <img
          src="/images/incident-reporting-banner.png"
          style={{
            width: "150px", // Custom width
            height: "210px", // Custom height
            maskSize: "contain", // Ensure the mask covers the entire image area
            opacity: 0.7, // Make it lighter
            position: "absolute", // Position it absolutely
            top: "330px", // Move it down (adjust value as needed)
            left: "47%", // Align it horizontally center
            transform: "translateX(-50%)", // Ensure it's centered
          }}
        />
      </div>

      {/* Two-Column Section for Security Incident and Security Event */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
        {/* Content Column for Security Incident */}
        <div className="space-y-6">
          <h2 className="text-xl font-semibold mb-3 text-gray-800">
            What is a Security Incident?
          </h2>
          <p className="mb-4 text-base text-gray-700 leading-tight">
            A security incident is an event that compromises or threatens the protection of sensitive information, such as personal, customer, or corporate data.
          </p>
          <ul className="list-disc pl-5 text-base text-gray-700 leading-tight mb-4">
            <li>
              Loss or theft of laptop/cell phone/USB device, or if the
              information on a device was compromised.
            </li>
            <li>If you observe any lapse in your workplace procedures.</li>
            <li>Unauthorized disclosure of sensitive or confidential data.</li>
          </ul>
        </div>

        {/* Content Column for Security Event */}
        <div className="space-y-6">
          <h2 className="text-xl font-semibold mb-3 text-gray-800">
            What is a Security Event?
          </h2>
          <p className="mb-4 text-base text-gray-700 leading-tight">
            A security event refers to any case that has not developed into an
            incident but shows potential or signs of one.
          </p>
          <ul className="list-disc pl-5 text-base text-gray-700 leading-tight mb-4">
            <li>
              Erroneous transmission of email or FAX within Panasonic Holdings
              Corporation.
            </li>
            <li>
              Theft or loss of company equipment if the data was encrypted and
              remote lock/wipe was performed.
            </li>
          </ul>
        </div>
      </div>

      {/* Icon Boxes Section (Two Columns below Security Incident and Security Event) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-14 mb-8">
        {/* Icon Boxes for Security Incident */}
        <div className="space-y-6">
          <h2 className="text-xl font-semibold mb-3 text-gray-800">
            Security Incident Types
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {[
              {
                img: "/images/unauthorized-access-icon.png",
                alt: "Icon for Unauthorized Access",
                label: "Unauthorized Access",
              },
              {
                img: "/images/phishing-icon.png",
                alt: "Icon for Phishing",
                label: "Phishing Attempts",
              },
              {
                img: "/images/data-breach-icon.png",
                alt: "Icon for Data Breaches",
                label: "Data Breaches",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center p-2 bg-white rounded-lg shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 h-30 flex-grow"
              >
                <img src={item.img} alt={item.alt} className="w-20 h-20 mb-2" />
                <p className="text-gray-700 text-xs font-medium">{item.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Icon Boxes for Security Event */}
        <div className="space-y-6">
          <h2 className="text-xl font-semibold mb-3 text-gray-800">
            Security Event Types
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {[
              {
                img: "/images/malware-icon.png",
                alt: "Icon for Malware",
                label: "Malware Attacks",
              },
              {
                img: "/images/social-engineering-icon.png",
                alt: "Icon for Social Engineering",
                label: "Social Engineering",
              },
              {
                img: "/images/Theft-icon.png",
                alt: "Icon for Theft",
                label: "Theft",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center p-2 bg-white rounded-lg shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 h-35 flex-grow"
              >
                <img src={item.img} alt={item.alt} className="w-20 h-20 mb-2" />
                <p className="text-gray-700 text-xs font-medium">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* How to Report an Incident Section */}
      <div className="my-8 relative">
        <h2 className="text-xl font-semibold mb-4 text-gray-800">
          How to Report an Incident
        </h2>
        <p className="mb-4 text-base text-gray-700 leading-tight">
          All ISM Incidents/Events must be reported to your Company Division's
          ISMP/PIP representative to file an Incident Report. Your ISMP will
          work with you to fill the ISM Report.
        </p>
        <ol className="space-y-2 text-sm text-gray-700 leading-tight">
          <li className="flex items-center space-x-3">
            <img
              src="/images/new-user-guide-icon.png"
              alt="Step 1"
              className="w-8 h-8"
            />
            <span>
              <a
                href="https://example.com/user-guide"
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-600 font-semibold hover:underline"
              >
                User Guide
              </a>{" "}
              on how to fill the report.
            </span>
          </li>
          <li className="flex items-center space-x-3">
            <img
              src="/images/form-icon.png"
              alt="Step 2"
              className="w-8 h-8"
            />
            <span>
              List of ISM/ISMP{" "}
              <a
                href="https://security.example.com/report-incident"
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-600 font-semibold hover:underline"
              >
                ISM Organization List
              </a>
              .
            </span>
          </li>
          <li className="flex items-center space-x-3">
            <img
              src="/images/description-icon.png"
              alt="Step 3"
              className="w-8 h-8"
            />
            <span>Describe the incident in detail.</span>
          </li>
          <li className="flex items-center space-x-3">
            <img
              src="/images/attachment-icon.png"
              alt="Step 4"
              className="w-8 h-8"
            />
            <span>Attach relevant files or screenshots.</span>
          </li>
          <li className="flex items-center space-x-3">
            <img
              src="/images/new-submit-icon.png"
              alt="Step 5"
              className="w-8 h-8"
            />
            <span>
              Submit the report:{" "}
              <a
                href="https://example.com/Incident_report_EN_ver5.2.xlsx"
                target="_blank"
                className="text-purple-600 font-semibold hover:underline"
              >
                Incident_report_EN_ver5.2.xlsx
              </a>
              .
            </span>
          </li>
        </ol>

        {/* The specific icon with transparency and watermark effect */}
        <div className="absolute top-20 right-16">
          <img
            src="/images/What-to-do-icon.png"
            alt="What to do icon"
            style={{
              width: "150px", // Custom width
              height: "210px", // Custom height
              maskImage: "url('/images/What-to-do-icon.png')", // Use the same image as a mask
              WebkitMaskImage: "url('/images/What-to-do-icon.png')", // For Safari support
              maskSize: "contain", // Ensure the mask covers the entire image area
              opacity: 0.7, // Make it lighter
            }}
          />
        </div>
      </div>

      {/* Who to Contact Section */}
      <div className="bg-indigo-100 p-6 rounded-lg shadow-lg">
        <h2 className="text-xl font-semibold mb-4 text-gray-800">
          Who to Contact
        </h2>
        <p className="mb-4 text-base text-gray-700 leading-tight">
          For immediate assistance, contact your Company Division's ISMP/PIP
          representative to file an Incident Report:
        </p>
        <div className="flex flex-wrap items-center space-x-6">
          <img
            src="/images/contact-icon.png"
            alt="Contact Icon"
            className="w-16 h-16"
          />
          <div>
            <p className="text-base font-semibold">
              Email the XYZ Regional ISM team at:{" "}
              <a
                href="mailto:security@example.com"
                className="text-indigo-600 hover:underline"
              >
                security@example.com
              </a>
            </p>
            <p className="text-base font-semibold">
              Hotline: <span className="text-indigo-600">1-800-SECURE</span>
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="text-center mt-6 text-sm text-gray-500">
        <p>&copy; 2025 Security Department. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default IncidentReportingGuide;
