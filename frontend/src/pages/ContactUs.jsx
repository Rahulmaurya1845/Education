import React from "react";
import { Link } from "react-router-dom";
import "./ContactUs.css";

export default function ContactUs() {
  return (
    <>
      {/* -------- TOP GRADIENT HEADER -------- */}
      <header className="contact-header">
        <div className="contact-header-content">
          <h1>Contact Us</h1>

          <p>
            <Link
              to="/"
              style={{
                textDecoration: "none",
                color: "orange",
                fontWeight: "600",
              }}
            >
              Home
            </Link>{" "}
            › Contact Us
          </p>
        </div>
      </header>
             <div className="need-help-wrapper">
  <h2 className="need-help-title">Need Help?</h2>

  <h2 className="need-help-subtitle">
    If you have any further questions, please don't hesitate to contact us.
  </h2>
</div>


      {/* -------- MAIN GRID WRAPPER (LEFT CARDS + RIGHT FORM) -------- */}
      <section className="contact-container">

        {/* LEFT SIDE 4 BOX GRID */}
        <div className="left-box-grid">

          {/* CALL BOX */}
          <div className="contact-card">
            <div className="icon-circle phone-icon"></div>
            <h3>Call Us On</h3>
            <p>+91 7737676701</p>
          </div>

          {/* EMAIL BOX */}
          <div className="contact-card">
            <div className="icon-circle mail-icon"></div>
            <h3>Email Us</h3>
            <p>meenakshicollegesalumber@gmail.com</p>
          </div>

          {/* LOCATION BOX */}
          <div className="contact-card">
            <div className="icon-circle location-icon"></div>
            <h3>Our Location</h3>
            <p>
              Adkaliya chauraha, opposite Meenakshi gas, Godam, udaipur road,
              Salumber District – Udaipur (Rajasthan) 313027
            </p>
          </div>

          {/* SOCIAL LINKS BOX */}
          <div className="contact-card">
            <div className="icon-circle social-main-icon"></div>
            <h3>Social Links</h3>

            <div className="social-icons-row">
              <a href="https://facebook.com" target="_blank" className="social-circle">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="https://twitter.com" target="_blank" className="social-circle">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="https://youtube.com" target="_blank" className="social-circle">
                <i className="fab fa-youtube"></i>
              </a>
              <a href="https://instagram.com" target="_blank" className="social-circle">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE FORM */}
        <form className="contact-form">
          <input type="text" placeholder="Enter Your Name" required />
          <input type="email" placeholder="Enter Your Email" required />
          <input type="text" placeholder="Enter Your Mobile" required />
          <input type="text" placeholder="Enter Your Address" required />
          <textarea placeholder="Enter Your Message" required></textarea>
          <button type="submit">Submit Now →</button>
        </form>

      </section>

{/* -------- GOOGLE MAP SECTION -------- */}
<div className="map-container">
  <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14236.765771548318!2d73.961697!3d24.121582!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3967bf4f0d2bb1f7%3A0x7a0c9adbb40b500a!2sMeenakshi%20Education%20Sansthan%2C%20Salumber!5e0!3m2!1sen!2sin!4v1700000000000"
    width="100%"
    height="400"
    style={{ border: 0 }}
    allowFullScreen=""
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
  ></iframe>
</div>


    </>
  );
}
