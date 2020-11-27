import React from 'react';

import './Idea.css';

const Idea = ({ idea: { id, title, idea } }) => {
	return (
		<article className='idea-card'>
			<section className='idea-card-head'>
				<h5>Delete</h5>
				<h5>Favorite</h5>
			</section>
			<section className='idea-card-body'>
				<h2>{title}</h2>
				<p>{idea}</p>
			</section>
		</article>
	);
};

export default Idea;
