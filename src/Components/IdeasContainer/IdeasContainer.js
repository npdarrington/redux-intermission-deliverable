import React from 'react';
import { connect } from 'react-redux';

import './IdeasContainer.css';

const IdeasContainer = ({ ideas }) => {
	return (
		<section className='ideas-container'>
			{ideas.length < 1 && <h2>Add a new idea to your list!</h2>}
			{ideas.map(idea => (
				<h3>A new idea goes here!</h3>
			))}
		</section>
	);
};

const mapStateToProps = state => ({
	ideas: state.ideas,
});

export default connect(mapStateToProps)(IdeasContainer);
