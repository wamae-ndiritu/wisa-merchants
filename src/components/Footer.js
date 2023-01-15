import React from "react";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import ListRoundedIcon from "@mui/icons-material/ListRounded";

const Footer = () => {
  return (
    <div className="" id="footer">
      <div className="container-fluid footer-wrapper">
        <div className="row d-flex justify-content-center f_row">
          <div className="col-md-5 col-lg-5 col-10 mt-3">
            <div className="f_header">
              <div className="footer-icon">
                <i className="fa fa-bars" aria-hidden="true"></i>
              </div>
              <h5 className="h5 footer-headers">Wisa General Merchants</h5>
            </div>
            <p>
              We are the leading treated Poles Sellers in Nanyuki and across the
              Country. We offer quality product which satisfies our clients'
              needs.
            </p>
            <div className="f_header mt-3">
              <div className="footer-icon">
                <i className="fa fa-phone" aria-hidden="true"></i>
              </div>
              <h5 className="h5 footer-headers">0722212696</h5>
            </div>
            <div className="f_header mt-3">
              <div className="footer-icon">
                <i className="fa fa-envelope-o" aria-hidden="true"></i>
              </div>
              <h5 className="h5 footer-headers">wisageneralm@gmail.com</h5>
            </div>
          </div>
          <div className="col-md-3 col-lg-3 col-10 mt-3">
            <div className="f_header">
              <div className="footer-icon">
                <i className="fa fa-map-marker" aria-hidden="true"></i>
              </div>
              <h5 className="h5 footer-headers">Location</h5>
            </div>
            <p>Near Equator,</p>
            <p>Along Nanyuki - Nairobi Highway</p>
          </div>
          <div className="col-md-2 col-lg-2 col-10 mt-3">
            <div className="f_header">
              <div className="footer-icon">
                <ListRoundedIcon />
              </div>
              <h5 className="h5 footer-headers">Useful Links</h5>
            </div>
            <ul>
              <li>About Us</li>
              <li>Contacts</li>
              <li>Gallery</li>
              <li>Blogs</li>
            </ul>
          </div>
          <div className="col-md-2 col-lg-2 col-10 mt-3">
            <div className="f_header">
              <div className="footer-icon">
                <LocationOnIcon />
              </div>
              <h5 className="h5 footer-headers">Connect With Us</h5>
            </div>
            <div className="f_socials">
              <div className="f_social">
                <a
                  href="https://www.facebook.com/profile.php?id=100089216000316"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fa fa-facebook" aria-hidden="true"></i>
                </a>
              </div>
              <div className="f_social">
                <a
                  href="https://wa.me/254722212696"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fa fa-whatsapp" aria-hidden="true"></i>
                </a>
              </div>
              <div className="f_social">
                <i
                  className="fa fa-envelope-o"
                  aria-hidden="true"
                  mailto="wamaejoseph392@gmail.com"
                ></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
