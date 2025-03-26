import React, { useState } from 'react';
import { blogPosts } from '../data/blogPosts';
import BlogDetail from './BlogDetail';
import "./Blog.css"

function Blog() {
  const [posts] = useState(blogPosts);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedPost, setSelectedPost] = useState(null);
  const [viewedPosts, setViewedPosts] = useState([]);

  // Filter posts based on selected category (if any)
  const filteredPosts = selectedCategory
    ? posts.filter((post) => post.category === selectedCategory)
    : posts;

  const handlePostClick = (post) => {
    // Mark the post as viewed
    if (!viewedPosts.includes(post.id)) {
      setViewedPosts([...viewedPosts, post.id]);
    }
    setSelectedPost(post);
  };

  const handleCloseDetail = () => {
    setSelectedPost(null);
  };

  return (
    <div className="container blog-page">
      <div className="blog-header">
        <a href="/" className="home-link">
          <h1>Kartikay Bhardwaj</h1>
        </a>
        <div className="category-filters">
          <button onClick={() => setSelectedCategory('personal')}>
            Personal Blog
          </button>
          <button onClick={() => setSelectedCategory('edu')}>
            edu
          </button>
          <button onClick={() => setSelectedCategory(null)}>
            All Posts
          </button>
        </div>
      </div>
      {selectedPost ? (
        <BlogDetail post={selectedPost} onClose={handleCloseDetail} />
      ) : (
        <div className="blog-list">
          {filteredPosts.map((post) => (
            <div
              key={post.id}
              className={`blog-post ${viewedPosts.includes(post.id) ? 'viewed' : ''}`}
              onClick={() => handlePostClick(post)}
            >
              <span className="post-date">{post.date}</span>
              <span className="post-title">{post.title}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Blog;
