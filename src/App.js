import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import Landing from './components/landing/landing';
import Learn from './components/learn/learn';
import Login from './components/login/login';
import Register from './components/register/register';
import Menu from './components/menu/menu';

export default class App extends React.Component {
  render() {
    return (
      <div className='mainDisplay '>
        <header className='headerMain'>
          <Menu />
        </header>
        

        <Route 
          exact 
          path='/' 
          component={Landing}
        />

        <Route  
          exact 
          path='/learn' 
          component={Learn}
        />

        <Route 
          exact 
          path='/learntwo' 
          component={Learn}
        />

        <Route 
          exact 
          path='/login' 
          component={Login}
        />

        <Route 
          exact
          path='/user'
          component={Register}
        />

      </div>
    )
  }
}
