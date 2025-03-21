import React, { useState } from "react";
import { FaBed, FaStar, FaPhone,FaFacebook, FaTwitter, FaInstagram, FaEnvelope } from "react-icons/fa"; // Icons from react-icons
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom"; ///i react router-dom

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./Landingpage.css"

const Landingpage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();


  const testimonials = [
    {
      name: "Sarah Johnson",
      location: "London, UK",
      image: "https://randomuser.me/api/portraits/women/1.jpg",
      rating: 5,
      review:
        "The booking process was seamless, and our stay exceeded all expectations. Will definitely use this service again!",
    },
    {
      name: "Michael Chen",
      location: "Toronto, Canada",
      image: "https://randomuser.me/api/portraits/men/1.jpg",
      rating: 4,
      review:
        "Found an amazing deal for our anniversary trip. The hotel was exactly as described and the customer service was top-notch.",
    },
    {
      name: "Elena Rodriguez",
      location: "Barcelona, Spain",
      image: "https://randomuser.me/api/portraits/women/2.jpg",
      rating: 5,
      review:
        "This platform made planning our family vacation so easy. Great selection of hotels and the price matching guarantee saved us money!",
    },
  ];
  

  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
      <div className="container-fluid">
        
        {/* Logo */}
        <a className="navbar-brand" href="#">
          <img src="https://www.hotelhaven.fi/assets/layout/hotel-haven-logo.svg" alt="Logo" width="160" height="40" />
          {/* Hotel */}
        </a>

        {/* Toggle Button */}
        <button 
          className="navbar-toggler" 
          type="button" 
          onClick={() => setIsOpen(!isOpen)}
          aria-controls="navbarNav" 
          aria-expanded={isOpen ? "true" : "false"} 
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar Links */}
        <div className={`collapse navbar-collapse justify-content-center ${isOpen ? "show" : ""}`} id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item"><a className="nav-link active" href="#">Home</a></li>
            <li className="nav-item"><a className="nav-link" href="#offers">Offers</a></li>
            <li className="nav-item"><a className="nav-link" href="#pricing">Pricing</a></li>
            <li className="nav-item"><a className="nav-link" href="#footer">Contact</a></li>

            {/* Buttons (Visible only on small screens) */}
            <div className="d-lg-none d-flex gap-2 mt-2">
              <button className="btn btn-primary w-100"  onClick={() => navigate("/dashboard")}>GUEST</button>
        <button className="btn btn-primary w-100" onClick={() => navigate("/Auth")}>Sign In</button>
            </div>
          </ul>
        </div>

        {/* Buttons (Visible only on large screens) */}
        <div className="d-none d-lg-flex gap-2">
          <button className="btn btn-primary" onClick={() => navigate("/dashboard")}>GUEST</button>
          <button className="btn btn-primary" onClick={() => navigate("/auth")}>Sign In</button>       
          </div>

      </div>
    </nav>

<section className="hero-section">
      <div className="overlay"></div>
      <div className="content">
        <motion.h1
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          Discover Your Perfect Stay
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          Find and book the best hotels worldwide with exclusive deals and personalized recommendations.
        </motion.p>

        <motion.a
          href="#"
          className="btn"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          Explore Now
        </motion.a>
      </div>
    </section>

    {/* Hotel Info */}
    <div className="hotel-info">
      <h1>Luxurious Resort by the Ocean</h1>
      <p>
        Escape to a paradise where luxury meets nature. Our resort offers
        breathtaking ocean views, world-class amenities, and an unforgettable
        experience.
      </p>
      <p>
        Enjoy our premium suites, relaxing spa treatments, and gourmet dining
        while soaking in the beauty of the coastline.
      </p>
      {/* <h2>Exclusive Summer Getaway</h2> */}
    </div>
    

     {/* offer section */}
    <div className="offers-section" id="offers"> 
      <h2 className="section-title">Exclusive Spring Offers</h2>
      <div className="offers-container">
        {/* First Offer */}
        <div className="offer">
          <img src="https://www.sripanwa.com/images/villas/two-bedroom-pool-villa-ocean-view-phuket-sri-panwa-luxury-resort-living-room.jpg" alt="Luxury Hotel Room" className="offer-image" />
          <h3>Stay Longer & Save</h3>
          <p>
            Extend your stay and enjoy up to **20% off** at our luxury resort. Experience
            comfort, relaxation, and breathtaking views with exclusive spring discounts.
          </p>
          <button className="read-more-btn">READ MORE</button>
        </div>

        {/* Second Offer */}
        <div className="offer">
          <img src="https://media.istockphoto.com/id/503019528/photo/road-front-of-luxury-building-in-clear-sky-at-night.jpg?s=612x612&w=0&k=20&c=xkjUByXNE5SdMSeYxLqIwweZMg9XZ6xnWEK7ypdeO4I=" alt="Jazz Festival Event" className="offer-image" />
          <h3>Spring Jazz Festival</h3>
          <p>
            Join us for an unforgettable **Jazz Festival** this spring. Special stay
            offers are available for festival attendees. Enjoy music, fine dining, and
            luxury accommodation.
          </p>
          <button className="read-more-btn">READ MORE</button>
        </div>
      </div>
    </div>

