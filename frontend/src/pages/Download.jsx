import React from 'react';
import './Download.css'; // Import the CSS file you create

export default function Download() {
  // Assuming you have routing set up (e.g., with React Router), you can use Link or navigate to home.
  // If not, you can use window.location or a prop to handle navigation.
  // For simplicity, I'll use a button that calls a function to navigate (you can replace with your routing logic).

  const goToHome = () => {
    // Replace with your navigation logic, e.g., if using React Router: navigate('/');
    window.location.href = '/'; // Simple redirect, or use history.push('/') if using router
  };

  return (
    <div className="download-page"> {/* Renamed from bacourse-page to download-page for clarity */}
      {/* Banner Section with Heading and Breadcrumb */}
      <div className="banner">
        <h1>Download</h1>
        <div className="breadcrumb">
          <a href="/" className="breadcrumb-home">Home</a> / Download
        </div>
      </div>

      {/* Rest of the Content */}
      <div className="content-wrapper">
        <div className="main-content">
          {/* Affiliation Process Section with View and Download Options */}
          <h2>Affiliation Process</h2>
          <div className="tab-panel">
            <p>Details about the affiliation process. Click to view or download the document.</p>
            <div style={{ display: 'flex', gap: '10px', justifyContent: 'center' }}>
              <button 
                style={{ 
                  backgroundColor: '#28a745', 
                  color: 'white', 
                  border: 'none', 
                  padding: '8px 16px', 
                  borderRadius: '4px', 
                  cursor: 'pointer' 
                }}
                onClick={() => window.open('https://example.com/view-affiliation', '_blank')} // Replace with actual view URL from the site
              >
                View
              </button>
              <button 
                style={{ 
                  backgroundColor: '#dc3545', 
                  color: 'white', 
                  border: 'none', 
                  padding: '8px 16px', 
                  borderRadius: '4px', 
                  cursor: 'pointer' 
                }}
                onClick={() => window.open('https://example.com/download-affiliation.pdf', '_blank')} // Replace with actual download URL from the site
              >
                Download
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}