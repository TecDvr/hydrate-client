import React from 'react'; 
import ReactDOM from 'react-dom';
import Register from './register';
import { BrowserRouter } from 'react-router-dom'
 
it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
        <BrowserRouter>
            <Register />
        </BrowserRouter>
    , div);
    ReactDOM.unmountComponentAtNode(div);
})