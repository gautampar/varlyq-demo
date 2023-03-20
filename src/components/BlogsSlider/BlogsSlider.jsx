import React, { useEffect } from "react";
import Slider from "react-slick";
import Aos from "aos";
import "aos/dist/aos.css";
import img11 from "../../imgs/Rectangle5.png";
import img12 from "../../imgs/Rectangle6.png";
import img13 from "../../imgs/Rectangle7.png";

function BlogsSlider() {
  useEffect(() => {
    Aos.init({
      offset: 200,
      duration: 600,
      easing: "ease-in-sine",
      delay: 100,
    });
  }, []);
  var settings = {
    dots: true,
    infinite: true,
    arrows: false,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };
  return (
    <div>
      <div className="container-fluid">
        <div className="text-center">
          <div data-aos="zoom-in">
            <p className="blogs-text m-0">
              Publish what you think, don't put it on social media
            </p>
            <h2>
              Bl<span className="text-orange">o</span>gs
            </h2>
          </div>
        </div>
        <div className="blog-slider">
          <Slider {...settings}>
            <div className="blog-card">
              <div
                className="blog-img"
                style={{ backgroundImage: `url(${img11})` }}
              ></div>
              <div className="blog-card-body">
                <h6 className="blog-card-title">
                  I like the body. I like to design everything to do with the
                  body.
                </h6>
                <p className="blog-card-text">
                  I wanted to hire the best and after looking at several other
                  companies, I knew Jacob was the perfect guy for the job. He is
                  a true professional.
                </p>
                <div className="d-flex justify-content-between align-items-center">
                  <p className="blog-card-name">BY: VIPUL SHARMA</p>
                  <p className="blog-card-date">20 APRIL 2023</p>
                </div>
              </div>
            </div>

            <div className="blog-card">
              <div
                className="blog-img"
                style={{ backgroundImage: `url(${img12})` }}
              ></div>
              <div className="blog-card-body">
                <h6 className="blog-card-title">
                  I like the body. I like to design everything to do with the
                  body.
                </h6>
                <p className="blog-card-text">
                  I wanted to hire the best and after looking at several other
                  companies, I knew Jacob was the perfect guy for the job. He is
                  a true professional.
                </p>
                <div className="d-flex justify-content-between align-items-center">
                  <p className="blog-card-name">BY: VIPUL SHARMA</p>
                  <p className="blog-card-date">20 APRIL 2023</p>
                </div>
              </div>
            </div>

            <div className="blog-card">
              <div
                className="blog-img"
                style={{ backgroundImage: `url(${img13})` }}
              ></div>
              <div className="blog-card-body">
                <h6 className="blog-card-title">
                  I like the body. I like to design everything to do with the
                  body.
                </h6>
                <p className="blog-card-text">
                  I wanted to hire the best and after looking at several other
                  companies, I knew Jacob was the perfect guy for the job. He is
                  a true professional.
                </p>
                <div className="d-flex justify-content-between align-items-center">
                  <p className="blog-card-name">BY: VIPUL SHARMA</p>
                  <p className="blog-card-date">20 APRIL 2023</p>
                </div>
              </div>
            </div>

            <div className="blog-card">
              <div
                className="blog-img"
                style={{ backgroundImage: `url(${img11})` }}
              ></div>
              <div className="blog-card-body">
                <h6 className="blog-card-title">
                  I like the body. I like to design everything to do with the
                  body.
                </h6>
                <p className="blog-card-text">
                  I wanted to hire the best and after looking at several other
                  companies, I knew Jacob was the perfect guy for the job. He is
                  a true professional.
                </p>
                <div className="d-flex justify-content-between align-items-center">
                  <p className="blog-card-name">BY: VIPUL SHARMA</p>
                  <p className="blog-card-date">20 APRIL 2023</p>
                </div>
              </div>
            </div>

            <div className="blog-card">
              <div
                className="blog-img"
                style={{ backgroundImage: `url(${img12})` }}
              ></div>
              <div className="blog-card-body">
                <h6 className="blog-card-title">
                  I like the body. I like to design everything to do with the
                  body.
                </h6>
                <p className="blog-card-text">
                  I wanted to hire the best and after looking at several other
                  companies, I knew Jacob was the perfect guy for the job. He is
                  a true professional.
                </p>
                <div className="d-flex justify-content-between align-items-center">
                  <p className="blog-card-name">BY: VIPUL SHARMA</p>
                  <p className="blog-card-date">20 APRIL 2023</p>
                </div>
              </div>
            </div>

            <div className="blog-card">
              <div
                className="blog-img"
                style={{ backgroundImage: `url(${img13})` }}
              ></div>
              <div className="blog-card-body">
                <h6 className="blog-card-title">
                  I like the body. I like to design everything to do with the
                  body.
                </h6>
                <p className="blog-card-text">
                  I wanted to hire the best and after looking at several other
                  companies, I knew Jacob was the perfect guy for the job. He is
                  a true professional.
                </p>
                <div className="d-flex justify-content-between align-items-center">
                  <p className="blog-card-name">BY: VIPUL SHARMA</p>
                  <p className="blog-card-date">20 APRIL 2023</p>
                </div>
              </div>
            </div>

            <div className="blog-card">
              <div
                className="blog-img"
                style={{ backgroundImage: `url(${img11})` }}
              ></div>
              <div className="blog-card-body">
                <h6 className="blog-card-title">
                  I like the body. I like to design everything to do with the
                  body.
                </h6>
                <p className="blog-card-text">
                  I wanted to hire the best and after looking at several other
                  companies, I knew Jacob was the perfect guy for the job. He is
                  a true professional.
                </p>
                <div className="d-flex justify-content-between align-items-center">
                  <p className="blog-card-name">BY: VIPUL SHARMA</p>
                  <p className="blog-card-date">20 APRIL 2023</p>
                </div>
              </div>
            </div>

            <div className="blog-card">
              <div
                className="blog-img"
                style={{ backgroundImage: `url(${img12})` }}
              ></div>
              <div className="blog-card-body">
                <h6 className="blog-card-title">
                  I like the body. I like to design everything to do with the
                  body.
                </h6>
                <p className="blog-card-text">
                  I wanted to hire the best and after looking at several other
                  companies, I knew Jacob was the perfect guy for the job. He is
                  a true professional.
                </p>
                <div className="d-flex justify-content-between align-items-center">
                  <p className="blog-card-name">BY: VIPUL SHARMA</p>
                  <p className="blog-card-date">20 APRIL 2023</p>
                </div>
              </div>
            </div>

            <div className="blog-card">
              <div
                className="blog-img"
                style={{ backgroundImage: `url(${img13})` }}
              ></div>
              <div className="blog-card-body">
                <h6 className="blog-card-title">
                  I like the body. I like to design everything to do with the
                  body.
                </h6>
                <p className="blog-card-text">
                  I wanted to hire the best and after looking at several other
                  companies, I knew Jacob was the perfect guy for the job. He is
                  a true professional.
                </p>
                <div className="d-flex justify-content-between align-items-center">
                  <p className="blog-card-name">BY: VIPUL SHARMA</p>
                  <p className="blog-card-date">20 APRIL 2023</p>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default BlogsSlider;
