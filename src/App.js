import '@fortawesome/fontawesome-free/css/all.min.css';
import React from 'react';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTiktok, faLinkedin, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Signup from './Pages/SignUp';
import Login from './Pages/Login';
import Service from './Pages/Service';
import Header from './Header';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/About" element={<About />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/SignUp" element={<Signup />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/Service" element={<Service />} />
          </Routes>
          <Body />
        </main>
        <Footer />
      </div>
    </Router>
  );
}

function Body() {
  return (
    <div className="App-body">
      <div className="photo">
        <img src="/dr_photo.png" alt="Description" />
      </div>
      <div className="description">
        <div className="text-background">
          <h1>Esayas Gebreyouhannes Ftwi (PhD)</h1>
          <h2>Welcome to my website</h2>
          <p><a href="/about">Read More</a></p>
        </div>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <footer className="App-footer">
      <ul className="social-media">
        <li><a href="https://www.facebook.com"><FontAwesomeIcon icon={faFacebook} /></a></li>
        <li><a href="https://www.tiktok.com"><FontAwesomeIcon icon={faTiktok} /></a></li>
        <li><a href="https://www.linkedin.com/in/esayas-g-yohannes-3640732a/?originalSubdomain=et"><FontAwesomeIcon icon={faLinkedin} /></a></li>
        <li><a href="https://www.twitter.com"><FontAwesomeIcon icon={faTwitter} /></a></li>
        <li><a href="https://www.youtube.com"><FontAwesomeIcon icon={faYoutube} /></a></li>
      </ul>
    </footer>
  );
}

export default App;
