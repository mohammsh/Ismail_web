// components/MyBlogs.jsx
import React from 'react';

const blogData = [
  {
    title: 'How to Implement Cybersecurity in Your Organization',
    description: 'A detailed guide on implementing cybersecurity best practices.',
    link: 'https://myblog.com/cybersecurity-guide',
  },
  {
    title: 'The Future of AI in Cybersecurity',
    description: 'Exploring the intersection of AI and cybersecurity.',
    link: 'https://myblog.com/ai-in-cybersecurity',
  },
  // Add more blogs here...
];

const MyBlogs = () => {
  return (
    <div>
      <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto">
        My Blogs
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {blogData.map((blog, index) => (
          <div key={index} className="p-4 border rounded-md">
            <h3 className="font-semibold text-xl">{blog.title}</h3>
            <p>{blog.description}</p>
            <a
              href={blog.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600"
            >
              Read More
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyBlogs;
