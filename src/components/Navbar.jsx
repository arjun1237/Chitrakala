import {StyledNavbar} from '../styling/StyledComponents'
import React from 'react';

function Navbar() {
  return (
    <StyledNavbar>
        <div className="content">
            <div>
                <div className="logo">
                    ChitraKala
                </div>
                <div className="searchBox">
                    <i>icon</i>
                    <input placeholder="Search for movies"/>
                </div>
            </div>
            <div className="menuItems">
                <div>
                    About
                </div>
                <div>
                    Contact Us
                </div>
            </div>

        </div>
    </StyledNavbar>
  );
}

export default Navbar;
