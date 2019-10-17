import React from 'react';
import './register.css';
import config from '../../config';

export default class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      glasses: 0,
      error: null
    }
  }

  handleSubmit(event) {
    this.setState({error:null});
    event.preventDefault();
    fetch(`${config.API_ENDPOINT}/user`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(this.state) 
    })
    .then(res => 
      (res.ok)
        ? res.json().then(user => {
          this.props.history.push('/login');
        })
        : res.json().then(resJson=>this.setState({error:resJson.error}))
    )
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
              type='password'
              name='password'
              id='password'
              placeholder='Password'
              onChange={e=>this.setState({password:e.target.value})}>
            </input>
            <label className='regLabel' htmlFor='water_goal'> Water Goal</label>
            <input
              className='registerInput'
              required
              type='text'
              name='water_goal'
              id='water_goal'
              placeholder='Water goal (1-10)'
              onChange={e=>this.setState({glasses:e.target.value})}>
            </input>
          </div>
          <div className='errorBox'>
            {this.state.error ? <p className="error">{this.state.error}</p> : <p>Please pick between 1 and 10 eight ounce glasses a day</p>}
          </div>
          <button className='registerButtons'
          type='submit'>Create User</button>
        </form>
        </div>
    )
  }
}





