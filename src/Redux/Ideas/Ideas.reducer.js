export const ideas = (state = [], action) => {
	switch (action.type) {
		case 'ADD_IDEA':
			return [...state, { id: Date.now(), idea: action.idea, favorite: false }];
		case 'DELETE_IDEA':
			return state.filter(idea => idea.id !== action.id);
		default:
			return state;
	}
};
