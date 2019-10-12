import React from 'react'; 
import ReactDOM from 'react-dom';
import Learn from './Learn';
import { BrowserRouter } from 'react-router-dom'
 
it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
        <BrowserRouter>
            <Learn />
        </BrowserRouter>
    , div);
    ReactDOM.unmountComponentAtNode(div);
})