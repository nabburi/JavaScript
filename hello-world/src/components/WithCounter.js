import React, { Component } from 'react';

const WithCounter = (WrappedComponent, incrementNumber) => {
	class withCounter extends Component {
		constructor(props) {
			super(props);

			this.state = {
				count: 0,
			};
		}

		incrementCount = () => {
			this.setState((prevState) => {
				return {
					count: prevState.count + incrementNumber,
				};
			});
		};

		render() {
			return <WrappedComponent count={this.state.count} incrementCount={this.incrementCount} {...this.props} />;
		}
	}

	return withCounter;
};

export default WithCounter;
