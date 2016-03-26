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
			<div>
				<h1 styleName="title">Home</h1>
				<ul styleName="link-list">
					<li><Link to="/A">PageA</Link></li>
				</ul>
			</div>
		)
	}
}

export default CSSModules(Home, styles);