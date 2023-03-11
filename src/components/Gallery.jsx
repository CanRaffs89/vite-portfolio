import React from 'react'
import GalleryItem from './GalleryItem'
import { projectData } from '../projects'

function Gallery() {
  return (
    <section class="section-gallery">
      <div class="section-gallery-content">
        <h4 id="about-me" class="section-gallery-header">ABOUT ME</h4>
        <p id="about-text" class="section-gallery-text">I'm a self-taught full-stack developer who loves problem solving and learning new technologies. My background as a freelance artist adds a bit of creative flair to my work - anything I build has to not only work, but look good too!</p>
        <h4 id="my-work" class="section-gallery-header">MY WORK</h4>
        {projectData.map((data, key) => {
          return (
          <GalleryItem
          key={key} 
          name={data.name}
          description={data.description}
          image={data.image}
          website={data.website}
          code={data.code}
          />
          );
        })}
        <div className="footer">
          <h4>Copyright &#169; {(new Date().getFullYear())} Candice Raffel</h4>
        </div>
      </div>
    </section>
  )
}

export default Gallery