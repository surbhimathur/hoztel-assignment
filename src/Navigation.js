import React from 'react'
import alien from "../src/images/alien.png";
import facebook from "../src/images/facebook.png";
import logo from "../src/images/logo.png";
import {menu} from "../src/Constants";
import msg from "../src/images/msg.png";
import twitter from "../src/images/Twitter.png";
import youtube from "../src/images/youtube.png";

function Navigation() {
  return (
   <section className="navigation">
    <nav>
        <img src={logo} alt="logo" id="logo"/>
        <div className="hamburger">
            <div></div>
            <div></div>
            <div></div>
        </div>
        <div className="menu">
            <ul className="menu_items">
            {menu.map((list)=>(<li>{list}</li>))}
            </ul>
        </div>
    </nav>

<div className="hero">
     <div className="hero_box">
        <h1><span>Swap, Earn & Grow</span> Crypto Assets Like Never Before</h1>
        <div className="hero_data">
        <button className="join">Join Private Sale</button>
        <div className="price">
        <div className="price_heading">
        <p className="current"> Current Rate:</p>
        <p className="current"> USD raised:</p>
        </div>
        <div className="price_number">
       <p> 1 ETH = 500 PBE </p>
         <p> 2.5 USD</p>   
        </div>
      
        </div>
        </div>
       
    </div>

    <div className="social_icons">
    
        <img src={facebook}/>
        <img src={alien}/>
        <img src={youtube}/>
        <img src={twitter}/>
        <img src={msg}/>
    
        
    </div>
</div>
   
   </section>
  )
}

export default Navigation