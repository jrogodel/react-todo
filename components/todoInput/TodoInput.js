import React, { Component } from 'react'

class TodoInput extends Component {

	constructor(props) {
		super(props)
		this.state = {
			inputText: ""
		};
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
					placeholder="Enter your task here =>"  
					value={this.state.inputText}
					onChange={this.handleChange.bind(this)}
				/>
				<button>Just do it</button>
			</div>
		)
	}
}

export default TodoInput
