
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


  
  
      </div>
    </footer>
  );
};

export default Footer;