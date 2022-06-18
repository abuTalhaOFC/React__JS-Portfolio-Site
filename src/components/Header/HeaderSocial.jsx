import React from 'react';
import { BsDribbble, BsGithub, BsLinkedin } from "react-icons/bs";
import "./header.css";

const HeaderSocial = () => {
  return (
    <div className="header__social">
        <a href="https://linkedin.com" target="_blank" rel="noreferrer"><BsLinkedin/></a>
        <a href="https://github.com" target="_blank" rel="noreferrer"><BsGithub/></a>
        <a href="https://dribbble.com" target="_blank" rel="noreferrer"><BsDribbble/></a>
    </div>
  )
}

export default HeaderSocial