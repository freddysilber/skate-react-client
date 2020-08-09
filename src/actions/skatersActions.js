import axios from 'axios'
import { api } from '../utils/apiRoutes'

export const fetchSkaters = () => {
	return dispatch => {
		dispatch({ type: 'LOADING' })
		axios.get(api.skaters)
			.then(data => dispatch({ type: 'ADD_SKATERS', skaters: data.data }))
			.catch(error => console.error('error', error))
	}
}