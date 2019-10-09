import React from 'react'
import Chart from 'react-google-charts';

export default class ChartGauge extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            today: 40,
            week: 55
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
                    ['Week', this.state.week],
                ]}
                options={{
                    redFrom: 90,
                    redTo: 100,
                    yellowFrom: 75,
                    yellowTo: 90,
                    minorTicks: 10,
                }}
                rootProps={{ 'data-testid': '1' }}
            />
        )
      
    }
}
