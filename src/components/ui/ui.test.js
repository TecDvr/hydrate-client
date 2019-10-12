import React from 'react'; 
import ReactDOM from 'react-dom';
import UI from './ui';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<UI />, div);
    ReactDOM.unmountComponentAtNode(div);
})