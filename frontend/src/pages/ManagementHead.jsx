import React from "react";
import { Link } from "react-router-dom";
import "./ManagementHead.css";
import managementHead from '../images/managementhead.jpeg';
export default function ManagementHead() {
  return (
    <div className="management-container">

      {/* Header Section */}
      <div className="management-header">
        <h1>Management head</h1>
        <p className="breadcrumb">
          <Link to="/" className="breadcrumb-link">Home</Link> &gt; About Us
        </p>
      </div>

      {/* Content Section */}
      <div className="management-content">
        
        <img
          className="management-image"
          src={managementHead}  // you can change this path
          alt="Management Head"
        />

        <div className="management-text">
          <h3>ABOUT MEENAKSHI EDUCATION SANSTHAN - SALUMBER</h3>
          <h2>Savita Parmar (Management head)</h2>

          <p>
            The opportunities that you have provided us with, both in terms of academic and extracurricular activities, have been truly enriching.
            From the experienced faculty members to the state-of-the-art facilities, every aspect of the institute has been carefully thought 
            out to ensure that students receive a holistic learning experience.
          </p>

          <p>
            Moreover, I have been impressed with the measures that you have taken to ensure the safety and well-being of students during the ongoing
            pandemic. The seamless transition to online classes and the regular communication with students have made us feel supported and 
            connected even during these trying times.
          </p>

          <p>
            I am truly grateful for all that you have done for us and for making the institute a place where students can thrive and reach their full
            potential. Thank you for your hard work, dedication, and leadership.
          </p>
        </div>
      </div>
    </div>
  );
}
