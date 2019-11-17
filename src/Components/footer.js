import React from "react";
var tempDate = new Date();
var date =
  tempDate.getFullYear() +
  "-" +
  (tempDate.getMonth() + 1) +
  "-" +
  tempDate.getDate() +
  " " +
  tempDate.getHours() +
  ":" +
  tempDate.getMinutes();
var currDate = date;

const Footer = () => {
  return (
    <div id="footer-bar">
      <div id="social-bar">
        <img
          src="https://img.icons8.com/officel/80/000000/linkedin.png"
          className="social-icon"
          alt="linkedin"
        />
        <img
          src="https://img.icons8.com/officel/80/000000/facebook.png"
          className="social-icon"
          alt="facebook"
        />
        <img
          src="https://img.icons8.com/material-rounded/96/000000/github.png"
          className="social-icon"
          alt="github"
        />
        <img
          src="https://img.icons8.com/color/96/000000/twitter-squared.png"
          className="social-icon"
          alt="twitter"
        />
      </div>
      <section id="copyright">© Copyright 2019 </section>
      <section id="update-footer">Last Updated: {currDate}</section>
    </div>
  );
};
export default Footer;
