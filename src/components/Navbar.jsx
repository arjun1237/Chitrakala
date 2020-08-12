import React from 'react';
import {StyledNavbar} from '../styling/StyledComponents'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome' 
import { faSearch } from '@fortawesome/free-solid-svg-icons'
function Navbar() {
  return (
    <StyledNavbar>
        <div className="content">
            <div>
                <div className="logo">
                    ChitraKala
                </div>
                <div className="searchBox">
                    <FontAwesomeIcon icon={faSearch} />
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
