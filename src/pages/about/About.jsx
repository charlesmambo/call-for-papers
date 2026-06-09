import React from 'react';
import '../about/About.css';
import { LuCircleDashed } from "react-icons/lu";
import { LuShieldCheck } from "react-icons/lu";
import { LiaHandshake } from "react-icons/lia";
import { LuUsers } from "react-icons/lu";
import { PiGraduationCapLight } from "react-icons/pi";


const About = () => {
const commitments = [
  {
    icon: <LuCircleDashed />,
    title: "Showcase Research & Practice",
    description:
      "Cutting-edge research, practice and policy in AI, emerging technologies and data science in education.",
  },
  {
    icon: <LuShieldCheck />,
    title: "Critical & Ethical Dialogue",
    description:
      "Foster contextually grounded conversations on responsible AI use in higher education.",
  },
  {
    icon: <LiaHandshake />,
    title: "Cross-sector Collaboration",
    description:
      "Connect universities, schools, industry and policymakers around shared challenges.",
  },
  {
    icon: <LuUsers />,
    title: "Equity & Inclusion",
    description:
      "Explore how AI and data science can advance equity and student success rather than deepen divides.",
  },
  {
    icon: <PiGraduationCapLight />,
    title: "Capacity Building",
    description:
      "Support educators, designers, data scientists and institutional leaders in the sector.",
  },
];
  return (
    <div>
         <section className="abt-section">
      <div className="abt-pattern"></div>

      <div className="abt-content">
        <div className="abt-badge">ABOUT</div>

        <h2>
          Bridging research, ethics and emerging <br/>
          technology.
        </h2>

        <p>
          A four-day international gathering hosted by Stellenbosch
          University and the University of the Western Cape.
        </p>
      </div>
    </section>

    <section className="ai-etds-intro">
      <div className="content-wrapper">
        <p className="section-label">INTRODUCTION</p>

        <h2 className="main-heading">What is AI–ETDS 2026?</h2>

        <p className="description">
          AI-ETDS 2026 examines the transformative role of AI, emerging
          technologies and data science in reshaping teaching, learning,
          research and educational systems with a particular emphasis on
          Global South contexts, equity, epistemic justice and decolonial
          perspectives in AI enabled education and knowledge production.
        </p>
      </div>
    </section>

<section className="objectives-section">
      <div className="objectives-container">
        <p className="section-label">OBJECTIVES</p>

        <h2 className="section-title">Five core commitments.</h2>

        <div className="cards-grid">
          {commitments.map((item, index) => (
            <div className="commitment-card" key={index}>
              <div className="icon-box">{item.icon}</div>

              <h3 className="card-title">{item.title}</h3>

              <p className="card-description">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    </div>
  )
}

export default About