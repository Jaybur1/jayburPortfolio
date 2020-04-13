import React from "react";
//import moment from "moment";

const ProjectSummary = ({ project }) => {
  return (
    <div className="row">
      <div className="col s12 m7">
        <div className="card">
          <div className="card-image">
            <img
              className="responsive-img card-img"
              src={project.picUrl}
              alt="applogo"
            />
            <span className="card-title black-text">{project.title}</span>
          </div>
          <div className="card-action">
            <a
              className="blue-text text-darken-2 link-btn"
              href={project.gitRepo}
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
            <a
              className="blue-text text-darken-2 link-btn"
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
            >
              demo
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProjectSummary;