{/* why choose */}
<section className="why-choose-us" id="pricing">
      <h2 className="section-title">Why Choose Us</h2>
      <div className="features-container">
        {/* Best Selection */}
        <div className="feature">
          <div className="icon">
            <FaBed />
          </div>
          <h3>Best Selection</h3>
          <p>Over 1 million hotels worldwide to fit every budget and preference.</p>
        </div>

        {/* Best Price Guarantee */}
        <div className="feature">
          <div className="icon">
            <FaStar />
          </div>
          <h3>Best Price Guarantee</h3>
          <p>Find a lower price? We'll match it and give you an additional 10% off.</p>
        </div>

        {/* 24/7 Support */}
        <div className="feature">
          <div className="icon">
            <FaPhone />
          </div>
          <h3>24/7 Support</h3>
          <p>Our customer service team is available around the clock to assist you.</p>
        </div>
      </div>
    </section>


    <div className="testimonial-section">
  <h2>What Our Customers Say</h2>
  <div className="testimonial-container">
    {testimonials.map((testimonial, index) => (
      <div key={index} className="testimonial-card">
        <img src={testimonial.image} alt={testimonial.name} className="avatar" />
        <h3>{testimonial.name}</h3>
        <p className="location">{testimonial.location}</p>
        <div className="stars">
          {"⭐".repeat(testimonial.rating)}
        </div>
        <p className="review">"{testimonial.review}"</p>
      </div>
    ))}
  </div>
</div>

{/* subscribe  */}
<div className="subscribe-section">
      <h1>Subscribe to Our Newsletter</h1>
      <p>Get exclusive deals and travel inspiration straight to your inbox.</p>
      <div className="subscribe-form">
        <input type="email" placeholder="Your email address" />
        <button>Subscribe</button>
      </div>
    </div>

{/* footer */}
<footer className="footer" id="footer">
      <div className="footer-container">
        {/* Left Section */}
        <div className="footer-brand">
          <h2>
            <FaBed className="icon" /> <span className="brand-name">Stay<span className="highlight">Ease</span></span>
          </h2>
          <p>Find your perfect stay with our curated selection of hotels worldwide.</p>
          <div className="social-icons">
            <FaFacebook className="social-icon" />
            <FaTwitter className="social-icon" />
            <FaInstagram className="social-icon" />
          </div>
        </div>

        {/* Quick Links */}
        <div className="footer-links">
          <h3>Quick Links</h3>
          <ul>
            <li>Home</li>
            <li>Hotels</li>
            <li>Destinations</li>
            <li>Deals</li>
            <li>About Us</li>
          </ul>
        </div>

        {/* Support */}
        <div className="footer-links">
          <h3>Support</h3>
          <ul>
            <li>Help Center</li>
            <li>Cancellation Options</li>
            <li>Safety Resource Center</li>
            <li>FAQ</li>
            <li>Contact Us</li>
          </ul>
        </div>

        {/* Contact */}
        <div className="footer-contact">
          <h3>Contact</h3>
          <p><FaPhone /> +1 (555) 123-4567</p>
          <p><FaEnvelope /> support@stayease.com</p>
          <p>🏠 123 Booking Street, Suite 101</p>
          <p>New York, NY 10001</p>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="footer-bottom">
        <p>© 2025 StayEase. All rights reserved.</p>
        <div className="footer-policies">
          <span>Privacy Policy</span>
          <span>Terms of Service</span>
          <span>Cookie Policy</span>
        </div>
      </div>
    </footer>
</>
  );
};

export default Landingpage;
