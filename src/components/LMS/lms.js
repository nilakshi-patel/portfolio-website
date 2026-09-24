import React from "react";
import "./lms.css";

function LMS() {
  return (
    <section className="lms-section" id="lms">
      <h2>Learning Management System</h2>

      <div className="lms-card">
        <div className="lms-content">
          <span className="project-label">Featured Project</span>

          <h3>LearnHub - Learning Management System</h3>

          <p>
            A modern Learning Management System designed to provide students
            with an easy platform to explore courses, access learning
            materials, and track their learning progress.
          </p>

          <div className="lms-features">
            <div>Student Dashboard</div>
            <div>Course Management</div>
            <div>Learning Materials</div>
            <div>Progress Tracking</div>
          </div>

          <div className="lms-tech">
            <span>React.js</span>
            <span>JavaScript</span>
            <span>HTML5</span>
            <span>CSS3</span>
            <span>MySQL</span>
          </div>

          <div className="lms-buttons">
            <a href="https://github.com/nilakshi-patel/learning-management-system"
             target="_blank"
              rel="noreferrer">
              GitHub
            </a>
            <a href="https://your-live-demo-link.com"
             target="_blank"
              rel="noreferrer">
              Live Demo
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LMS;
