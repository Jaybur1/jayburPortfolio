import React from 'react';
import ProjectSummary from './ProjectSummary';
//import { Link } from 'react-router-dom';
const ProjectList = ({projects}) => (
    <div className='project-list section'>
     {projects && projects.map(project => {
         return (
           
             <ProjectSummary key={project.id} project={project}/>
        
         )
     })}
    </div>
);

export default ProjectList;

//  <Link  key={project.id} to={`/project/${project.id}`}>
//</Link>