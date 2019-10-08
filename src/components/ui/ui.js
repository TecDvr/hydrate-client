import React from 'react';

export default class UI extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      amount: 0
    }
  }

  addWater() {
    fetch('http://localhost:8000/api/user/waterconsumed/1', {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        'authorization': `basic ${window.localStorage.getItem('zachs-token-son')}`
      },
      body: JSON.stringify(this.state) 
    })
  }

  addWaterClick() {
    let newCount = this.state.amount.amount
    this.setState({
      amount: newCount + 1
    })
    console.log(this.state.amount);
    this.addWater();
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
          amount
        })
        console.log(this.state.amount)
      })
  }

  render() {
    return (
      <div className='userInterface'>
        <h1>Test UI</h1>
        <div>
          <p>graph</p>
        </div>
        <div className='waterGoal'>
          <p>Your Goal:</p>
          <p>Glasses Consumed: {this.state.amount.amount}</p>
        </div>
        <button onClick={() => this.addWaterClick()}>Add Water</button>
      </div>
    )
  }
}
