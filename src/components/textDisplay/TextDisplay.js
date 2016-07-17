import React, {Component} from 'react'
import TextInput from '../textInput/TextInput'

class TextDisplay extends Component {

	handleClick() {
		this.props.deleteLetter()
	}

	render() {
		return (
			<div>
				<div>Hey, I am displaying text: {this.props.text}</div>
				<button onClick={this.handleClick.bind(this)}>Delete One Letter</button>
			</div>
		)
	}
}

export default TextDisplay