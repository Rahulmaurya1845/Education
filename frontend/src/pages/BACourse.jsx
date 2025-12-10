import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./BACourse.css";

// Replace with your actual image
import img14 from "../images/img14.png";
import img13 from "../images/img13.jpg";
export default function BACourse() {
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <div className="bacourse-page">

      {/* Banner + Breadcrumb */}
      <div className="banner">
        <h1>BA Course</h1>
        <nav className="breadcrumb">
          <Link to="/" className="breadcrumb-home">Home</Link> &rsaquo; <span>BA Course</span>
        </nav>
      </div>

      {/* Main Content + Sidebar */}
      <div className="content-wrapper">
        <div className="main-content">
          <h2>BA Course</h2>

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
                  BA admission requires candidates to pass{" "}
                  <strong>Higher Secondary (10+2)</strong> with a minimum of
                  <strong> 40% aggregate</strong> and qualifying entrance exams such as
                  IPU CET, BHU CET, JSAT, etc., depending on the institution.
                </p>
                <p>
                  BA 1st year builds the foundation for your academic journey and
                  prepares students for higher levels of study.
                </p>
                <p>
                  Career opportunities include Civil Administrator, IAS, Police,
                  Civil Servant, Content Writer, HR Manager, and many more.
                </p>
              </>
            )}

            {activeTab === "subject" && (
              <ul className="subject-list">
                <li>Hindi Literature</li>
                <li>English Literature</li>
                <li>History</li>
                <li>Political Science</li>
                <li>Geography</li>
              </ul>
            )}
          </div>
        </div>

        {/* Sidebar */}
        <div className="sidebar">
          <img src={img14} alt="BA Course Cover" className="course-cover" />

          <ul className="course-info">
            <li><strong>Course Fee :</strong> Rs 30,650</li>
            <li><strong>Duration :</strong> 3 Years</li>
            <li><strong>Fee Type :</strong> One Time</li>
            <li><strong>Skill Level :</strong> Intermediate</li>
            <li><strong>Eligibility :</strong> 10+2</li>
            <li><strong>Language :</strong> English / Hindi</li>
          </ul>
        </div>
      </div>

      {/* Related Course Section */}
      <div className="related-courses">
        <h3>RELATED COURSES</h3>
        <h2>Courses You May Like</h2>

        <Link to="/courses/bsc-course" className="course-card">
          <img src={img13} alt="BSc Course" />
          <div className="course-tag">Graduation</div>
          <h4>B.Sc Course</h4>
        </Link>
      </div>
    </div>
  );
}

