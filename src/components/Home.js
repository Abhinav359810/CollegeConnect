import React from 'react';
import './CSS/Home.css';
import backgroundImage from '../assets/backgroundpic.jpg';

function Home() {
  return (
    <section id="home" className="home">
      <div className="content">
        <h1>YOUR EDUCATION - YOUR FUTURE!</h1>
        <p>Our University has ample opportunities for educational, educational, and research work.</p>
        <button className="read-more">READ MORE</button>
      </div>
      <div className="image-container">
        <img src={backgroundImage} alt="Graduation illustration" />
      </div>
    </section>
  );
}

export default Home;
