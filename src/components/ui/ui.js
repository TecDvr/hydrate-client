import React from 'react'

export default class UI extends React.Component {
  render() {
    return (
      <div className='userInterface'>
        <h1>Test UI</h1>
        <div>
          <p>graph</p>
        </div>
        <div className='waterGoal'>
          <p>Your Goal:</p>
          <p>Glasses Consumed:</p>
        </div>
        <button onClick={() => console.log('button works')}>Add Water</button>
      </div>
    )
  }
}
