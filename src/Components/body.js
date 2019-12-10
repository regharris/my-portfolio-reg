import React from "react";
import res from "../img/portfolio_resume.png";
import Projects from "./projects";

const Body = () => {
  return (
    <div>
      <div className="img-1">
        <div className="p-text">
          <span className="border">about me</span>
        </div>
      </div>
      <section className="section section-light">
        <p>
          Hello! I'm Reginald Harris, a Software Developer eager to find
          development opportunities in North Carolina. I've had experience
          building full stack applications individually as well as in teams. I
          enjoy exploring new coding languages, libraries and building new
          projects. My interest are building RESTful API servers and building
          REACTjs applications.
        </p>
      </section>
      <div className="img-2">
        <div className="p-text">
          <span className="border trans">portfolio</span>
        </div>
      </div>
      <section className="section section-dark">
        <Projects />
      </section>
      <div className="img-3">
        <div className="p-text">
          <span className="border trans">resume</span>
        </div>
      </div>
      <section className="section section-dark">
        <img src={res} id="resume" width="500px" height="600px" alt="resume" />
      </section>
      <div className="img-1">
        <div className="p-text">
          <span className="border">contact me</span>
        </div>
      </div>
      <section className="section section-light">
        {/* <form id="form">
          <div className="col-md-8">
            <input
              type="text"
              className="form-control"
              placeholder="First Name"
              aria-describedby="inputGroupPrepend"
              required
            />
            <input
              type="text"
              className="form-control"
              placeholder="Last Name"
              aria-describedby="inputGroupPrepend"
              required
            />
            <input
              type="text"
              className="form-control"
              placeholder="Email"
              aria-describedby="inputGroupPrepend"
              required
            />
            <textarea
              className="form-control"
              placeholder="Comments"
              id="exampleFormControlTextarea3"
              rows="7"
            ></textarea>

            <div class="invalid-feedback">Please input your first name</div>
          </div>
          <button className="contact-submit" onClick={thank}>
            Submit
          </button>
        </form> */}
        <p>
          <b>Email:</b>
          <br></br>regharris0504@gmail.com
        </p>
        <p>
          <b>Mobile:</b>
          <br></br>7042419649
        </p>
        <a href="https://github.com/regharris">Github</a>
        <br></br>
        <a href="https://www.linkedin.com/in/reginald-harris-7147a7194?trk=people-guest_profile-result-card_result-card_full-click">
          LinkedIn
        </a>
      </section>
    </div>
  );
};

export default Body;
