import React from 'react'
import arrow from "../src/images/Arrow.png";
import big from "../src/images/big.png";
import docicon from "../src/images/docicon.png";
import global from "../src/images/global.png";
import rel from "../src/images/rel.png";
import usability from "../src/images/usability.png";

function Benefits() {
  return (
    <div className="benefits">
        <div className="benefits_list">
      
            <div className="benefits_first_row">
                <div className="global">
                    <img src={global}/>
                    <p>Global Coverage</p>
                </div>
                <div className="global">
                    <img src={big}/>
                    <p>Big Partnerships</p>
                </div>
            </div>
            <div className="benefits_first_row">
            <div className="global">
                <img src={rel}/>
                <p>Reliability</p>
            </div>
            <div className="global usability">
                <img src={usability}/>
                <p>Usability</p>
            </div>
            </div>
            
        </div>

        <div className="benefits_details">
        <div className="about_data_heading benefits_heading">
        <img src={arrow} />
        <h1>Benefits for Everyone</h1>  
      </div>

      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a sed arcu aliquam eleifend. Maecenas fermentum, lacus quis lobortis et gravida, quam arcu dapibus dolor, quis placerat est eget.</p>
      <p>Donec odio odio, congue in volutpat id, dignissim id lectus. Cras finibus ligula erat, a tristique lacus elementum. Vivamus volutpat hendrerit nisl ac rutrum. Vivamus ultrices dapibus lacus.</p>
      <button className="whitepaper"><img src={docicon}/>Whitepaper</button>
        
        </div>
    </div>
  )
}

export default Benefits