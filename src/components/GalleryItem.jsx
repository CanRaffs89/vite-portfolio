import React from 'react'
import arrowIcon from '../assets/img/arrow_icon.svg'

function GalleryItem({ name, description, image, website, code }) {
    return (
        <section class="section-gallery-showcase">
            <div class="section-gallery-showcase-image">
                <img src={image} alt="" />
            </div>
            <div class="section-gallery-showcase-info">
                <h4 class="section-gallery-header">{name}</h4>
                <p class="section-gallery-text">{description}</p>
                <section class="links">
                    <div class="link">
                        <a href={website} class="section-gallery-header">WEBSITE <img id="arrow-icon" src={arrowIcon} alt="" /></a>  
                    </div>
                    <div class="link">
                        <a href={code} class="section-gallery-header">CODE <img id="arrow-icon" src={arrowIcon} alt="" /></a>
                    </div>
                </section>
            </div>   
        </section>
    )
}

export default GalleryItem