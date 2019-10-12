import React from 'react'; 
import ReactDOM from 'react-dom';
import MenuMain from './menuMain';
import { BrowserRouter } from 'react-router-dom';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
        <BrowserRouter>
            <MenuMain />
        </BrowserRouter>
    , div);
    ReactDOM.unmountComponentAtNode(div);
})