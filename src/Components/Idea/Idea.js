import React from 'react';

import './Idea.css';

const Idea = ({ id, title, idea }) => {
	return (
		<article className='idea-card'>
			<section className='idea-card-options'>
				<h2>Delete</h2>
				<h2>Favorite</h2>
			</section>
		</article>
	);
};

export default Idea;
