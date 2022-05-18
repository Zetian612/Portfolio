import React from "react";

export const Project = props => {
  return (
    <div className="col-md-4">
      <div className="work-box">
        <a
          href={`http://portfolio-backend.test:8081/images/projects/${props.img}`}
          data-gallery="portfolioGallery"
          className="portfolio-lightbox"
        >
          <div className="work-img">
            <img src={`http://portfolio-backend.test:8081/images/projects/${props.img}`} alt="Work" className="img-fluid"/>
          </div>
        </a>
        <div className="work-content">
          <div className="row">
            <div className="col-sm-8">
              <h2 className="w-title">{props.title}</h2>
              <div className="w-more">
                <span className="w-ctegory">{props.category}</span> /{" "}
                <span className="w-date">{props.date}</span>
              </div>
            </div>
            <div className="col-sm-4">
              <div className="w-like">
                <a href="/">
                  {" "}
                  <span className="bi bi-plus-circle" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
