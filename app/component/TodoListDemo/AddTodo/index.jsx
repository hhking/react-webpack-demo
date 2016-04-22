import React, { Component, PropTypes } from 'react'
import { findDOMNode } from 'react-dom'

class AddTodo extends Component {

	handleClick(e) {
		const node = findDOMNode(this.refs.input);
		const text = node.value.trim();
		this.props.onAddClick(text);
		node.value = '';
	}

	render() {
		return (
			<div>
				<input type="text" ref='input' />
				<button onClick={e=> this.handleClick(e)}>Add</button>
			</div>
		)
	}
}

AddTodo.propTypes = {
	onAddClick: PropTypes.func.isRequired
}

export default AddTodo