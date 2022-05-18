import React, { useEffect, useState } from "react";
import GLightbox from "glightbox";
import "../../styles/Portfolio.css";
import { Project } from "./Project";
import { baseURL } from "../baseURL";
import axios from "axios";
export const Portfolio = () => {
  const [project, setProject] = useState([]);
  /**
   * Initiate portfolio lightbox
   */
  useEffect(() => {
    GLightbox({
      selector: ".portfolio-lightbox",
    });
  });

  useEffect(() => {
    getProjects();
  }, []);


  const getProjects = () => {
    axios.get(`${baseURL}/api/projects`)
      .then(res => {
        setProject(res.data);
      })
      .catch(err => console.log(err));
  };

  return (
    <>
      {/* ======= Portfolio Section ======= */}
      <section id="work" className="portfolio-mf sect-pt4 route">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="title-box text-center">
                <h3 className="title-a">Portfolio</h3>
                <p className="subtitle-a">
                  Here you can see the portfolio of my work.
                </p>
                <div className="line-mf" />
              </div>
            </div>
          </div>
          <div className="row">
            {project.map((project, index) => (
              <Project
                key={index}
                title={project.name}
                category={project.category}
                date={project.date}
                img={project.image_url}
              />
            ))}
          </div>
        </div>
      </section>
      {/* End Portfolio Section */}
    </>
  );
};
