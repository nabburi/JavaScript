import React, { Component } from 'react';

class RefDemos extends Component {
	constructor(props) {
		super(props);
		this.inputRef = React.createRef();
		this.cbRef = null;
		this.setCbRef = (element) => {
			this.cbRef = element;
		};
	}

	componentDidMount() {
		if (this.cbRef) {
			this.cbRef.focus();
		}
		// this.creteRef.current.focus()
		// console.log(this.creteRef)
	}

	clickHandler = () => {
		alert(this.creteRef.current.value);
	};

	render() {
		return (
			<div>
				<input type="text" ref={this.inputRef} />
				<input type="text" ref={this.setCbRef} />
				<button onClick={this.clickHandler}>Submit</button>
			</div>
		);
	}
}

export default RefDemos;
