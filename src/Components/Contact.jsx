import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Topmenu from "./Topmenu";
import AOS from "aos";
import "aos/dist/aos.css";

function Contact() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <>
      <Topmenu />

      <header className="contact-header" data-aos="fade-up">
        <div className="hero-overlay"></div>
        <div className="container h-100">
          <div className="row h-100 align-items-center">
            <div className="col-12 text-center text-white">
              <h1 className="display-3 fw-bold">Contact Us</h1>
              <p className="lead">We'd love to hear from you</p>
            </div>
          </div>
        </div>
      </header>

      <section className="py-5">
        <div className="container">
          <div className="row g-5">
            {/* Contact Info */}
            <div className="col-lg-6" data-aos="fade-right">
              <h2 className="fw-bold mb-4">Get In Touch</h2>
              <p className="lead mb-5">Have questions about memberships, classes, or anything else? Reach out to us using the information below or fill out the contact form.</p>

              <div className="mb-5">
                <div className="d-flex mb-4">
                  <div className="me-4 text-primary">
                    <i className="fas fa-map-marker-alt fa-2x"></i>
                  </div>
                  <div>
                    <h5 className="fw-bold">Address</h5>
                    <p>Your Address-pincode</p>
                  </div>
                </div>

                <div className="d-flex mb-4">
                  <div className="me-4 text-primary">
                    <i className="fas fa-phone fa-2x"></i>
                  </div>
                  <div>
                    <h5 className="fw-bold">Phone</h5>
                    <p>Main: Your Phone No</p>
                    <p>Membership: Your Phone No</p>
                  </div>
                </div>

                <div className="d-flex">
                  <div className="me-4 text-primary">
                    <i className="fas fa-envelope fa-2x"></i>
                  </div>
                  <div>
                    <h5 className="fw-bold">Email</h5>
                    <p>General:  info@fitlife.com</p>
                    <p>Support: support@fitlife.com</p>
                  </div>
                </div>
              </div>

              <h5 className="fw-bold mb-3">Hours of Operation</h5>
              <ul className="list-unstyled">
                <li className="mb-2"><strong>Monday - Friday:</strong> 6:00 AM - 10:00 PM</li>
                <li className="mb-2"><strong>Saturday:</strong> 8:00 AM - 8:00 PM</li>
                <li><strong>Sunday:</strong> 8:00 AM - 6:00 PM</li>
              </ul>

              <div className="mt-5">
                <h5 className="fw-bold mb-3">Find Us On Map</h5>
                <div className="ratio ratio-16x9" data-aos="zoom-in">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2508.5971782916968!2d-114.07036052390215!3d51.04206024459187!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5371711d5c9476f1%3A0xaf10da834f5b0a9e!2sGoogle%20Cloud!5e0!3m2!1sen!2sin!4v1751623945053!5m2!1sen!2sin"
                    width="600"
                    height="450"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Prozone Location"
                  ></iframe>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="col-lg-6" data-aos="fade-left">
              <div className="card border-0 shadow-sm">
                <div className="card-body p-5">
                  <h3 className="fw-bold mb-4">Send Us a Message</h3>
                  <form>
                    <div className="mb-3">
                      <label htmlFor="fullName" className="form-label">Full Name</label>
                      <input type="text" className="form-control" id="fullName" required />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="email" className="form-label">Email Address</label>
                      <input type="email" className="form-control" id="email" required />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="phone" className="form-label">Phone Number</label>
                      <input type="tel" className="form-control" id="phone" />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="subject" className="form-label">Subject</label>
                      <select className="form-select" id="subject">
                        <option defaultValue>Choose a subject</option>
                        <option>Membership Inquiry</option>
                        <option>Class Schedule</option>
                        <option>Personal Training</option>
                        <option>General Question</option>
                        <option>Feedback</option>
                      </select>
                    </div>
                    <div className="mb-3">
                      <label htmlFor="message" className="form-label">Message</label>
                      <textarea className="form-control" id="message" rows="5" required></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary w-100 py-2">Send Message</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-5 bg-primary text-white" data-aos="fade-up">
        <div className="container text-center">
          <h2 className="fw-bold mb-4">Ready to Get Started?</h2>
          <p className="lead mb-4">Schedule a free tour of our facilities and meet with a membership consultant.</p>
          <Link to="/signup" className="btn btn-light btn-lg">Book Your Tour</Link>
        </div>
      </section>

      {/* Footer */}
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

export default Contact;
