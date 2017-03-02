import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Page1 from './Page1';
import SubPage1 from './SubPage1';
import Page2 from './Page2';
import Home from './Home';
import './index.css';
import {Router , Route , hashHistory , browserHistory, IndexRoute } from 'react-router';


ReactDOM.render(
   <Router history={hashHistory}>
    <Route path="/" component={App}>
    <IndexRoute component={Home} />
    <Route path="page1" component={Page1}>

    	<Route path="subpage1/:id" component={SubPage1}/>

    </Route>
    <Route path="page2" component={Page2}/>
    </Route>
  </Router>,
  document.getElementById('root')
);
