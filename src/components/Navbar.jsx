import React from 'react';
import {StyledNavbar} from '../styling/StyledComponents'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome' 
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import {DataContext} from '../context/DataContextProvider'


class Navbar extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            searchVal: ''
        }
    }

    handleChange = e => {
        if(this.context.phase === 0){
            let word = e.target.value.trim().toLowerCase()
            if(word !== this.state.searchVal){
                this.setState({
                    searchVal: word
                })
                this.context.updateFilter(word)
            }
        }
    }

    render(){
        return (
          <StyledNavbar>
              <div className="content">
                  <div>
                      <div className="logo" onClick={this.context.setPhase0}>
                          ChitraKala
                      </div>
                      <div className="searchBox">
                          <FontAwesomeIcon icon={faSearch} />
                          <input placeholder="Search for movies" value={this.state.searchVal} onChange={this.handleChange} />
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
}


Navbar.contextType = DataContext

export default Navbar;
