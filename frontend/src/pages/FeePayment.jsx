import React from "react";
import { Link } from "react-router-dom";
import "./FeePayment.css";
import QR from '../images/QR.png';
export default function FeePayment() {
  return (
    <section className="payment-section">

      {/* Top Header Gradient */}
      <div className="payment-header">
        <h1>Online Fee Payment</h1>
        <p className="breadcrumb">
          <Link to="/" className="breadcrumb-home">Home</Link> &nbsp;&gt;&nbsp; Online Payment
        </p>
      </div>

      {/* Content Section */}
      <div className="payment-content">

        {/* Left Side Box (QR Code Placeholder) */}
        <div className="qr-box">
          <h3>QR Code</h3>
          <div className="qr-placeholder">
            {/* Replace src later */}
            <img src={QR} alt="QR Code" />
            <p className="qr-note">Upload Your QR Code Here</p>
          </div>
        </div>

        {/* Right Side Bank Details Table */}
        <div className="bank-details-box">
          <h3>BANK DETAILS</h3>
          <table>
            <tbody>
              <tr>
                <td>Account Holder Name :</td>
                <td>Meenakshi Education Sansthan</td>
              </tr>
              <tr>
                <td>Bank Name :</td>
                <td>Bank Of Baroda</td>
              </tr>
              <tr>
                <td>IFSC Code</td>
                <td>BARB0SALUMB</td>
              </tr>
              <tr>
                <td>Account Number</td>
                <td>34530200000444</td>
              </tr>
              <tr>
                <td>Branch Address</td>
                <td>SALUMBER BRANCH, SALUMBAR</td>
              </tr>
            </tbody>
          </table>
        </div>

      </div>
    </section>
  );
}
