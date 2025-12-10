import React from "react";
import { Link } from "react-router-dom";
import "./Testimonial.css";
import img1 from "../images/testimonial.png"; // Replace with your local image

export default function Testimonial() {
  return (
    <div className="testimonial-container">

      {/* Header Section */}
      <div className="page-header">
        <h1>Testimonial</h1>
        <p className="breadcrumb">
          <Link className="breadcrumb-home" to="/">Home</Link> › <span>Testimonial</span>
        </p>
      </div>

      {/* Testimonial Content */}
      <section className="testimonial-box">
        
        {/* Image Left */}
        <div className="testimonial-image">
          <img src={img1} alt="Student" />
        </div>

        {/* Right Content */}
        <div className="testimonial-text">
          <h3>⭐ Student Review ⭐</h3>
          <p>
            "This institution helped me grow academically and personally.  
            The teachers are very supportive and the environment is excellent.  
            I am grateful for all the guidance and opportunities given to me."
          </p>

          <h4>- Student Name</h4>
          <span>Batch: 2024</span>
        </div>

      </section>

    </div>
  );
}
