
import React from 'react';
import { Link } from 'react-router-dom';
import '../../app.css'
import '../../style.css'


import Auth from '../../utils/auth';

const Footer = () => {
  return (

<footer className="footer text-center text-lg-start text-muted" id="footer"> 
    <div>
     
      <div className="row mt-3">
 
        <div className="description col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
          <h6 className="text-uppercase fw-bold mb-4">
            <i className="me-3"></i>Hungr
          </h6>
          <p className="pl-4 pr-4">
            A fullstack MERN apllication designed to help users find restaurants to visit with their friends.
          </p>
         <p className="pt-4"> © 2021 Copyright: www.hunger.com</p>
        </div>
   
        <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
       
          <h6 className="text-uppercase fw-bold mb-4">
            TECHNOLOGY
          </h6>
          <p>
            Mongo DB
          </p>
          <p>
            Express
          </p>
          <p>
           React
          </p>
          <p>
           Node JS
          </p>
        </div>
  

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
                  <Link className="footerItem" to="/restaurants">
                  <p>
                  Find Restaurant
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
    </div>
</footer>

  );
};

export default Footer;