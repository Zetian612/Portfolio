import React, { useEffect, useRef } from "react";
import Typed from "typed.js";
import '../styles/Hero.css';

const Hero = () => {
  /**
     * Intro type effect
  */
	// Create reference to store the DOM element containing the animation
	const el = useRef(null);
  // Create reference to store the Typed instance itself
	const typed = useRef(null);

  useEffect(() => {
    const options = {
    	strings: [
        'Developer',
        'Freelancer',
        'Analyst',
      ],
      loop: true,
      typeSpeed: 100,
      backSpeed: 50,
      backDelay: 2000
    };
    
    // elRef refers to the <span> rendered below
    typed.current = new Typed(el.current, options);
    
    return () => {
      // Make sure to destroy Typed instance during cleanup
      // to prevent memory leaks
      typed.current.destroy();
    }
  }, [])
  return (
    <>
      {/* ======= Hero Section ======= */}
      <div
        id="hero"
        className="hero route bg-image"
        style={{ backgroundImage: "url(/img/endless-constellation.svg)" }}
      >
        <div className="overlay-itro" />
        <div className="hero-content display-table">
          <div className="table-cell">
            <div className="container">
              <p className="display-6 color-d">Hello, world!🌱​</p>
              <h1 className="hero-title mb-4">I am Juan Sebastián</h1>
              <p className="hero-subtitle">
                <span
                  className="typed"
                  ref={el}
                />
              </p>
              {/* <p class="pt-3"><a class="btn btn-primary btn js-scroll px-4" href="#about" role="button">Learn More</a></p> */}
            </div>
          </div>
        </div>
      </div>
      {/* End Hero Section */}
    </>
  );
};

export default Hero;
