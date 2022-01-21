export const state = () => ({
	language : 'en-US',
  });
export const mutations = {
	SET_LANGUAGE(state,payloads) {
		state.language = payloads;
	}
}

export const getters = {
	Language(state)
	{
		return state.language;
	}
}