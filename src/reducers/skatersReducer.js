export const skatersReducer = (state = {
	skaters: [],
	loading: false
}, action) => {
	switch (action.type) {
		case 'LOADING':
			return {
				...state,
				skaters: [...state.skaters],
				loading: true
			}
		case 'ADD_SKATERS':
			return {
				...state,
				skaters: [...action.skaters.data],
				loading: false
			}
		default:
			return state
	}
}