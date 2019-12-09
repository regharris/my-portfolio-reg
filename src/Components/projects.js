import React from "react";
import ProjData from "../Components/data/projects";

export default class Projects extends React.Component {
  render() {
    return (
      <div className="wrapper">
        {ProjData.projects.map((project, index) => {
          return (
            <div className="card">
              <img
                className="card-img-top"
                src={project.projectImage}
                alt="projects"
              />
              <div className="card-body">
                <h5 className="card-title">{project.projectName}</h5>
                <p className="card-text">{project.projectDescription}</p>
                <a href={project.projectLink} class="btn btn-primary">
                  View
                </a>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}
