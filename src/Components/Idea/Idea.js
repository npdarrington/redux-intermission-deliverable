import React from 'react';

import './Idea.css';

const Idea = ({ id, title, idea }) => {
	return (
		<article className='idea-card'>
			<section className='idea-card-head'>
				<h2>Delete</h2>
				<h2>Favorite</h2>
			</section>
			<section className='idea-card-body'>
				<h2>Title goes here</h2>
				<p>Body goes here</p>
			</section>
		</article>
	);
};

export default Idea;
