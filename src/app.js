
import React from 'react';
import ReactDOM from 'react-dom';
import Application from './component/Application.js';
import Routing from './routes';
import configureStore from './store/configureStore';
import Root from './containers/Root';

const store = configureStore();

ReactDOM.render(
    <Root store={store} />,
    document.getElementById('root'));
