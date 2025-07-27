// components/BlogCard.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const BlogCard = ({ title, author, date, excerpt, id }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4">
      <h2 className="text-xl font-bold mb-2">{title}</h2>
      <p className="text-gray-600 mb-2">By {author} on {date}</p>
      <p className="text-gray-800 mb-4">{excerpt}</p>
      <Link to={`/blog/${id}`} className="text-blue-500 hover:underline">
        Read More
      </Link>
    </div>
  );
};

export default BlogCard;