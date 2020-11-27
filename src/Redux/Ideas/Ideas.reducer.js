export const ideas = (state = [], action) => {
	switch (action.type) {
		case 'ADD_IDEA':
			return [...state, { id: Date.now(), idea: action.idea, favorite: false }];
		case 'DELETE_IDEA':
			return state.filter(idea => idea.id !== action.id);
		case 'FAVORITE_IDEA':
			const favoriteIdea = state.find(idea => idea.id === action.id);
			favoriteIdea.favorite = !favoriteIdea.favorite;
			return state;
		default:
			return state;
	}
};
