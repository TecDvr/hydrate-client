import React from 'react';
import GaugeWeek from '../chart/gauge-week'
import GaugeDay from '../chart/gauge-day';

export default class UI extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      amount: null
    }
  }

  componentDidMount() {
    fetch('http://localhost:8000/api/user/waterconsumed/1', {
      method: 'GET',
      headers: {
        'authorization': `basic ${window.localStorage.getItem('zachs-token-son')}`
      }
    })
    .then(res =>
      (!res.ok)
        ? res.json().then(e => Promise.reject(e))
        : res.json()
    )
      .then(amount => {
        this.setState({
          amount: amount.amount
        })
        console.log(this.state.amount)
      })
  }

  addWater() {
    fetch('http://localhost:8000/api/user/waterconsumed/1', { // user_id!
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        'authorization': `basic ${window.localStorage.getItem('zachs-token-son')}`
      },
      body: JSON.stringify(this.state)
    })
  }

  addWaterClick() {
    let newCount = this.state.amount
    this.setState({
      amount: newCount + 1
    })
    console.log(this.state.amount);
    this.addWater();
  }

  render() {
    return (
      <div className='userInterface'>
        <GaugeDay />
        <GaugeWeek />
        <h1>Test UI</h1>
        <div>
          <p>graph</p>
        </div>
        <div className='waterGoal'>
          <p>Your Goal:</p>
          <p>Glasses Consumed: {this.state.amount}</p>
        </div>
        <button onClick={() => this.addWaterClick()}>Add Water</button>
      </div>
    )
  }
}
