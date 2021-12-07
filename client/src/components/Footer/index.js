
import React from 'react';
import { Link } from 'react-router-dom';
import '../../app.css'
import '../../style.css'


import Auth from '../../utils/auth';

const Footer = () => {
  return (

<footer className="footer text-center text-lg-start text-muted" id="footer"> 

  <section className="">
    <div className="container text-center text-md-start mt-5">
     
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
  </section>
 
</footer>
    // <footer className="footer pt-5 p-5">
    //   <div className="container text-left">
    //     <div className="row gy-4 flex-shrink-0">
    //       <div className="col-lg-4 col-md-6">
    //         <p className="small text-muted d-block">&copy; 2021 hungr </p>
    //         <p className="small text-muted">
    //           Made with{' '} <img className="footer-heart" alt="8-Bit Heart"></img>{' '}by Backend to the Future
    //         </p>
    //       </div>
    //       <div className="col-lg-3 col-md-6 text-left">
    //         <h5 className="text-white mb-3">Quick Links</h5>
    //         <div>
              // {Auth.loggedIn() ? (
              //   <>
              //     <Link className="footerItem" to="/">
              //     <h6>Profile</h6>
              //     </Link>
              //     <Link className="footerItem" to="/">
              //     <h6>Find Restaurant</h6>
              //     </Link>
              //     <Link className="footerItem" to="/">
              //     <h6>Sign Out</h6>
              //     </Link>
              //   </>
              // ) : (
              //   <>
              //     <Link className="footerItem" to="/">
              //     <h6>Sign In</h6>
              //     </Link>
              //     <Link className="footerItem" to="/join">
              //     <h6>Join</h6>
              //     </Link>
              //     <Link className="footerItem" to="/">
              //     <h6>About</h6>
              //     </Link>
              //     <Link className="footerItem" to="/">
              //     <h6>Contact</h6>
              //     </Link>
              //   </>
              // )}
    //         </div>
    //       </div>
    //       <div className="col-lg-4 col-md-6 col-1-xs">
    //             <h5 className="text-white mb-3">Newsletter</h5>
    //             <p className="small text-muted">Want to stay up to date on this project? Insert your email below to join our newsletter mailing list!</p>
    //             <form action="#">
    //                 <div className="newsletter input-group mb-3 p-10">
    //                   <input className="form-control" type="text" placeholder="Email" aria-label="Recipient's username" aria-describedby="button-addon2"></input>
    //                   <button className="newsletterBtn btn" id="button-addon2" type="button"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="12" fill="currentColor" className="bi bi-send" viewBox="0 0 16 16">
    //                     <path fillRule="evenodd" d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576 6.636 10.07Zm6.787-8.201L1.591 6.602l4.339 2.76 7.494-7.493Z"/>
    //                     </svg>
    //                   </button>
    //                 </div>
    //             </form>
    //         </div>
    //     </div>
    //   </div>
    // </footer>
  );
};

export default Footer;