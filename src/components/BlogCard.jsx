// src/components/BlogCard.js
import React from "react";
import { Link } from "react-router-dom";

const BlogCard = ({ blog }) => {
  return (
    <div className="bg-white rounded-lg shadow-2xl overflow-hidden transition-transform transform hover:scale-105">
      <img className="w-250 h-250 object-cover" src={blog.image} alt={blog.title} />
      <div className="p-6">
        <h2 className="text-2xl font-bold text-coral-red mb-2">{blog.title}</h2>
        <p className="text-gray-700">{blog.excerpt}</p>
        <Link to={`/blog/${blog.id}`} className="text-coral-red font-semibold mt-4 inline-block">
          Read More
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;
