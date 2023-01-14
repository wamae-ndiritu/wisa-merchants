import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const Slider = () => {
  return (
    <div className="slider">
      <div className="advert-section">
        <h2 className="text-center h2">Wisa General Merchants</h2>
        <h4 className="h4">Are you looking for treated trees?</h4>
        <p>We got you covered!</p>
        <p>Fencing Poles & Hard Poles Available</p>
        <button className="btn-explore">View More</button>
      </div>
      <div className="corousel">
        <Carousel autoPlay={true} interval={3000} showThumbs={false}>
          <div>
            <img src="/assets/images/img-1.jpeg" alt="" />
          </div>
          <div>
            <img src="/assets/images/img-2.jpeg" alt="" />
          </div>
          <div>
            <img src="/assets/images/img-3.jpeg" alt="" />
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default Slider;
