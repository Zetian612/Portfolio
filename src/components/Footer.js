import React, { useState, useEffect } from "react";
import '../styles/Footer.css';

export const Footer = () => {
  const [preloader, setPreloader] = useState(true);
  const [backtotop, setBacktotop] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setPreloader(false);
    }, 1000);
    toggleBacktotop(); 
  });

   /**
   * Preloader
   */
  // const preloaderDelay = data => {
  //   console.log("preloader");
  //   if (preloader) {
  //     window.addEventListener('load', () => {
  //       setPreloader(false);
  //     }
  //     );
  //   }
  // }

   /**
   * Back to top button
   */
  const toggleBacktotop = () => {
    if (!backtotop) {
      const toggleBacktotop = () => {
        if (window.scrollY > 100) {
          setBacktotop(true);
        } else {
          setBacktotop(false);
        }
      }
      window.addEventListener('load', toggleBacktotop)
      window.addEventListener('scroll', toggleBacktotop)

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
                  © Copyright <strong>DevFolio</strong>. All Rights Reserved
                </p>
                <div className="credits">
                 
                  Designed by {""}
                  <a href="/">ZetDev 💜​</a>
                  <div className="socials">
                        <ul>
                          <li>
                            <a href="/">
                              <span className="ico-circle">
                                <i className="bi bi-twitter" />
                              </span>
                            </a>
                          </li>
                          <li>
                          <span className="ico-circle">
                            <a href="/">
                                <i className="bi bi-linkedin" />
                            </a>
                            </span>
                          </li>
                        </ul>
                      </div>
                </div>
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
     <a href="#" className={`back-to-top d-flex align-items-center justify-content-center ${ backtotop ? 'active' : '' }`}><i className="bi bi-arrow-up-short" /></a> 

    </>
  );
};
