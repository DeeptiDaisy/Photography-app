import React from "react"
import './styles.css'
import imageSrc from './images/double-quotes.png'
import imageSrc1 from './images/pexels-cottonbro-7974875.jpg'
import imageSrc2 from './images/down-arrow.png'

const Section2 = ()=>(
   
    <section className="section-2">
    <div className="unorder-container">
        <ul>
            <li className="ul-items">Photography</li>
            <li className="ul-items">Videography</li>
            <li className="ul-items">Graphic Design</li>
            <li className="ul-items">Illustration</li>
            <li className="ul-items">Animation</li>
        </ul>
    </div>
    <div className="content-container">
        <img src={imageSrc} alt="quotes" className="quotes"/>
        <p className="para-content">we help you to create the best graphics,<br/>photos,videos,animations and illustrations</p>
        <img src={imageSrc1} alt="dance" className="dance"/>
        <img src={imageSrc2} alt="down-arrow" className="down-arrow"/>
    </div>
</section>

)

export default Section2;
