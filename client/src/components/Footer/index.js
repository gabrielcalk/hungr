
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/Logo.png'
import '../../app.css'
import '../../style.css'

import Auth from '../../utils/auth';

const Footer = () => {
  return (
    <footer className="footer pt-1 p-1">
      <div className="container text-center">

            <p className="small text-muted d-block">&copy; 2021 hungr </p>
            <p className="small text-muted">
              Made with ❤️ by Backend to the Future
            </p>
            <h6> Designed by Gabriel Cavalcante, Meredith Coyne, Brent Graves, Faith Green, and Fenix Sampson</h6>
            <a href="https://github.com/gabrielcalk/hungr">
            <i className="fab fa-github">
                <span style={{ marginLeft: "10px" }}>
                  "Click Here" to stay in contact
                </span>
              </i>
            </a>

        <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
      
          <h6 className="text-uppercase fw-bold mb-4">
            Useful links
          </h6>
          <div>
          {Auth.loggedIn() ? (
                <>
                  <Link className="footerItem" to="/user">
                  <p>
                 Profile
                 </p>
                  </Link>
                  <Link className="footerItem" to="/">
                  <p onClick={Auth.logout}>
                  Sign Out
                 </p>
                  </Link>
                </>
              ) : (
                <>
                  <Link className="footerItem" to="/">
                  <p>
                  Sign In
                 </p>
                  </Link>
                  <Link className="footerItem" to="/join">
                  <p>
                  Join
                 </p>
                  </Link>
                  <Link className="footerItem" to="/">
                  <p>
                  About
                 </p>
                  </Link>
                </>
              )}         
        </div>
        </div>
   
        <div className="gitSection pb-4 col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
      
          <h6 className="text-uppercase fw-bold mb-4">
            Contact the Developers
          </h6>
          <p><i className="fas fa-github me-3"></i>Gabriel Causin</p>
          <p><i className="fas fa-github me-3"></i>Meredith Coyne</p>
          <p><i className="fas fa-github me-3"></i>Brent Graves</p>
          <p><i className="fas fa-github me-3"></i>Faith Green</p>
          <p><i className="fas fa-github me-3"></i>Fenix Sampson</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;