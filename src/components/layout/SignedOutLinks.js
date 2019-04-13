import React from 'react';
import { NavLink } from 'react-router-dom';
import Menu from './Menu';


const SignedOutLinks = () => (
  <ul className='right'>
    <li><NavLink to='/login' className="waves-effect">Log In</NavLink></li>
    {/*<li><NavLink to='/signup'>Sign up</NavLink></li>*/}
    <li><Menu /></li>
  </ul>
);

export default SignedOutLinks ;