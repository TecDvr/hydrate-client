import React from 'react'; 
import ReactDOM from 'react-dom';
import UI from './ui';
import { BrowserRouter } from 'react-router-dom';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
    <BrowserRouter>
        <UI />
    </BrowserRouter>
    , div);
    ReactDOM.unmountComponentAtNode(div);
})