import React from 'react'
import { OuterCarousel,InnerCarousel,CarouselItem,CarouselImg } from './SliderStyles'
import Image1 from '../../images/banner/1.jpg'
import Image2 from '../../images/banner/2.jpg'
import Image3 from '../../images/banner/3.jpg'
const Slider = () => {
  return (
    <OuterCarousel id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
      <InnerCarousel  className="carousel-inner">
          <CarouselItem  className="carousel-item active">
            <CarouselImg className="d-block w-100" alt="..." src={Image1}/>
          </CarouselItem>
          <CarouselItem  className="carousel-item">
            <CarouselImg className="d-block w-100" alt="..." src={Image2}/>
          </CarouselItem>
          <CarouselItem  className="carousel-item ">
            <CarouselImg className="d-block w-100" alt="..." src={Image3}/>
          </CarouselItem>
      </InnerCarousel>
    </OuterCarousel>
  )
}

export default Slider
