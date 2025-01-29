import React from "react";
import { blogData } from "../../../data/blogsData"; // Importing the blog data

const BlogPost = ({ params }) => {
  const { slug } = params; // Extract 'slug' from the route parameters

  // Access the blog content based on the 'slug' from the imported blogData
  const blog = blogData[slug];

  if (!blog) {
    return <p>Blog not found!</p>; // If no blog matches the slug
  }

  const ContentComponent = blog.content; // This is now a valid component reference

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">{blog.title}</h1>
      <p className="text-gray-500 mb-2">
        By {blog.author} | Published on {blog.publishedDate}
      </p>
      <p className="text-lg">{blog.description}</p>
      <div className="mt-4">
        <ContentComponent /> {/* Render the dynamic client-side component */}
      </div>
    </div>
  );
};

export default BlogPost;
