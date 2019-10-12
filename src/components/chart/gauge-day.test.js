import React from 'react'; 
import ReactDOM from 'react-dom';
import GaugeDay from './gauge-day';
import { BrowserRouter } from 'react-router-dom'
import HydrateContext from '../../context/hydrate-context';

const amount = 6;

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
        <HydrateContext.Provider value={amount}>
            <BrowserRouter>
                <GaugeDay />
            </BrowserRouter>
        </HydrateContext.Provider>
    , div);
    ReactDOM.unmountComponentAtNode(div);
})