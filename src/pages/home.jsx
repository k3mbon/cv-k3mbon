import React from 'react';
import './Home.css'; // Import the CSS file
import Bantenku from '../assets/BantenKu.png'
import DllApp from '../assets/DllApp.png'
import FCP from '../assets/fcp.png'
import SmansaBanjarangkan from '../assets/sman1banjarangkan.png'
import dp from '../assets/Potokuh.png'

const Home = () => {

  const workHighlights = [
    {
      imgSrc: Bantenku,
      title: "BantenKu App | Fullstack Dev"
    },
    {
      imgSrc: DllApp,
      title: "DLL App | Fullstack Dev"
    },
    {
      imgSrc: FCP,
      title: "FCP | Cinematic Video, Fullstack Dev"
    },
    {
      imgSrc: SmansaBanjarangkan,
      title: "SMAN 1 Banjarangkan | Backend Dev"
    }
  ];


  return (
    <div className="home-container">
      <div className="card-container">
        {/* Div 1 - Profile and Education */}
        <div className="card-section">
          {/* Card 1 - Profile */}
          <div className="card profile-card">
            <div className="profile-row">
              {/* Circle Image */}
              <div className="circle-image">
                {/* Replace with actual image */}
                 <img src={dp} alt="profile" />
              </div>
              {/* Name and Job Title */}
              <div className="profile-text">
                <h2 className="profile-name">Angelus Fermi</h2>
                <p className="profile-job">Teacher, 3D Artist, Full Stack Developer</p>
              </div>
            </div>
            {/* Short Introduction */}
            <div className="introduction">
              <p>
                A proactive experienced Physics teacher who is used to teaching electrical, civil,
                industrial engineering, and applied physics concepts at Santosa Intercultural School.
                Highly organized, seeking to build a career in a physics teacher role, which will
                require utilizing social communication skills, a great sense of curiosity, and strong people skills.
              </p>
            </div>
          </div>

          {/* Card 2 - Education */}
          <div className="card education-card">
            <h3 className="education-title">Education</h3>
            <div className="education-entry">
              <div className="education-year">2021</div>
              <div className="education-details">
                <div className="education-university">Widya Mandala Catholic University</div>
                <div className="education-degree">Bachelor of Education in Physics</div>
              </div>
            </div>
            {/* You can add more education entries in a similar format */}
          </div>
        </div>


        {/* Div 2 - Experience */}
        <div className="card-section">
          {/* Card 3 - Experience */}
          <div className="card experience-card">
            <h3 className="experience-title">Experience</h3>
            {/* Job History Entry */}
            <div className="job-history-entry">
              <div className="job-year-card">Present</div> 
              <div className="job-details">
                <div className="job-place">Community Learning Bali</div>
                <div className="job-position">Science & Digital Literacy Teacher, Full Stack Developer</div>
                <ul className="job-description">
                  <li>Primary Science Teacher</li>
                  <li>Lower Secondary Level Digital Literacy</li>
                  <li>Developing Teacher-Parent Platform for School Activity, Agenda and Report Card</li>
                </ul>
              </div>
            </div>

            <div className="job-history-entry">
              <div className="job-year">Jan 2023 - 2024</div>
              <div className="job-details">
                <div className="job-place">Santosa Intercultural School</div>
                <div className="job-position">Upper Checkpoint, IGCSE, AS & A Level Physics Teacher, Visual Graphic Teacher</div>
                <ul className="job-description">
                  <li>Developed interactive lessons for high school students</li>
                  <li>Led science clubs and after-school programs</li>
                  <li>Collaborated with staff for curriculum development</li>
                </ul>
              </div>
            </div>

            <div className="job-history-entry">
              <div className="job-year">February 2023 - July 2023</div>
              <div className="job-details">
                <div className="job-place">HiBengsart Media</div>
                <div className="job-position">Freelance 3D Artist & App Developer</div>
                <ul className="job-description">
                  <li>Creating Cinematic Video For Fun And Challenging Physics Competition by Widya Mandala Catholic University Physics Department</li>
                  <li>Creating Exam & Self Learning Apps for Digital Language Laboratory of Widya Mandala Catholic University English Department</li>
                </ul>
              </div>
            </div>

            <div className="job-history-entry">
              <div className="job-year">July 2021 - February 2023</div>
              <div className="job-details">
                <div className="job-place">Merlion School (Now Singapore Intercultural School)</div>
                <div className="job-position">Electrical & Mechanical Engineering Teacher</div>
                <ul className="job-description">
                  <li>Robotics & 3D Modelling Curriculum Designer</li>
                  <li>Robotic Coach</li>
                  <li>3D Architecture & Environment Designer Coach</li>
                </ul>
              </div>
            </div>

            <div className="job-history-entry">
              <div className="job-year">January 2020</div>
              <div className="job-details">
                <div className="job-place">HiBengsart Media</div>
                <div className="job-position">Freelance App, Fullstack Developer</div>
                <ul className="job-description">
                  <li>Creating CG Concept for Prithvimata Album Cover</li>
                  <li>Creating Virtual Stage & Environment for SMP Penabur Cimahi</li>
                  <li>Creating Interior Design Render for Merlion's Music Studio & Makerspace Room</li>
                  <li>Creating-Selling-Collecting NFT</li>
                </ul>
              </div>
            </div>

            <div className="job-history-entry">
              <div className="job-year">August 2018</div>
              <div className="job-details">
                <div className="job-place">Physics Department Widya Mandala Surabaya</div>
                <div className="job-position">Freelance App, Fullstack Developer</div>
                <ul className="job-description">
                  <li>Creating Video Profile for Widya Mandala Physics Department</li>
                  <li>Creating Promotional Video for Teacher Professional Education Department</li>
                  <li>Creating Promotional Poster for Faculty</li>
                  <li>Teaching Assistant For Basic Computing</li>
                </ul>
              </div>
            </div>

            {/* You can add more job history entries in a similar format */}
          </div>
        </div>

        {/* Div 3 - Contact */}
        <div className="card-section">
          {/* Card 4 - Contact */}
          <div className="card contact-card">
            <h3 className="contact-title">Contact</h3>
            <ul className="contact-list">
              <li>
                <i className="social-icon"></i> {/* Replace with actual icon */}
                <a href="mailto:your.email@example.com" className="contact-link">Email</a>
                <span className="arrow"> ➔</span>
              </li>
              <li>
                <i className="social-icon"></i> {/* Replace with actual icon */}
                <a href="https://www.linkedin.com/in/yourprofile" className="contact-link">LinkedIn</a>
                <span className="arrow"> ➔</span>
              </li>
              <li>
                <i className="social-icon"></i> {/* Replace with actual icon */}
                <a href="https://twitter.com/yourprofile" className="contact-link">Instagram</a>
                <span className="arrow"> ➔</span>
              </li>
              <li>
                <i className="social-icon"></i> {/* Replace with actual icon */}
                <a href="https://twitter.com/yourprofile" className="contact-link">Behance</a>
                <span className="arrow"> ➔</span>
              </li>
              {/* Add more contacts as needed */}
            </ul>
          </div>

          {/* Work Highlight card */}
          <div className="card-section">
            <div className="card work-highlight-card">
              <h3 className="carousel-title">Work Highlight</h3>
              <div className="work-highlight-grid">
                {workHighlights.map((highlight, index) => (
                  <div key={index} className="work-highlight-item">
                    <img src={highlight.imgSrc} alt={highlight.title} className="work-highlight-image" />
                    <h4 className="work-highlight-title">{highlight.title}</h4>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
