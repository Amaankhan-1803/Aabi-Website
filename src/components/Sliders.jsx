import React from 'react';
import '../assets/slider.css'
import '../assets/mobslider.css'
import Slide1 from '/imgs/store1.jpg'
import Slide2 from '/imgs/store2.jpg'
import Slide3 from '/imgs/store3.jpg'
import Slide4 from '/imgs/store4.jpg'

const Slider = () => {
  return (
    <div
      id="carouselExampleAutoplaying"
      className="carousel slide"
      data-bs-ride="carousel"
      data-bs-interval="3000" // Set autoplay speed to 3 seconds
    >
      <div className="carousel-inner">
        {/* Slide 1 */}
        <div className="carousel-item active">
          <img src={Slide1} className="slider-img img-fluid d-block w-100" alt="Slide 1" />
        </div>
        {/* Slide 2 */}
        <div className="carousel-item">
          <img src={Slide2} className="slider-img  img-fluid d-block w-100" alt="Slide 2" />
        </div>
        {/* Slide 3 */}
        <div className="carousel-item">
          <img src={Slide3} className="slider-img img-fluid d-block w-100" alt="Slide 3" />
        </div>
        {/* Slide 4 */}
        <div className="carousel-item">
          <img src={Slide4} className="slider-img img-fluid d-block w-100" alt="Slide 4" />
        </div>
      </div>

      {/* Controls */}
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleAutoplaying"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleAutoplaying"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Slider;
