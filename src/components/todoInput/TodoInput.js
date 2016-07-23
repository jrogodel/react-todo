import React, { Component } from 'react'

class TodoInput extends Component {

	constructor() {
		super()

		this.state = {
			inputText: ""
		};
	}

	deleteLetter() {

		this.setState({
			inputText: this.state.inputText.substring(0, this.state.inputText.length - 1)
		})
	}
	
	handleChange(event) {
		this.setState({
			inputText: event.target.value
		})
	}
	

	render() {
		return (
			<div>
				<input 
					type="text" 
					placeholder="Enter your task!"  
					value={this.state.inputText}
					onChange={this.handleChange.bind(this)}
				/>
				<button>Just do it</button>
			</div>
		)
	}
}

export default TodoInput
