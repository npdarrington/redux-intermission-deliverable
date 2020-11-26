import React from 'react';
import { connect } from 'react-redux';

import './IdeasContainer.css';

const IdeasContainer = ({ ideas }) => {
	return (
		<section className='ideas-container'>
			<h1>A new idea is here!</h1>
		</section>
	);
};

const mapStateToProps = state => ({
	ideas: state.ideas,
});

export default IdeasContainer;
