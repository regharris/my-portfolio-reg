import React from "react";
import { Link } from "react-router-dom";

let Nav = () => {
  return (
    <div className="nav">
      <Link to="/" id="about_me">
        About Me
      </Link>
      <Link to="/portfolio" id="portfolio">
        Portfolio
      </Link>
      <Link to="/resume" id="resumepage">
        Resume
      </Link>
      <Link to="/contact" id="contact">
        Contact
      </Link>
    </div>
  );
};
export default Nav;
