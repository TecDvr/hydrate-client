import React from 'react';
import { Link } from 'react-router-dom';
import './menu.css'

export default class Menu extends React.Component {

    logout() {
        return (
          <div>
            <Link
              onClick={() => {
                window.localStorage.removeItem('zachs-token-son')
              }}
              to='/'>
              Logout
            </Link>
          </div> 
        )
      }
    
    render() {
        return (
            <div className='menu'>
                <Link 
                    style={{ textDecoration: 'none' }} 
                    to='/'>
                        <button>Menu</button>
                </Link>
                {!!window.localStorage.getItem('zachs-token-son')
                    ? this.logout()
                    : null}
            </div>
        )
    }
}