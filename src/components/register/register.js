import React from 'react';
import './register.css';

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
          <h1 className='registerTitle'>Create User</h1>
        </header>
        <form className='registerForm' onSubmit={e => this.handleSubmit(e)}>
          <div>
            <label className='regLabel' htmlFor='username'>Username</label>
            <input
              className='registerInput'
              required
              name='username'
              id='username'
              placeholder='Username'
              onChange={e=>this.setState({username:e.target.value})}>
            </input>
            <label className='regLabel' htmlFor='password'>Password</label>
            <input
              className='registerInput'
              required
              name='password'
              id='password'
              placeholder='Password'
              onChange={e=>this.setState({password:e.target.value})}>
            </input>
            <label className='regLabel' htmlFor='water_goal'> Water Goal</label>
            <input
              className='registerInput'
              required
              name='uwater_goal'
              id='water_goal'
              placeholder='Water goal (1-8)'
              onChange={e=>this.setState({glasses:e.target.value})}>
            </input>
          </div>
          <button className='registerButtons'
          type='submit'>Create User</button>
        </form>
        </div>
    )
  }
}





