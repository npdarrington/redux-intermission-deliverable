import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from '../../Redux/rootReducer';
import '@testing-library/jest-dom';

import Idea from './Idea';

const store = createStore(rootReducer);
