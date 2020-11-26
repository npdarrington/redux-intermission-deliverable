import React, { useState } from 'react';

function Form() {
	const [title, setTitle] = useState('');
	const [idea, setIdea] = useState('');
	const [error, setError] = useState('');

	const validateIdea = () => {
		if (!title || !idea) {
			setError('A title and idea must be filled in');
		} else {
			setError('');
			// do successful submit here
		}
	};

	return (
		<section className='form'>
			{error && <h2>{error}</h2>}
			<label htmlFor='Title'>Title:</label>
			<input
				name='title'
				value={title}
				type='text'
				onChange={event => setTitle(event.target.value)}
			/>
			<label htmlFor='Idea'>Idea:</label>
			<input
				name='title'
				value={idea}
				type='text'
				onChange={event => setIdea(event.target.value)}
			/>
			<button type='button' onClick={validateIdea}>
				Submit
			</button>
		</section>
	);
}
export default Form;
