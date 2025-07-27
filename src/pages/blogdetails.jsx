import React from 'react';
import { useParams, Link } from 'react-router-dom';

const BlogDetails = ({ posts }) => {
  const { id } = useParams();
  const postIndex = parseInt(id, 10);
  const post = posts[postIndex];

  if (!post) {
    return <h2>Post not found!</h2>;
  }

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-3xl font-bold">{post.title}</h1>
      <p className="text-gray-600 mb-2">By {post.author} on {post.date}</p>
      {post.editedAt && (
        <p className="text-gray-500 mb-2">Edited on {post.editedAt}</p>
      )}
      <p className="text-gray-800 mb-4">{post.description}</p>
      <p className="mb-4">{post.content}</p>
      <div className="flex space-x-4">
        <Link to={`/edit/${postIndex}`} className="bg-blue-500 text-white p-2 rounded">
          Edit
        </Link>
        <button className="bg-yellow-500 text-white p-2 rounded">
          Bookmark
        </button>
        <Link to="/" className="bg-gray-500 text-white p-2 rounded">
          Back
        </Link>
      </div>
    </div>
  );
};

export default BlogDetails;