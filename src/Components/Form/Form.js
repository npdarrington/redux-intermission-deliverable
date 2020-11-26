import React, { useState } from 'react';

function Form() {
	return (
		<section className='form'>
			<label htmlFor='Title'>Title:</label>
			<input name='title' value={title} type='text' />
			<label htmlFor='Idea'>Idea:</label>
			<input name='title' value={idea} type='text' />
			<button type='button'>Submit</button>
		</section>
	);
}
export default Form;
