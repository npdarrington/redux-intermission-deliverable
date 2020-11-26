import React, { useState } from 'react';

import Form from '../Form/Form';
import IdeasContainer from '../IdeasContainer/IdeasContainer';

import './App.css';

function App() {
	return (
		<main className='App'>
			<Form />
			<IdeasContainer />
		</main>
	);
}

export default App;
