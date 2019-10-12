import React from 'react';
import { Route } from 'react-router-dom';
import Landing from './components/landing/landing';
import Learn from './components/learn/learn';
import Login from './components/login/login';
import Register from './components/register/register';
import UI from './components/ui/ui';
import MenuButton from './components/menuMain/menuButton/menuButton'; 
import MenuMain from './components/menuMain/menuMain'; 
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
        <header className='headerMain'>
          <MenuButton handleMouseDown={this.handleMouseDown}/> 
          <MenuMain handleMouseDown={this.handleMouseDown}
            menuVisibility={this.state.visible}/>
        </header>
        <main className='mainDisplay '>
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

          <Route
            exact
            path='/ui'
            component={UI}
          />
        </main>
        <footer>
          
        </footer>
      </div>
    )
  }
}
