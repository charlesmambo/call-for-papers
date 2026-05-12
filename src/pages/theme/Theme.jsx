import React from 'react';
import '../theme/Theme.css';
import { LuBrainCircuit } from "react-icons/lu";
import { IoBookOutline } from "react-icons/io5";
import { LuShieldCheck } from "react-icons/lu";
import { LiaUserFriendsSolid } from "react-icons/lia";
import { GoNorthStar } from "react-icons/go";
import { PiScalesDuotone } from "react-icons/pi";
import { LuChartColumnIncreasing } from "react-icons/lu";
import { HiOutlineChip } from "react-icons/hi";
import { RiLeafLine } from "react-icons/ri";
import { RiOpenSourceLine } from "react-icons/ri";


const Theme = () => {
    const tracks = [
  {
    number: "01",
    icon: <LuBrainCircuit />,
    title: "AI-driven Personalised Learning",
    desc: "Adaptive systems, intelligent tutoring, recommender systems, early warning systems, and evidence on student success alongside privacy, consent and equity.",
  },
  {
    number: "02",
    icon: <IoBookOutline />,
    title: "Curriculum Development & Assessment",
    desc: "AI-assisted curriculum review and design, automated feedback, grading, authentic assessment, and alignment with workplace and future skills.",
  },
  {
    number: "03",
    icon: <LuShieldCheck />,
    title: "Ethical & Legal Implications",
    desc: "Data protection, algorithmic bias, explainable AI, governance frameworks and institutional policies for responsible AI use.",
  },
  {
    number: "04",
    icon: <LiaUserFriendsSolid />,
    title: "Student Engagement, Support & Retention",
    desc: "Chatbots, virtual assistants, learning analytics dashboards and intervention models that support progression and success.",
  },
  {
    number: "05",
    icon: <GoNorthStar />,
    title: "AI in Academic Research",
    desc: "AI in literature reviews, data analysis, writing support and research workflows with implications for integrity and authorship.",
  },
  {
    number: "06",
    icon: <PiScalesDuotone />,
    title: "AI & Academic Integrity",
    desc: "AI-generated content, detection, assessment redesign, integrity policies and student/staff development.",
  },
  {
    number: "07",
    icon: <LuChartColumnIncreasing />,
    title: "Administrative & Decision Support Tools",
    desc: "Enrolment planning, timetabling, resource allocation, HEMIS/IR, institutional research and strategy using AI and data science.",
  },
  {
    number: "08",
    icon: <HiOutlineChip />,
    title: "Academic Roles & Pedagogical Methods",
    desc: "Changing roles of lecturers, tutors and professional staff; co-teaching with AI; professional development needs.",
  },
  {
    number: "09",
    icon: <RiOpenSourceLine />,
    title: "AI, Equity & the Digital Divide",
    desc: "Multilingual AI, accessibility, low-resource settings, rural/urban divides and inclusive technology design.",
  },
  {
    number: "010",
    icon: <RiLeafLine />,
    title: "Data Science & Institutional Governance",
    desc: "Data governance, decision-intelligence frameworks, performance management, quality enhancement and risk management.",
  },
];

  return (
    <div>
         <section className="conference-section">
      <div className="overlay-pattern"></div>

      <div className="conference-content">
        <div className="conference-badge">CONFERENCE THEMES</div>

        <h2>
          Ten research tracks shaping AI in education.
        </h2>

        <p>
          Submissions are welcomed across these themes   and at the
          intersection of multiple tracks.
        </p>
      </div>
    </section>

<section className="tracks-section">
      <div className="tracks-grid">
        {tracks.map((track, index) => (
          <div className="track-card" key={index}>
            <div className="track-top">
              <div className="track-icon">{track.icon}</div>
              <span className="track-number">{track.number}</span>
            </div>

            <h3>{track.title}</h3>
            <p>{track.desc}</p>
          </div>
        ))}
      </div>
    </section>


    </div>
  )
}

export default Theme