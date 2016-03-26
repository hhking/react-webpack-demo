/**
 * pageA
 */

import React, { Component } from 'react'
import { Link } from 'react-router'
import CSSModules from 'react-css-modules'
import styles from './style.css'

class PageA extends Component {
	render() {
		return (
			<div>
				<h1 styleName="title">PageA</h1>
				<ul styleName="link-list">
					<li><Link to="/Home">Home</Link></li>
				</ul>
			</div>
		)
	}
}

export default CSSModules(PageA, styles);