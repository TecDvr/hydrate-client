import React from 'react'; 
import ReactDOM from 'react-dom';
import MenuButton from './menuButton';
import { BrowserRouter } from 'react-router-dom';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
        <BrowserRouter>
            <MenuButton />
        </BrowserRouter>, div);
    ReactDOM.unmountComponentAtNode(div);
})