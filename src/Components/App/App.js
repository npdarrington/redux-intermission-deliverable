import React from 'react';

import Form from '../Form/Form';
import IdeasContainer from '../IdeasContainer/IdeasContainer';

import './App.css';

const App = () => {
	return (
		<main className='App'>
			<h1>Redux Ideabox</h1>
			<Form />
			<IdeasContainer />
		</main>
	);
};

export default App;
