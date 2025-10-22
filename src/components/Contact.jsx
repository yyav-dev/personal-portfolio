import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Contact.css";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_i5f8e19",    // Your EmailJS Service ID
        "template_zwg8zyy",   // Your EmailJS Template ID
        {
          user_name: form.current.user_name.value,
          user_email: form.current.user_email.value,
          message: form.current.message.value,
        },
        "1KqCxfJUEB9bXHVEA"     // Your EmailJS Public Key
      )
      .then(
        (result) => {
          toast.success("Message sent successfully!", {
            position: "top-right",
            autoClose: 3000,
          });
          form.current.reset();
        },
        (error) => {
          toast.error("Oops! Something went wrong.", {
            position: "top-right",
            autoClose: 3000,
          });
          console.log("EmailJS Error:", error.text);
        }
      );
  };

  return (
    <section id="contact" className="contact-section">
      <h2 className="section-title">Contact Me</h2>

      <div className="contact-container">
        {/* Contact Form */}
        <form ref={form} onSubmit={sendEmail} className="contact-form">
          <label>Name</label>
          <input type="text" name="user_name" placeholder="Your Name" required />

          <label>Email</label>
          <input type="email" name="user_email" placeholder="Your Email" required />

          <label>Message</label>
          <textarea
            name="message"
            rows="5"
            placeholder="Write your message here..."
            required
          ></textarea>

          <div className="form-buttons">
            <button type="submit" className="btn-submit">Send Message</button>
          </div>
        </form>

        {/* Google Map */}
        <div className="map-container">
          <iframe
            title="location-map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15665.121177033736!2d76.95708629155914!3d11.017584125613404!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba85855910aed83%3A0x80875de5cd370a9d!2sGandhipuram%2C%20Tamil%20Nadu%20641012!5e0!3m2!1sen!2sin!4v1760335572431!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: "0" }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>

      <ToastContainer />
    </section>
  );
};

export default Contact;
