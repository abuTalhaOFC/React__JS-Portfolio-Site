import emailjs from "emailjs-com";
import React, { useRef } from "react";
import { BsWhatsapp } from "react-icons/bs";
import { MdOutlineEmail } from "react-icons/md";
import { RiMessengerFill } from "react-icons/ri";
import "./contact.css";

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_p3fdesm",
        "template_hbp2b6f",
        form.current,
        "JVE_21Z9kkXyW61ID"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__potions">
          <articlel className="contact__option">
            <MdOutlineEmail className="contact__icon" />
            <h4>Email</h4>
            <h5>abutalha.officialac@gmail.com</h5>
            <a
              href="mailto:abutalha.officialac@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              Send a massage
            </a>
          </articlel>
          <articlel className="contact__option">
            <RiMessengerFill className="contact__icon" />
            <h4>Messenger</h4>
            <h5>abutalha.private</h5>
            <a
              href="https://m.me/abutalha.private"
              target="_blank"
              rel="noreferrer"
            >
              Send a massage
            </a>
          </articlel>
          <articlel className="contact__option">
            <BsWhatsapp className="contact__icon" />
            <h4>WhatsApp</h4>
            <h5>+123456789</h5>
            <a
              href="https://api.whatsapp.com/send=+123456789"
              target="_blank"
              rel="noreferrer"
            >
              Send a massage
            </a>
          </articlel>
        </div>
        {/* ===End of contact option=== */}
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            id=""
            placeholder="Your Full Name"
            required
          />
          <input
            type="email"
            name="email"
            id=""
            placeholder="Your Email"
            required
          />
          <textarea
            name="message"
            id=""
            rows="7"
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
