import { combineReducers } from 'redux';
import { ideas } from './Ideas/Ideas.reducer';

const rootReducer = combineReducers({
	ideas,
});

export default rootReducer;
