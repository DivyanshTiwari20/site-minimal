import React from 'react';

function BlogDetail({ post, onClose }) {
  return (
    <div className="blog-detail-container">
      <button onClick={onClose}>Back to Blog List</button>
      <h1>{post.title}</h1>
      <div className="post-meta">
        <span>{post.date}</span>
        <span>{post.author}</span>
      </div>
      <div className="post-content">
        {post.content}
      </div>
    </div>
  );
}

export default BlogDetail;