import React from 'react'; 
import ReactDOM from 'react-dom';
import UI from '../ui/ui';
import PrivateRoute from './privateRoute';
import { BrowserRouter } from 'react-router-dom';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
    <BrowserRouter>
        <PrivateRoute 
        exact
        path='/ui'
        component={UI}/>
    </BrowserRouter>
    , div);
    ReactDOM.unmountComponentAtNode(div);
})