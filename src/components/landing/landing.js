import React from 'react'
import { Link } from 'react-router-dom'
import './landing.css'

export default class Landing extends React.Component {
    render() {
        return (
            <div className='landingPage'>
                <header>
                    <div className='title'>
                        <h1>hydrate</h1>
                        <h3>water your life</h3>
                    </div>
                </header>

                <Link 
                    style={{ textDecoration: 'none' }} 
                    to='/login'>
                        <button>Login</button>
                </Link>
                <Link 
                    style={{ textDecoration: 'none' }} 
                    to='/learn'>
                        <button>Learn</button>
                </Link>
            </div> 
        )
    }
}
