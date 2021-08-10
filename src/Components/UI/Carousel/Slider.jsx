import React from 'react'
import { Carousel } from 'react-bootstrap'
import Image1 from '../../../images/banner/1.jpg'
import Image2 from '../../../images/banner/2.jpg'
import Image3 from '../../../images/banner/3.jpg'
const Slider = () => {
  return (
    <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel" style={{zIndex:'-1'}}>
      <div clasNames="carousel-inner">
        <div className="carousel-item active">
          <img src={Image1} className="d-block w-100" alt="..." />
        </div>
        <div className="carousel-item">
          <img src={Image2} className="d-block w-100" alt="..." />
        </div>
        <div className="carousel-item">
          <img src={Image3} className="d-block w-100" alt="..." />
        </div>
      </div>
    </div>
  )
}

export default Slider
