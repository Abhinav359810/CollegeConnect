import React from 'react';
import './CSS/Home.css';
import backgroundImage from '../assets/backgroundpic.jpg';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <section id="home" className="home">
      <div className="content">
        <h1>YOUR EDUCATION - YOUR FUTURE!</h1>
        <p>Our University has ample opportunities for educational, educational, and research work.</p>
        {/* Updated button to link to the About page */}
        <Link to="/about">
          <button className="read-more">READ MORE</button>
        </Link>
      </div>
      <div className="image-container">
        <img src={backgroundImage} alt="Graduation illustration" />
      </div>
    </section>
  );
}

export default Home;
