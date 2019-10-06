import React from 'react'

export default class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  handleSubmit(event) {
    event.preventDefault();
    fetch('http://localhost:8000/api/user', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({})
    })
      .then(response => response.json())
      .then(responseJSON => {
        console.log(responseJSON)
      })
  }

  render() {
    return (
      <div className='registerPage'>
        <header>
          <h1>Create User</h1>
        </header>
        <form className='registerForm' onSubmit={e => this.handleSubmit(e)}>
          <div className='registerInput'>
            <label htmlFor='username'>
              Username
            </label>
            <input
              required
              name='username'
              id='username'
              placeholder='demoUser'>
            </input>
            <label htmlFor='password'>
              Password
            </label>
            <input
              required
              name='password'
              id='password'
              placeholder='demoPassword'>
            </input>
            <label htmlFor='water_goal'>
              Water Goal
            </label>
            <input
              required
              name='uwater_goal'
              id='water_goal'
              placeholder='8'>
            </input>
          </div>
          <button type='submit'>Create User</button>
        </form>
        </div>
    )
  }
}





