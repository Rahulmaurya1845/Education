import React from "react";
import { Link } from "react-router-dom";
import "./PhotoGallery.css";

import collageimg from "../images/College.png";
import classroom from "../images/classroom.png";
import admission from "../images/admission.png";
import admissionopen from "../images/admissionopen.png";
import bsc3rdyear from "../images/bsc3rdyear.png";

export default function PhotoGallery() {

  const photos = [
    { src: collageimg, title: "College" },
    { src: classroom, title: "Classroom Area" },
    { src: admission, title: "Admission" },
    { src: admissionopen, title: "Admission Open 2023-2024" },
    { src: bsc3rdyear, title: "B.Sc 3rd Year Students" },
  ];

  return (
    <div className="photo-gallery-page">

      {/* Banner Section */}
      <div className="gallery-banner">
        <h1>Photo Gallery</h1>
        <nav className="breadcrumb">
          <Link to="/" className="breadcrumb-home">Home</Link> &rsaquo; <span>Photo Gallery</span>
        </nav>
      </div>

      {/* Gallery Section */}
      <div className="gallery-grid-fixed">
        {photos.map((photo, index) => (
          <div className="gallery-card" key={index}>
            <div className="image-container">
              <img src={photo.src} alt={photo.title} />
              <div className="gallery-caption">{photo.title}</div>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}

