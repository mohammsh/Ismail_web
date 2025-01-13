// app/projects/ProjectsAndBlogs.jsx
'use client';

import React, { useState } from 'react';
import { Tabs, TabsList, TabsContent, TabsTrigger } from '@/components/ui/tabs';
import ProjectCard from '@/components/ProjectCard';

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
    category: 'Canada&USA',
    name: 'CyberSecurity Program Manager',
    description:
      'Led cybersecurity programs for a high-tech environment across Toronto and New Jersey.',
    link: 'https://www.linkedin.com/in/ismailsharieff/',
    github: 'https://github.com/mohammsh/Ismail_web',
  },
];

// Unique categories (exclude "All Projects")
const uniqueCategories = [...new Set(projectData.map((item) => item.category))];

const ProjectsAndBlogs = () => {
  const [selectedCategory, setSelectedCategory] = useState(uniqueCategories[0]);

  const filteredProjects = projectData.filter(
    (project) => project.category === selectedCategory
  );

  return (
    <section className="min-h-screen pt-12">
      <div className="container mx-auto">
        <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto">
          My Projects
        </h2>
        <Tabs defaultValue={selectedCategory} className="mb-24 xl:mb-48">
          <TabsList className="w-full grid h-full md:grid-cols-4 lg:max-w-[640px] mb-12 mx-auto md:border dark:border-none">
            {uniqueCategories.map((category, index) => (
              <TabsTrigger
                onClick={() => setSelectedCategory(category)}
                value={category}
                key={index}
                className="capitalize w-[162px] md:w-auto"
              >
                {category}
              </TabsTrigger>
            ))}
          </TabsList>

          <div className="text-lg xl:mt-8 grid grid-cols-1 lg:grid-cols-3 gap-4">
            {filteredProjects.map((project, index) => (
              <TabsContent value={selectedCategory} key={index}>
                <ProjectCard project={project} />
              </TabsContent>
            ))}
          </div>
        </Tabs>
      </div>
    </section>
  );
};

export default ProjectsAndBlogs;
