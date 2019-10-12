import React from 'react'
import { Link } from 'react-router-dom'
import './landing.css'

export default class Landing extends React.Component {
    render() {
        return (
            <div className='landingPage'>
                <header>
                    <div className='title'>
                        <h1 className='mainTitle'>hydrate</h1>
                        <h3 className='mainTag'>water your life</h3>
                    </div>
                </header>
                <div className='landingButton'>
                    <Link 
                        style={{ textDecoration: 'none' }} 
                        to='/login'>
                            <button className='landingButtons one'>Login</button>
                    </Link>
                    <Link 
                        style={{ textDecoration: 'none' }} 
                        to='/learn'>
                            <button className='landingButtons two'>Learn</button>
                    </Link>
                </div>
            </div> 
        )
    }
}
