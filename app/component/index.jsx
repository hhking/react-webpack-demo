import React, { Component } from 'react'
import { Link } from 'react-router'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

export default class App extends Component {
	render() {
		const { pathname } = this.props.location
		return (
			<div>
				<div>
					{
						this.props.children ? '' : 
						<ul>
							<li><Link to='/home'>Home</Link></li>
							<li><Link to='/A'>PageA</Link></li>					
						</ul>
					}
				</div>
				<ReactCSSTransitionGroup
					component="div"
					transitionName="example"
					transitionEnterTimeout={600}
					transitionLeaveTimeout={600}
				>
					{React.cloneElement(this.props.children || <div />, {
            key: pathname
          })}
				</ReactCSSTransitionGroup>
			</div>
		)
	}
}