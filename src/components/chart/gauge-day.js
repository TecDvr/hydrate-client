import React from 'react'
import Chart from 'react-google-charts';

export default class GaugeDay extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            today: 6,
            week: 48
        }
    }

    render() {
        return (
            <Chart
                width={400}
                height={120}
                chartType="Gauge"
                loader={<div>Loading Chart</div>}
                data={[
                    ['Label', 'Value'],
                    ['Today', this.state.today],
                ]}
                options={{
                    redFrom: 90,
                    redTo: 100,
                    yellowFrom: 75,
                    yellowTo: 90,
                    minorTicks: 10,
                    max: 8
                }}
            />
        )
      
    }
}
