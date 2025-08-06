import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Topmenu from "./Topmenu";
import AOS from "aos";
import "aos/dist/aos.css";

function Blog() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <>
      {/* Navbar */}
      <Topmenu />

      {/* Blog Header */}
      <header className="blog-header" data-aos="fade-up">
        <div className="hero-overlay"></div>
        <div className="container h-100">
          <div className="row h-100 align-items-center">
            <div className="col-12 text-center text-white">
              <h1 className="display-3 fw-bold">FitLife Blog</h1>
              <p className="lead">Fitness tips, nutrition advice, and success stories</p>
            </div>
          </div>
        </div>
      </header>

      {/* Blog Content */}
      <section className="py-5">
        <div className="container">
          <div className="row">
            {/* Left Column */}
            <div className="col-lg-8">
              <div className="row g-4">
                {[...Array(4)].map((_, i) => (
                  <div className="col-md-4" key={i} data-aos="zoom-in">
                    <article className="card h-100 border-0 shadow-sm">
                      <img
                        src={[
                          "https://images.unsplash.com/photo-1498837167922-ddd27525d352?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
                          "https://i.pinimg.com/736x/fb/3a/66/fb3a668fe90becdb03fa275867b0825e.jpg",
                          "https://images.unsplash.com/photo-1545205597-3d9d02c29597?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
                          "https://i.pinimg.com/736x/d0/5a/81/d05a819e91401f3f7981bf980795f241.jpg"
                        ][i]} className="card-img-top" alt={`Post ${i + 1}`} />
                      <div className="card-body">
                        <small className="text-muted">July 1, 2025 • {4 + i} min read</small>
                        <h3 className="card-title h5 mt-2">
                          {[
                            "Nutrition Myths Debunked",
                            "How to Stay Motivated in Your Fitness Journey",
                            "The Benefits of Yoga for Athletes",
                            "Maximizing Your Cardio Workouts"
                          ][i]}
                        </h3>
                        <p className="card-text">Sample summary for the blog post...</p>
                      </div>
                      <div className="card-footer bg-white border-0">
                        <Link to="#" className="btn btn-sm btn-outline-primary">Read More</Link>
                      </div>
                    </article>
                  </div>
                ))}
              </div>

              {/* Pagination */}
              <nav className="mt-5">
                <ul className="pagination justify-content-center">
                  <li className="page-item disabled">
                    <Link className="page-link" to="#" tabIndex="-1" aria-disabled="true">Previous</Link>
                  </li>
                  <li className="page-item active"><Link className="page-link" to="#">1</Link></li>
                  <li className="page-item"><Link className="page-link" to="#">2</Link></li>
                  <li className="page-item"><Link className="page-link" to="#">3</Link></li>
                  <li className="page-item"><Link className="page-link" to="#">Next</Link></li>
                </ul>
              </nav>
            </div>

            {/* Sidebar */}
            <div className="col-lg-4">
              <div className="card mb-4 border-0 shadow-sm" data-aos="fade-right">
                <div className="card-body">
                  <h5 className="card-title">Search</h5>
                  <div className="input-group">
                    <input type="text" className="form-control" placeholder="Search blog..." />
                    <button className="btn btn-primary" type="button"><i className="fas fa-search"></i></button>
                  </div>
                </div>
              </div>

              <div className="card mb-4 border-0 shadow-sm" data-aos="fade-right">
                <div className="card-body">
                  <h5 className="card-title">Categories</h5>
                  <ul className="list-unstyled">
                    <li className="mb-2"><Link to="#" className="text-decoration-none">Workout Tips (12)</Link></li>
                    <li className="mb-2"><Link to="#" className="text-decoration-none">Nutrition (8)</Link></li>
                    <li className="mb-2"><Link to="#" className="text-decoration-none">Success Stories (5)</Link></li>
                    <li className="mb-2"><Link to="#" className="text-decoration-none">Equipment Guide (3)</Link></li>
                    <li><Link to="#" className="text-decoration-none">Mindset (7)</Link></li>
                  </ul>
                </div>
              </div>

              <div className="card mb-4 border-0 shadow-sm" data-aos="fade-right">
                <div className="card-body">
                  <h5 className="card-title">Popular Posts</h5>
                  <div className="mb-3">
                    <Link to="#" className="text-decoration-none">
                      <h6 className="mb-1">5 Morning Routines of Highly Fit People</h6>
                    </Link>
                    <small className="text-muted">July 1, 2025</small>
                  </div>
                  <div className="mb-3">
                    <Link to="#" className="text-decoration-none">
                      <h6 className="mb-1">The Truth About Protein Supplements</h6>
                    </Link>
                    <small className="text-muted">July 1, 2025</small>
                  </div>
                  <div>
                    <Link to="#" className="text-decoration-none">
                      <h6 className="mb-1">How to Prevent Workout Injuries</h6>
                    </Link>
                    <small className="text-muted">July 1, 2025</small>
                  </div>
                </div>
              </div>

              <div className="card border-0 shadow-sm" data-aos="fade-right">
                <div className="card-body">
                  <h5 className="card-title">Newsletter</h5>
                  <p className="card-text">Subscribe to get fitness tips and special offers straight to your inbox.</p>
                  <form>
                    <div className="mb-3">
                      <input type="email" className="form-control" placeholder="Your email" />
                    </div>
                    <button type="submit" className="btn btn-primary w-100">Subscribe</button>
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
          <h2 className="fw-bold mb-4">Want More Fitness Tips?</h2>
          <p className="lead mb-4">Follow us on social media for daily inspiration and advice.</p>
          <div className="d-flex justify-content-center">
            <Link to="https://www.facebook.com/" className="text-white me-3 fs-3"><i className="fab fa-facebook"></i></Link>
            <Link to="https://www.instagram.com" className="text-white me-3 fs-3"><i className="fab fa-instagram"></i></Link>
            <Link to="https://x.com/i/flow/login" className="text-white me-3 fs-3"><i className="fab fa-twitter"></i></Link>
            <Link to="https://accounts.google.com/ServiceLogin?service=youtube" className="text-white fs-3"><i className="fab fa-youtube"></i></Link>
          </div>
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

export default Blog;
