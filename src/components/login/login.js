import React from 'react'

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    }
  }

  handleSubmit(event) {
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
        : Promise.reject(res)
    )
  }

  render() {
    return (
      <div className='loginPage'>
        <div>
          <header className='loginHeader'>
            <h1>Login</h1>
          </header>
          <form className='loginForm' onSubmit={e => this.handleSubmit(e)}>
            <div className='usernameInput'>
              <label htmlFor='username'>
                Username
              </label>
              <input 
                required
                name='user_name'
                id='username'
                placeholder='ex. demoUser'
                onChange={e=>this.setState({username:e.target.value})}>
              </input>
            </div>
            <div className='passwordInput'>
              <label htmlFor='password'>
                Password
              </label>
              <input
                required
                name='password'
                id='password'
                placeholder='demoPassword12!'
                onChange={e=>this.setState({password:e.target.value})}>
              </input>
            </div>
            <button type='submit'>Login</button>
          </form>
        </div>
      </div>
    )
  }
}




