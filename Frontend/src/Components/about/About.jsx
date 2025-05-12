import React from 'react';
import './About.css';
import amzOff from '../../assets/amazonOffice.png';

function About() {
  return (
    <div className="m-2 m-sm-5">
      <h1 className="text-center mb-4 mt-4">About Us</h1>
      <div className="row justify-content-center">
        <div className="col-12 col-md-6 text-center">
          <img src={amzOff} alt="Click N Cart Office" className="img-fluid mb-4" />
        </div>
        <div className="col-12 col-md-10">
          <p>
            <strong>Click N Cart</strong> is a modern e-commerce platform dedicated to delivering a seamless and convenient online shopping experience. With a wide-ranging catalog including electronics, fashion, home essentials, health & beauty products, baby supplies, and more, we serve as a one-stop destination for quality and affordability.
          </p>
          <p>Founded with a vision to simplify digital retail, Click N Cart focuses on:</p>
          <ul>
            <li>User-friendly shopping through a clean and intuitive interface</li>
            <li>Affordable pricing with regular deals and discounts</li>
            <li>Fast delivery services via reliable logistics partners</li>
            <li>Secure payments, including cards, UPI, and cash on delivery</li>
            <li>Responsive customer service for queries and returns</li>
          </ul>
          <p>
            We partner with trusted brands and suppliers to ensure product authenticity. Whether you're shopping for essentials or unique gifts, Click N Cart makes online shopping smooth, safe, and enjoyable.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
