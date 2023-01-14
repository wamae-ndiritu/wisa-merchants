import React from "react";

const Contact = () => {
  return (
    <div className="container my-3">
      <div className="c_wrapper shadow-sm">
        <div className="c_left">
          <h5 className="h5 c_title">Contact Us</h5>
          <div className="c_left_wrapper">
            <div className="c_left_item">
              <div className="d-flex align-items-center c_left_item_header">
                <div className="c_icon">
                  <i className="fa fa-envelope-o" aria-hidden="true"></i>
                </div>
                <h4 className="h4">Email</h4>
              </div>
              <h6 className="h6">wisageneralm@gmail.com</h6>
            </div>
            <div className="c_left_item">
              <div className="d-flex align-items-center c_left_item_header">
                <div className="c_icon">
                  <i className="fa fa-phone" aria-hidden="true"></i>
                </div>
                <h4 className="h4">Phone</h4>
              </div>
              <h6 className="h6">0722212696</h6>
            </div>
            <div className="c_left_item">
              <div className="d-flex align-items-center c_left_item_header">
                <div className="c_icon">
                  <i className="fa fa-whatsapp" aria-hidden="true"></i>
                </div>
                <h4 className="h4">Whatsapp</h4>
              </div>
              <h6 className="h6">+254722212696</h6>
            </div>
            <div className="c_left_item">
              <div className="d-flex align-items-center c_left_item_header">
                <div className="c_icon">
                  <i className="fa fa-facebook" aria-hidden="true"></i>
                </div>
                <h4 className="h4">Facebook</h4>
              </div>
              <h6 className="h6">@wamai_wa</h6>
            </div>
            <div className="c_left_item">
              <div className="d-flex align-items-center c_left_item_header">
                <div className="c_icon">
                  <i className="fa fa-map-marker" aria-hidden="true"></i>
                </div>
                <h4 className="h4">Location</h4>
              </div>
              <h6 className="h6">
                Near Equator, <br /> Along Nanyuki-Nairobi Highway
              </h6>
            </div>
          </div>
        </div>
        <div className="c_right">
          <h5 className="h5 c_title">Send Email Message</h5>
          <p>Be free to send your message through the email form below.</p>
          <div>
            <div className="mb-3">
              <h5 className="form-label">Name</h5>
              <input
                type="text"
                className="form-control"
                placeholder="Ndiritu Wamai"
              />
            </div>
            <div className="mb-3">
              <h5 className="form-label">Email</h5>
              <input
                type="email"
                className="form-control"
                placeholder="wamaejoseph392@gmail.com"
              />
            </div>
            <div className="mb-3">
              <h5 className="form-label">Company/Business</h5>
              <input
                type="text"
                className="form-control"
                placeholder="Isaa General merchadise"
              />
            </div>
            <div className="mb-3">
              <h5 className="form-label">Message</h5>
              <textarea
                className="form-control"
                rows="5"
                placeholder="Ndiritu Wamai"
              />
            </div>
            <div className="mb-3">
              <button className="btn btn-contact">Send Messgae</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
