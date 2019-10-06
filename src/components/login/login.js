import React from 'react'

export default class Login extends React.Component {
  render() {
    return (
      <div className='loginPage'>
        <div>
          <header className='loginHeader'>
            <h1>Login</h1>
          </header>
          <form className='loginForm' onSubmit={this.handle}>
            <div className='usernameInput'>
              <label htmlFor='username'>
                Username
              </label>
              <input 
                required
                name='user_name'
                id='username'
                placeholder='ex. demoUser'>
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
                placeholder='demoPassword12!'>
              </input>
            </div>
            <button type='submit'>Login</button>
          </form>
        </div>
      </div>
    )
  }
}




