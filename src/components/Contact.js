// src/components/Contact.js
import React from 'react';
import './CSS/Contact.css';

function Contact() {
  return (
    <section id="contact" className="contact">
      <h2>Contact Us</h2>
      <div className="contact-info">
        <p>
          <span role="img" aria-label="email">📧</span> Email: 
          <a href="mailto:contact@collegeconnect.com">contact@collegeconnect.com</a>
        </p>
        <p>
          <span role="img" aria-label="phone">📞</span> Phone: 
          <a href="tel:+919999999999">+91-9999999999</a>
        </p>
      </div>
      <footer>
        <p>Developed with <span role="img" aria-label="love">❤️</span> by the CollegeConnect team</p>
      </footer>
    </section>
  );
}

export default Contact;
