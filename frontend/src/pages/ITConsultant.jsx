import React, { useState } from "react";
import "./ITConsultant.css";

export default function ITConsultant() {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  const goHome = () => {
    window.location.href = "/";
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted! Thanks bro.");
    setShowModal(false);
    e.target.reset();
  };

  return (
    <>
      {/* Header Section */}
      <header className="itc-header">
        <div className="itc-breadcrumb">
          <h1>Career</h1>
          <p>
            <a href="/">Home</a> &gt; Career
          </p>
        </div>
      </header>

      {/* Job Info Section */}
      <section className="itc-job-section">
        <div className="job-header">
          <h3>
            1.&nbsp;
            <span className="job-title">
              WEB DESIGNER TALENT HUNT HIRING FOR IT COMPANY
            </span>
          </h3>
          <button
            className="apply-btn"
            onClick={(e) => {
              e.preventDefault();
              openModal();
            }}
          >
            Apply Now
          </button>
        </div>

        <div className="job-meta">
          <span className="job-date">📅 07 April, 2023</span>
          <span className="job-location">📍 10/13-1 Ganj Saranath Varanasi</span>
          <span className="job-type">🔖 Part Time</span>
        </div>

        <hr />

        <h4 className="job-subtitle">JOB DESCRIPTION</h4>

        {/* Job Summary */}
        <p className="job-summary">
          <strong>Job Summary</strong>
          <br />
          Lotus Interworks Inc is an advanced technology company with leadership team from
          Massachusetts Institute of Technology (MIT), Stanford University, and Harvard
          University. Candidates must be keenly inquisitive and passionate about design and keen
          eye for detail. Must have expertise on Web Page Development and Design. We are interested
          in candidates with exceptional skills to seasoned professional designers.
        </p>

        {/* Responsibilities and Duties */}
        <p className="job-summary">
          <strong>Responsibilities and Duties</strong>
        </p>

        <ul className="job-responsibilities">
          <li>Conceptualize, built prototype & implement creative web UI designs which delight end-users.</li>
          <li>Collaborate with web developer teams & other relevant stake holders to deliver projects on time using iterative development model.</li>
          <li>Establish design guidelines & standards to build rich and reusable web pages/ elements / themes.</li>
          <li>Engage in creating the required assets like icons, images, logos, videos, banners, headers, footers etc. as per client requirements.</li>
          <li>Technically guide junior members in the team as needed.</li>
        </ul>

        {/* Qualifications */}
        <h4 className="job-subtitle">Qualifications</h4>

        <ul className="job-responsibilities">
          <li>Extensive hands-on experience in designing web pages using WordPress, Divi, HTML, CSS or any similar industry standard tools.</li>
          <li>Sound understanding of web design principles & guidelines.</li>
          <li>Solid understanding of layout principles, colour theory & typography.</li>
          <li>Innovative and possessing creative design ideas.</li>
          <li>Good team player who proactively works in achieving team & company goals.</li>
          <li>Quick learner and capable of mastering new skills efficiently.</li>
          <li>Should possess excellent communication skills and be able to prepare technical PPT's outlining web designs, conduct demos and document repeatable procedures to facilitate knowledge transfer amongst team members & to relevant stakeholders.</li>
          <li>Organize, prioritize, and handle multiple tasks/projects simultaneously.</li>
          <li>Educational qualifications - Any degree with diploma in Web design, BS degree in Computer Science, Engineering, MCA or any similar relevant field.</li>
        </ul>

        {/* Skills */}
        <h4 className="job-subtitle">Skills</h4>

        <ul className="job-responsibilities">
          <li>Solid experience in designing responsive web pages using any industry standard web design technologies / tools like HTML, CSS, WordPress etc.</li>
          <li>Graphic design experience using Photoshop, Illustrator or any similar tools.</li>
          <li>Solid understanding of UI/UX design techniques.</li>
          <li>Basic knowledge of SEO guidelines.</li>
          <li>Sound knowledge of any industry standard wireframe tools like Adobe XD, Sketch, Invision etc.</li>
        </ul>
      </section>

      {/* Modal */}
      {showModal && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <span className="close-btn" onClick={closeModal}>
              &times;
            </span>
            <h2>APPLY NOW</h2>

            <form className="apply-form" onSubmit={handleSubmit}>
              <input type="text" placeholder="Name" name="name" required />
              <input type="email" placeholder="Email Address" name="email" required />
              <input type="tel" placeholder="Phone Number" name="phone" pattern="[0-9]{10}" title="Enter 10 digit phone number" required />
              <input type="file" name="resume" accept=".pdf,.doc,.docx" required />
              <textarea placeholder="Enter letter" name="letter" required></textarea>

              <button type="submit">Submit</button>
              <button type="button" className="home-btn" onClick={goHome}>
                Home
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
