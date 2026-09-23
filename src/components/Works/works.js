import React from 'react';
import './works.css';

const Works = () => {
    return (
        <section id='works'>
            <h2 className="worksTitle">My Portfolio</h2>
            <span className="worksDesc">I take pride in writing clean, efficient, and maintainable code while paying close attention to detail. As a Frontend Developer & Java Full Stack Developer, I enjoy creating responsive user interfaces and developing reliable full-stack applications using modern technologies. I am passionate about turning ideas into meaningful digital solutions and continuously improving my skills to build applications that deliver real value.</span>

           {/* Skills */}
            <h2 className="skillsTitle">My Skills</h2>

            <div className="skillsContainer">

                {/* Frontend */}
                <div className="skillCategory">
                    <h3>Frontend Development</h3>

                    <div className="skillList">
                        <span>HTML5</span>
                        <span>CSS3</span>
                        <span>JavaScript</span>
                        <span>React.js</span>
                    </div>
                </div>

                {/* Backend */}
                <div className="skillCategory">
                    <h3>Backend Development</h3>

                    <div className="skillList">
                        <span>Java</span>
                        <span>Spring Boot</span>
                        <span>REST API</span>
                    </div>
                </div>

                {/* Database */}
                <div className="skillCategory">
                    <h3>Database</h3>

                    <div className="skillList">
                        <span>SQL</span>
                        <span>MySQL</span>
                    </div>
                </div>

                {/* Tools & Design */}
                <div className="skillCategory">
                    <h3>Tools</h3>

                    <div className="skillList">
                        <span>Git</span>
                        <span>GitHub</span>
                    </div>
                </div>

            </div>


        </section>
    );
};

export default Works;