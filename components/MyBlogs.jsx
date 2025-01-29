"use client"; // Enables React hooks

import React, { useState } from "react";

const blogData = [
  {
    title: "How to Implement Cybersecurity in Your Organization",
    description: "A detailed guide on implementing cybersecurity best practices.",
    slug: "cybersecurity-guide", // Local dynamic route slug
    category: "Cybersecurity",
    author: "John Doe",
    approved: true,
    publishedDate: "2025-01-01",
  },
  {
    title: "The Future of AI in Cybersecurity",
    description: "Exploring the intersection of AI and cybersecurity.",
    slug: "ai-in-cybersecurity", // Local dynamic route slug
    category: "AI",
    author: "Jane Smith",
    approved: true,
    publishedDate: "2025-01-02",
  },
  {
    title: "Cloud Security: Best Practices for 2025",
    description: "An overview of the top strategies for securing cloud environments.",
    slug: "cloud-security-best-practices", // Local dynamic route slug
    category: "Cloud",
    author: "Alice Johnson",
    approved: false,
    publishedDate: "2025-01-03",
  },
  {
    title: "Incident Reporting Guide",
    description: "Learn how to report security incidents effectively.",
    slug: "incident-reporting-guide",
    link: "/blogs/incident-reporting-guide",
    category: "Security",
    author: "Security Team",
    approved: true,
    publishedDate: "2025-01-20",
  },
  {
    title: "Cloud Risk assessment Process",
    description: "Risk Managemnt process.",
    slug: "cloudRiskassessmentProcess",
    link: "/blogs/cloudRiskassessmentProcess",
    category: "Security",
    author: "Security Team",
    approved: true,
    publishedDate: "2025-01-20",
  },
];

const ITEMS_PER_PAGE = 2;

const MyBlogs = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState("");

  const categories = Array.from(new Set(blogData.map((blog) => blog.category)));

  const filteredBlogs = blogData.filter(
    (blog) =>
      (selectedCategory ? blog.category === selectedCategory : true) &&
      (blog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        blog.description.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  const paginatedBlogs = filteredBlogs.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const totalPages = Math.ceil(filteredBlogs.length / ITEMS_PER_PAGE);

  return (
    <div className="p-6 flex">
      {/* Sidebar with Categories */}
      <div className="w-1/4 p-4 border-r">
        <h3 className="font-bold mb-4">Categories</h3>
        <ul>
          <li
            onClick={() => setSelectedCategory("")}
            className={`cursor-pointer mb-2 ${
              !selectedCategory ? "text-blue-600 font-semibold" : ""
            }`}
          >
            All Blogs
          </li>
          {categories.map((category, index) => (
            <li
              key={index}
              onClick={() => setSelectedCategory(category)}
              className={`cursor-pointer mb-2 ${
                selectedCategory === category ? "text-blue-600 font-semibold" : ""
              }`}
            >
              {category}
            </li>
          ))}
        </ul>
      </div>

      {/* Main Content */}
      <div className="w-3/4 p-6">
        <h2 className="text-center text-3xl font-bold mb-8">Blogs</h2>

        {/* Search Bar */}
        <div className="mb-4">
          <input
            type="text"
            placeholder="Search blogs..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full p-3 border rounded-md"
          />
        </div>

        {/* Blog Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {paginatedBlogs.map((blog, index) => (
            <div key={index} className="p-4 border rounded-md">
              <h3 className="font-semibold text-xl">{blog.title}</h3>
              <p className="text-gray-600">{blog.category}</p>
              <p>{blog.description}</p>
              <div className="text-sm text-gray-500 mt-2">
                <p>Author: {blog.author}</p>
                <p>Status: {blog.approved ? "Approved" : "Pending"}</p>
                <p>Published: {blog.publishedDate}</p>
              </div>
              <a
                href={`/blogs/${blog.slug}`} // Dynamic local route
                target="_blank" // Opens in a new tab
                rel="noopener noreferrer"
                className="text-blue-600 block mt-2"
              >
                Visit Blog
              </a>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center mt-6">
          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className="px-4 py-2 border rounded-md mx-1 disabled:opacity-50"
          >
            Previous
          </button>
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i}
              onClick={() => setCurrentPage(i + 1)}
              className={`px-4 py-2 border rounded-md mx-1 ${
                currentPage === i + 1 ? "bg-blue-500 text-white" : ""
              }`}
            >
              {i + 1}
            </button>
          ))}
          <button
            onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
            disabled={currentPage === totalPages}
            className="px-4 py-2 border rounded-md mx-1 disabled:opacity-50"
          >
            Next
          </button>
        </div>

        {/* Subscribe Link */}
        <div className="text-center mt-8">
          <p className="text-lg">Subscribe for email alerts:</p>
          <a href="/subscribe" className="text-blue-600 underline">
            Click here to subscribe
          </a>
        </div>
      </div>
    </div>
  );
};

export default MyBlogs;
