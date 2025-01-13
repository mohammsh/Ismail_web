'use client';

import React, { useState } from 'react';
import { Tabs, TabsList, TabsContent, TabsTrigger } from '@/components/ui/tabs';
import ProjectCard from '@/components/ProjectCard';
import MyBlogs from '@/components/MyBlogs';

// Sample Project Data
const projectData = [
  {
    image: '/work/1.png',
    category: 'India',
    name: 'Desktop Support, Endpoint Protection, SIEM, Patch Mgmt.',
    description:
      'Implemented desktop support, endpoint protection, SIEM solutions, and patch management systems across Wipro offices in Mysore and Bangalore.',
    link: 'https://www.linkedin.com/in/ismailsharieff/',
    github: 'https://github.com/mohammsh/Ismail_web',
  },
  {
    image: '/work/2.png',
    category: 'Australia',
    name: 'Vulnerability Management Lead',
    description:
      'Led the vulnerability management team for a government energy company in Melbourne, Australia.',
    link: 'https://www.linkedin.com/in/ismailsharieff/',
    github: 'https://github.com/mohammsh/Ismail_web',
  },
  {
    image: '/work/3.png',
    category: 'Belgium',
    name: 'SIEM Management, Vulnerability Management, Forensic Investigation, CASB Management.',
    description:
      'Managed SIEM, vulnerability management, and forensic investigation projects for a telecom company in Brussels.',
    link: 'https://www.linkedin.com/in/ismailsharieff/',
    github: 'https://github.com/mohammsh/Ismail_web',
  },
  {
    image: '/work/4.png',
    category: 'Spain',
    name: 'Service Delivery Manager',
    description:
      'Managed service delivery for an airline company in Madrid, overseeing IT infrastructure and service operations.',
    link: 'https://www.linkedin.com/in/ismailsharieff/',
    github: 'https://github.com/mohammsh/Ismail_web',
  },
  {
    image: '/work/5.png',
    category: 'Canada & USA',
    name: 'CyberSecurity Program Manager',
    description:
      'Led cybersecurity programs for a high-tech environment across Toronto and New Jersey.',
    link: 'https://www.linkedin.com/in/ismailsharieff/',
    github: 'https://github.com/mohammsh/Ismail_web',
  },
];

// Remove category duplicates
const uniqueCategories = [
  'India',
  'Australia',
  'Belgium',
  'Spain',
  'Canada & USA',
];

const ProjectsAndBlogs = () => {
  const [selectedTab, setSelectedTab] = useState('India');

  // Filtered Projects based on category
  const filteredProjects = projectData.filter((project) => {
    return selectedTab === 'all projects'
      ? project
      : project.category === selectedTab;
  });

  return (
    <section className="min-h-screen pt-12">
      <div className="container mx-auto">
        <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto">
          My Projects
        </h2>
        {/* Main Tabs for Countries */}
        <Tabs defaultValue={selectedTab} className="mb-24 xl:mb-48">
          <TabsList
            className="w-full flex flex-wrap justify-center items-center gap-4 mb-12 mx-auto md:border dark:border-none"
          >
            {uniqueCategories.map((category, index) => (
              <TabsTrigger
                onClick={() => setSelectedTab(category)}
                value={category}
                key={index}
                className="capitalize px-4 py-2 border border-gray-300 rounded-md bg-white hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-700 transition"
              >
                {category}
              </TabsTrigger>
            ))}
          </TabsList>

          {/* Tab Content */}
          <div className="text-lg xl:mt-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
              {filteredProjects.map((project, index) => (
                <TabsContent key={index} value={selectedTab}>
                  <ProjectCard project={project} />
                </TabsContent>
              ))}
            </div>
          </div>
        </Tabs>
      </div>
    </section>
  );
};

export default ProjectsAndBlogs;
