import React from 'react';
import { connect } from 'react-redux';
import { deleteIdea, favoriteIdea } from '../../Redux/Ideas/Ideas.actions';

import FavoriteImg from '../../assets/images/favorite-idea.png';
import UnfavoriteImg from '../../assets/images/unfavorite-idea.png';
import DeleteImg from '../../assets/images/delete-active.svg';

import './Idea.css';

const Idea = ({ ideaId, idea, deleteIdea, favoriteIdea, favorited }) => {
	return (
		<article className='idea-card'>
			<section className='idea-card-head'>
				<img
					src={DeleteImg}
					alt='Delete Idea'
					onClick={() => deleteIdea(ideaId)}
				/>
				<img
					src={favorited ? FavoriteImg : UnfavoriteImg}
					alt={favorited ? `Unfavorite Idea` : `Favorite Idea`}
					onClick={() => favoriteIdea(ideaId)}
				/>
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
	favoriteIdea: id => dispatch(favoriteIdea(id)),
});

export default connect(null, mapDispatchToProps)(Idea);
