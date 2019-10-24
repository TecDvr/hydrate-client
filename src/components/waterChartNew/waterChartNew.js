import React from 'react';
import './waterChartNew.css';

export default class WaterChartNew extends React.Component {
    render() {
        const goal = this.props.goal * 20
        const amount = this.props.amount * 20

        return (
            <div className='chartContainer'>
                <div>
                    {amount === goal
                        ? <p className='goalMet'>You have reached your goal!</p>
                        : <div><div className='yourGoal' style={{ width: goal}}><p className='goalName'>Your Goal</p></div>
                        <div className='waterConsumed' style={{ width: amount}}></div></div>}
                </div>
                
            </div>
        )
    }
}