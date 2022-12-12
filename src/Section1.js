import React from 'react'
import imageSrc from './images/14.png'
import imageSrc1 from './images/twitter.png'
import imageSrc2 from "./images/instagram (1).png"
import "./styles.css"
import imageSrc3 from "./images/facebook.png" 
import imageSrc4 from "./images/linkedin.png"
 import imageSrc5 from "./images/pexels-rfstudio-3819572.jpg"

const Section1 = ()=>(
    <section className="section-1">
    <img src={imageSrc} alt="font" className="creative-font"/>
    <p className="ingredient">is our <br/> ingredient.</p>
        <div>
        <img src={imageSrc5} alt="lady" class="lady"/>
        </div>
   
    <div className="social-icons">
        <div className="icon-container">
            <img src={ imageSrc1} alt="twitter" className="icon-links" color="black"/>
            <img src={imageSrc2} alt="instagram" className="icon-links"/>
            <img src={ imageSrc3} alt="facebook" className="icon-links"/>
            <img src={imageSrc4} alt="linkedin" className="icon-links"/>
        </div>
    </div>
    <button className="package">Check Our Package</button>
</section>

)

export default Section1
