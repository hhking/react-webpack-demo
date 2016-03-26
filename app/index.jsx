import React, { Component } from 'react'
import { render } from 'react-dom'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import { Router, browserHistory } from 'react-router'
import styles from './public.css'
import routes from './router'

var app = document.getElementById('app');

render(<Router history={browserHistory} routes={routes} />, app)