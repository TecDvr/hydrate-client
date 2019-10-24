import React from 'react'; 
import ReactDOM from 'react-dom';
import WaterChartNew from './waterChartNew';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
        <WaterChartNew 
            goal='8'
            amount='6'/>
    , div);
    ReactDOM.unmountComponentAtNode(div);
})