import React from 'react'
import './contact.css'
import MenuButton from '../menuMain/menuButton/menuButton';

export default class Contact extends React.Component {
    render() {
        return (
            <div>
                <MenuButton />
                <div className='contactPage'>
                    <h1 className='contactTitle'>Email</h1>
                    <div className='contactInfo'>
                        <p>info@hydrate.com</p>
                    </div>
                </div>
            </div>
            
        )
    }
}