import './App.css';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

function App() {
  return (
    <>
    <div className="nav-bar">


  <a href="#internships">Internships</a>
  <a href="#projects">Projects</a>
  <a href="#life">Life Outside Work</a>
</div>
    <div className="app-container">
      <div className="text-section">
        <div className="intro-box">
          <h1>Hello, I'm Wenbo Jiao <span>👋</span></h1>
          <p>
            I'm a technically versatile software engineer with a strong foundation in backend systems, cloud infrastructure, and performance optimization.
          </p>
          <p>
            I hold an M.S. in Computer Science from <span className="highlight">Northeastern University</span> (4.00 GPA) and a B.S. in Computer Science from <span className="highlight">Purdue University</span> (3.45 GPA), with broad interests spanning distributed systems, low-level performance tuning, and full-stack development when needed.
          </p>
          <p>
            During my studies, I spent four years in <span className="highlight">West Lafayette</span> — where I enjoyed Big Ten football weekends and Midwest winters — and another year in <span className="highlight">Boston</span>, exploring the tech scene and East Coast architecture.
          </p>
        </div>
        <h2 id="internships">Internships</h2>
        <div className="project-card">
  <div className="intern-header">
    <img src="/first.png" alt="ML@Purdue Logo" className="intern-logo" />
    <div>
      <h3 className="intern-company">ML@Purdue (Student Club)</h3>
      <p className="intern-role">Software Engineer Intern</p>
      <p className="intern-date">May 2023 – Aug 2023 • West Lafayette, Indiana, USA</p>
    </div>
  </div>
  <ul className="project-bullets">
    <li>Built an AI chatbot using OpenAI API and Python, reducing response time by 40% and supporting 10K+ daily queries with AWS Lambda and DynamoDB</li>
    <li>Designed RESTful APIs and automated document converters (HTML, PDF, XLSX) for S3 indexing and retrieval workflows</li>
    <li>Improved backend performance with a secure, serverless AWS setup, reducing API latency by 30%</li>
    <li>Eliminated manual workloads via end-to-end AWS automation, cutting processing time by 50%</li>
  </ul>
</div>

<div className="project-card">
  <div className="intern-header">
    <img src="/second.png" alt="UIC-Print-Rite Logo" className="intern-logo" />
    <div>
      <h3 className="intern-company">UIC-Print-Rite 3D Innovation and Development Lab</h3>
      <p className="intern-role">Software Engineer Intern</p>
      <p className="intern-date">Oct 2018 – Jun 2019 • Zhuhai, Guangdong, China</p>
    </div>
  </div>
  <ul className="project-bullets">
    <li>Optimized a distributed 3D print job scheduling system to improve task allocation and throughput efficiency</li>
    <li>Implemented real-time messaging using WebSocket event queues and Redis pub/sub to minimize system latency</li>
    <li>Deployed containerized microservices with Docker on Linux EC2 servers for scalable operations</li>
    <li>Conducted performance profiling and memory optimization for services, improving system responsiveness by 15%</li>
  </ul>
</div>


<h2 id="projects">Projects</h2>

<div className="project-card">
  <h3>AI Study Buddy</h3>
  <p>
    A full-stack AI-powered study assistant that suggests trending and personalized topics using Wikipedia and Gemini AI. Users can search, bookmark, and manage study materials — with admin tools for moderation and analytics.
  </p>
  <div className="project-links">
    <a href="https://ai-study-buddy-4.onrender.com/" target="_blank" rel="noopener noreferrer">🌐 Live Site</a>
    <a href="https://github.com/jiao2560/AI-Study-Buddy" target="_blank" rel="noopener noreferrer">📂 GitHub</a>
  </div>
  <ul className="project-bullets">
    <li>Developed homepage, search/filter UI, and animated AI bot character (React, CSS)</li>
    <li>Integrated Gemini AI & Wikipedia API in backend for quiz and trending topic generation</li>
    <li>Implemented bookmarking system and dynamic profile page with edit/view/delete actions</li>
    <li>Built admin dashboard for managing reports, users, and flagged materials</li>
  </ul>
</div>
<div className="project-card">
  <h3>Custom Linux Shell</h3>
  <p>
    A low-level command-line shell implemented in C/C++ with Lex/Yacc, designed to mimic real-world shell behavior including piping, branching, and dynamic process handling — all focused on system-level performance.
  </p>
  <div className="project-links">
    <a href="https://youtu.be/wQXiZpa7ZrM" target="_blank" rel="noopener noreferrer">🎥 Demo Video</a>
  </div>
  <ul className="project-bullets">
    <li>Built a fully functional shell with support for wildcard expansion, environment variables, and subshell logic</li>
    <li>Used Lex/Yacc to parse complex command syntax including pipelines and conditional execution</li>
    <li>Handled zombie processes and implemented safe termination for concurrent process chains</li>
    <li>Reduced process creation overhead by optimizing spawn logic for faster shell responsiveness</li>
  </ul>
</div>

<div className="project-card">
  <h3>Boilergram</h3>
  <p>
    A full-stack social platform built exclusively for Purdue students, inspired by Instagram and Reddit.
    Boilergram enables users to post updates, engage through comments and likes, and connect with verified peers — all within a secure, Purdue-authenticated environment.
  </p>
  <div className="project-links">
    <a href="https://github.com/jiao2560/Boilergram" target="_blank" rel="noopener noreferrer">📂 GitHub</a>
  </div>
  <ul className="project-bullets">
    <li>Built full-stack social platform with secure Purdue-only account verification (JWT, Bcrypt)</li>
    <li>Implemented photo/text post creation, likes, and threaded comments with MongoDB schema design</li>
    <li>Developed responsive UI using React and Tailwind, including search and explore pages</li>
    <li>Deployed to Render and connected with MongoDB Atlas for production-ready scalability</li>
  </ul>
</div>

<div className="project-card">
  <h3>The World (Doctor Lucky)</h3>
  <p>
    A Java-based grid-world game inspired by Doctor Lucky, implemented with an MVC-aligned architecture. Features include real-time map visualization, character movement, item interaction, and combat mechanics — all built from a structured world specification.
  </p>
  <div className="project-links">
    <a href="https://github.com/jiao2560/Milestone-1---The-World" target="_blank" rel="noopener noreferrer">📂 GitHub</a>
  </div>
  <ul className="project-bullets">
    <li>Designed flexible, testable model to load world config from structured .txt files (spaces, items, NPCs)</li>
    <li>Implemented LookAround, PickUp, and Attack features mapped to keyboard shortcuts (L, P, A)</li>
    <li>Created graphical world view using <code>BufferedImage</code> and rendered interactive mansion maps</li>
    <li>Enabled custom and default world support with upload functionality and player turn logic</li>
    <li>Packaged and documented a runnable JAR executable for gameplay demonstrations and grading</li>
  </ul>
</div>
<div className="travel-section" id="life">
  <div className="life-intro">
    <h2>Life Outside Work</h2>
    <p>
      Beyond coding, I’ve spent time exploring the U.S. during my five years studying abroad — from the Midwest to the West Coast.
      Traveling helped me recharge and broaden my view of culture, people, and life in America.
    </p>
  </div>

<div className="city-row">
  <div className="city-labels">
    <h3>Chicago</h3>
    <h3>Indianapolis</h3>
  </div>
  <div className="travel-gallery">
    <img src="/1.jpg" alt="Chicago 1" />
    <img src="/2.jpg" alt="Chicago 2" />
    <img src="/8.jpg" alt="Chicago 3" />
    <img src="/3.jpg" alt="Indianapolis" />
  </div>
</div>

<div className="city-row">
  <div className="city-labels">
    <h3>Atlanta</h3>
    <h3>San Diego</h3>
  </div>
  <div className="travel-gallery">
    <img src="/4.jpg" alt="Atlanta 1" />
    <img src="/5.jpg" alt="Atlanta 2" />
    <img src="/6.jpg" alt="Atlanta 3" />
    <img src="/7.jpg" alt="San Diego" />
  </div>
</div>


</div>


      </div>

      <div className="image-section">
        <img src="/me.jpg" alt="Wenbo Jiao" className="profile-pic" />

        <div className="icon-links">
          <a href="https://www.linkedin.com/in/wenbo-j-b12982296/" target="_blank" rel="noopener noreferrer" title="LinkedIn">
            <FaLinkedin />
          </a>
          <a href="https://github.com/jiao2560" target="_blank" rel="noopener noreferrer" title="GitHub">
            <FaGithub />
          </a>
          <a href="mailto:wbj0706@gmail.com" title="Email">
            <FaEnvelope />
          </a>
        </div>
      </div>
    </div>
    </> );
}

export default App;
