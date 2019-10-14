import React, { Component } from "react";
import { Link } from 'react-router-dom';
import "./menuMain.css";
 
class MenuMain extends Component {
  render() {
    var visibility = "hide";
 
    if (this.props.menuVisibility) {
      visibility = "show";
    }
 
    return (
      <div id="flyoutMenu"
           onMouseDown={this.props.handleMouseDown} 
           className={visibility}>
        <div className='menuLink'>
          <h2>
            <Link 
              style={{ textDecoration: 'none' }} 
              to='/'>Home</Link>
          </h2>
          <h2>
            <Link 
              style={{ textDecoration: 'none' }} 
              to='/contact'>Contact</Link>
          </h2>
          <h2>
            <Link
              onClick={() => {
                  window.localStorage.removeItem('zachs-token-son');
                  window.localStorage.removeItem('userID');
              }}
              to='/'>Logout</Link>
          </h2>
        </div>     
       
      </div>
    );
  }
}
 
export default MenuMain;