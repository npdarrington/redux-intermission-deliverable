import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from '../../Redux/rootReducer';
import '@testing-library/jest-dom';

import IdeasContainer from './IdeasContainer';

const mockIdeas = [
	{
		id: 1,
		idea: {
			title: 'Test Title 1',
			idea: 'Test Idea 1',
		},
		favorite: false,
	},
	{
		id: 2,
		idea: {
			title: 'Test Title 2',
			idea: 'Test Idea 2',
		},
		favorite: false,
	},
];

const store = createStore(rootReducer, { ideas: mockIdeas });

describe('IdeasContainer', () => {
	test('should render all ideas to the page', () => {
		render(
			<Provider store={store}>
				<IdeasContainer />
			</Provider>
		);
		expect(screen.getByText('Test Title 1')).toBeInTheDocument();
		expect(screen.getByText('Test Idea 1')).toBeInTheDocument();
		expect(screen.getByText('Test Title 2')).toBeInTheDocument();
		expect(screen.getByText('Test Idea 2')).toBeInTheDocument();
	});
});
