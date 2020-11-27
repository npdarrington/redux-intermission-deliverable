export const addIdea = idea => ({
	type: 'ADD_IDEA',
	idea,
});

export const deleteIdea = id => ({
	type: 'DELETE_IDEA',
	id,
});

export const favoriteIdea = id => ({
	type: 'FAVORITE_IDEA',
	id,
});
