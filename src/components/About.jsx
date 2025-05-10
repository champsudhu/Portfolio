import React, { useEffect } from "react";
import pfp from '../assets/images/pfp.jpg';

function About() {

    useEffect(() => {
        document.title = "Sudhanshu | About";
    }, []);

    return (
        <div className="scrollable-container">
            <div className="about">
                <div className="about-left">
                    <div className="about-title">
                        <h2>About</h2>
                    </div>
                    <hr className="separator" />
                    <div className="about-text">
                        <p>Hey, my name is Sudhanshu Kumar. I am a software developer and tech enthusiast with solid experience in Node.js, Express, and MongoDB, and a strong passion for AI, machine learning, and data science. Built impactful projects. Always eager to learn and grow, I bring problem-solving skills, clean code practices, and a drive to deliver scalable, intelligent solutions that add real value to your company’s tech ecosystem.</p>
                    </div>
                    <div className="resume-link">
                        <a href="/sudhanshu_kumar_resume.pdf" target="_blank"
                            rel="noreferrer">↓ Resume</a>
                    </div>
                </div>
                <div className="about-right">
                    <div className="profile-pic-wrapper">
                        <img className="profile-pic" src={pfp} alt="Portrait of Sudhanshu Kumar" />
                    </div>
                </div>
            </div>
            <div class="noise"></div>
        </div>
    )
}

export default About;