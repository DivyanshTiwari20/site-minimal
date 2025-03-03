import "./App.css";

function App() {
  return (
    <div className="container">
      <div className="content">
        <h1>hello, i’m Divyansh. glad you’re here! 😊</h1>
        <p className="note">this site is a work in progress, please don’t mind the mess.</p>

        <section className="bio">
          <p>
            I’m currently a 2nd year computer science student. My interests include robotics, deep learning, machine learning, math, and software engineering, and low level engineering. <strong>My goal for the next decade is to solve the problem of the world using my engineering and programming skills.</strong> While making some money for myself.
          </p>
          <p>
            Last summer, I was doing full-stack development as an freelancer. The summer before that, I was fine-tuning large language models.
          </p>
          <p>
            I’m currently looking for opportunities in web dev, robotics, deep learning, and/or software engineering for Fall 2025. Feel free to contact me via email <strong>(divyanshtwork@gmail.com)</strong> or any of the links below.
          </p>
        </section>

        <section className="links">
          <h2>some relevant links:</h2>
          <ul>
            <li><a href="https://x.com/divyansh_ai" target="_blank" rel="noopener noreferrer">X (formerly Twitter)</a></li>
            <li><a href="https://www.linkedin.com/in/divyansh-tiwari-47b2082aa/" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
            <li><a href="http://github.com/divyanshTiwari20/" target="_blank" rel="noopener noreferrer">GitHub</a></li>
            {/* <li><a href="/resume.pdf" target="_blank" rel="noopener noreferrer">Resume</a></li> */}
          </ul>
        </section>

        <section className="projects">
          <h2>things i’m doing right now:</h2>
          <ul>
            <li>Various coding projects on my own time, such as building an social media app for my college, training and fine-tuning LLM models, and computer science.</li>
            <li>Developing open-source projects.</li>
            {/* <li>Doing research in real2sim pipelines for evaluating robotics policies.</li> */}
            <li>Learning skills like communication, arts, poetry and music.</li>
            <li>Reading philosophy.</li>
          </ul>
        </section>
      </div>
    </div>
  );
}

export default App;