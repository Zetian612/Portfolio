import React from "react";
import '../styles/Counter.css';

export const Counter = () => {
  return (
    <>
      {/* ======= Counter Section ======= */}
      <div
        className="section-counter paralax-mf bg-image"
        style={{ backgroundImage: "url(/img/counters-bg.jpg)" }}
      >
        <div className="overlay-mf" />
        <div className="container position-relative">
          <div className="row">
            <div className="col-sm-6 col-lg-6">
              <div className="counter-box counter-box pt-4 pt-md-0">
                <div className="counter-ico">
                  <span className="ico-circle">
                    <i className="bi bi-check" />
                  </span>
                </div>
                <div className="counter-num">
                  <p
                    data-purecounter-start={0}
                    data-purecounter-end={450}
                    data-purecounter-duration={1}
                    className="counter purecounter"
                  >2</p>
                  <span className="counter-text">WORKS COMPLETED</span>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-lg-6">
              <div className="counter-box pt-4 pt-md-0">
                <div className="counter-ico">
                  <span className="ico-circle">
                    <i className="bi bi-journal-richtext" />
                  </span>
                </div>
                <div className="counter-num">
                  <p
                    data-purecounter-start={0}
                    data-purecounter-end={25}
                    data-purecounter-duration={1}
                    className="counter purecounter"
                  >2</p>
                  <span className="counter-text">YEARS OF EXPERIENCE</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Counter Section */}
    </>
  );
};
