import React from 'react';
import GaugeDay from '../chart/gauge-day';
import HydrateContext from '../../context/hydrate-context';
import './ui.css';

export default class UI extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      amount: null,
      goal: null,
      date: null,
      week: [],
      userID: 0
    }
  }

  componentDidMount() {
    let userID = window.localStorage.getItem('userID');
    Promise.all([
      fetch(`http://localhost:8000/api/user/waterconsumed/${userID}`, {
        method: 'GET',
        headers: {
          'authorization': `basic ${window.localStorage.getItem('zachs-token-son')}`
        }
      }),
      fetch(`http://localhost:8000/api/user/${userID}`, {
        method: 'GET',
        headers: {
          'authorization': `basic ${window.localStorage.getItem('zachs-token-son')}`
        }
      }),
      fetch(`http://localhost:8000/api/user/water/week/${userID}`, {
        method: 'GET',
        headers: {
          'authorization': `basic ${window.localStorage.getItem('zachs-token-son')}`
        }
      }),
    ])
    .then(([amountData, goalData, weekData]) => {
      return Promise.all([amountData.json(), goalData.json(), weekData.json()])
    })
    .then(([amount, goal, week]) => {
      this.setState({
        amount: amount.amount,
        goal: goal.glasses,
        date: amount.date,
        week
      })
      console.log(this.state.week)
    })
  }

  addWater() {
    let userID = window.localStorage.getItem('userID');
    fetch(`http://localhost:8000/api/user/waterconsumed/${userID}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        'authorization': `basic ${window.localStorage.getItem('zachs-token-son')}`
      },
      body: JSON.stringify(this.state)
    })
  }

  subtractWaterClick() {
    let newCount = this.state.amount
    this.setState({
      amount: newCount - 1
    }, () => {
      this.addWater();
    })
  }

  addWaterClick() {
    let newCount = this.state.amount
    this.setState({
      amount: newCount + 1
    }, ()=>{
      this.addWater();
    })
  }

  render() {
    return (
      <HydrateContext.Provider value={this.state}>
        <div className='userInterface'>
          <h1>Test UI</h1>
          <div className='gauges'>
            <GaugeDay />
          </div>
          <div className='weekGoalMet'>
            {this.state.week.map((weeks, index) => {
              return (
                <div key={index}>
                  <p>You drank {weeks.amount} glasses on {weeks.date.slice(0, 10)}</p>
                </div>
              )
            })}
          </div>
          <div className='waterGoal'>
            <p>Your Goal: {this.state.goal}</p>
            <p>Glasses Consumed: {this.state.amount}</p>
          </div>
          <button onClick={() => this.addWaterClick()}>Add Water</button>
          <button onClick={() => this.subtractWaterClick()}>Subtract Water</button>
        </div>
      </HydrateContext.Provider>
    )
  }
}
