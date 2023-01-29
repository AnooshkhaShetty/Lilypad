import React from 'react';
//nav bar
import { Nav, NavLink, NavMenu }
    from "./NavbarElements";
  
const Navbar = () => {
  return (
    <div class="section-row">
      <Nav>
        <NavMenu>
          <NavLink to="/home" activeStyle>
          <h1>Lilypad</h1>
          </NavLink>
          <NavLink to="/about" activeStyle>
            About Us
          </NavLink>
          <NavLink to="/listings" activeStyle>
            Listings
          </NavLink>
          <NavLink to="/addlisting" activeStyle>
            Add a Listing +
          </NavLink>
        </NavMenu>
      </Nav>
    </div>
  );
};

export default Navbar;
//end navbar
