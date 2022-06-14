import React, { useState, useEffect } from "react";
import '../styles/Footer.css';

export const Footer = () => {
  const [preloader, setPreloader] = useState(true);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setPreloader(false);
   window.addEventListener('scroll', toggleVisibility);

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    }

  }
  , []);

   /**
   * Back to top button
   */
  const toggleVisibility = () => {
    if (window.scrollY > 100) {
      setIsVisible(true);
    }
    else {
      setIsVisible(false);
    }
  }

  return (
    <>
      {/* ======= Footer ======= */}
      <footer>
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="copyright-box">
                <p className="copyright">
                  Designed by <strong>ZetDev</strong>💜
                </p>

              </div>
            </div>
          </div>
        </div>
      </footer>
      {/* End  Footer */}
      {
        preloader ? <div id="preloader"></div> : ''
      }
      {/* eslint-disable-next-line  */}
     <a href="#" className={`back-to-top d-flex align-items-center justify-content-center ${ isVisible ? 'active' : '' }`}><i className="bi bi-arrow-up-short" /></a> 

    </>
  );
};
