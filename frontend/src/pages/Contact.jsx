import "./Contact.css"

function Contact() {
  return (
    <section id="contact">
    <div id="container">
      <div id="contact-hero">
        <h1>Contact Us</h1>
        <p>
          Have questions about your stay, bookings, or special requests?
          We’re here to help you 24/7.
        </p>
      </div>
      <form>
        <input type="text" placeholder="Enter Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <input type="text" placeholder="Subject" required />
        <textarea rows="5" placeholder="Your Message" required></textarea>
        <button type="submit" id="submit">Send Message</button>
      </form>
    </div>
    </section>
  );
}

export default Contact;