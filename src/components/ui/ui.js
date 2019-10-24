import React from 'react';
import HydrateContext from '../../context/hydrate-context';
import './ui.css';
import config from '../../config';
import MenuButton from '../menuMain/menuButton/menuButton';
import WaterChartNew from '../waterChartNew/waterChartNew';

export default class UI extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      amount: null,
      goal: null,
      date: null,
      week: [],
      userID: 0,
      text_me: '',
      phone: ''
    }
  }

  componentDidMount() {
    let userID = window.localStorage.getItem('userID');
    Promise.all([
      fetch(`${config.API_ENDPOINT}/user/waterconsumed/${userID}`, {
        method: 'GET',
        headers: {
          'authorization': `basic ${window.localStorage.getItem('zachs-token-son')}`
        }
      }),
      fetch(`${config.API_ENDPOINT}/user/${userID}`, {
        method: 'GET',
        headers: {
          'authorization': `basic ${window.localStorage.getItem('zachs-token-son')}`
        }
      }),
      fetch(`${config.API_ENDPOINT}/user/water/week/${userID}`, {
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
        text_me: goal.text_me,
        date: amount.date,
        phone: goal.phone,
        week
      }, () => console.log(this.state.amount))
    })
  }

  addWater() {
    let userID = window.localStorage.getItem('userID');
    fetch(`${config.API_ENDPOINT}/user/waterconsumed/${userID}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        'authorization': `basic ${window.localStorage.getItem('zachs-token-son')}`
      },
      body: JSON.stringify(this.state)
    })
  }

  textMe() {
    this.setState({text_me: !this.state.text_me
    }, () => {
        this.updateTextStatus();
      });
      if (this.state.text_me === false) {
        const message = 'You are now recieiving text message reminders to drink water!'

        fetch(`${config.API_ENDPOINT}/sms?recipient=${this.state.phone}&sms=${message}`)
        .catch(e => console.error(e))
      } else {
        const message = 'You are no longer recieiving text message reminders to drink water!'

        fetch(`${config.API_ENDPOINT}/sms?recipient=${this.state.phone}&sms=${message}`)
        .catch(e => console.error(e))
      }
  }

  updateTextStatus() {
    let userID = window.localStorage.getItem('userID');
    fetch(`${config.API_ENDPOINT}/textme/${userID}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(this.state)
    }) 
  }

  subtractWaterClick() {
    let newCount = this.state.amount
    if (newCount <= 0) {
    } else {
      this.setState({
        amount: newCount - 1
      }, () => {
        this.addWater();
      })
    }
  }

  addWaterClick() {
    let newCount = this.state.amount
    if (newCount >= this.state.goal) {
    } else {
      this.setState({
        amount: newCount + 1
      }, ()=>{
        this.addWater();
      })
    }
  }

  render() {
    return (
      <HydrateContext.Provider value={this.state}>
        <div>
          <MenuButton />
          <div className='userInterface'>
            <h1 className='uiTitle'>Water Consumed</h1>
            <div className='gauges'>
              <WaterChartNew 
                goal={this.state.goal}
                amount={this.state.amount}/>
            </div>
            <div className='weekGoalMet'>
              {this.state.week.map((weeks, index) => {
                return (
                  <div key={index}>
                    <p>You drank <span className='weeksAmount'>{weeks.amount}</span> glasses on <span className='weeksAmount'>{weeks.date.slice(0, 10)}</span></p>
                  </div>
                )
              })}
            </div>
            <div className='waterGoal'>
              <p className='goalText'>Your Goal: {this.state.goal}</p>
              <p className='goalText'>Glasses Consumed: {this.state.amount}</p>
            </div>
            <div >
              {this.state.text_me === false 
                ? <div className='textMe'><p className='textInput start' onClick={() => this.textMe()}>Text me!</p><p className='textInfo'>Would you like to recieve text message reminders to help reach your goal?</p></div>
                : <div className='textMe'><p className='textInput stop' onClick={() => this.textMe()}>Stop!</p><p className='textInfo'>You are currently recieving text message reminders every morning at 9am</p></div>}
            </div>
            <button className='uiButtons' onClick={() => this.addWaterClick()}>Add Water</button>
            <button className='uiButtons' onClick={() => this.subtractWaterClick()}>Subtract Water</button>
          </div>
        </div>
      </HydrateContext.Provider>
    )
  }
}
