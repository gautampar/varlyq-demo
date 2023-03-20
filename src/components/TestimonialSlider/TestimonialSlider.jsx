import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img9 from "../../imgs/Group14.png";

export default function TestimonialSlider() {
  var settings = {
    dots: true,
    arrows:false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    pauseOnHover:false,
    slidesToScroll: 1,
  };
  return (
    <Slider {...settings}>
      <div>
        <div className="testimonials-box">
          <img src={img9} alt="" className="img-fluid" />
          <p className="testimonials-text">
            Walleye poolfish sand goby butterfly ray stream catfish jewfish
            spanish ballan wrasse climbing gourami amur pike Arctic char,
            steelhead sprat sea lamprey grunion. Arctic char, steelhead sprat
            sea lamprey grunion. Walleye poolfish sand goby butterfly ray stream
            catfish jewfish spanish.
          </p>
          <p className="user-name">
            <span className="text-orange">Vipul sharma/</span> UIUX Designer
          </p>
        </div>
      </div>
      <div>
        <div className="testimonials-box">
          <img src={img9} alt="" className="img-fluid" />
          <p className="testimonials-text">
            Walleye poolfish sand goby butterfly ray stream catfish jewfish
            spanish ballan wrasse climbing gourami amur pike Arctic char,
            steelhead sprat sea lamprey grunion. Arctic char, steelhead sprat
            sea lamprey grunion. Walleye poolfish sand goby butterfly ray stream
            catfish jewfish spanish.
          </p>
          <p className="user-name">
            <span className="text-orange">Vipul sharma/</span> UIUX Designer
          </p>
        </div>
      </div>
      <div>
        <div className="testimonials-box">
          <img src={img9} alt="" className="img-fluid" />
          <p className="testimonials-text">
            Walleye poolfish sand goby butterfly ray stream catfish jewfish
            spanish ballan wrasse climbing gourami amur pike Arctic char,
            steelhead sprat sea lamprey grunion. Arctic char, steelhead sprat
            sea lamprey grunion. Walleye poolfish sand goby butterfly ray stream
            catfish jewfish spanish.
          </p>
          <p className="user-name">
            <span className="text-orange">Vipul sharma/</span> UIUX Designer
          </p>
        </div>
      </div>
    </Slider>
  );
}
