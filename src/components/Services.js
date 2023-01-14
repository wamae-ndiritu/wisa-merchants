import React from "react";

const Services = () => {
  return (
    <div className="container my-3">
      <h4 className="h4 sub-title">Our Services</h4>
      <div className="row d-flex justify-content-center">
        <div className="col-md-3 col-lg-4 shadow-sm service-card col-10">
          <div className="service-icon">
            <img src="/assets/images/pole.jpg" alt="" />
          </div>
          <div className="service-info">
            <h5 className="h5">Treated Pole</h5>
            <p>
              We buy and sell poles. All our poles are carefully treated before
              selling them
            </p>
          </div>
        </div>
        <div className="col-md-3 col-lg-4 shadow-sm service-card col-10">
          <div className="service-icon">
            <img src="/assets/images/delivery.jpg" alt="" />
          </div>
          <div className="service-info">
            <h5 className="h5">Delivery Services</h5>
            <p>
              We offer delivery services at a small fee. Let's make arrangements
              for you.
            </p>
          </div>
        </div>
        <div className="col-md-3 col-lg-4 shadow-sm service-card col-10">
          <div className="service-icon">
            <img src="/assets/images/price.jpg" alt="" />
          </div>
          <div className="service-info">
            <h5 className="h5">Quality Services</h5>
            <p>
              We vaue our customers, and therefore we give them the best
              services they may need at affordable prices.
            </p>
          </div>
        </div>
        <div className="col-md-3 col-lg-4 shadow-sm service-card col-10">
          <div className="service-icon">
            <img src="/assets/images/warrant.png" alt="" />
          </div>
          <div className="service-info">
            <h5 className="h5">Warranty</h5>
            <p>
              All our products are guaranteed that they will meet your needs.
              However, In case of failures, we offer 6 months warranty.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
