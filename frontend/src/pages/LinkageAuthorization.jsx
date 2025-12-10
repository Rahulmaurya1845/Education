import React from "react";
import { Link } from "react-router-dom"; // <-- added
import "./LinkageAuthorization.css";
import img22 from '../images/img22.jpg'; // <-- added

import img23 from '../images/img23.jpg'; // <-- added
import img24 from '../images/img24.jpg'; // <-- added
import img25 from '../images/img25.jpg'; // <-- added


export default function LinkageAuthorization() {
  return (
    <div className="linkage-container">

      {/* Header */}
      <div className="page-header">
        <h1>Linkage Authorization</h1>

        <p className="breadcrumb">
          <Link className="breadcrumb-home" to="/">Home</Link>  ›  <span>Linkage Authorization</span>
        </p>
      </div>

      {/* Content */}
      <section className="linkage-content">
        
        <p className="description">
          Our institution is authorized and linked with multiple national and regional 
          academic and certification councils to ensure authentic training and recognition.
        </p>

        <div className="image-gallery">
          <img src={img22} alt="certificate" />
          <img src={img23} alt="certificate" />
          <img src={img24} alt="certificate" />
          <img src={img25} alt="certificate" />
        </div>
      </section>
    </div>
  );
}
