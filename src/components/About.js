import React from "react";
import '../styles/About.css';

export const About = () => {
  return (
    <>
      {/* ======= About Section ======= */}
      <section id="about" className="about-mf sect-pt4 route">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="box-shadow-full">
                <div className="row">
                  <div className="col-md-4">
                    <div className="row">
                      {/* <div className="col-sm-6 col-md-5">
                        <div className="about-img">
                          <img
                            src="/img/testimonial-2.jpg"
                            className="img-fluid rounded b-shadow-a"
                            alt="testimonial"
                          />
                        </div>
                      </div> */}
                      <div className="col-sm-6 col-md-7">
                        <div className="about-info">
                          <p>
                            <span className="title-s">Name: </span>{" "}
                            <span>Juan Sebastián</span>
                          </p>
                          <p>
                            <span className="title-s">Profile: </span>{" "}
                            <span>full stack developer</span>
                          </p>
                          <p>
                            {/* <span className="title-s">Email: </span>{" "}
                            <span>juasebasper@hotmail.es</span> */}
                          </p>
                          {/* <p>
                            <span className="title-s">Phone: </span>{" "}
                            <span>(617) 557-0089</span>
                          </p> */}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-8">
                    <div className="about-me pt-4 pt-md-0">
                      <div className="title-box-2">
                        <h5 className="title-left">About me</h5>
                      </div>
                      <p className="lead">
                      🌱Tecnólogo en Análisis y desarrollo de Sistemas de Información y Desarrollador Full-Stack junior con ganas de seguir aprendiendo y practicando en el ámbito del desarrollo web.
                        Me considero una persona responsable, honesta, con entera disposición, capacidad de seguimiento de instrucciones, presto a realizar y desempeñar actividades en equipo.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End About Section */}
    </>
  );
};
