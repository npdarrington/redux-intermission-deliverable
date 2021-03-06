import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from '../../Redux/rootReducer';
import '@testing-library/jest-dom';

import Form from './Form';

const store = createStore(rootReducer);

describe('Form', () => {
	beforeEach(() => {
		render(
			<Provider store={store}>
				<Form />
			</Provider>
		);
	});

	test('should render the form', () => {
		expect(screen.getByPlaceholderText('Add A Title')).toBeInTheDocument();
		expect(screen.getByPlaceholderText('Add Your Idea')).toBeInTheDocument();
		expect(screen.getByRole('button', { name: 'Submit' })).toBeInTheDocument();
	});

	test('should all user to type inside inputs', () => {
		const titleInput = screen.getByPlaceholderText('Add A Title');
		const ideaInput = screen.getByPlaceholderText('Add Your Idea');
		userEvent.type(titleInput, 'Test Title');
		userEvent.type(ideaInput, 'Test Idea');
		expect(titleInput.value).toBe('Test Title');
		expect(ideaInput.value).toBe('Test Idea');
	});

	test('should show error if either title or idea input is empty on submit', () => {
		const titleInput = screen.getByPlaceholderText('Add A Title');
		const submitBtn = screen.getByRole('button', { name: 'Submit' });
		userEvent.type(titleInput, 'Test Title');
		userEvent.click(submitBtn);
		expect(
			screen.getByText('A title and idea must be filled in')
		).toBeInTheDocument();
	});

	test('should clear inputs on successful submit', () => {
		const titleInput = screen.getByPlaceholderText('Add A Title');
		const ideaInput = screen.getByPlaceholderText('Add Your Idea');
		const submitBtn = screen.getByRole('button', { name: 'Submit' });
		userEvent.type(titleInput, 'Test Title');
		userEvent.type(ideaInput, 'Test Idea');
		userEvent.click(submitBtn);
		expect(titleInput.value).toBe('');
		expect(ideaInput.value).toBe('');
	});
});
