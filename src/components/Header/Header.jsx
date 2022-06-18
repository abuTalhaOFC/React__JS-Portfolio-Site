import React from "react";
import ME from "../asset/me5.png";
import CTA from "./CTA";
import "./header.css";
import HeaderSocial from "./HeaderSocial";

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello i'm</h5>
        <h1 className="my__name">Abu Talha</h1>
        <h5>Fullstack Developer</h5>
        <CTA />

        <a href="#about" className="scrool__down">
          Scrool Down
        </a>
        <HeaderSocial />

        <div className="me">
          <img src={ME} alt="Talha" />
        </div>
      </div>
    </header>
  );
};

export default Header;
