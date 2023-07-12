import React from 'react';
import 'tachyons';

const SearchBox = ({ searchfield, searchChange }) => {
	return (
		<div className = 'pa-2 ma3'>
			<input 
				className = 'bw1 pa2 ma3 ba b--green bg-lightest-blue'
				type='search' 
				placeholder = 'Search Robots'
				onChange = { searchChange }
			/>
			
		</div>
	
	);
}

export default SearchBox;