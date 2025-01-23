"use client";
import { useState } from 'react';

const BlogEditor = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [content, setContent] = useState('');
  const [attachments, setAttachments] = useState([]);

  const handleFileUpload = (event) => {
    const files = Array.from(event.target.files);
    const uploadedFiles = files.map((file) => ({
      name: file.name,
      url: URL.createObjectURL(file), // For local preview
    }));
    setAttachments((prev) => [...prev, ...uploadedFiles]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newBlog = {
      title,
      author,
      content,
      attachments,
      slug: title.toLowerCase().replace(/ /g, '-'), // Generate slug from title
      publishedDate: new Date().toISOString().split('T')[0],
    };

    // Save the blog data to a local API or storage
    await fetch('/api/blogs', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newBlog),
    });

    alert('Blog created successfully!');
    setTitle('');
    setAuthor('');
    setContent('');
    setAttachments([]);
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Create a New Blog</h1>
      <form onSubmit={handleSubmit} className="max-w-2xl mx-auto">
        <div className="mb-4">
          <label className="block font-semibold mb-1">Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full p-3 border rounded-md"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block font-semibold mb-1">Author</label>
          <input
            type="text"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            className="w-full p-3 border rounded-md"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block font-semibold mb-1">Content</label>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="w-full p-3 border rounded-md"
            rows="6"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block font-semibold mb-1">Attachments</label>
          <input
            type="file"
            multiple
            onChange={handleFileUpload}
            className="w-full"
          />
          <ul className="list-disc pl-6 mt-2">
            {attachments.map((file, index) => (
              <li key={index}>{file.name}</li>
            ))}
          </ul>
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-md"
        >
          Publish Blog
        </button>
      </form>
    </div>
  );
};

export default BlogEditor;
