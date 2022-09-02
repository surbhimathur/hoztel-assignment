import React from "react";
import arrow from "../src/images/Arrow.png";
import {featuresList} from "../src/Constants";

function Features() {
  return (
    <div className="features">
      <div className="about_data_heading features_heading">
        <img src={arrow} />
        <h1>Features of PBEX?</h1>
      </div>

      <div className="features_text">
        <p>
          Brings together merchants and affiliates without brokers and uses
          smart contracts to ensure transparent and fair deals
        </p>
      </div>

      <div className="features_list">
      {featuresList.map((feature)=>(
        <div className="feature_details">
          <h1>{feature.heading}</h1>
          <p>
           {feature.text}
          </p>
        </div>
      ))}
        
      </div>
    </div>
  );
}

export default Features;
