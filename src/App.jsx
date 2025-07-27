import { useState } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar"; // Ensure this path is correct
import CreateBlog from "./pages/creatblog"; // Ensure this path is correct
import Home from "./pages/home"; // Ensure this path is correct
import BlogDetails from "./pages/blogdetails"; // Ensure this path is correct
import EditBlog from "./pages/editblog"; // Ensure this path is correct

function App() {
  const [posts, setPosts] = useState([]);

  const addPost = (newPost) => {
    setPosts([...posts, newPost]);
  };

  const updatePost = (index, updatedPost) => {
    setPosts((prevPosts) => {
      const newPosts = [...prevPosts];
      newPosts[index] = updatedPost;
      return newPosts;
    });
  };

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home posts={posts} />} />
        <Route path="/create" element={<CreateBlog addPost={addPost} />} />
        <Route path="/blog/:id" element={<BlogDetails posts={posts} />} />
        <Route path="/edit/:id" element={<EditBlog posts={posts} updatePost={updatePost} />} />
      </Routes>
    </>
  );
}

export default App;