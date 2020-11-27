import React from 'react';
import { connect } from 'react-redux';

import Idea from '../Idea/Idea';

import './IdeasContainer.css';

const IdeasContainer = ({ ideas }) => {
	return (
		<section className='ideas-container'>
			{ideas.length < 1 && <h2>Add a new idea to your list!</h2>}
			{ideas.map(idea => (
				<Idea
					key={idea.id}
					ideaId={idea.id}
					idea={idea.idea}
					favorited={idea.favorite}
				/>
			))}
		</section>
	);
};

const mapStateToProps = state => ({
	ideas: state.ideas,
});

export default connect(mapStateToProps)(IdeasContainer);
