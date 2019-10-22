import React from 'react';
import { Route } from 'react-router-dom';
import Landing from './components/landing/landing';
import Learn from './components/learn/learn';
import Login from './components/login/login';
import Register from './components/register/register';
import UI from './components/ui/ui';
import Contact from './components/contact/contact';
import PrivateRoute from './components/privateRoute/privateRoute';
import './App.css';

export default class App extends React.Component {
  constructor(props, context) { 
    super(props, context); 
    this.state = { 
      visible: false 
    } 
    this.handleMouseDown = this.handleMouseDown.bind(this); 
    this.toggleMenu = this.toggleMenu.bind(this); 
  } 

  handleMouseDown(e) { 
    this.toggleMenu(); 
    e.stopPropagation(); 
  }

  toggleMenu() { 
    this.setState({ 
        visible: !this.state.visible
    }); 
  }

  render() {
    return (
      <div className='appBody'>
        <main className='mainDisplay '>
          <Route 
            exact 
            path='/' 
            component={Landing}
          />

          <Route
            exact
            path='/contact'
            component={Contact}
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

          <PrivateRoute
            exact
            path='/ui'
            component={UI}
          />
        </main>
      </div>
    )
  }
}
