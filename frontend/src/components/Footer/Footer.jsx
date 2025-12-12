import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube, FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import logo from "../../images/logo.png";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* LEFT SECTION */}
        <div className="footer-left">
          <img src={logo} alt="Logo" className="footer-logo" />
          <p className="footer-text">
            Meenakshi Education Sansthan is a leading IT and education institute dedicated to shaping skilled professionals.
          </p>

          <div className="footer-social">
            <a href="https://facebook.com" target="_blank"><FaFacebook /></a>
            <a href="https://twitter.com" target="_blank"><FaTwitter /></a>
            <a href="https://instagram.com" target="_blank"><FaInstagram /></a>
            <a href="https://youtube.com" target="_blank"><FaYoutube /></a>
          </div>
        </div>

        {/* USEFUL LINKS */}
        <div className="footer-links">
          <h3>USEFUL LINKS</h3>
          {/* <Link to="/">Home Page</Link> */}
          {/* <Link to="/gallery">Photo Gallery</Link> */}
          <Link to="/contact/contact-us">Contact Us</Link>
          <Link to="/highlights/blog">Blog</Link>
          <Link to="/highlights/event">Event</Link>
          <Link to="/highlights/news">News</Link>
        </div>

        {/* QUICK LINKS */}
        <div className="footer-links">
          <h3>QUICK LINKS</h3>
          {/* <Link to="/about-us">About Us</Link> */}
          {/* <Link to="/courses">Courses</Link> */}
          <Link to="/student-zone/student-login">Student Login</Link>
          <Link to="/online-fee-payment">Online Fee Payment</Link>
          {/* <Link to="/career">Career</Link> */}
        </div>

        {/* CONTACT INFO */}
        <div className="footer-contact">
          <h3>CONTACT INFO</h3>
          <p><FaMapMarkerAlt /> Adkaliya Chauraha, Opposite Meenakshi Gas, Salumber, Rajasthan</p>
          <p><FaPhone /> +91 7737676701</p>
          <p><FaEnvelope /> meenakshicollegesalumber@gmail.com</p>
        </div>
      </div>

      <div className="footer-bottom">
        © {new Date().getFullYear()} Meenakshi Education Sansthan | Designed by Webcodian LLP
      </div>
    </footer>
  );
}
