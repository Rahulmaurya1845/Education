import React from "react";
import { Link } from "react-router-dom";
import "./DirectorMessage.css";
import director from "../images/director.jpeg";

export default function DirectorMessage() {
  return (
    <div className="director-container">

      {/* Background Heading Section */}
      <div className="director-header">
        <h1>Director Message</h1>
        <p className="breadcrumb">
          <Link to="/" className="breadcrumb-link">Home</Link> &gt; About Us
        </p>
      </div>

      {/* Content Section */}
      <div className="director-content">
        
        <img 
          src={director}
          alt="Director" 
          className="director-image"
        />

        <div className="director-text">
          <h3>ABOUT MEENAKSHI EDUCATION SANSTHAN - SALUMBER</h3>
          <h2>Mrs. Meena Masar (Director)</h2>

          <p>
            Empowering the students with quality education in a wider horizon is the mission 
            we embrace at <strong>Meenakshi Education Sansthan</strong>. As the 
            <strong> Director of Meenakshi Education Sansthan</strong>, 
            I am privileged to be a part of the education scenario today. Understanding 
            the competitive environment, we strive to facilitate excellent educational 
            options for the personal growth and career fulfillment of students aspiring 
            to make a name in the IT sector.
          </p>
        </div>
      </div>

      {/* Remaining Content */}
      <div className="director-bottom">
        
        <p>
          In the emerging context of IT industry, having an updated computer education secures 
          a bright future ensuring an ever-advancing career profile. As an ISO 9001-2015 Company.
        </p>

        <p>
          Ours is an adaptable service package that ensures complete support and guidance 
          right from pre-application processes. Our highly dedicated and committed team strives 
          to achieve excellence in the field of Computer Education and I am honoured 
          to be the leader of this team. With a keen focus on quality education, we 
          are steadfast in our path, giving assistance and aid to students for attaining 
          meritorious heights.
        </p>

        <p>
          We work closely to serve students in fulfilling their academic dreams through 
          a cost-effective package and professional guidance. We look forward to answer 
          your queries and ensure effective assistance for education overseas.
        </p>

        <strong className="signature">
          Meenakshi Education Sansthan<br />
          Mrs. Meena Masar<br />
          (Director)
        </strong>

      </div>
    </div>
  );
}
