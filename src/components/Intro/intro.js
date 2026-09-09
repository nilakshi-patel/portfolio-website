import React from 'react';
import './intro.css';
import bg from '../../assets/image.png';
import btnImg from '../../assets/hireme.png';
import { Link } from 'react-scroll';

const Intro = () => {
    return (
        <section id="intro">
            <div className="introContent">

                <span className="hello">Hello, I'm</span>

                <h1 className="introText">
                    <span className="introName">Nilakshi Patel</span>
                </h1>

                <h2 className="introRole">
                    Frontend Developer <span>&</span> Java Full Stack Developer
                </h2>

                <p className="introPara">
                    I build modern, responsive, and user-friendly web applications
                    with a strong focus on clean design and efficient development.
                    <br />
                    Passionate about turning ideas into scalable and engaging digital experiences.
                </p>

                <Link to="contact" smooth={true} duration={500}>
                    <button className="btn">
                        <img src={btnImg} alt="Hire Me" className="btnImg" />
                        Hire Me
                    </button>
                </Link>

            </div>

            <img src={bg} alt="Nilakshi Patel" className="bg" />
        </section>
    );
};

export default Intro;
