import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from '../../Redux/rootReducer';
import '@testing-library/jest-dom';

import Idea from './Idea';

const store = createStore(rootReducer);

describe('Idea', () => {
	test('should render an idea to the screen', () => {
		const mockIdea = {
			id: 1,
			idea: {
				title: 'Test Title',
				idea: 'Test Idea',
			},
			favorite: false,
		};
		render(
			<Provider store={store}>
				<Idea
					ideaId={mockIdea.id}
					idea={mockIdea.idea}
					deleteIdea={jest.fn()}
					favoriteIdea={jest.fn()}
					favorited={mockIdea.favorite}
				/>
			</Provider>
		);
		expect(screen.getByText('Test Title')).toBeInTheDocument();
		expect(screen.getByText('Test Idea')).toBeInTheDocument();
	});

	test('should render an unfavorited idea by default', () => {
		const mockIdea = {
			id: 1,
			idea: {
				title: 'Test Title',
				idea: 'Test Idea',
			},
			favorite: false,
		};
		render(
			<Provider store={store}>
				<Idea
					ideaId={mockIdea.id}
					idea={mockIdea.idea}
					deleteIdea={jest.fn()}
					favoriteIdea={jest.fn()}
					favorited={mockIdea.favorite}
				/>
			</Provider>
		);
		expect(screen.getByAltText('Favorite Idea')).toBeInTheDocument();
	});

	test('should render a favorite icon for favorited ideas', () => {
		const mockIdea = {
			id: 1,
			idea: {
				title: 'Test Title',
				idea: 'Test Idea',
			},
			favorite: true,
		};
		render(
			<Provider store={store}>
				<Idea
					ideaId={mockIdea.id}
					idea={mockIdea.idea}
					deleteIdea={jest.fn()}
					favoriteIdea={jest.fn()}
					favorited={mockIdea.favorite}
				/>
			</Provider>
		);
		expect(screen.getByAltText('Unfavorite Idea')).toBeInTheDocument();
	});
});
