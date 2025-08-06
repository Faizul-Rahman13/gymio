import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Topmenu from "./Topmenu";
import AOS from "aos";
import "aos/dist/aos.css";

function Classes(){

    useEffect(() => {
        AOS.init({ duration: 1000, once: true });
        window.scrollTo(0, 0);
    }, []);

    return(

        <>

        < Topmenu/>

    <header className="classes-header" data-aos="fade-down">
        <div className="hero-overlay"></div>
        <div className="container h-100">
            <div className="row h-100 align-items-center">
                <div className="col-12 text-center text-white">
                    <h1 className="display-3 fw-bold">Our Classes</h1>
                    <p className="lead">Find the perfect workout for your goals</p>
                </div>
            </div>
        </div>
    </header>

    <section className="py-5" data-aos="fade-up">
        <div className="container">
            <div className="row">
                <div className="col-lg-8 mx-auto text-center">
                    <h2 className="fw-bold mb-4">Diverse Classes for All Levels</h2>
                    <p className="lead">Whether you're a beginner or an experienced athlete, we have classes that will challenge and inspire you. Our certified instructors will guide you through each session, ensuring proper form and maximum results.</p>
                </div>
            </div>
        </div>
    </section>

    <section className="py-5 bg-light" data-aos="zoom-in">
        <div className="container">
            <div className="text-center mb-5">
                <h2 className="fw-bold">Weekly Class Schedule</h2>
                <p className="lead">Updated January 2023</p>
            </div>
            <div className="table-responsive">
                <table className="table table-bordered table-hover">
                    <thead className="table-dark">
                        <tr>
                            <th>Time</th>
                            <th>Monday</th>
                            <th>Tuesday</th>
                            <th>Wednesday</th>
                            <th>Thursday</th>
                            <th>Friday</th>
                            <th>Saturday</th>
                            <th>Sunday</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>6:00 AM</td>
                            <td>Bootcamp</td>
                            <td>Yoga</td>
                            <td>HIIT</td>
                            <td>Spin</td>
                            <td>Pilates</td>
                            <td>Bootcamp</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>7:30 AM</td>
                            <td>Yoga</td>
                            <td>Spin</td>
                            <td>Zumba</td>
                            <td>Bootcamp</td>
                            <td>Yoga</td>
                            <td>Spin</td>
                            <td>Yoga</td>
                        </tr>
                        <tr>
                            <td>9:00 AM</td>
                            <td>Pilates</td>
                            <td>HIIT</td>
                            <td>Yoga</td>
                            <td>Zumba</td>
                            <td>Bootcamp</td>
                            <td>Zumba</td>
                            <td>Pilates</td>
                        </tr>
                        <tr>
                            <td>12:00 PM</td>
                            <td>Spin</td>
                            <td>Bootcamp</td>
                            <td>Pilates</td>
                            <td>HIIT</td>
                            <td>Zumba</td>
                            <td>-</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>5:30 PM</td>
                            <td>HIIT</td>
                            <td>Zumba</td>
                            <td>Spin</td>
                            <td>Bootcamp</td>
                            <td>HIIT</td>
                            <td>-</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>7:00 PM</td>
                            <td>Zumba</td>
                            <td>Pilates</td>
                            <td>Bootcamp</td>
                            <td>Yoga</td>
                            <td>Spin</td>
                            <td>-</td>
                            <td>-</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className="alert alert-info mt-4">
                <i className="fas fa-info-circle me-2"></i> All classes are 45-60 minutes long. Please arrive 10 minutes early to set up.
            </div>
        </div>
    </section>

    <section className="py-5" data-aos="fade-up">
        <div class="container">
        <div class="text-center mb-5">
            <h2 class="fw-bold">Our Classes & Pricing</h2>
            <p class="lead">Choose your class and plan that fits your goal</p>
        </div>
        <div class="row g-4">
            <div class="col-md-6 col-lg-4">
                <div class="card h-100 border-0 shadow-sm">
                    <img src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=1170&q=80" class="card-img-top" alt="Personal Training" />
                    <div class="card-body">
                        <h5 class="card-title">Personal Training</h5>
                        <h6 class="text-primary mb-3">All Levels | 1-on-1</h6>
                        <p class="card-text">Work one-on-one with a certified trainer to develop a customized workout plan tailored to your specific goals, whether it's weight loss, muscle building, or athletic performance.</p>
                        <ul class="list-unstyled">
                            <li><i class="fas fa-check text-primary me-2"></i> Personalized workout plans</li>
                            <li><i class="fas fa-check text-primary me-2"></i> Form correction</li>
                            <li><i class="fas fa-check text-primary me-2"></i> Accountability</li>
                        </ul>
                        <div class="mt-3 fw-bold text-primary">₹1284 / session</div>
                    </div>
                    <div class="card-footer bg-white border-0">
                        <a href="/signup" class="btn btn-primary w-100">Book Session</a>
                    </div>
                </div>
            </div>

            <div class="col-md-6 col-lg-4">
                <div class="card h-100 border-0 shadow-sm">
                    <img src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=1170&q=80" class="card-img-top" alt="HIIT Class" />
                    <div class="card-body">
                        <h5 class="card-title">HIIT</h5>
                        <h6 class="text-primary mb-3">Intermediate/Advanced | Group</h6>
                        <p class="card-text">High Intensity Interval Training alternates between intense bursts of activity and fixed periods of less-intense activity or rest. Burn maximum calories in minimum time.</p>
                        <ul class="list-unstyled">
                            <li><i class="fas fa-check text-primary me-2"></i> Fat burning</li>
                            <li><i class="fas fa-check text-primary me-2"></i> Cardiovascular health</li>
                            <li><i class="fas fa-check text-primary me-2"></i> Metabolic boost</li>
                        </ul>
                        <div class="mt-3 fw-bold text-primary">₹10,274 / 10 classes</div>
                    </div>
                    <div class="card-footer bg-white border-0">
                        <a href="/signup" class="btn btn-primary w-100">Join Class</a>
                    </div>
                </div>
            </div>

            <div class="col-md-6 col-lg-4">
                <div class="card h-100 border-0 shadow-sm">
                    <img src="https://images.unsplash.com/photo-1545205597-3d9d02c29597?auto=format&fit=crop&w=1170&q=80" class="card-img-top" alt="Yoga Class" />
                    <div class="card-body">
                        <h5 class="card-title">Yoga</h5>
                        <h6 class="text-primary mb-3">All Levels | Group</h6>
                        <p class="card-text">Improve flexibility, strength, and balance while reducing stress through a series of postures and breathing exercises. Various styles offered including Vinyasa and Hatha.</p>
                        <ul class="list-unstyled">
                            <li><i class="fas fa-check text-primary me-2"></i> Stress reduction</li>
                            <li><i class="fas fa-check text-primary me-2"></i> Improved flexibility</li>
                            <li><i class="fas fa-check text-primary me-2"></i> Mind-body connection</li>
                        </ul>
                        <div class="mt-3 fw-bold text-primary">₹8476 / month</div>
                    </div>
                    <div class="card-footer bg-white border-0">
                        <a href="/signup" class="btn btn-primary w-100">Join Class</a>
                    </div>
                </div>
            </div>

            <div class="col-md-6 col-lg-4">
                <div class="card h-100 border-0 shadow-sm">
                    <img src="https://i.pinimg.com/736x/79/23/a0/7923a02a292883a741bfa115374bacff.jpg" class="card-img-top" alt="Spin Class" />
                    <div class="card-body">
                        <h5 class="card-title">Spin</h5>
                        <h6 class="text-primary mb-3">All Levels | Group</h6>
                        <p class="card-text">High-energy indoor cycling classes set to motivating music. Adjustable resistance allows all fitness levels to participate. Great for cardiovascular health and leg strength.</p>
                        <ul class="list-unstyled">
                            <li><i class="fas fa-check text-primary me-2"></i> Low impact</li>
                            <li><i class="fas fa-check text-primary me-2"></i> High calorie burn</li>
                            <li><i class="fas fa-check text-primary me-2"></i> Leg strengthening</li>
                        </ul>
                        <div class="mt-3 fw-bold text-primary">₹1284 / session</div>
                    </div>
                    <div class="card-footer bg-white border-0">
                        <a href="/signup" class="btn btn-primary w-100">Join Class</a>
                    </div>
                </div>
            </div>

            <div class="col-md-6 col-lg-4">
                <div class="card h-100 border-0 shadow-sm">
                    <img src="https://prismfitnessgroup.com/wp-content/uploads/2024/04/45-Minute-Outdoor-Bootcamp-Workouts-for-Total-Body-Burn-2.jpg" class="card-img-top" alt="Bootcamp Class" />
                    <div class="card-body">
                        <h5 class="card-title">Bootcamp</h5>
                        <h6 class="text-primary mb-3">All Levels | Group</h6>
                        <p class="card-text">Military-style training combining strength and cardio exercises in circuit format. Build endurance while toning your entire body. Modifications available for all levels.</p>
                        <ul class="list-unstyled">
                            <li><i class="fas fa-check text-primary me-2"></i> Full-body workout</li>
                            <li><i class="fas fa-check text-primary me-2"></i> Team atmosphere</li>
                            <li><i class="fas fa-check text-primary me-2"></i> Constant variety</li>
                        </ul>
                        <div class="mt-3 fw-bold text-primary">₹10,274 / 10 classes</div>
                    </div>
                    <div class="card-footer bg-white border-0">
                        <a href="/signup" class="btn btn-primary w-100">Join Class</a>
                    </div>
                </div>
            </div>

            <div class="col-md-6 col-lg-4">
                <div class="card h-100 border-0 shadow-sm">
                    <img src="https://i.pinimg.com/736x/30/e1/21/30e1219849a22d05861ead49947e00b1.jpg" class="card-img-top" alt="Zumba Class" />
                    <div class="card-body">
                        <h5 class="card-title">Zumba</h5>
                        <h6 class="text-primary mb-3">All Levels | Group</h6>
                        <p class="card-text">Dance-based cardio class combining Latin and international music with dynamic moves. Easy-to-follow routines make this a fun way to burn calories without feeling like exercise.</p>
                        <ul class="list-unstyled">
                            <li><i class="fas fa-check text-primary me-2"></i> Fun atmosphere</li>
                            <li><i class="fas fa-check text-primary me-2"></i> Improves coordination</li>
                            <li><i class="fas fa-check text-primary me-2"></i> Full-body movement</li>
                        </ul>
                        <div class="mt-3 fw-bold text-primary">₹8476 / month</div>
                    </div>
                    <div class="card-footer bg-white border-0">
                        <a href="/signup" class="btn btn-primary w-100">Join Class</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </section>

    <section className="py-5 bg-primary text-white" data-aos="zoom-in">
        <div className="container text-center">
            <h2 className="fw-bold mb-4">Not Sure Which Class is Right For You?</h2>
            <p className="lead mb-4">Try any class for free with our 3-day trial pass.</p>
            <a href="/contact" className="btn btn-light btn-lg">Get Your Free Trial</a>
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
    )
}

export default Classes;
