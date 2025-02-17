import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);
  const location = useLocation();

  const handleNavCollapse = (e) => {
    e.preventDefault();
    setIsNavCollapsed(!isNavCollapsed);
  };

  const closeNav = () => setIsNavCollapsed(true);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        {/* Logo on the left */}
        <Link className="navbar-brand" to="/" onClick={closeNav}>

       <img src={process.env.PUBLIC_URL + '/Logo1.png'} alt="Logo" style={{ height: '40px' }} />

        </Link>

        {/* Navbar Toggler */}
        <button
          className="navbar-toggler"
          type="button"
          aria-controls="navbarScroll"
          aria-expanded={!isNavCollapsed}
          aria-label="Toggle navigation"
          onClick={handleNavCollapse}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar Menu */}
        <div className={`${isNavCollapsed ? 'collapse' : ''} navbar-collapse`} id="navbarScroll">
          <ul className="navbar-nav mx-auto my-2 my-lg-0" style={{ '--bs-scroll-height': '100px' }}>
            
            <li className="nav-item">
              <Link className={`nav-link hover-effect ${location.pathname === '/aboutus' ? 'active' : ''}`} to="/aboutus" onClick={closeNav}>About Us</Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link hover-effect ${location.pathname === '/Service' ? 'active' : ''}`} to="/Service" onClick={closeNav}>Services</Link>
            </li>

            <li className="nav-item">
              <Link className={`nav-link hover-effect ${location.pathname === '/casestudies' ? 'active' : ''}`} to="/#" onClick={closeNav}>Case Studies</Link>
            </li>

            <li className="nav-item">
              <Link className={`nav-link hover-effect ${location.pathname === '/blog' ? 'active' : ''}`} to="/#" onClick={closeNav}>Blog</Link>
            </li>

            <li className="nav-item">
              <Link className={`nav-link hover-effect ${location.pathname === '/howitworks' ? 'active' : ''}`} to="/#" onClick={closeNav}>How it Works</Link>
            </li>

            <li className="nav-item">
              <Link className={`nav-link hover-effect ${location.pathname === '/Hire' ? 'active' : ''}`} to="Hire" onClick={closeNav}>Hire</Link>
            </li>

          </ul>

          {/* Contact Us Button on the Right */}
          <div className="d-flex">
            <Link className="btn btn-primary1 " to="/Hire" onClick={closeNav}>Contact Us</Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;



