import React from "react";

const Gallery = () => {
  return (
    <div className="container mb-3">
      <h5 className="h5 sub-title">Our Gallery</h5>
      <div className="row d-flex justify-content-center">
        <div className="col-md-4 col-lg-4 col-11 gallery-img">
          <img src="/assets/images/img-2.jpeg" alt="" />
        </div>
        <div className="col-md-4 col-lg-4 col-11 gallery-img">
          <img src="/assets/images/img-2.jpeg" alt="" />
        </div>
        <div className="col-md-4 col-lg-4 col-11 gallery-img">
          <img src="/assets/images/img-3.jpeg" alt="" />
        </div>
        <div className="col-md-4 col-lg-4 col-11 gallery-img">
          <img src="/assets/images/img-4.jpeg" alt="" />
        </div>
        <div className="col-md-4 col-lg-4 col-11 gallery-img">
          <img src="/assets/images/img-5.jpeg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
