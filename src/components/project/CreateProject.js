import React, { Component } from "react";
import { connect } from 'react-redux'
import { createProject } from '../../store/actions/projectActions';
import { Redirect } from 'react-router-dom';
class CreateProject extends Component {
  state = {
    title: "",
    gitRepo: "",
    demo:"",
    picUrl: '',
  };

  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    this.props.createProject(this.state)
    this.props.history.push('/dashboard');
  };
  render() {
    const { auth } = this.props;
    if(!auth.uid) return <Redirect to='/login' />
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit} className="white">
          <h5 className="grey-trxt text-darken-3">Create New Project</h5>
          <div className="input-field">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              id="title"
              onChange={this.handleChange}
              value={this.state.firstName}
            />
          </div>
          <div className="input-field">
            <label htmlFor="gitRepo">Git</label>
            <input
              type="text"
              id="gitRepo"
              onChange={this.handleChange}
              value={this.state.firstName}
            />
          </div>
          <div className="input-field">
            <label htmlFor="demo">Demo</label>
            <input
              type="text"
              id="demo"
              onChange={this.handleChange}
              value={this.state.firstName}
            />
          </div>
          <div className="input-field">
            <label htmlFor="picUrl">PicUrl</label>
            <input
              type="text"
              id="picUrl"
              onChange={this.handleChange}
              value={this.state.firstName}
            />
          </div>
          <div className="input-field">
            <button className="btn blue lighten- z-depth-0">Create</button>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state)=> {
  return {
    auth: state.firebase.auth
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    createProject: (project)=> dispatch(createProject(project))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(CreateProject);