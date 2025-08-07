import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Topmenu from "./Topmenu";
import AOS from "aos";
import "aos/dist/aos.css";

function About() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <>
      <Topmenu />

      <header className="about-header" data-aos="fade-down">
        <div className="hero-overlay"></div>
        <div className="container h-100">
          <div className="row h-100 align-items-center">
            <div className="col-12 text-center text-white">
              <h1 className="display-3 fw-bold">About Us</h1>
              <p className="lead">Our story, mission, and values</p>
            </div>
          </div>
        </div>
      </header>

      <section className="py-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 mb-4 mb-lg-0" data-aos="fade-right">
              <h2 className="fw-bold mb-4">Our Story</h2>
              <p>Founded in 2010, FitLife Gym began as a small fitness center with a big vision: to create a community where people of all fitness levels could come together to improve their health and wellbeing.</p>
              <p>What started as a single location with just a handful of members has grown into one of the most respected fitness centers in the region, with state-of-the-art facilities and a team of dedicated professionals.</p>
              <p>Over the years, we've helped thousands of members achieve their fitness goals, from weight loss to athletic performance. Our success comes from our commitment to personalized attention and creating a welcoming environment for everyone.</p>
            </div>
            <div className="col-lg-6" data-aos="fade-left">
              <img
                src="https://images.unsplash.com/photo-1571902943202-507ec2618e8f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1075&q=80"
                alt="Our Gym"
                className="img-fluid rounded"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-5 bg-light">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 mb-4 mb-lg-0" data-aos="zoom-in-right">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body">
                  <h3 className="card-title fw-bold mb-4">
                    <i className="fas fa-bullseye text-primary me-2"></i> Our Mission
                  </h3>
                  <p className="card-text">To empower individuals to achieve their fitness goals through personalized training, state-of-the-art facilities, and a supportive community that inspires lasting lifestyle changes.</p>
                   <p className="card-text">We believe fitness should be accessible to everyone, regardless of age, ability, or experience level. Our mission is to break down barriers to health and wellness by providing:</p>
                  <ul>
                    <li>Expert guidance from certified trainers</li>
                    <li>A welcoming, non-intimidating environment</li>
                    <li>Programs tailored to individual needs</li>
                    <li>Education on health and nutrition</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-lg-6" data-aos="zoom-in-left">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body">
                  <h3 className="card-title fw-bold mb-4">
                    <i className="fas fa-eye text-primary me-2"></i> Our Vision
                  </h3>
                  <p className="card-text">To be the leading force in transforming lives through fitness, creating healthier communities one member at a time.</p>
                   <p className="card-text">We envision a future where:</p>
                  <ul>
                    <li>Regular physical activity is a fundamental part of daily life</li>
                    <li>People feel confident and strong in their bodies</li>
                    <li>Health and wellness education is widely accessible</li>
                    <li>Communities support each other in achieving fitness goals</li>
                  </ul>
                   <p className="card-text">By focusing on sustainable habits rather than quick fixes, we aim to create lasting change in our members' lives.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-5">
        <div className="container">
          <div className="text-center mb-5" data-aos="fade-up">
            <h2 className="fw-bold">Meet Our Team</h2>
            <p className="lead">Certified professionals dedicated to your success</p>
          </div>
          <div className="row g-4">
            <div className="col-md-4" data-aos="flip-left">
              <div className="card h-100 border-0 shadow-sm">
                <img
                  src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?semt=ais_hybrid&w=740"
                  className="card-img-top"
                  alt="Trainer"
                />
                <div className="card-body text-center">
                  <h5 className="card-title">James Wilson</h5>
                  <p className="text-primary fw-bold">Head Trainer</p>
                  <p className="card-text">Certified personal trainer with 15 years of experience specializing in strength training and athletic performance</p>
                </div>
              </div>
            </div>

            <div className="col-md-4" data-aos="flip-up">
              <div className="card h-100 border-0 shadow-sm">
                <img
                  src="https://media.istockphoto.com/id/1443627298/photo/half-length-portrait-of-successful-male-boss-dressed-in-elegant-suit-with-crossed-arms.jpg?s=612x612&w=0&k=20&c=eHSZdO4IeOi5luzCi4BqitGDz5IZNuJsiD0tJz3NT4w="
                  className="card-img-top"
                  alt="Trainer"
                />
                <div className="card-body text-center">
                  <h5 className="card-title">Sarah Johnson</h5>
                  <p className="text-primary fw-bold">Yoga Instructor</p>
                  <p className="card-text">RYT-500 certified yoga teacher with expertise in vinyasa flow, restorative yoga, and mindfulness practices.</p>
                </div>
              </div>
            </div>

            <div className="col-md-4" data-aos="flip-right">
              <div className="card h-100 border-0 shadow-sm">
                <img
                  src="https://media.istockphoto.com/id/519995119/photo/hes-a-cool-customer.jpg?s=612x612&w=0&k=20&c=GNlIzSFUE4htTf47bFwtNjWbFvS2BP-e8kAFDjqu740="
                  className="card-img-top"
                  alt="Trainer"
                />
                <div className="card-body text-center">
                  <h5 className="card-title">Michael Chen</h5>
                  <p className="text-primary fw-bold">Nutrition Coach</p>
                  <p className="card-text">Registered dietitian helping members develop sustainable eating habits for optimal health and performanc</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-5 bg-light" data-aos="fade-up">
  <div className="container">
    <div className="text-center mb-5">
      <h2 className="fw-bold">What People Say About Us</h2>
      <p className="lead">Google reviews from our members</p>
    </div>
    <div className="row g-4">
      <div className="col-md-4" data-aos="zoom-in">
        <div className="card h-100 border-0 shadow-sm">
          <div className="card-body">
            <div className="text-warning mb-3">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
            </div>
            <h5 className="card-title">Life Changing Experience</h5>
            <p className="card-text">
              "Prozone Fitness Studio has completely transformed my approach to fitness. The trainers are knowledgeable and genuinely care about your progress. The facilities are always clean and well-maintained."
            </p>
            <div className="d-flex align-items-center mt-4">
              <img
                src="https://randomuser.me/api/portraits/women/63.jpg"
                className="rounded-circle me-3"
                width="50"
                alt="Reviewer"
              />
              <div>
                <h6 className="mb-0">Emma Rodriguez</h6>
                <small className="text-muted">Member since 2019</small>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="col-md-4" data-aos="zoom-in">
        <div className="card h-100 border-0 shadow-sm">
          <div className="card-body">
            <div className="text-warning mb-3">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star-half-alt"></i>
            </div>
            <h5 className="card-title">Best Gym in Town</h5>
            <p className="card-text">
             "I've been to several gyms in the area, and Prozone Fitness Studio stands out for its friendly atmosphere and top-notch equipment. The group classes are fantastic - always challenging but scalable for all levels."
            </p>
            <div className="d-flex align-items-center mt-4">
              <img
                src="https://randomuser.me/api/portraits/men/22.jpg"
                className="rounded-circle me-3"
                width="50"
                alt="Reviewer"
              />
              <div>
                <h6 className="mb-0">David Thompson</h6>
                <small className="text-muted">Member since 2020</small>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="col-md-4" data-aos="zoom-in">
        <div className="card h-100 border-0 shadow-sm">
          <div className="card-body">
            <div className="text-warning mb-3">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
            </div>
            <h5 className="card-title">Supportive Community</h5>
            <p className="card-text">
              "What I love most about Prozone Fitness Studiois the community. Everyone from the staff to fellow members is so supportive. I've made real friends here while getting in the best shape of my life."
            </p>
            <div className="d-flex align-items-center mt-4">
              <img
                src="https://randomuser.me/api/portraits/women/28.jpg"
                className="rounded-circle me-3"
                width="50"
                alt="Reviewer"
              />
              <div>
                <h6 className="mb-0">Lisa Park</h6>
                <small className="text-muted">Member since 2021</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="text-center mt-5" data-aos="fade-up">
      <a
        href="https://google.com"
        className="btn btn-primary"
        target="_blank"
        rel="noreferrer"
      >
        View More Reviews
      </a>
    </div>
  </div>
