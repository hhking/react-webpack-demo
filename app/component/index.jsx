import React, { Component } from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import styles from '../public.css'

export default class App extends Component {
	render() {
		return (
			<div>
				<ReactCSSTransitionGroup
					component="div"
					transitionName="example"
					transitionEnterTimeout={0}
					transitionLeaveTimeout={0}
				>
					{React.cloneElement(this.props.children, {
            key: this.props.location.pathname
          })}
				</ReactCSSTransitionGroup>
			</div>
		)
	}
}