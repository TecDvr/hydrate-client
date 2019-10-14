import React from 'react'
import './contact.css'

export default class Contact extends React.Component {
    render() {
        return (
            <div className='contactPage'>
                <h1 className='contactTitle'>Email</h1>
                <div className='contactInfo'>
                    <p>info@hydrate.com</p>
                </div>
            </div>
        )
    }
}