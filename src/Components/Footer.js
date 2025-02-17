import React from "react";
import "../Style.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-left">
          <div className="foot-left2">
          <h2>Have a project idea! Let’s work together.</h2>
          <p>
            Nunc vel metus cursus, tempor ipsum sit amet, rutrum justo. Maecenas
            tincidunt imperdiet magna, et porta libero eleifend vel.
          </p>
          <a href="/Hire"><button className="footer-button">Get A Quote</button></a>

          </div>
        </div>
        <div className="footer-right">
 
        <div className="social1">
        <a href="#">  <img src="foot1.svg" alt="facebook"></img></a>
        <a href="#">  <img src="foot2.svg" alt="Twitter"></img></a> 
        <a href="https://www.linkedin.com/company/hatchcoders/">  <img src="foot3.svg" alt="Linkedin"></img></a>
        <a href="#">   <img src="foot4.svg" alt="Instagram"></img></a>
        </div>
        <hr></hr>

       <div className="footer-links">
            <div>
              <h4>Quick Links</h4>
              <ul>
                <li>
                  <a href="#portfolio">Portfolio</a>
                </li>
                <li>
                  <a href="#about">About</a>
                </li>
                <li>
                  <a href="#services">Services</a>
                </li>
                <li>
                  <a href="#pricing-plans">Pricing Plans</a>
                </li>
                <li>
                  <a href="#contact">Contact</a>
                </li>
              </ul>
            </div>
            <div>
              <h4>Services</h4>
              <ul>
                <li>
                  <a href="#ui-ux-design">UI/UX Design</a>
                </li>
                <li>
                  <a href="#mobile-app-development">Mobile App Development</a>
                </li>
                <li>
                  <a href="#web-app-development">Web App Development</a>
                </li>
                <li>
                  <a href="#game-design">Game Design 2D/3D</a>
                </li>
                <li>
                  <a href="#game-development">Game Development</a>
                </li>
                <li>
                  <a href="#web-game-development">Web Game Development</a>
                </li>
              </ul>
            </div>
            <div>
              <h4>Expertise</h4>
              <ul>
                <li>
                  <a href="#ecommerce-development">E-commerce App Development</a>
                </li>
                <li>
                  <a href="#blockchain-development">Blockchain App Development</a>
                </li>
                <li>
                  <a href="#fintech-development">Fintech App Development</a>
                </li>
                <li>
                  <a href="#ar-vr-development">AR/VR App Development</a>
                </li>
                <li>
                  <a href="#grocery-app-development">Grocery Delivery App Development</a>
                </li>
                <li>
                  <a href="#fitness-app-development">Fitness Delivery App Development</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
      
        <p>Copyright © 2025 hatchcoders — All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
