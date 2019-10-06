import React from 'react';
import { Link } from 'react-router-dom';

export default class Menu extends React.Component {
    render() {
        return (
            <div className='menu'>
                <Link 
                    style={{ textDecoration: 'none' }} 
                    to='/'>
                        <button>Menu</button>
                </Link>
            </div>
        )
    }
}