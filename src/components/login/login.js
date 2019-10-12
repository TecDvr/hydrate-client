import React from 'react';
import './login.css';

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
    fetch('http://localhost:8000/api/user/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(this.state) 
    })
    .then(res =>
      (res.ok)
        ? res.json().then(user => {
          window.localStorage.setItem('userID',user.id)
          this.props.history.push('/ui')
        })
        : res.json().then(resJson=>this.setState({error:resJson.error}))
    )
  }


  render() {
    return (
      <div className='loginPage'>
        <div>
          <header className='loginHeader'>
            <h1 className='loginTitle'>Login</h1>
          </header>
          <form className='loginForm' onSubmit={e => this.handleSubmit(e)}>
            <div>
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
              <input
                className='loginInput'
                required
                name='password'
                id='password'
                placeholder='Password'
                onChange={e=>this.setState({password:e.target.value})}>
              </input>
            </div>
            {this.state.error ? <p className="error">{this.state.error}</p> : ''}
            <button className='loginButtons'            type='submit'>Submit</button>
          </form>
        </div>
      </div>
    )
  }
}




