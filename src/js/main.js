import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'

import '../css/main.scss';

import { store } from './redux/createStore';

import App from './components/App';
import MusicianCard from './components/MusicianCard';

const connectedApp = (
  <Provider store={store}>
    <Router>
				<Switch>
					<Route exact path={`/`} component={App} />
					<Route path={`/:name`} component={MusicianCard} />
				</Switch>
			</Router>
  </Provider>
);

ReactDOM.render(connectedApp, document.querySelector('#reactContainer'));