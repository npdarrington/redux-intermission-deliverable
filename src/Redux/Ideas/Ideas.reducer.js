export const ideas = (state = [], action) => {
	switch (action.type) {
		case 'ADD_IDEA':
			return [...state, { id: Date.now(), idea: action.idea, favorite: false }];

		default:
			return state;
	}
};
