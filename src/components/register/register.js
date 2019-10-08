import React from 'react'

export default class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      glasses: 0
    }
  }

  handleSubmit(event) {
    event.preventDefault();
    fetch('http://localhost:8000/api/user', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(this.state) 
    })
    .then(response => response.json())
    .then(responseJSON => {
      this.props.history.push('/login');
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
              placeholder='demoUser'
              onChange={e=>this.setState({username:e.target.value})}>
            </input>
            <label htmlFor='password'>
              Password
            </label>
            <input
              required
              name='password'
              id='password'
              placeholder='demoPassword'
              onChange={e=>this.setState({password:e.target.value})}>
            </input>
            <label htmlFor='water_goal'>
              Water Goal
            </label>
            <input
              required
              name='uwater_goal'
              id='water_goal'
              placeholder='8'
              onChange={e=>this.setState({glasses:e.target.value})}>
            </input>
          </div>
          <button type='submit'>Create User</button>
        </form>
        </div>
    )
  }
}





