// pages/Home.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import BlogCard from '../components/blogcard'; // Ensure this is the correct path

const Home = ({ posts }) => {
  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Blog Posts</h1>
      <Link to="/create" className="bg-blue-500 text-white p-2 rounded mb-4 inline-block">
        Create New Blog
      </Link>
      <div className="grid grid-cols-1 gap-4">
        {posts.length > 0 ? (
          posts.map((post, index) => (
            <BlogCard
              key={index}
              title={post.title}
              author={post.author}
              date={new Date().toLocaleDateString()} // Placeholder for the date
              excerpt={post.description}
              // Pass the post ID for routing
              id={index} // You can replace this with a unique ID if available
            />
          ))
        ) : (
          <p>No posts available.</p>
        )}
      </div>
    </div>
  );
};

export default Home;