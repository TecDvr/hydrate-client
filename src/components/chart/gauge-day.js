import React from 'react';
import Chart from 'react-google-charts';
import HydrateContext from '../../context/hydrate-context';

export default class GaugeDay extends React.Component {
    static contextType = HydrateContext;

    render() {
        return (
            <Chart
                width={150}
                height={150}
                chartType="Gauge"
                loader={<div>Loading Chart</div>}
                data={[
                    ['Label', 'Value'],
                    ['Today', this.context.amount],
                ]}
                options={{
                    minorTicks: 2,
                    max: this.context.goal
                }}
            />
        )
      
    }
}
