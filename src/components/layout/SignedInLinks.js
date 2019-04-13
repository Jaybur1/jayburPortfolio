import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { signOut } from "../../store/actions/authActions";
import Menu from './Menu';


const SignedInLinks = props => {
  const { user } = props;
  return (
    <ul className="right">
      <li>
        {/*eslint-disable-next-line */}
        <a onClick={props.signOut}>Log Out</a>
      </li>
      <li><Menu /></li>
       <li> <NavLink to="/" className="btn btn-floating blue lighten-1">
          {user.initials ? user.initials : '??'}
        </NavLink>
      </li>
    </ul>
  );
};
const mapStateToProps = state => {
  return {
    user: state.firebase.profile
  };
};

const mapDispatchToProps = dispatch => {
  return {
    signOut: () => dispatch(signOut())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignedInLinks);
