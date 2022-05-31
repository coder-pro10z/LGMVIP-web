import React from 'react';
import { Nav } from './Navbar.styled';

const Navbar = ({ getUserData }) => 
(
    <Nav className="nav-bar d-flex justify-space">
      <div className="logo">User Details</div>
      <button className = "btn get-user-btn" type="button" onClick={() => getUserData(1)}>
        Get Users
      </button>
    </Nav>
  );


export default Navbar;
