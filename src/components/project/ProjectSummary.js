import React from "react";
//import moment from "moment";

const ProjectSummary = ({ project }) => {
  console.log(project);
  return (
    <div class="row">
      <div class="col s12 m7">
        <div class="card">
          <div class="card-image">
            <img
              className="responsive-img card-img"
              src={project.picUrl}
              alt="applogo"
            />
            <span class="card-title black-text">{project.title}</span>
          </div>
          {/* <div class="card-content">
           <p className="grey-text">
              {moment(project.createdAt.toDate()).calendar()}
  </p>
          </div>*/}
          <div class="card-action">
            <a className='blue-text text-darken-2 link-btn' href={project.gitRepo} target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
            <a className='blue-text text-darken-2 link-btn' href={project.demo} target="_blank" rel="noopener noreferrer">
              demo
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProjectSummary;
