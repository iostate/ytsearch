import React, { Component } from 'react';

class SearchBar extends Component {
	constructor(props) {
		super(props);

		// update this from the input
		this.state = { term: '' }; 
	}


	render() {
		return (
			<div className="search-bar">
			{/* Change State using only setState({}) */}
				<input 
					value={this.state.term}
					// onChange emits an event, and we can send the
					// event.target.value to the onInputChange() fn
					// in order to update the state and to send
					// the term to onSearchTermChange() in order to rerender 
					// the new results
					onChange={ event => this.onInputChange(event.target.value)} />
			</div>
		); 
	}

	onInputChange(term) {
		// update this.state's term property
		this.setState({term});
		// research YouTube with the new term
		this.props.onSearchTermChange(term);
	}
}

export default SearchBar;