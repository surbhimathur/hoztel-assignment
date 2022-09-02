import React from 'react'
import arrow from "../src/images/Arrow.png";

function Roadmap() {
  return (
    <div className="roadmap">
        <div className="roadmap_data_heading">
        <img src={arrow} />
        <h1>Roadmap</h1>
      </div>

      <div className="features_text">
        <p>
        This timeline details our funding and <br></br>development goals.
        </p>
      </div>

      <div className="roadmap_details">
      
      <div className="roadmap_data1">
      
      <div className="july_2022">
        <p id="july_heading">July 2022</p>
        <p>V1 Beta Launch </p>
        <p id="bsc">On BSC Mainnet</p>
      </div>
      <hr className="left_hr"></hr>
      <div className="divider"></div>
      <hr className="right_hr"></hr>
      <div className="june_2022">
        <p id="july_heading">June 2022</p>
        <p>PBEX V1 Ready</p>
      </div>
    </div>
        
    <div className="roadmap_data1">
      
      <div className="july_2022">
        <p id="july_heading">October 2022</p>
        <p>1 Inch Integration </p>
        <p id="bsc">+ IFO Module Launch</p>
      </div>
      <hr className="left_hr"></hr>
      <div className="divider divider_grey"></div>
      <hr className="right_hr sept_hr"></hr>
      <div className="june_2022 sept">
        <p id="july_heading">September 2022</p>
        <p>Security Audits</p>
      </div>
    </div>

    
           <div className="roadmap_data1">
      
      <div className="july_2022">
        <p id="july_heading">December  2022</p>
        <p>Ox  Integration</p>
        <p id="bsc">+ Polygon Launch</p>
      </div>
      <hr className="left_hr"></hr>
      <div className="divider divider_grey"></div>
      <hr className="right_hr sept_hr"></hr>
      <div className="june_2022 sept">
        <p id="july_heading">November 2022</p>
        <p>Limit Order</p>
        <p>+ Polygon Chain Integration</p>
      </div>
    </div>

 

    <div className="roadmap_data1">
      
      <div className="july_2022">
        <p id="july_heading">March 2022</p>
        <p>V2 Yield Farming</p>
        <p id="bsc">Launched</p>
      </div>
      <hr className="left_hr"></hr>
      <div className="divider divider_grey"></div>
      <hr className="right_hr sept_hr"></hr>
      <div className="june_2022 sept">
        <p id="july_heading">January 2022</p>
        <p>V2 Liquidity Provisioning</p>
        <p>Launched</p>
      </div>
    </div>

     <div className="roadmap_data1">
     <div className="july_2022 roadmap_last_data">
       
      </div>
      <hr className="left_hr" id="last_hr"></hr>
      <div className="divider divider_grey last_divider"></div>
      <hr className="right_hr sept_hr"></hr>
      <div className="june_2022 sept">
        <p id="july_heading">April 2022</p>
        <p>OTC + Ramp Integration</p>
       
      </div>
    </div>

    
      </div>


      <div className="mobile_roadmap">
        <div className="mobile_divider">
          <div className="full_divider"></div>
          <div className="rest_divider"></div>
        </div>

        <div className="mobile_roadmap_details">
        <div className="june_2022 mobile_june">
        <p id="july_heading">May June 2022</p>
        <p>PBEX V1 Ready</p>
      </div>

      <div className="july_2022 mobile_july">
        <p id="july_heading">July 2022</p>
        <p>V1 Beta Launch </p>
        <p id="bsc">On BSC Mainnet</p>
      </div>

      <div className="june_2022 sept mobile_june">
        <p id="july_heading">September 2022</p>
        <p>Security Audits</p>
      </div>

      <div className="july_2022 mobile_july">
        <p id="july_heading">October 2022</p>
        <p>1 Inch Integration </p>
        <p id="bsc">+ IFO Module Launch</p>
      </div>
      
      <div className="june_2022 sept mobile_june">
        <p id="july_heading">November 2022</p>
        <p>Limit Order</p>
        <p>+ Polygon Chain Integration</p>
      </div>

      <div className="july_2022 mobile_july">
        <p id="july_heading">December  2022</p>
        <p>Ox  Integration</p>
        <p id="bsc">+ Polygon Launch</p>
      </div>

      <div className="june_2022 sept mobile_june">
        <p id="july_heading">January 2022</p>
        <p>V2 Liquidity Provisioning</p>
        <p>Launched</p>
      </div>
      
      <div className="july_2022 mobile_july">
        <p id="july_heading">March 2022</p>
        <p>V2 Yield Farming</p>
        <p id="bsc">Launched</p>
      </div>
      <div className="june_2022 sept mobile_june">
        <p id="july_heading">April 2022</p>
        <p>OTC + Ramp Integration</p>
       
      </div>
        </div>
      </div>
    </div>
  )
}

export default Roadmap