import React, { useEffect } from "react";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Aos from "aos";
import "aos/dist/aos.css";
import "../Home/home.css";
import img1 from "../../imgs/Group10.png";
import img2 from "../../imgs/Group11.png";
import img3 from "../../imgs/Group12.png";
import img4 from "../../imgs/Group2.png";
import img5 from "../../imgs/Group.png";
import img6 from "../../imgs/Rectangle1.png";
import img7 from "../../imgs/Rectangle2.png";
import img8 from "../../imgs/Rectangle3.png";
import logo1 from "../../imgs/logo1.png";
import logo2 from "../../imgs/logo2.png";
import logo3 from "../../imgs/logo3.png";
import logo4 from "../../imgs/logo4.png";
import logo5 from "../../imgs/logo5.png";
import img10 from "../../imgs/Rectangle4.png";
import SimpleSlider from "../../components/TestimonialSlider/TestimonialSlider";
import BlogsSlider from "../../components/BlogsSlider/BlogsSlider";

function Home() {
  useEffect(() => {
    Aos.init({
      offset: 200,
      duration: 600,
      easing: "ease-in-sine",
      delay: 100,
    });
  }, []);
  return (
    <div>
      <Header />
      <main>
        <section className="hero" data-aos="fade-up"></section>
        <section className="who-we-are-section" data-aos="fade-up">
          <div className="container-fluid">
            <div className="row">
                <div className="col-sm-12 col-lg-6">
                  <div className="hero-text">
                    <h1>Who we are?</h1>
                    <p>
                      We are a group of storytellers, visualisers, strategist,
                      marketers with an MBA leading the pack. What do you get
                      when you mix a number of fine ingredients, carefully
                      chosen and measured to ensure success? You get a tadkta
                      bhadkta team like Socio Curry which helps give your brand
                      the push it deserves. 
                    </p>
                    <p>
                      Welcome to{" "}
                      <span className="text-orange">SocioCurry </span>
                      where we have the secret recipe to ensure your brand’s
                      success- Branding & Design, swaad anusar with 
                      ground-breaking ideas, Brand anusar! We are a one stop
                      shop for all your Designing, Branding and Digital
                      Marketing Solutions.
                    </p>
                    <button className="about-us">
                      About Us <i className="fa fa-regular fa-arrow-right"></i>
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-sm-12 col-lg-6">
                <div className="text-center">
                  <img src={img1} className="img-fluid" alt="" />
                </div>
              </div>
          </div>
        </section>
        <section className="we-are-your-section">
          <div className="container-fluid">
            <div data-aos="zoom-in">
              <div className="text-center">
                <h2>
                  We are your <img src={img2} className="img-fluid" alt="" />
                </h2>
                <div className="text-content">
                  <p>
                    What does that mean you ask? It means that we are the
                    ‘Recipe Makers’ who help you build your brand from ground
                    zero.Right from the inception to making the brand ready to
                    launch, we decide how the brand appears, what attributes it
                    must possess to venture out into the real world & further
                    how the brand speaks to the consumers/target group. 
                  </p>
                </div>
              </div>
            </div>
            <div className="we-are-ready-section">
              <div className="side-img">
                <img src={img4} alt="" className="img-fluid" />
              </div>
            </div>
            <div className="row">
              <div className="col-sm-12 col-md-6">
                <div className="overflow-hidden text-center">
                  <div data-aos="fade-up">
                    <img src={img3} alt="" className="img-fluid img-scale" />
                  </div>
                </div>
              </div>
              <div className="col-sm-12 col-md-6">
                <div data-aos="fade-up">
                  <div className="we-are-ready-text">
                    <img src={img5} alt="" className="img-fluid" />
                    <h2>Voila! We are ready to serve your brand curry.</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="what-we-do">
          <div className="text-center">
            <div data-aos="zoom-in">
              <h2>What we do?</h2>
              <p>
                Too bored of packaged ideas full of preservatives? No worries!
                At Socio Curry, we will only serve you freshly made concepts.
              </p>
            </div>
          </div>
          <div className="container-fluid">
            <div className="row align-items-end">
              <div className="col-sm-12 col-lg-6">
                <div className="text-center">
                  <div data-aos="flip-left">
                    <button className="services-btn">
                      Services <i className="fa fa-regular fa-arrow-right"></i>
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-sm-12 col-lg-6">
                <div data-aos="flip-right">
                  <ul className="services-list">
                    <li className="d-flex justify-content-between align-items-center">
                      <a href="javascript:void(0)">Strategy</a>
                      <i className="fa fa-regular fa-arrow-right"></i>
                    </li>
                    <li className="d-flex justify-content-between align-items-center">
                      <a href="javascript:void(0)">Branding and Design</a>
                      <i className="fa fa-regular fa-arrow-right"></i>
                    </li>
                    <li className="d-flex justify-content-between align-items-center">
                      <a href="javascript:void(0)">Social Media Management</a>
                      <i className="fa fa-regular fa-arrow-right"></i>
                    </li>
                    <li className="d-flex justify-content-between align-items-center">
                      <a href="javascript:void(0)">Digital Marketing</a>
                      <i className="fa fa-regular fa-arrow-right"></i>
                    </li>
                    <li className="d-flex justify-content-between align-items-center">
                      <a href="javascript:void(0)">
                        Photoshoot and Videography
                      </a>
                      <i className="fa fa-regular fa-arrow-right"></i>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="text-center">
              <div data-aos="zoom-in">
                <p className="drool-text">Already started to drool?</p>
              </div>
            </div>
          </div>
        </section>
        <section className="see-our-work">
          <div className="text-center">
            <div data-aos="zoom-in">
              <h2>See Our Work</h2>
            </div>
            <div className="container-fluid">
              <div className="row">
                <div className="col-sm-12 col-lg-4 col-md-6 g-mb">
                  <div data-aos="fade-up">
                    <div className="soap-card">
                      <div
                        className="soap-img"
                        style={{ backgroundImage: `url(${img6})` }}
                      ></div>
                      <div className="text-center soap-body">
                        <h5 className="soap-header">SPRINGWATER SOAP</h5>
                        <p className="soap-text m-0">BRANDING AND IDENTITY</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-12 col-lg-4 col-md-6 g-mb">
                  <div data-aos="fade-up">
                    <div className="soap-card">
                      <div
                        className="soap-img"
                        style={{ backgroundImage: `url(${img7})` }}
                      ></div>
                      <div className="text-center soap-body">
                        <h5 className="soap-header">SPRINGWATER SOAP</h5>
                        <p className="soap-text m-0">BRANDING AND IDENTITY</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-12 col-lg-4 col-md-6 g-mb">
                  <div data-aos="fade-up">
                    <div className="soap-card">
                      <div
                        className="soap-img"
                        style={{ backgroundImage: `url(${img8})` }}
                      ></div>
                      <div className="text-center soap-body">
                        <h5 className="soap-header">SPRINGWATER SOAP</h5>
                        <p className="soap-text m-0">BRANDING AND IDENTITY</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-12 col-lg-4 col-md-6 g-mb">
                  <div data-aos="fade-up">
                    <div className="soap-card">
                      <div
                        className="soap-img"
                        style={{ backgroundImage: `url(${img6})` }}
                      ></div>
                      <div className="text-center soap-body">
                        <h5 className="soap-header">SPRINGWATER SOAP</h5>
                        <p className="soap-text m-0">BRANDING AND IDENTITY</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-12 col-lg-4 col-md-6 g-mb">
                  <div data-aos="fade-up">
                    <div className="soap-card">
                      <div
                        className="soap-img"
                        style={{ backgroundImage: `url(${img7})` }}
                      ></div>
                      <div className="text-center soap-body">
                        <h5 className="soap-header">SPRINGWATER SOAP</h5>
                        <p className="soap-text m-0">BRANDING AND IDENTITY</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-12 col-lg-4 col-md-6 g-mb">
                  <div data-aos="fade-up">
                    <div className="soap-card">
                      <div
                        className="soap-img"
                        style={{ backgroundImage: `url(${img8})` }}
                      ></div>
                      <div className="text-center soap-body">
                        <h5 className="soap-header">SPRINGWATER SOAP</h5>
                        <p className="soap-text m-0">BRANDING AND IDENTITY</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div data-aos="zoom-in-up">
                <button className="view-all-btn">
                  VIEW ALL<i className="fa fa-regular fa-arrow-right"></i>
                </button>
              </div>
            </div>
          </div>
        </section>
        <section className="clients">
          <div className="container-fluid">
            <div className="text-center">
              <div data-aos="zoom-in">
                <h2>Clients</h2>
                <p>
                  Together, we cook stories for brands from their existence to
                  their road to success which helps the customer in
                  understanding better     what the brand stands for. Our Mantra
                  while building a brand – Keep Calm & (Socio) Curry On!
                </p>
              </div>
            </div>
            <div className="clients-logo">
              <div className="row align-items-center">
                <div className="col-sm-12 col-md-6 col-lg text-center mb-5 mb-lg-0 ">
                  <img src={logo1} alt="" className="img-fluid" />
                </div>
                <div className="col-sm-12 col-md-6 col-lg text-center mb-5 mb-lg-0">
                  <img src={logo2} alt="" className="img-fluid" />
                </div>
                <div className="col-sm-12 col-md-6 col-lg text-center mb-5 mb-lg-0">
                  <img src={logo3} alt="" className="img-fluid" />
                </div>
                <div className="col-sm-12 col-md-6 col-lg text-center mb-5 mb-lg-0">
                  <img src={logo4} alt="" className="img-fluid" />
                </div>
                <div className="col-sm-12 col-md-6 col-lg text-center mb-5 mb-lg-0">
                  <img src={logo5} alt="" className="img-fluid" />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="testimonials">
          <div className="container-fluid">
            <div data-aos="zoom-in">
              <div className="sub-container">
                <div className="content-wrapper">
                  <h2>Testimonials</h2>
                  <p>See what our clients have to say about us</p>
                  <div className="row">
                    <div className="col-sm-12 col-lg-8">
                      <SimpleSlider />
                    </div>
                  </div>
                </div>
                <div
                  className="testimonials-bg"
                  style={{ backgroundImage: `url(${img10})` }}
                ></div>
              </div>
            </div>
          </div>
        </section>
        <section className="blogs">
          <BlogsSlider />
        </section>
        <section className="work-together-section">
          <div className="container-fluid">
            <div className="form">
              <div className="row">
                <div className="col-sm-12 col-lg-6">
                  <div data-aos="fade-up">
                    <h2 className="work-together-title">Work Together</h2>
                    <p className="work-together-text">
                      Why to have Khichdi, when we can offer you Biryani?  Get
                      in touch with us!
                    </p>
                  </div>
                </div>
                <div className="col-sm-12 col-lg-6">
                  <form
                    action="javascriptVoid(0)"
                    className="d-flex flex-column"
                  >
                    <label htmlFor="javascript:void(0)">Name</label>
                    <input type="text" />
                    <label htmlFor="javascript:void(0)">Email</label>
                    <input type="email" />
                    <label htmlFor="javascript:void(0)">Phone</label>
                    <input type="text" />
                    <div className="text-center">
                      <button className="submit-btn">
                        Submit <i className="fa fa-regular fa-arrow-right"></i>
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default Home;
