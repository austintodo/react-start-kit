import React from 'react';
import {Route, IndexRoute} from 'react-router';
import App from './App';
import HomePage from './components/HomePage';

export default(
    <Route path="/" component={App}>
        <IndexRoute component={HomePage}/>
    </Route>
);
