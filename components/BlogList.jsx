import React from 'react';
import Link from 'next/link';

const BlogList = () => {
  return (
    <div>
      <h2>Blogs</h2>
      <ul>
        <li>
          <Link href="/blogs/incident-reporting-guide" target="_blank">
            Visit Blog: Incident Reporting Guide
          </Link>
        </li>
        <li>
          <Link href="/blogs/cloudRiskassessmentProcess" target="_blank">
            Visit Blog: cloudRiskassessmentProcess
          </Link>
        </li>
        <li>
          <Link href="/blogs/ai-in-cybersecurity" target="_blank">
            Visit Blog: AI in Cybersecurity
          </Link>
        </li>
        <li>
          <Link href="/blogs/Cloud-Risk-assessment-Process" target="_blank">
            Visit Blog: Cloud-Risk-assessment-Process
          </Link>
        </li>
        <li>
          <Link href="/blogs/cloud-security-best-practices" target="_blank">
            Visit Blog: Cloud Security Best Practices
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default BlogList;
