
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/Logo.png'
import '../../app.css'
import '../../style.css'

import Auth from '../../utils/auth';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container text-center">

            <p className="small text-muted d-block">&copy; 2021 hungr </p>
            <p className="small text-muted d-block">
              Made with ❤️ by Backend to the Future
            </p>
           

   

      </div>
    </footer>
  );
};

export default Footer;