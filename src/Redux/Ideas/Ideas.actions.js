export const addIdea = idea => ({
	type: 'ADD_IDEA',
	idea,
});

export const deleteIdea = idea => ({
	type: 'DELETE_IDEA',
	idea,
});
