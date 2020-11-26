import React, { useState } from 'react';

function Form() {
	const [title, setTitle] = useState('');
	const [idea, setIdea] = useState('');
	const [error, setError] = useState('');

	const validateIdea = () => {
		if (!title || !idea) {
			setError('A title and idea must be filled in');
		} else {
			// do successful submit here
		}
	};

	return (
		<section className='form'>
			<label htmlFor='Title'>Title:</label>
			<input name='title' value={title} type='text' />
			<label htmlFor='Idea'>Idea:</label>
			<input name='title' value={idea} type='text' />
			<button type='button' onClick={validateIdea}>
				Submit
			</button>
		</section>
	);
}
export default Form;
