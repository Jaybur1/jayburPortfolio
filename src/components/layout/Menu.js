import React, { Component } from "react";
import M from "materialize-css";
import { NavLink } from "react-router-dom";
import { connect } from 'react-redux';

class Menu extends Component {
  componentDidMount() {
    var elem = document.querySelectorAll(".dropdown-trigger");
    this.elem = elem;
    const options = {
      coverTrigger: false
    };

    M.Dropdown.init(elem, options);
  }
  render() {
    const { auth } = this.props;
    return (
      <div>
        {/* eslint-disable-next-line */}
        <a className="dropdown-trigger waves-effect" data-target="dropdown1">
          Menu
        </a>
        <ul id="dropdown1" className="dropdown-content menu">
          <li>
            <NavLink className="waves-effect blue-text text-darken-2" to="/">
              Main
            </NavLink>
          </li>
          <li>
            <NavLink className="waves-effect blue-text text-darken-2" to="/projects">
              Projects
            </NavLink>
          </li>
          <li>
            <NavLink className="waves-effect blue-text text-darken-2" to="/about">
              About
            </NavLink>
          </li> 
          <li>
            <NavLink className="waves-effect blue-text text-darken-2" to="/contacts">
              Contacts
            </NavLink>
          </li>
         {auth.uid && <li><NavLink to="/create-project">New Project</NavLink></li>}
         {auth.uid && <li><NavLink to='/dashboard'>Dashboard</NavLink></li>}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth
  }
}

export default connect(mapStateToProps)(Menu);
