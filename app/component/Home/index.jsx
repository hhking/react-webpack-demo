/**
 * Home
 */

import React, { Component } from 'react'
import CSSModules from 'react-css-modules'
import { Link } from 'react-router'
import styles from './style.css'

class Home extends Component {
	render() {
		return (
			<div styleName="page">
				<h1 styleName="title">Home</h1>
				<p styleName="text">This is Home page.This is Home page.This is Home page.This is Home page.This is Home page.This is Home page.This is Home page.This is Home page.This is Home page.This is Home page.This is Home page.This is Home page.This is Home page.This is Home page.This is Home page.</p>
				<ul styleName="link-list">
					<li><Link to="/A">&gt;&gt;PageA</Link></li>
				</ul>
			</div>
		)
	}
}

export default CSSModules(Home, styles);