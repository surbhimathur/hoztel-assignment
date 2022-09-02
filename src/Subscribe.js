import Balien from "../src/images/Balien.png";
import Bbitcoin from "../src/images/Bbitcoin.png";
import Bfacebook from "../src/images/Bfacebook.png";
import Btelegram from "../src/images/Btelegram.png";
import Btwitter from "../src/images/Btwitter.png";
import Byoutube from "../src/images/Byoutube.png";
import React from "react";
import logo from "../src/images/logo.png";

function Subscribe() {
  return (
    <section className="subscribe_section">
    <div className="subscribe">
      <div className="subscribe_details">
        <img src={logo} />
        <div className="features_text">
          <p>
            Subscribe to be informed about <br></br>tokens sale in advance
          </p>
        </div>

        <div className="email">
            <input type="email" placeholder="E-mail"></input>
            <button className="subscribe_button">Subscribe</button>
        </div>

        <div className="social_media_links">
        <img src={Bfacebook}/>
        <img src={Balien}/>
       <img src={Byoutube}/>
       <img src={Btwitter}/>
        <img src={Btelegram}/>
        <img src={Bbitcoin}/>
   
        </div>

        <div className="copyright">
            <p>PeerBlue.io © 2012 All rights reserved.</p>
        </div>
      </div>
    </div>
    </section>
  );
}

export default Subscribe;
