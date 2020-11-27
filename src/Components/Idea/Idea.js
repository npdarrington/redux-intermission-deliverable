import React from 'react';
import { connect } from 'react-redux';
import { deleteIdea } from '../../Redux/Ideas/Ideas.actions';

import './Idea.css';

const Idea = ({ ideaId, idea, deleteIdea }) => {
	return (
		<article className='idea-card'>
			<section className='idea-card-head'>
				<h5 onClick={() => deleteIdea(ideaId)}>Delete</h5>
				<h5>Favorite</h5>
			</section>
			<section className='idea-card-body'>
				<h2>{idea.title}</h2>
				<p>{idea.idea}</p>
			</section>
		</article>
	);
};

const mapDispatchToProps = dispatch => ({
	deleteIdea: id => dispatch(deleteIdea(id)),
});

export default connect(null, mapDispatchToProps)(Idea);
