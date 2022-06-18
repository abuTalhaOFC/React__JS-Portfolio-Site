import React from "react";
import { BiCheck } from "react-icons/bi";
import "./services.css";

const Services = () => {
  return (
    <section id="services">
      <h5>What i Offer</h5>
      <h2>Services</h2>
      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="ser__icon" />
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing.</p>
            </li>
            <li>
              <BiCheck className="ser__icon" />
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing.</p>
            </li>
            <li>
              <BiCheck className="ser__icon" />
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing.</p>
            </li>
            <li>
              <BiCheck className="ser__icon" />
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing.</p>
            </li>
            <li>
              <BiCheck className="ser__icon" />
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing.</p>
            </li>
          </ul>
        </article>
        {/* ++++++UX/UI END+++++ */}
        <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="ser__icon" />
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing.</p>
            </li>
            <li>
              <BiCheck className="ser__icon" />
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing.</p>
            </li>
            <li>
              <BiCheck className="ser__icon" />
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing.</p>
            </li>
            <li>
              <BiCheck className="ser__icon" />
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing.</p>
            </li>
            <li>
              <BiCheck className="ser__icon" />
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing.</p>
            </li>
            <li>
              <BiCheck className="ser__icon" />
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing.</p>
            </li>
          </ul>
        </article>
        {/* +++++Web__Development+++++ */}
        <article className="service">
          <div className="service__head">
            <h3>Content Creation</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="ser__icon" />
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing.</p>
            </li>
            <li>
              <BiCheck className="ser__icon" />
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing.</p>
            </li>
            <li>
              <BiCheck className="ser__icon" />
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing.</p>
            </li>
            <li>
              <BiCheck className="ser__icon" />
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing.</p>
            </li>
            <li>
              <BiCheck className="ser__icon" />
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing.</p>
            </li>
          </ul>
        </article>
        {/* ++++++Content__Creation end+++++ */}
      </div>
    </section>
  );
};

export default Services;
