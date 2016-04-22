import React, { Component } from 'react'
import { render } from 'react-dom'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import { Router, browserHistory } from 'react-router'
import styles from './public.css'
import routes from './router'

import { createStore } from 'redux'
import { Provider } from 'react-redux'
import todoApp from './reducers'

let store = createStore(todoApp)

var app = document.getElementById('app');

render(
	<Provider store={store}>
		<Router history={browserHistory} routes={routes}></Router>
	</Provider>,
	 app
	)