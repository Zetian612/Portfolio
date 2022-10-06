import React, { useEffect, useState } from "react";
import { on, select, scrollto } from "../utils/Main";
import "../styles/Header.css";

const Header = () => {
  const [headerScrolleded, setHeaderScrolleded] = useState(false);

  useEffect(() => {
    navbarlinksActive();
    headerScrolled();
   
  });

  useEffect(() => {
    navMobile();
    navMobileClick();
  })
  /**
   * Navbar links active state on scroll
   */
  const navbarlinksActive = () => {
    let navbarlinks = [...document.querySelectorAll("#navbar .scrollto")];
    let position = window.scrollY + 200;
    navbarlinks.forEach((navbarlink) => {
      if (!navbarlink.hash) return;
      let section = document.querySelector(navbarlink.hash);
      if (!section) return;
      if (
        position >= section.offsetTop &&
        position <= section.offsetTop + section.offsetHeight
      ) {
        navbarlink.classList.add("active");
      } else {
        navbarlink.classList.remove("active");
      }
    });
  };
  window.addEventListener("load", navbarlinksActive);
  window.addEventListener("scroll", navbarlinksActive);
  /**
   * Toggle .header-scrolled class to #header when page is scrolled
   */

  const headerScrolled = () => {
    if (!headerScrolleded) {
      if (window.scrollY > 100) {
        setHeaderScrolleded(true);
      } else {
        setHeaderScrolleded(false);
      }
    }
    window.addEventListener("load", headerScrolled);
    window.addEventListener("scroll", headerScrolled);
  };

  
  /**
   * Mobile nav toggle
   */
  const navMobile = () => {
   on('click', '.mobile-nav-toggle', function(e){
    document.querySelector('#navbar').classList.toggle('navbar-mobile')
    this.classList.toggle('bi-list')
    this.classList.toggle('bi-x')
  })
  }
  /**
   * Scrool with ofset on links with a class name .scrollto
   */
  const navMobileClick = () => {
  on('click', '.scrollto', function(e) {
    if (select(this.hash)) {
      e.preventDefault()

      let navbar = select('#navbar')
      if (navbar.classList.contains('navbar-mobile')) {
        navbar.classList.remove('navbar-mobile')
        let navbarToggle = select('.mobile-nav-toggle')
        navbarToggle.classList.toggle('bi-list')
        navbarToggle.classList.toggle('bi-x')
        
      }
      scrollto(this.hash)
    }
  }, true)
  }
  return (
    <>
      {/* ======= Header ======= */}
      <header
        id="header"
        className={`fixed-top ${headerScrolleded ? "header-scrolled" : ""}`}
      >
        <div className="container d-flex align-items-center justify-content-between">
          <h1 className="logo">
            <a href="index.html">ZetDev6</a>
          </h1>
          {/* Uncomment below if you prefer to use an image logo */}
          {/* <a href="index.html" className="logo"><img src="assets/img/logo.png" alt="logo" className="img-fluid" /></a> */}

          <nav id="navbar" className="navbar">
            <ul>
              <li>
                <a className="nav-link scrollto active" href="#hero">
                  Home
                </a>
              </li>
              <li>
                <a className="nav-link scrollto" href="#about">
                  About
                </a>
              </li>
              <li>
                <a className="nav-link scrollto" href="#skills">
                  Skills
                </a>
              </li>
              <li>
                <a className="nav-link scrollto " href="#work">
                  Work
                </a>
              </li>
              {/* <li>
                <a className="nav-link scrollto" href="#contact">
                  Contact
                </a>
              </li> */}
            </ul>
            <i className="bi bi-list mobile-nav-toggle" />
          </nav>
          {/* .navbar */}
        </div>
      </header>
      {/* End Header */}
    </>
  );
};
export default Header;
