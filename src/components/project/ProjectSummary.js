import React from 'react';
import moment from 'moment';


const ProjectSummary = ({project}) =>{ 
  console.log(project);
  return (
  <div className='card z-depth-0 project-summary' >
    <div className='card-contant grey-text text-darken-3'>
      <span className='card-title'>{project.title}</span>
      <p>Posted By {project.authorFirstName} {project.authorLastName}</p>
      <img className='responsive-img' src={project.picUrl} alt='applogo'/>
      <a href={project.gitRepo} target='_blank' rel="noopener noreferrer">GitHub</a><br />
      <a href={project.demo} target='_blank'rel="noopener noreferrer">demo</a>
      <p className='grey-text'>{moment(project.createdAt.toDate()).calendar()}</p>
    </div>
  </div>
);
}
export default ProjectSummary;