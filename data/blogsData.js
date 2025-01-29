import dynamic from "next/dynamic";

// Dynamically import components to ensure they are client-side
const IncidentReportingGuide = dynamic(() => import("../components/IncidentReportingGuide"), { ssr: false });
const cloudRiskassessmentProcess = dynamic(() => import("../components/cloudRiskassessmentProcess"), { ssr: false });

export const blogData = {
  "cybersecurity-guide": {
    title: "How to Implement Cybersecurity in Your Organization",
    description: "A detailed guide on implementing cybersecurity best practices.",
    author: "John Doe",
    publishedDate: "2025-01-01",
    content: "This is the full blog content for cybersecurity guide.",
  },
  "ai-in-cybersecurity": {
    title: "The Future of AI in Cybersecurity",
    description: "Exploring the intersection of AI and cybersecurity.",
    author: "Jane Smith",
    publishedDate: "2025-01-02",
    content: "This is the full blog content for AI in cybersecurity.",
  },
  "cloud-security-best-practices": {
    title: "Cloud Security: Best Practices for 2025",
    description: "An overview of the top strategies for securing cloud environments.",
    author: "Alice Johnson",
    publishedDate: "2025-01-03",
    content: "This is the full blog content for cloud security best practices.",
  },
  "incident-reporting-guide": {
    title: "Incident Reporting Guide",
    description: "Learn how to report security incidents effectively.",
    author: "Security Team",
    publishedDate: "2025-01-10",
    content: IncidentReportingGuide, // Reference the dynamic import directly
  },
  "cloudRiskassessmentProcess": {
    title: "Cloud Risk Assessment Process",
    description: "Risk Assessment process",
    author: "Security Team",
    publishedDate: "2025-01-10",
    content: cloudRiskassessmentProcess, // Reference the dynamic import directly
  },
};
