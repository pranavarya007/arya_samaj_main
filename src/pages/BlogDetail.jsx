// src/pages/BlogDetail.js
import React from "react";
import { useEffect } from 'react';
import { useParams } from "react-router-dom";
import { blogs } from "../data/blogs";
//import 'blogDetails.css'


const BlogDetail = () => {

    
  const { id } = useParams();
  const blog = blogs.find((b) => b.id === parseInt(id));

  if (!blog) {
    return <div>Blog not found</div>;
  }

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [blog]);

  return (
    <div className="blog-post-container">
        <div className="max-w-3xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-coral-red mb-10 mt-28">{blog.title}</h1>
        <img className="w-350 h-350 object-cover rounded-lg mb-6" src={blog.image} alt={blog.title} />
        <div className="text-gray-700 leading-relaxed px-10" dangerouslySetInnerHTML={{ __html: blog.content }}></div>
        </div>
    </div>
    
  );
};

export default BlogDetail;
