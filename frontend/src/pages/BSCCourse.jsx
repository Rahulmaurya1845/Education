
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./BACourse.css";

// Replace with your actual image
import img14 from "../images/img14.png";
import img13 from "../images/img13.jpg";
export default function BSCCourse() {
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <div className="bacourse-page">

      {/* Banner + Breadcrumb */}
      <div className="banner">
        <h1>BSC Course</h1>
        <nav className="breadcrumb">
          <Link to="/" className="breadcrumb-home">Home</Link> &rsaquo; <span>BSC Course</span>
        </nav>
      </div>

      {/* Main Content + Sidebar */}
      <div className="content-wrapper">
        <div className="main-content">
          <h2>BSC Course</h2>

          {/* Tabs */}
          <div className="tabs">
            <button
              className={activeTab === "overview" ? "tab active" : "tab"}
              onClick={() => setActiveTab("overview")}
            >
              Overview
            </button>

            <button
              className={activeTab === "subject" ? "tab active" : "tab"}
              onClick={() => setActiveTab("subject")}
            >
              Subject
            </button>
          </div>

          {/* Tab Panels */}
          <div className="tab-panel">
            {activeTab === "overview" && (
              <>
                <h3>COURSE DESCRIPTION</h3>
                <p>
                 <strong>BSc full form is Bachelor of Science</strong>, the aim of the course is to develop a creative and critical understanding in a range of fields, including engineering, finance, and technology as well as healthcare. The average BSc fees ranges from <strong>INR 10,000-3 LPA.</strong> The BSc duration is three years.
BSc syllabus and subjects are designed to enhance graduates with practical skills and interdisciplinary knowledge in science. The course is built on science fundamentals and consists of various specialization streams such as <strong>physics, chemistry, mathematics, biology</strong>, and much more..
BSc admission requires candidates to have completed <strong>10+2 examinations with a minimum of 50% </strong>of marks with either science or maths as mandatory subjects. The candidates must also qualify for the BSc entrance exam such as <strong> IIT JAM, NPAT, BHU UET,</strong> etc., based on the college requirements. The B.Sc job scope is vast as a graduate can find employment opportunities in core science industries and other research-based industries.
                </p>
              </>
            )}

            {activeTab === "subject" && (
              <ul className="subject-list">
                <li>Botany </li>
                <li>Zoology</li>
                <li>Chemistry</li>
                <li>Physics</li>
                <li>Mathematics</li>
              </ul>
            )}
          </div>
        </div>

        {/* Sidebar */}
        <div className="sidebar">
          <img src={img13} alt="BSC Course Cover" className="course-cover" />

          <ul className="course-info">
            <li><strong>Course Fee :</strong> Rs 45650</li>
            <li><strong>Duration :</strong> 3 Years</li>
            <li><strong>Fee Type :</strong> One Time</li>
            <li><strong>Skill Level :</strong> Intermediate</li>
            <li><strong>Eligibility :</strong> 10th</li>
            <li><strong>Language :</strong> English / Hindi</li>
          </ul>
        </div>
      </div>

      {/* Related Course Section */}
      <div className="related-courses">
        <h3>RELATED COURSES</h3>
        <h2>Courses You May Like</h2>

        <Link to="/courses/ba-course" className="course-card">
          <img src={img14} alt="BA Course" />
          <div className="course-tag">Graduation</div>
          <h4>BA Course</h4>
        </Link>
      </div>
    </div>
  );
}