</section>


      <section className="py-5 bg-primary text-white" data-aos="fade-up">
        <div className="container text-center">
          <h2 className="fw-bold mb-4">Ready to Join Our Community?</h2>
          <p className="lead mb-4">Experience the FitLife difference for yourself with a free 3-day trial.</p>
          <Link to="/contact" className="btn btn-light btn-lg">
            Get Started
          </Link>
        </div>
      </section>

      <footer className="bg-dark text-white py-5">
              <div className="container">
                <div className="row">
                  <div className="col-lg-4 mb-4 mb-lg-0" data-aos="fade-up" data-aos-delay="100">
                    <h5 className="text-uppercase mb-4">FitLife</h5>
                     <p>Your destination for fitness and wellness. We provide top-notch facilities and training to help you achieve your health goals.</p>
                    <div className="mt-4">
                      <a href="https://www.facebook.com" className="text-white me-3"><i className="fab fa-facebook-f"></i></a>
                      <a href="https://x.com/i/flow/login" className="text-white me-3"><i className="fab fa-twitter"></i></a>
                      <a href="https://www.instagram.com" className="text-white me-3"><i className="fab fa-instagram"></i></a>
                      <a href=" https://accounts.google.com/ServiceLogin?service=youtube" className="text-white"><i className="fab fa-youtube"></i></a>
                    </div>
                  </div>
                  <div className="col-lg-4 mb-4 mb-lg-0" data-aos="fade-up" data-aos-delay="200">
                    <h5 className="text-uppercase mb-4">Quick Links</h5>
                    <ul className="list-unstyled">
                      <li className="mb-2"><Link to="/" className="text-white">Home</Link></li>
                      <li className="mb-2"><Link to="/about" className="text-white">About Us</Link></li>
                      <li className="mb-2"><Link to="/classes" className="text-white">Classes</Link></li>
                      <li className="mb-2"><Link to="/blog" className="text-white">Blog</Link></li>
                      <li><Link to="/contact" className="text-white">Contact</Link></li>
                    </ul>
                  </div>
                  <div className="col-lg-4" data-aos="fade-up" data-aos-delay="300">
                    <h5 className="text-uppercase mb-4">Contact Info</h5>
                    <ul className="list-unstyled">
                      <li className="mb-2"><i className="fas fa-map-marker-alt me-2"></i>Your Address</li>
                      <li className="mb-2"><i className="fas fa-phone me-2"></i> Your Phone No</li>
                      <li className="mb-2"><i className="fas fa-envelope me-2"></i> info@fitlife.com</li>
                      <li><i className="fas fa-clock me-2"></i> Mon-Fri: 6AM–10PM, Sat-Sun: 8AM–8PM</li>
                    </ul>
                  </div>
                </div>
                <hr className="my-4 bg-secondary" />
                <div className="row">
                  <div className="col-md-6 text-center text-md-start">
                    <p className="mb-0">&copy; 2025 FitLife. All rights reserved.</p>
                  </div>
                  <div className="col-md-6 text-center text-md-end">
                    <p className="mb-0">Designed by Team Mita IT Automation Pvt Ltd</p>
                  </div>
                </div>
              </div>
            </footer>
    </>
  );
}

export default About;
