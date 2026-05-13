import React from 'react';
import '../home/Home.css';
import { SlCalender } from "react-icons/sl";
import { GrLocation } from "react-icons/gr";
import { LuGraduationCap } from "react-icons/lu";
import { IoMdArrowForward } from "react-icons/io";
import { LuBrainCircuit } from "react-icons/lu";
import { HiOutlineGlobe } from "react-icons/hi";
import { LuShieldCheck } from "react-icons/lu";
import { LiaUserFriendsSolid } from "react-icons/lia";
import { HiOutlineDocumentText } from "react-icons/hi2";
import { RiTvLine } from "react-icons/ri";
import { FiMessageSquare } from "react-icons/fi";
import { VscSettings } from "react-icons/vsc";


const Home = () => {
 const cards = [
    {
      icon: <LuBrainCircuit size={24} />,
      title: "AI in Education",
      text: "Research-driven applications of AI for teaching, learning and assessment.",
    },
    {
      icon: <HiOutlineGlobe size={24} />,
      title: "Global South Focus",
      text: "Centering African and Global South perspectives in emerging technology.",
    },
    {
      icon: <LuShieldCheck size={24} />,
      title: "Ethical Innovation",
      text: "Responsible AI, governance frameworks and inclusive policy design.",
    },
    {
      icon: <LiaUserFriendsSolid size={24} />,
      title: "Collaborative Network",
      text: "Connecting researchers, educators, students and industry leaders.",
    },
  ];
  const themes = [
  {
    id: "01",
    title: "Personalised & Adaptive Learning",
    desc: "Intelligent tutoring, recommender and early warning systems supporting student success.",
  },
  {
    id: "02",
    title: "Curriculum & Assessment",
    desc: "AI-assisted curriculum design, automated feedback and authentic, future-skills assessment.",
  },
  {
    id: "03",
    title: "Ethics, Law & Governance",
    desc: "Data protection, algorithmic bias, explainable AI and institutional policy frameworks.",
  },
  {
    id: "04",
    title: "Engagement, Support & Retention",
    desc: "Chatbots, analytics dashboards and interventions that drive progression and success.",
  },
  {
    id: "05",
    title: "AI in Research & Integrity",
    desc: "AI in research workflows, academic integrity, assessment redesign and authorship.",
  },
  {
    id: "06",
    title: "Equity & the Digital Divide",
    desc: "Multilingual AI, accessibility and inclusive design for low-resource and Global South contexts.",
  },
];
const dates = [
  {
    title: "ABSTRACT SUBMISSION",
    date: "10 June 2026",
    active: true,
  },
  {
    title: "ABSTRACT NOTIFICATION",
    date: "2 July 2026",
  },
  {
    title: "FULL PAPER DEADLINE",
    date: "4 August 2026",
  },
  {
    title: "FULL PAPER NOTIFICATION",
    date: "5 September 2026",
  },
  {
    title: "FINAL PAPER & REGISTRATION",
    date: "5 November 2026",
  },
];
const submissionTypes = [
  {
    icon: <HiOutlineDocumentText size={24}/>,
    title: "Full Research Papers",
    description:
      "Completed empirical, theoretical or methodological studies. Up to 8,000 words.",
    tag: "PEER REVIEWED",
  },
  {
    icon: <RiTvLine size={24}/>,
    title: "Short Papers / WIP",
    description:
      "Ongoing studies, pilots or innovative designs with preliminary findings. 3,000–4,000 words.",
    tag: "IN PROGRESS",
  },
  {
    icon: <LuBrainCircuit size={24} />,
    title: "Practice-based Papers",
    description:
      "Reflective accounts of implementation or institutional initiatives. 2,500–4,000 words.",
    tag: "PRACTICE",
  },
  {
    icon: <FiMessageSquare size={24}/>,
    title: "Panels / Symposia",
    description:
      "Thematically coherent sessions of 3–5 contributions on a shared topic.",
    tag: "DISCUSSION",
  },
  {
    icon: <VscSettings size={24}/>,
    title: "Workshops / Demos",
    description:
      "Interactive sessions showcasing AI tools, dashboards or learning designs. 500–800 word proposal.",
    tag: "HANDS-ON",
  },
];
  return  (

      <div>
         <section className="hero">
      <div className="overlay"></div>

      <div className="hero-container">
        {/* LEFT CONTENT */}
        <div className="hero-left">
          <div className="hero-badge">
           INTERNATIONAL CONFERENCE
          </div>

          <h1 className="hero-title">
            AI-ETDS 2026
            <span>International</span>
            <span>Conference</span>
          </h1>

          <p className="hero-description">
            AI, Emerging Technology & Data Science in Education advancing
            ethical research and global collaboration from the Global South.
          </p>

          <div className="hero-info">
            <div className="info-item">
              <SlCalender size={18} />
              <span>15–18 February 2027</span>
            </div>

            <div className="info-item">
              <GrLocation size={18} />
              <span>Stellenbosch, South Africa</span>
            </div>

            <div className="info-item">
              <LuGraduationCap size={18} />
              <span>Stellenbosch · UWC</span>
            </div>
          </div>

          <div className="hero-buttons">
            <button className="submit-btn">
              Submit Abstract
              <IoMdArrowForward  size={18} />
            </button>

            <button className="theme-btn">
              View Themes
            </button>
          </div>
        </div>

        {/* RIGHT CARD */}
        <div className="deadline-card">
          <p className="deadline-label">KEY DEADLINE</p>

          <h3>Abstract Submission</h3>

          <p className="deadline-date">10 June 2026</p>

          <div className="deadline-list">
            <div className="deadline-row">
              <span>Abstract Deadline</span>
              <strong>10 Jun 2026</strong>
            </div>

            <div className="deadline-row">
              <span>Full Papers</span>
              <strong>4 Aug 2026</strong>
            </div>

            <div className="deadline-row">
              <span>Notification</span>
              <strong>5 Sep 2026</strong>
            </div>

            <div className="deadline-row">
              <span>Registration</span>
              <strong>5 Nov 2026</strong>
            </div>
          </div>
        </div>
      </div>
    </section>

     <section className="about-section">
      <div className="about-container">
        {/* LEFT CONTENT */}
        <div className="about-left">
          <p className="section-label">
            ABOUT THE CONFERENCE
          </p>

          <h2 className="about-title">
            A platform for ethical,
            <br />
            AI-driven education
            <br />
            research.
          </h2>

          <p className="about-description">
            AI-ETDS 2026 brings together a global community to
            share scholarship on AI, data science and emerging
            technologies that shape inclusive, equitable education.
          </p>

          <button className="learn-btn">
            Learn more
            <IoMdArrowForward  size={18} />
          </button>
        </div>

        {/* RIGHT CARDS */}
        <div className="about-grid">
          {cards.map((card, index) => (
            <div className="about-card" key={index}>
              <div className="icon-box">
                {card.icon}
              </div>

              <h3>{card.title}</h3>

              <p>{card.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="themes-section">
      <div className="themes-header">
        <span className="section-label">CONFERENCE THEMES</span>
        <h2 className="title">
          Six tracks shaping the future of education.
        </h2>
      </div>

      <div className="themes-grid">
        {themes.map((item) => (
          <div key={item.id} className="theme-card">
            <div className="card-top">
              <span className="card-id">{item.id}</span>
              <span className="card-line"></span>
            </div>
            <h3 className="theme-card-title">{item.title}</h3>
            <p className="card-desc">{item.desc}</p>
          </div>
        ))}
      </div>

      <div className="themes-footer">
        <button className="explore-btn">
          Explore all themes →
        </button>
      </div>
    </section>

<section className="dates-section">
      <div className="dates-header">
        <span className="section-label">IMPORTANT DATES</span>
        <h2 className="title">Plan your submission journey.</h2>
      </div>

      <div className="timeline">
        <div className="timeline-line"></div>

        <div className="timeline-icons">
          {dates.map((item, index) => (
            <div
              key={index}
              className={`timeline-icon ${item.active ? "active" : ""}`}
            >
              <SlCalender />
            </div>
          ))}
        </div>
      </div>

      <div className="dates-cards">
        {dates.map((item, index) => (
          <div key={index} className="date-card">
            <span className="d-card-title">{item.title}</span>
            <span className={`card-date ${item.active ? "active" : ""}`}>
              {item.date}
            </span>
          </div>
        ))}
      </div>
    </section>

    <section className="submission-section">
      <div className="submission-header">
        <span className="section-label">SUBMISSION TYPES</span>
        <h3>Choose your contribution.</h3>
      </div>

      <div className="submission-grid">
        {submissionTypes.map((item, index) => (
          <div className="submission-card" key={index}>
            <div className="submission-icon">{item.icon}</div>

            <h3>{item.title}</h3>

            <p>{item.description}</p>

            <span className="submission-badge">{item.tag}</span>
          </div>
        ))}
      </div>
    </section>

    </div>
  )
}

export default Home