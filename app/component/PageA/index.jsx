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
			<div styleName="page">
				<h1 styleName="title">PageA</h1>
				<p styleName="text">This is A page.This is A page.This is A page.This is A page.This is A page.This is A page.This is A page.This is A page.This is A page.This is A page.This is A page.This is A page.This is A page.</p>
				<ul styleName="link-list">
					<li><Link to="/Home">&gt;&gt;Home</Link></li>
				</ul>
			</div>
		)
	}
}

export default CSSModules(PageA, styles);