import React from 'react';
import './skills.css';

import UIDesign from '../../assets/ui-design.png';
import WebDesign from '../../assets/website-design.png';
import AppDesign from '../../assets/app-design.png';

const Skills = () => {
    return (
        <section id='skills'>
            <span className="skillTitle">What I do</span>

            <span className="skillDesc">
                I am a passionate Frontend Developer & Java Full Stack Developer
                focused on building modern, responsive, and user-friendly web
                applications. I work with HTML, CSS, JavaScript, React.js, Java,
                Spring Boot, REST APIs, and databases. I enjoy creating clean
                interfaces and developing efficient full-stack applications.
            </span>

            <div className="skillBars">

                {/* Frontend Development */}
                <div className="skillBar">
                    <img
                        src={WebDesign}
                        alt="Frontend Development"
                        className="skillBarImg"
                    />

                    <div className="skillBarText">
                        <h2>Frontend Development</h2>
                        <p>
                            Developing responsive and interactive websites using
                            HTML, CSS, JavaScript, and React.js with a focus on
                            clean design and great user experience.
                        </p>
                    </div>
                </div>

                {/* Java Full Stack Development */}
                <div className="skillBar">
                    <img
                        src={AppDesign}
                        alt="Java Full Stack Development"
                        className="skillBarImg"
                    />

                    <div className="skillBarText">
                        <h2>Java Full Stack Development</h2>
                        <p>
                            Building full-stack applications using Java, Spring
                            Boot, REST APIs, databases, and modern frontend
                            technologies.
                        </p>
                    </div>
                </div>

                {/* UI/UX & Responsive Design */}
                <div className="skillBar">
                    <img
                        src={UIDesign}
                        alt="UI UX and Responsive Design"
                        className="skillBarImg"
                    />

                    <div className="skillBarText">
                        <h2>UI/UX & Responsive Design</h2>
                        <p>
                            Creating clean, attractive, and responsive interfaces
                            that provide a smooth and user-friendly experience
                            across different devices.
                        </p>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Skills;