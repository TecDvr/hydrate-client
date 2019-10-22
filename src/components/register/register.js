import React from 'react';
import './register.css';
import config from '../../config';
import MenuButton from '../menuMain/menuButton/menuButton';

export default class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      phone: '',
      glasses: 0,
      countError: null
    }
  }

  handleSubmit(event) {
    event.preventDefault();
    this.handleFetch();
  }

  handleFetch() {
    (this.state.glasses < 1 || this.state.glasses > 10
      ? this.setState({ countError: true })
      :
      fetch(`${config.API_ENDPOINT}/user`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(this.state) 
      })
      .then(response => {
        response.json();
        this.props.history.push('/login');
      })
    )
  }

  render() {
    return (
      <div>
        <MenuButton />
        <div className='registerPage'>
          <header>
            <h1 className='registerTitle'>Create User</h1>
          </header>
          <form className='registerForm' onSubmit={e => this.handleSubmit(e)}>
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
              <label className='regLabel' htmlFor='phone'>Phone Number</label>
              <input
                className='registerInput'
                required
                name='phone'
                id='phone'
                placeholder='8316428906'
                onChange={e=>this.setState({phone:e.target.value})}>
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
            <div className='errorBox'>
              {this.state.countError === true ? <p className="error">Needs to be between 1-10</p> : <p>Please pick between 1 and 10 eight ounce glasses a day</p>}
            </div>
            <button className='registerButtons'
            type='submit'>Create User</button>
          </form>
        </div>
      </div>
    )
  }
}





