import React from 'react';
import './login.css';
import config from '../../config';
import MenuButton from '../menuMain/menuButton/menuButton';

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      error: null
    }
  }

  handleSubmit(event) {
    this.setState({error:null});
    event.preventDefault();
    window.localStorage.setItem('zachs-token-son',
      window.btoa(`${this.state.username}:${this.state.password}`)
    )
    fetch(`${config.API_ENDPOINT}/user/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(this.state) 
    })
    .then(res => 
      (res.ok)
        ? res.json().then(user => {
          console.log(user, 'test')
          window.localStorage.setItem('userID',user.id)
          this.props.history.push('/ui')
        })
        : res.json().then(resJson=>this.setState({error:resJson.error}))
    )
  }

  render() {
    return (
      <div>
        <MenuButton />
        <div className='loginPage'>
        <div>
          <header className='loginHeader'>
            <h1 className='loginTitle'>Login</h1>
          </header>
          <form className='loginForm' onSubmit={e => this.handleSubmit(e)}>
            <div>
              <label className='loginLabel' htmlFor='username'>Username</label>
              <input 
                className='loginInput'
                required
                name='user_name'
                id='username'
                placeholder='Username'
                onChange={e=>this.setState({username:e.target.value})}>
              </input>
            </div>
            <div>
              <label className='loginLabel' htmlFor='password'>Password</label>
              <input
                className='loginInput'
                required
                type='password'
                name='password'
                id='password'
                placeholder='Password'
                onChange={e=>this.setState({password:e.target.value})}>
              </input>
            </div>
            {this.state.error ? <p className="error">{this.state.error}</p> : <div className='demo'><p>DEMO THIS APP</p><p>username: demoUser</p><p>password: demoPassword</p></div>}
            <button className='loginButtons' type='submit'>Submit</button>
          </form>
        </div>
      </div>
      </div>
    
    )
  }
}




