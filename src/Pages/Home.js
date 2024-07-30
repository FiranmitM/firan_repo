import React from 'react';
import './Home.css'; // Import your CSS for styling

function Home() {
  return (
    <div className="home-page">
      <div className="hero-section">
        <h1>Welcome to My Website</h1>
        <p>Discover the work and research of Esayas G. Youhannes (PhD), a leading expert in Concrete Materials and Structures.</p>
        <a href="/About" className="learn-more">Learn More</a>
      </div>
      <div className="highlights">
        <div className="highlight-item">
          <h2>Research Expertise</h2>
          <p>Explore cutting-edge research in concrete materials, structural performance, and more.</p>
        </div>
        <div className="highlight-item">
          <h2>Publications</h2>
          <p>Access a wide range of publications in high-impact journals and conference proceedings.</p>
        </div>
        <div className="highlight-item">
          <h2>Professional Practice</h2>
          <p>Learn about involvement in high-rise buildings, mega projects, and development of building codes.</p>
        </div>
      </div>
    </div>
  );
}

export default Home;
