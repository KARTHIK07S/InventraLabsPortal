import React from 'react';

function Contact() {
  return (
    <section id="contact" className="contact">
      <h2>Contact Us</h2>
      <form>
        <input type="text" placeholder="Name" required />
        <input type="email" placeholder="Email" required />
        <textarea placeholder="Message" required></textarea>
        <button type="submit">Send Message</button>
      </form>
      <div className="contact-info">
        <p>Email: contact@inventralabs.com</p>
        <p>Address: Bengaluru, India</p>
        <p>Social: LinkedIn | GitHub</p>
      </div>
    </section>
  );
}

export default Contact;
