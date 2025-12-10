import React from "react";
import { Link } from "react-router-dom";
import "./PrincipalMessage.css";
import principalimg from '../images/principalimg.jpeg';

export default function PrincipalMessage() {
  return (
    <div className="principal-container">

      {/* Background Header Section */}
      <div className="principal-header">
        <h1>Principal Massage</h1>
        <p className="breadcrumb">
          <Link to="/" className="breadcrumb-link">Home</Link> &gt; About Us
        </p>
      </div>

      {/* Content Section */}
      <div className="principal-content">
        
        <img
          src={principalimg}
          alt="Principal"
          className="principal-image"
        />

        <div className="principal-text">
          <h3>ABOUT MEENAKSHI EDUCATION SANSTHAN - SALUMBER</h3>
          <h2>Dr. Neetu Solanki (Principal)</h2>

          <p>
            I am truly grateful for all that you have done for us and for 
            making the institute a place where students can thrive and reach 
            their full potential. Thank you for your hard work, dedication, 
            and leadership.
          </p>

        </div>
      </div>

    </div>
  );
}
