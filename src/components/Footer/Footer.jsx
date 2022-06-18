import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { IoLogoTwitter } from "react-icons/io";
import "./footer.css";

const Footer = () => {
  return (
      <footer>
        <a href="#" className="footer__logo">PROTALHA</a>
        <ul className="parmalinks">
          <li><a href="#">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#srevices">Services</a></li>
          <li><a href="#portfolio">Portfolio</a></li>
          <li><a href="#testimonial">Testimonial</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>

        <div className="footer__socials">
          <a href="https://facebook.com"><FaFacebook className="footer__social-logo" /> </a>
          <a href="https://instagram.com"><FiInstagram className="footer__social-logo"/></a>
          <a href="https://twitter.com"><IoLogoTwitter className="footer__social-logo"/></a>
        </div>

        <div className="footer__copyright">
          <small>&copy; PROTALHA. All rigths reserved. </small>
        </div>
      </footer>
  );
};

export default Footer;
