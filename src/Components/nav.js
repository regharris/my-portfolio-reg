import React from "react";
import { Link } from "react-router-dom";

let Nav = () => {
  return (
    <div>
      <div class="pos-f-t">
        <div class="collapse" id="navbarToggleExternalContent">
          <div class="bg-dark p-1">
            <div class="nav-element">
              <Link to="/" id="about_me">
                About Me
              </Link>
              <Link to="/portfolio" id="portfolio">
                Portfolio
              </Link>
              <Link to="/resume" id="resume">
                Resume
              </Link>
              <Link to="/contact" id="contact">
                Contact
              </Link>
            </div>
          </div>
        </div>
        <nav class="navbar navbar-dark bg-dark">
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarToggleExternalContent"
            aria-controls="navbarToggleExternalContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
        </nav>
      </div>
    </div>
  );
};
export default Nav;
