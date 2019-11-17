import React from "react";
import res from "../img/resume.png";

const Body = () => {
  return (
    <div>
      <div className="img-1">
        <div className="p-text">
          <span className="border">about me</span>
        </div>
      </div>
      <section className="section section-light">
        <h2>Background</h2>
        <p>
          Hello!, I'm Reginald Harris, a Software Developer eager to find
          development opportunities in North Carolina. I've had experience
          building full stack applications individually as well as in teams. I
          enjoy exploring new coding languages, libraries and building new
          projects. My interest are building RESTful API servers and building
          REACT applications.
        </p>
      </section>
      <div className="img-2">
        <div className="p-text">
          <span className="border trans">portfolio</span>
        </div>
      </div>
      <section className="section section-dark">
        <h2>Notable Projects</h2>
      </section>
      <div className="img-3">
        <div className="p-text">
          <span className="border trans">resume</span>
        </div>
      </div>
      <section className="section section-dark">
        <img src={res} width="500px" height="600px" alt="resume" />
      </section>
      <div className="img-1">
        <div className="p-text">
          <span className="border">contact me</span>
        </div>
      </div>
      <section className="section section-light">
        <h2>Contact Info</h2>
        <p>
          <b>Cell:</b> 704-241-9649
        </p>
        <p>
          <b>Email:</b> regharris0504@gmail.com
        </p>
      </section>
    </div>
  );
};

export default Body;
