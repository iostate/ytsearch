import React, { Component } from 'react';

class SearchBar extends Component {

	constructor(props) {
		super(props);

		// update this from the input
		this.state = { term: 'Placeholder' }; 
	}
	render() {
		return (
			<div>

			{/* Change State using only setState({}) */}
				<input 
					value={this.state.term}
					onChange={ event => {
						this.setState({
							term: event.target.value
						});
						console.log(event.target.value);
				}}
				
				/>
				Value of the input: {this.state.term}
			</div>
		); 
	}

	// made the onChange more concise by making a fat arrow function
	// on the input HTML tag

	// all HTML events have native properties associated to it
	// like even
}

export default SearchBar;