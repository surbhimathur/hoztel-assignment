import Benefits from "./Benefits";
import Features from "./Features";
import React from 'react'
import Roadmap from "./Roadmap";
import Subscribe from "./Subscribe";
import Team from "./Team";
import about from "../src/images/about.jpg";
import arrow from "../src/images/Arrow.png";

function About() {
  return (
    <section className="website_info">
      <div className="About">
      
      <div className="about_image">
      <img src={about}/>
      </div>

      <div className="about_data">
        <div className="about_data_heading ">
            <img src={arrow}/>
            <h1>What is PBEX?</h1>
        </div>
        <p> PBX is the most technically advanced & user friendly decentralized finance solutions suite. 
Decentralised Crypto Assets swapping & utilization tools should not be hard to understand 
and consume. With PBX, we aim to super simply crypto assets on chain DEFI use cases with
easy to experience tools.</p>
<button className="join about_join_button">Join Private Sale</button>
      </div>
    
        </div>
        <Features/>
        <Roadmap/>
        <Benefits/>
        <Team/>
        <Subscribe/>
    </section>
    
  )
}

export default About