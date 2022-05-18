import React from "react";
import '@fortawesome/fontawesome-free/js/all.js';

export const Item = props => {
  return (
    <div className="col-md-4">
      <div className="service-box">
        <div className="service-ico">
          <span className="ico-circle">
            <i className={props.icon} style={{ width: '55%', height: '55%'}}></i>
          </span>
        </div>
        <div className="service-content">
          <h2 className="s-title">{props.name}</h2>
          {/* <p className="s-description text-center">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Magni adipisci eaque autem fugiat! Quia, provident vitae!
                    Magni tempora perferendis eum non provident.
                  </p> */}
        </div>
      </div>
    </div>
  );
};
