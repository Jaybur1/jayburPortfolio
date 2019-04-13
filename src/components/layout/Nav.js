import React from "react";
import { Link } from "react-router-dom";
import SignedInLinks from "./SignedInLinks";
import SignedOutLinks from "./SignedOutLinks";
import { connect } from "react-redux";


const Nav = props => {
  const { auth } = props;

  return (
    <nav className="nav-wrapper z-depth-5 transparent">
      <div className="container">
        <Link to="/" className="brand-logo left">
          <img src={window.location.origin + '/img/logoW.png'} className='responsive-img' alt="logo " width='80px'/>
        </Link>
        {auth.uid ? <SignedInLinks className='right'/> : <SignedOutLinks className='right' />}
      </div>
    </nav>
  );
};
const mapStateToProps = state => {
  console.log(state);
  return {
    auth: state.firebase.auth
  };
};

export default connect(mapStateToProps)(Nav);
