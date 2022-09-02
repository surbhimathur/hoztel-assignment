import React from 'react'
import adarsh from "../src/images/adarsh.jpg";
import arrow from "../src/images/Arrow.png";
import mischelle from "../src/images/mischelle.jpg";
import sid from "../src/images/sid.png";
import vikas from "../src/images/vikas.png";

function Team() {
  return (
    <section className="team_section">
    <div className="team">
        <div className="about_data_heading team_heading">
        <img src={arrow} />
        <h1>PBEX Team</h1>  
      </div>

      <div className="features_text team_text">
        <p>
        Let us introduce you to the team that <br></br>will make it all happen.
        </p>
      </div>

      <div className="team_members">
        <div className="member">
            <img src={sid}/>
            <h2>SIDDHARTH JAIN</h2>
            <p>DIRECTOR</p>
        </div>
        <div className="member">
            <img src={vikas}/>
            <h2>VIKAS GUPTA</h2>
            <p>(TECHNOLOGY ADVISOR / LEAD)</p>
        </div>
        <div className="member">
            <img src={adarsh}/>
            <h2>ADARSH J</h2>
            <p>FINANCE LEAD</p>
        </div>
        <div className="member">
            <img src={mischelle}/>
            <h2>MISCHELLE</h2>
            <p>COMMUNITY MANAGER</p>
        </div>
      </div>
    </div>
    </section>
  )
}

export default Team