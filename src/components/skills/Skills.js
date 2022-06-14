import React, { useState, useEffect } from "react";
import { baseURL } from "../baseURL";
import axios from "axios";
import { Item } from "./Item";
import { Loader } from "../../utils/Loader";

export const Skills = () => {
  const [skill, setSkill] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get(`${baseURL}/api/skills`)
    .then(res => {
      setSkill(res.data);
      setLoading(false);
    }
    )
    .catch(err => console.log(err));
  }, []);

  return (
    <>
      {/* ======= Services Section ======= */}
      <section id="skills" className="services-mf pt-5 route">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="title-box text-center">
                <h3 className="title-a">Skills</h3>
                <p className="subtitle-a">
                  Here you can find all the skills I have acquired.
                </p>
                <div className="line-mf" />
              </div>
            </div>
          </div>
          <div className={`row ${loading ? 'justify-content-center' : ''}`}>
            {loading ? (
              <div className="text-center col-md-4 mb-4">
                <Loader />
              </div>
            ) : (
              skill.map((skill, index) => (
                <Item key={index} name={skill.name} icon={skill.icon} />
              ))
            )}
          </div>
        </div>
      </section>
      {/* End Services Section */}
    </>
  );
};
