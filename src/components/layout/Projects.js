import React, { Component } from "react";
import ProjectList from "../project/ProjectList";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";

class Dashboard extends Component {
  render() {
    const { projects } = this.props;
    return (
      <div className="box">
        <div>
            <ProjectList className="projects" projects={projects} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    projects: state.firestore.ordered.projects,
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: "projects",orderBy: ['createdAt','desc'] }
  ])
)(Dashboard);






