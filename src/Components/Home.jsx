import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Topmenu from './Topmenu';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Home() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
    AOS.refresh();
  }, []);

  return (
    <>
      {/* Navbar */}
      <Topmenu />

      {/* Hero Section */}
      <header className="hero-section">
        <div className="hero-overlay"></div>
        <div className="container h-100">
          <div className="row h-100 align-items-center">
            <div className="col-12 text-center text-white" data-aos="fade-up">
              <h1 className="display-3 fw-bold">Transform Your Body</h1>
              <p className="lead">Join our gym and start your fitness journey today</p>
            </div>
          </div>
        </div>
      </header>

      {/* About Section */}
      <section className="py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 mb-4 mb-lg-0" data-aos="fade-right">
              <h2 className="fw-bold mb-4">Welcome to FitLife</h2>
              <p className="lead">Where fitness meets passion</p>
              <p>At FitLife, we believe in providing a supportive environment for people of all fitness levels. Our state-of-the-art facilities and certified trainers will help you achieve your fitness goals.</p>
              <Link to="/about" className="btn btn-outline-primary">Learn More</Link>
            </div>
            <div className="col-lg-6" data-aos="fade-left">
              <img src="https://images.unsplash.com/photo-1571902943202-507ec2618e8f?auto=format&fit=crop&w=1075&q=80" alt="Gym Interior" className="img-fluid rounded" />
            </div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="text-center mb-5" data-aos="zoom-in">
            <h2 className="fw-bold">Our Programs</h2>
            <p className="lead">We offer a variety of fitness programs</p>
          </div>
          <div className="row g-4">
            {[
              {
                title: 'Personal Training',
                image: 'https://i.pinimg.com/736x/1a/9a/8d/1a9a8dbc67256be42af6cb0a8ded48fb.jpg',
                text: 'One-on-one sessions with our certified trainers to help you achieve your specific fitness goals.'
              },
              {
                title: 'Group Classes',
                image: 'https://i.pinimg.com/736x/a2/3f/23/a23f234858786cd5d0cccb2c03b3e16b.jpg',
                text: 'Fun and energetic group workouts that keep you motivated and push your limits.'
              },
              {
                title: 'Cardio Zone',
                image: 'https://i.pinimg.com/736x/79/23/a0/7923a02a292883a741bfa115374bacff.jpg',
                text: 'State-of-the-art cardio equipment to help you burn calories and improve endurance.'
              }
            ].map((program, index) => (
              <div className="col-md-4" key={index} data-aos="zoom-in" data-aos-delay={index * 100}>
                <div className="card h-100 border-0 shadow-sm">
                  <img src={program.image} className="card-img-top" alt={program.title} />
                  <div className="card-body">
                    <h5 className="card-title">{program.title}</h5>
                    <p className="card-text">{program.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Membership Section */}
      <section id="membership" className="py-5">
        <div className="container">
          <div className="text-center mb-5" data-aos="fade-up">
            <h2 className="fw-bold">Membership Plans</h2>
            <p className="lead">Choose the plan that fits your lifestyle</p>
          </div>
          <div className="row g-4">
            {[
              { name: 'Basic', price: '₹700', features: ['All Basic features', 'Group classes included', 'Sauna access', 'Personalized workout plan'] },
              { name: 'Premium', price: '₹1500', features: ['All Basic features', 'Group classes included', 'Sauna access', 'Personalized workout plan'] },
              { name: 'Ultimate', price: '₹3500', features: ['All Basic features', 'Group classes included', 'Sauna access', 'Personalized workout plan'] }
            ].map((plan, index) => (
              <div className="col-md-4" key={index} data-aos="flip-left" data-aos-delay={index * 100}>
                <div className="card h-100 border-0 shadow-sm">
                  <div className="card-header bg-primary text-white text-center py-3">
                    <h4 className="my-0 fw-normal">{plan.name}</h4>
                  </div>
                  <div className="card-body text-center">
                    <h1 className="card-title pricing-card-title">{plan.price}<small className="text-muted fw-light">/mo</small></h1>
                    <ul className="list-unstyled mt-3 mb-4">
                      {plan.features.map((feature, i) => <li key={i}>{feature}</li>)}
                    </ul>
                    <Link to="/signup" className="w-100 btn btn-lg btn-primary">Sign up</Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="text-center mb-5" data-aos="fade-up">
            <h2 className="fw-bold">Our Gallery</h2>
            <p className="lead">Take a look at our facilities</p>
          </div>
          <div className="row g-3">
            {[
              "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e",
              "https://i.pinimg.com/736x/40/e6/c5/40e6c5f5681473f4914d7a5b98245cdd.jpg",
              "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b",
              "https://i.pinimg.com/736x/42/a9/62/42a96207305d023d0b23aef3865b47d3.jpg",
              "https://i.pinimg.com/736x/3b/23/bd/3b23bd6e92845bf0d49f92b77121d33d.jpg",
              "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b"
            ].map((src, index) => (
              <div className="col-md-4 col-6" key={index} data-aos="fade-up" data-aos-delay={index * 100}>
                <img src={src} className="img-fluid rounded" alt={`Gallery ${index + 1}`} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-5">
        <div className="container">
          <div className="text-center mb-5" data-aos="fade-up">
            <h2 className="fw-bold">What Our Members Say</h2>
            <p className="lead">Success stories from our community</p>
          </div>
          <div className="row g-4">
            {[
              { name: 'Sarah Johnson', image: 'https://randomuser.me/api/portraits/women/32.jpg', stars: 5, quote: 'FitLife Gym has completely transformed my fitness routine. The trainers are knowledgeable and the community is so supportive!' },
              { name: 'Michael Chen', image: 'https://randomuser.me/api/portraits/men/75.jpg', stars: 4.5, quote: "I've been to many gyms, but FitLife stands out with its clean facilities and variety of equipment. Highly recommended!" },
              { name: 'Emma Rodriguez', image: 'https://randomuser.me/api/portraits/women/63.jpg', stars: 5, quote: 'The group classes are amazing! I\'ve lost 15 pounds in 3 months and made so many friends along the way.' }
            ].map((testimonial, index) => (
              <div className="col-md-4" key={index} data-aos="fade-up" data-aos-delay={index * 100}>
                <div className="card h-100 border-0 shadow-sm">
                  <div className="card-body text-center">
                    <img src={testimonial.image} className="rounded-circle mb-3" width="80" alt={testimonial.name} />
                    <h5 className="card-title">{testimonial.name}</h5>
                    <div className="text-warning mb-3">
                      {[...Array(Math.floor(testimonial.stars))].map((_, i) => <i className="fas fa-star" key={i}></i>)}
                      {testimonial.stars % 1 !== 0 && <i className="fas fa-star-half-alt"></i>}
                    </div>
                    <p className="card-text">"{testimonial.quote}"</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-5 bg-primary text-white" data-aos="zoom-in">
        <div className="container text-center">
          <h2 className="fw-bold mb-4">Ready to Start Your Fitness Journey?</h2>
          <p className="lead mb-4">Join FitLife today and get your first week free!</p>
          <Link to="/signup" className="btn btn-light btn-lg">Join Now</Link>
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

export default Home;
