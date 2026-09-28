import './contact.css';
import instagramIcon from '../../assets/instagram.png';
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';

const Contact = () => {
    const form = useRef();
    const [status, setStatus] = useState('');

    const sendEmail = (e) => {
        e.preventDefault();
        setStatus('Sending...');

        emailjs.sendForm(
            process.env.REACT_APP_EMAILJS_SERVICE_ID,
            process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
            form.current,
            process.env.REACT_APP_EMAILJS_PUBLIC_KEY
        )
            .then((result) => {
                console.log(result.text);
                e.target.reset();
                setStatus('Email sent successfully.');
            }, (error) => {
                console.error('EmailJS error:', error.text || error);
                setStatus(`Could not send email: ${error.text || 'Please try again.'}`);
            });
    };
    
    return (
        <div id='contactPage'>
            <div id="contact">
                <h1 className="contactPageTitle">Contact Me</h1>
                <span className="contactDesc">Please fill out the form below to discuss any work opportunities.</span>
                <form className="contactForm" ref={form} onSubmit={sendEmail}>
                    <input type="text" className="name" placeholder='Your name' name='Your_namee' />
                    <input type="text" className="email" placeholder='Your Email' name='from_email' />
                    <textarea name="message" placeholder='Your Message' rows={5} className='msg' ></textarea>
                    <button type="submit" value="Send" className='submitBtn'>Submit</button>
                    {status && <p role="status">{status}</p>}
                    <div className="links">
                        <a
                            href="https://www.instagram.com/nilakshi1817/"
                            target="_blank"
                            rel="noreferrer"
                            aria-label="Instagram profile"
                        >
                            <img src={instagramIcon} alt="Instagram" className="link" />
                        </a>
                        <a
                            href="https://github.com/nilakshi-patel"
                            target="_blank"
                            rel="noreferrer"
                            aria-label="GitHub profile"
                            className="socialLink"
                        >
                            <FaGithub className="socialIcon githubIcon" aria-hidden="true" />
                        </a>
                        <a
                            href="https://linkedin.com/in/nilakshi-patel-798367364"
                            target="_blank"
                            rel="noreferrer"
                            aria-label="LinkedIn profile"
                            className="socialLink"
                        >
                            <FaLinkedinIn className="socialIcon linkedinIcon" aria-hidden="true" />
                        </a>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Contact;