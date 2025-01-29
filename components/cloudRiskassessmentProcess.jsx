"use client";

import {
  ClipboardList,
  FileText,
  ShieldAlert,
  MessageSquare,
  CheckCircle,
  Lock,
  CloudLightning,
  ScanSearch,
  User,
  Users,
} from "lucide-react";

const CloudRiskAssessmentGuide = () => {
  const stages = [
    {
      stage: "Request Form",
      owner: "Business Unit",
      sla: "2-7 days",
      icon: <ClipboardList className="w-16 h-16 text-purple-600" />,
    },
    {
      stage: "Vendor Questionnaire",
      owner: "Vendor",
      sla: "14-21 days",
      icon: <FileText className="w-16 h-16 text-blue-600" />,
    },
    {
      stage: "Risk Report",
      owner: "Risk Team",
      sla: "7-14 days",
      icon: <ShieldAlert className="w-16 h-16 text-red-600" />,
    },
    {
      stage: "Risk Response",
      owner: "Business Unit",
      sla: "7-21 days",
      icon: <MessageSquare className="w-16 h-16 text-green-600" />,
    },
    {
      stage: "Review",
      owner: "Cloud Committee",
      sla: "7-21 days",
      icon: <CheckCircle className="w-16 h-16 text-yellow-600" />,
    },
    {
      stage: "Closure",
      owner: "Risk Team",
      sla: "", // Remove SLA for Closure
      icon: <Lock className="w-16 h-16 text-indigo-600" />,
    },
  ];

  return (
    <div className="p-6 md:p-10 max-w-5xl mx-auto bg-gradient-to-r from-purple-100 to-indigo-200 rounded-lg shadow-2xl">
      {/* Title and Banner */}
      <div className="text-center mb-6">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-2">
          Cloud Risk Assessment Process [CRA]
        </h1>
        <p className="text-xl text-gray-700 mb-2">
          Quick guide to assess and mitigate cloud risks.
        </p>
        <CloudLightning className="w-20 h-20 mx-auto mt-6 text-blue-500" />
      </div>

      {/* Process Timeline (Horizontal) */}
      <div className="flex justify-center items-center mb-6">
        {stages.map((stage, index) => (
          <div
            key={index}
            className="flex flex-col items-center mx-4 text-center"
          >
            {stage.icon}
            <h3 className="text-lg font-semibold text-gray-800 mt-4">{stage.stage}</h3>
            <p className="text-gray-600">{stage.owner}</p>
            {stage.sla && <p className="text-sm text-gray-500 mt-1">{stage.sla}</p>} {/* Only display SLA if not empty */}
          </div>
        ))}
      </div>

      {/* Scope of CRA */}
      <div className="mb-8 bg-white p-8 rounded-2xl shadow-lg text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-3">
          Scope of CRA
        </h2>
        <div className="flex justify-center mb-2">
          <ScanSearch className="w-16 h-16 text-red-500" />
        </div>
        <p className="text-gray-700 text-lg">
          Assessing risks in cloud services for external IT environments.
        </p>
      </div>

      {/* Who Can Raise CRA */}
      <div className="mb-8 bg-white p-8 rounded-2xl shadow-lg text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-3">
          Who Can Raise CRA?
        </h2>
        <div className="flex justify-center mb-2">
          <User className="w-16 h-16 text-blue-500" />
        </div>
        <p className="text-gray-700 text-lg">
          Managers in charge of the service (CSM) can raise CRA requests.
        </p>
      </div>

      {/* How to Raise CRA (Updated to match Who to Contact box style) */}
      <div className="mb-8 bg-indigo-100 p-8 rounded-2xl shadow-lg text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-3">
          How to Raise CRA?
        </h2>
        <div className="flex justify-center mb-2">
          <Users className="w-16 h-16 text-green-500" />
        </div>
        <p className="text-gray-700 text-lg">
          Raise CRA through ServiceNow for the Business Requestor role.
        </p>
      </div>

      {/* Footer */}
      <footer className="text-center mt-16 text-sm text-gray-500">
        <p>&copy; {new Date().getFullYear()} Panasonic. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default CloudRiskAssessmentGuide;
