import React from 'react';
import Chart from 'react-google-charts';
import HydrateContext from '../../context/hydrate-context';

export default class ChartWeek extends React.Component {
    static contextType = HydrateContext;

    render() {
        return (
            <Chart
                width={'500px'}
                height={'300px'}
                chartType="ColumnChart"
                loader={<div>Loading Chart</div>}
                data={[
                    ['Date', 'Goal', 'Consumed'],
                    ['Sun', this.context.goal, this.context.amount],
                    // ['Mon', 8175000, 8008000],
                    // ['Tue', 3792000, 3694000],
                    // ['Wed', 2695000, 2896000],
                    // ['Thur', 2099000, 1953000],
                    // ['Fri', 1526000, 1517000],
                    // ['Sat', 8175000, 8008000],
                ]}
                options={{
                    chartArea: { width: '50%' },
                    hAxis: {
                    minValue: 0,
                    maxValue: 8,
                    },
                }}
            />
        )
    }
}