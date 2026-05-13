import React from 'react';
import '../papers/Paper.css';
import { RiCircleFill } from "react-icons/ri";

const Paper = () => {
    const objectives = [
    "Showcase cutting-edge research, practice, and policy in AI, emerging technologies, and data science in education.",

    "Foster critical, ethical, and contextually grounded conversations about AI use in higher education and related sectors.",

    "Provide a platform for collaboration between universities, schools, industry, and policymakers.",

    "Explore how AI and data science can advance equity, inclusion, and student success, rather than deepen existing divides.",

    "Support capacity building for educators, instructional designers, data scientists, institutional planners, and leaders in the educational sector.",
  ];

  const audienceData = [
  "Academics and researchers in education, AI, data science, computer science, and related fields.",
  "Educators, instructional designers, and learning technologists.",
  "Institutional planners, quality assurance practitioners, and data/analytics teams.",
  "Policymakers, regulators, and government representatives.",
  "EdTech and AI industry partners and innovators.",
  "Postgraduate students and early-career researchers interested in AI and education."
];
const topics = [
  {
    id: "01",
    title: "AI-driven personalised learning and adaptive education",
    desc: "Adaptive systems, intelligent tutoring, recommender systems, early warning systems, and evidence on student success, alongside issues of privacy, consent, and equity."
  },
  {
    id: "02",
    title: "AI applications in curriculum development and assessment",
    desc: "AI-assisted curriculum review and design, automated feedback, grading, authentic assessment, and alignment with workplace and future skills."
  },
  {
    id: "03",
    title: "Ethical and legal implications of AI in higher education",
    desc: "Data protection, algorithmic bias, explainable AI, governance frameworks, and institutional policies for responsible AI use."
  },
  {
    id: "04",
    title: "AI-enhanced student engagement, support, and retention strategies",
    desc: "Chatbots, virtual assistants, learning analytics dashboards, and intervention models to support progression and success."
  },
  {
    id: "05",
    title: "The role of AI in academic research and knowledge production",
    desc: "AI in literature reviews, data analysis, writing support, research workflows, and implications for academic integrity and authorship."
  },
  {
    id: "06",
    title: "AI and academic integrity: challenges and solutions",
    desc: "AI-generated content, detection, assessment redesign, academic integrity policies, and student/staff development."
  },
  {
    id: "07",
    title: "AI-powered administrative and decision-support tools",
    desc: "Enrolment planning, timetabling, resource allocation, institutional research, and strategy using AI and data science."
  },
  {
    id: "08",
    title: "The impact of AI on academic roles and pedagogical methods",
    desc: "Changing roles of lecturers, tutors, and professional staff; co-teaching with AI; professional development needs."
  },
  {
    id: "09",
    title: "AI, equity, and the digital divide",
    desc: "Multilingual AI, accessibility, low-resource settings, rural/urban divides, and inclusive technology design."
  },
  {
    id: "10",
    title: "AI, data science, and institutional governance",
    desc: "Data governance, decision-intelligence frameworks, performance management, quality enhancement, and risk management."
  }
];

const dates = [
  {
    title: "Abstract submission deadline",
    date: "10 June 2026",
  },
  {
    title: "Notification of abstract acceptance",
    date: "2 July 2026",
  },
  {
    title: "Full paper / extended submission deadline",
    date: "4 August 2026",
  },
  {
    title: "Notification of acceptance (full submissions)",
    date: "5 September 2026",
  },
  {
    title: "Final paper submission & registration deadline",
    date: "5 November 2026",
  },
  {
    title: "Conference dates",
    date: "15–18 February 2027",
  },
];

const submissions = [
  {
    title: "Full research papers",
    desc: "Completed empirical, theoretical, or methodological studies, or substantial case studies.",
    meta: "INDICATIVE LENGTH: UP TO 8 000 WORDS (INCLUDING REFERENCES)."
  },
  {
    title: "Short papers / works-in-progress",
    desc: "Ongoing studies, pilot projects, or innovative designs with preliminary findings.",
    meta: "INDICATIVE LENGTH: 3 000–4 000 WORDS."
  },
  {
    title: "Practice-based papers",
    desc: "Reflective accounts of implementation, design, or institutional initiatives, with clear lessons learned.",
    meta: "INDICATIVE LENGTH: 2 500–4 000 WORDS."
  },
  {
    title: "Panels / symposia",
    desc: "Thematically coherent sessions of 3–5 contributions offering multiple perspectives on a shared topic (e.g. institutional case, policy issue, or theoretical debate).",
    meta: "SUBMISSION SHOULD INCLUDE: PANEL TITLE, 300–500 WORD OVERVIEW, AND 150–200 WORD ABSTRACT PER CONTRIBUTION."
  },
  {
    title: "Workshops / demonstrations",
    desc: "Hands-on or interactive sessions showcasing AI tools, analytics dashboards, or learning designs.",
    meta: "SUBMISSION SHOULD INCLUDE: 500–800 WORD DESCRIPTION OF OBJECTIVES, AUDIENCE, AND STRUCTURE."
  }
];

  const programmeItems = [
    "Keynote addresses by leading scholars and practitioners in AI, data science, and education.",

    "Parallel paper and panel sessions aligned with the conference themes.",

    "Workshops and demonstrations on AI tool implementation, learning analytics, and digital pedagogy.",

    "Networking events to foster collaboration between institutions, sectors, and countries.",
  ];
  return (
    <div>
    <section className="call-for-papers">
      <div className="overlay"></div>

      <div className="call-for-papers-content">
        <button className="conference-badge">CALL FOR PAPERS</button>

        <h2>
          International Conference on AI-Powered
          Emerging Technology and Data Science (AI-
          ETDS 2026)
        </h2>

        <p>
          Hosted by the Faculty of Education, Stellenbosch University, in
          partnership with the Faculty of Education, University of the Western
          Cape. Dates: 15 Feb 2027 · Venue: Stellenbosch, South Africa.
        </p>
      </div>
    </section>

 <section className="paper-conference">
      <div className="paper-container">
        <div className="heading-row">
          <span className="number">1.</span>
          <h2>About the Conference</h2>
        </div>

        <div className="paper-content">
          <p>
            The Organising Committee invites submissions for the International
            Conference on AI-Powered Emerging Technology and Data Science
            (AI-ETDS 2026). The conference focuses on the transformative role
            of Artificial Intelligence (AI), emerging technologies, and data
            science in reshaping teaching, learning, research, and educational
            systems in diverse contexts, with a particular emphasis on the
            Global South.
          </p>

          <p>
            AI-ETDS 2026 places particular emphasis on Global South contexts,
            including questions of equity, epistemic justice, and decolonial
            perspectives in AI-enabled education and knowledge production.
          </p>

          <p>
            As AI, machine learning, and data-driven tools become embedded in
            educational ecosystems, they influence pedagogy, curriculum design,
            assessment, student support, institutional decision-making, and
            governance. This interdisciplinary event will serve as a platform
            for dialogue, critical reflection, and demonstration of innovations
            that harness AI responsibly and equitably in education.
          </p>
        </div>
      </div>
    </section>

<section className="paper-objectives-section">
      <div className="paper-objectives-container">
        <div className="paper-section-heading">
          <span className="paper-section-number">2.</span>
          <h2>Conference Objectives</h2>
        </div>

        <p className="paper-intro-text">The conference aims to:</p>

        <div className="paper-objectives-list">
          {objectives.map((item, index) => (
            <div className="paper-objective-card" key={index}>
              <span className="bullet">•</span>
              <p>{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

<section className="paper-target-section">
      <div className="paper-target-container">
        <h2 className="paper-target-title">
          <span className="paper-target-title-number">3.</span> Target Audience
        </h2>

        <p className="paper-intro-text">The conference is designed for:</p>

        <div className="paper-target-grid">
          {audienceData.map((item, index) => (
            <div key={index} className="paper-target-card">
              <span className="bullet">•</span>
              <p>{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

<section className="tp-section">
      <div className="container">
        <h2 className="tp-title">
          <span className="title-number">4.</span> Themes and Topics
        </h2>

        <p className="paper-intro-text">
          We welcome submissions on topics including, but not limited to, AI- and
          data science-enabled innovation in higher education and related sectors:
        </p>

        <div className="tp-grid">
          {topics.map((item) => (
            <div className="tp-card" key={item.id}>
              <div className="tp-card-top">
                <span className="card-id">{item.id}</span>
                <span className="accent-line" />
              </div>

              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>

        <p className="tp-note">
          Additional relevant topics that align with the conference focus on AI,
          emerging technologies, and data science in education are also welcome.
        </p>
      </div>
    </section>

<section className="submission-section">
      <div className="">
        <h2 className="sb-title">
          <span className="title-number">5.</span> Submission Types
        </h2>

        <p className="paper-intro-text">Authors are invited to submit:</p>

        <div className="sb-list">
          {submissions.map((item, index) => (
            <div className="sb-card" key={index}>
              <h3>{item.title}</h3>
              <p className="sb-desc">{item.desc}</p>
              <p className="sb-meta">{item.meta}</p>
            </div>
          ))}
        </div>

        <p className="sb-note">
          (Exact word limits and templates will be confirmed in the detailed
          author guidelines on the conference website.)
        </p>
      </div>
    </section>

<section className="guide-section">
      <div className="guide-container">

        {/* Heading */}
        <div className="submission-heading">
          <span className="submission-number">6.</span>
          <h2>Submission Guidelines</h2>
        </div>

        {/* Card 1 */}
        <div className="guideline-card">
          <p>
            <strong>Language:</strong> English.
          </p>
        </div>

        {/* Card 2 */}
        <div className="guideline-card">
          <p>
            <strong>Originality:</strong> Submissions must be original and not
            under review elsewhere.
          </p>
        </div>

        {/* Card 3 */}
        <div className="guideline-card">
          <h3>Format:</h3>

          <ul>
            <li>
              <RiCircleFill className='bullet g-dot'/>
              Use the conference template (to be made available on the
              conference website).
            </li>

            <li>
              <RiCircleFill className='bullet g-dot'/>
              Manuscripts should be anonymised for double-blind peer review
              (remove names and affiliations from the main text).
            </li>
          </ul>
        </div>

        {/* Card 4 */}
        <div className="guideline-card">
          <p>
            <strong>Submission system:</strong> All abstracts and papers must be
            submitted via EasyChair (link to be provided).
          </p>
        </div>

        {/* Card 5 */}
        <div className="guideline-card">
          <h3>Review process:</h3>

          <ul>
            <li>
              <RiCircleFill className='bullet g-dot'/>
              Submissions will undergo double-blind peer review by at least two
              reviewers.
            </li>

            <li>
              <RiCircleFill className='bullet g-dot'/>
              Criteria will include relevance to the conference themes,
              originality, methodological rigour (where applicable), clarity,
              and contribution to practice/policy/theory.
            </li>
          </ul>
        </div>

        {/* Footer Text */}
        <p className="submission-footer">
          Further detailed instructions will be provided in the “For Authors”
          section of the conference website.
        </p>
      </div>
    </section>

    <section className="p-dates-section">
      <div className="p-dates-container">

        {/* Heading */}
        <div className="dates-heading">
          <span className="dates-number">7.</span>
          <h2>Important Dates</h2>
        </div>

        {/* Cards */}
        <div className="p-dates-grid">
          {dates.map((item, index) => (
            <div className="p-date-card" key={index}>
              <p className="p-date-title">{item.title}</p>

              <span className="p-date-value">
                {item.date}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>

<section className="publication-section">
      <div className="publication-container">
        {/* Heading */}
        <div className="publication-heading">
          <span className="publication-number">8.</span>

          <h2>
            Publication Opportunities (edited book pathway)
          </h2>
        </div>

        {/* Main Card */}
        <div className="publication-card">
          <p>
            <span className="bold">
              Edited volume opportunity (planned):
            </span>{" "} <br/>
            Following the conference, the Organising Committee intends to
            develop a curated edited volume proposal (e.g., Palgrave or
            Routledge), subject to publisher approval. Selected high-quality
            conference papers will be invited for substantial revision and
            inclusion in an edited book aligned to some of the thematic strands.
            Selection will be based on peer review outcomes, thematic fit, and
            publication readiness.
          </p>
        </div>

        {/* Small Cards */}
        <div className="small-card">
          <h3>Edited Book</h3>
        </div>

        <div className="small-card">
          <h3>
            Special Book <span>Lesly Swartz – connect</span>
          </h3>
        </div>
      </div>
    </section>

 <section className="programme-section">
      <div className="programme-container">
        {/* Heading */}
        <div className="programme-heading">
          <span className="programme-number">9.</span>

          <h2>Conference Format and Programme</h2>
        </div>

        {/* Intro Card */}
        <div className="programme-card">
          <p>
            The conference will be held in Stellenbosch, South Africa, with
            details on in-person and/or hybrid participation to be communicated
            in due course.
          </p>
        </div>

        {/* Programme Features */}
        <div className="programme-card">
          <h3>The programme will feature:</h3>

          <ul>
            {programmeItems.map((item, index) => (
              <li key={index}>
                <RiCircleFill className='bullet g-dot'/>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>

<section className="registration-section">
      <div className="registration-container">
        {/* Heading */}
        <div className="registration-heading">
          <span className="registration-number">10.</span>

          <h2>Registration and Fees</h2>
        </div>

        {/* Content */}
        <div className="registration-content">
          <p>
            Details on registration categories and fees (e.g. standard,
            student, early-bird, virtual attendance where applicable) will be
            published on the conference website. Concessionary rates for
            postgraduate students and participants from low-resource
            institutions will be considered, subject to available funding.
          </p>
        </div>
      </div>
    </section>

    <section className="cg-container">
      <div className="cg-header">
        <span className="cg-number">11.</span>
        <h2>Contact and Governance</h2>
      </div>

      <p className="cg-subtext">For enquiries, please contact:</p>

      <div className="cg-cards">
        <div className="cg-card">
          <h3>Prof. Anass Bayaga</h3>
          <p>abayaga@sun.ac.za</p>
        </div>

        <div className="cg-card">
          <h3>Dr Ibrahim Harun</h3>
          <p>iharun@uwc.ac.za</p>
        </div>
      </div>

      <p className="cg-description">
        The conference operates under the academic and ethical policies of the
        Faculty of Education, Stellenbosch University, and the Faculty of
        Education, University of the Western Cape, and adheres to international
        standards for responsible research and scholarly publishing.
      </p>
    </section>
    
    </div>
  )
}

export default Paper