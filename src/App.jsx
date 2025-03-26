import React, { useState } from "react";
import "./App.css";
import Blog from "./components/Blog.jsx"; // Import your Blog component

function App() {
  // Local state to track whether we're showing the Blog or the main page
  const [showBlog, setShowBlog] = useState(false);

  // Handle clicking on the Blog link
  const handleBlogClick = (e) => {
    e.preventDefault(); // Prevents the default link behavior
    setShowBlog(true);
  };

  // Handle going back to the main page (optional)
  const handleHomeClick = (e) => {
    e.preventDefault();
    setShowBlog(false);
  };

  return (
    <div className="container">
      {/* Navbar */}
      <nav className="navbar">
        <ul>
          {/* "Projects" remains a normal link (or change as needed) */}
          <li>
            <a href="/projects">Projects</a>
          </li>

          {/* "Blog" link toggles the Blog component in the same page */}
          <li>
            <a href="#blog" onClick={handleBlogClick}>
              Blog
            </a>
          </li>
        </ul>
      </nav>

      {/* Conditional Rendering */}
      {showBlog ? (
        // If showBlog is true, render the Blog component
        <Blog />
      ) : (
        // Otherwise, render your main homepage content
        <div className="content">
          <h1>hello, i’m Divyansh. glad you’re here! 😊</h1>
          <p>this site is a work in progress, please don’t mind the mess.</p>
          <p>
            I’m currently a 2nd year computer science student. My interests
            include robotics, deep learning, machine learning, math, software
            engineering, and low level engineering. My goal for the next decade
            is to solve the problem of the world using my engineering and
            programming skills, while making some money for myself.
          </p>
          <p>
            Last summer, I was doing full-stack development as a freelancer. The
            summer before that, I was fine-tuning large language models.
          </p>
          <p>
            I’m currently looking for opportunities in web dev, robotics, deep
            learning, and/or software engineering for Fall 2025. Feel free to
            contact me via email (divyanshtwork@gmail.com) or any of the links
            below.
          </p>

          <h2>some relevant links:</h2>
          <ul>
            <li>
              <a href="https://twitter.com/">X (formerly Twitter)</a>
            </li>
            <li>
              <a href="https://www.linkedin.com/">LinkedIn</a>
            </li>
            <li>
              <a href="https://github.com/">GitHub</a>
            </li>
          </ul>

          <h2>things i’m doing right now:</h2>
          <ul>
            <li>
              Various coding projects on my own time, such as building a social
              media app for my college, training and fine-tuning LLM models, and
              computer science.
            </li>
            <li>Developing open-source projects.</li>
            <li>Learning skills like communication, arts, poetry and music.</li>
            <li>Reading philosophy.</li>
          </ul>

          {/* Optional button to go back to Home if you want it on the main page too */}
          {/* <button onClick={handleHomeClick} style={{ marginTop: "20px" }}>
            Go Home
          </button> */}
        </div>
      )}
    </div>
  );
}

export default App;
