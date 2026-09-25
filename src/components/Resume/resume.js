import React from 'react';
import './resume.css';

function Resume() {
    return (
        <section className="resume" id="resume">
            <div className="resume-container">
                <h2>My Resume</h2>
                <p>
                    Download my resume to know more about my education, skills,
                    projects and experience.
                </p>
                <div className="resume-actions">
                    <a
                        href="/resume.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="resume-btn"
                    >
                        <span aria-hidden="true">📄</span> View Resume
                    </a>
                    <a
                        href="/resume.pdf"
                        download
                        className="resume-btn download-btn"
                    >
                        <span aria-hidden="true">⬇</span> Download Resume
                    </a>
                </div>
            </div>
        </section>
    );
}

export default Resume;
