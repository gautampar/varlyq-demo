import React from "react";
import "../Footer/footer.css";
import footerLogo from "../../imgs/footer-logo.png";

function Footer() {
  return (
    <div>
      <footer>
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-12 col-lg-4">
              ZOOM
              <div data-aos="fade-up">
                <img src={footerLogo} className="img-fluid" alt="" />
                <p className="footer-text">
                  I wanted to hire the best and after looking at several other
                  companies, I knew Jacob was the perfect guy for the job. He is
                  a true professional.
                </p>
                <ul className="social-media-links p-0">
                  <li>
                    <a href="javascript:void(0)">
                      <i className="fa fa-brands fa-instagram"></i>
                    </a>
                  </li>
                  <li>
                    <a href="javascript:void(0)">
                      <i className="fa fa-brands fa-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a href="javascript:void(0)">
                      <i className="fa fa-brands fa-whatsapp"></i>
                    </a>
                  </li>
                  <li>
                    <a href="javascript:void(0)">
                      <i className="fa fa-brands fa-twitter"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-1"></div>
            <div className="col-sm-12 col-lg-3">
              <div data-aos="zoom-in">
              <h6 className="links-title">QUICK LINKS</h6>
              <ul className="quick-link">
                <li>
                  <a href="javascript:void(0)">Home</a>
                </li>
                <li>
                  <a href="javascript:void(0)">About</a>
                </li>
                <li>
                  <a href="javascript:void(0)">Services</a>
                </li>
                <li>
                  <a href="javascript:void(0)">Portfolio</a>
                </li>
                <li>
                  <a href="javascript:void(0)">Testimonials</a>
                </li>
                <li>
                  <a href="javascript:void(0)">Blogs</a>
                </li>
              </ul>
              </div>
            </div>
            <div className="col-lg-1"></div>
            <div className="col-sm-12 col-lg-3">
            <div data-aos="fade-up">
              <h6 className="contact-info">CONTACT INFO</h6>
              <p className="address">
                SOCIO Design Agency301 The Greenhouse, Custard Factory, London,
                E2 8DY.
              </p>
              <div className="email">
                <a href="javascript:void(0)" className="email">
                  Email: sociocurry@gmail.com
                </a>
              </div>
              <div className="phone">
                <a href="javascript:void(0)" className="phone">
                  Phone: +91 9865558465
                </a>
              </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
