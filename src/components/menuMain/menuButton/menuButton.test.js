import React from 'react'; 
import ReactDOM from 'react-dom';
import MenuButton from './menuButton';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<MenuButton />, div);
    ReactDOM.unmountComponentAtNode(div);
})