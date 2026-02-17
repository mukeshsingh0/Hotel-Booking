// About.jsx
import React from "react";
import "./About.css";

const About = () => {
  return (
    <section className="about-page">
      {/* Hero Section */}
      <div className="about-hero">
        <div className="about-hero-text">
          <h1>About StayEase Hotels</h1>
          <p>
            StayEase is your trusted partner for finding the perfect stay —
            from luxury resorts to budget-friendly rooms. We help thousands of
            travelers book safe, comfortable, and affordable stays every day.
          </p>
        </div>

        <div className="about-hero-card">
          <h2>10+ Years of Hospitality</h2>
          <p>
            We collaborate with top-rated hotels and properties to make your
            travel experience seamless and memorable.
          </p>
          <div className="about-stats">
            <div className="stat-item">
              <span className="stat-number">5K+</span>
              <span className="stat-label">Hotels Listed</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">150K+</span>
              <span className="stat-label">Happy Guests</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">80+</span>
              <span className="stat-label">Cities Covered</span>
            </div>
          </div>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="about-section">
        <h2>Why Choose Us?</h2>
        <p className="about-section-subtitle">
          We focus on making hotel booking simple, transparent, and reliable.
        </p>

        <div className="about-features">
          <div className="feature-card">
            <h3>Best Price Guarantee</h3>
            <p>
              Get access to exclusive deals and discounts with no hidden
              charges.
            </p>
          </div>
          <div className="feature-card">
            <h3>Verified Properties</h3>
            <p>
              Every hotel listed on our platform is verified for quality and
              safety.
            </p>
          </div>
          <div className="feature-card">
            <h3>24/7 Support</h3>
            <p>
              Our customer support team is always ready to assist you with your
              bookings.
            </p>
          </div>
          <div className="feature-card">
            <h3>Easy Cancellations</h3>
            <p>
              Flexible booking and cancellation policies for a stress-free
              experience.
            </p>
          </div>
        </div>
      </div>

      {/* How It Works */}
      <div className="about-section about-steps">
        <h2>How It Works</h2>
        <div className="steps-container">
          <div className="step">
            <span className="step-number">1</span>
            <h3>Search</h3>
            <p>
              Enter your destination, dates, and preferences to explore hotel
              options.
            </p>
          </div>
          <div className="step">
            <span className="step-number">2</span>
            <h3>Compare</h3>
            <p>
              Check ratings, amenities, photos, and prices to find the best
              match for you.
            </p>
          </div>
          <div className="step">
            <span className="step-number">3</span>
            <h3>Book</h3>
            <p>
              Complete your booking securely in just a few clicks and receive
              instant confirmation.
            </p>
          </div>
        </div>
      </div>

      {/* Mission Section */}
      <div className="about-section about-mission">
        <h2>Our Mission</h2>
        <p>
          Our mission is to make hotel booking effortless, transparent, and
          delightful for every traveler. Whether you are planning a family
          vacation, business trip, or solo adventure, we are here to help you
          find the right place to stay.
        </p>
      </div>

      {/* Call to Action */}
      <div className="about-cta">
        <h2>Ready to Book Your Next Stay?</h2>
        <p>Explore hotels, compare prices, and book your perfect stay now.</p>
        <button className="about-cta-btn">Start Booking</button>
      </div>
    </section>
  );
};

export default About;