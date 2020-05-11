import React from 'react'
import axios from 'axios'

export default class SkatesList extends React.Component {

	componentDidMount() {
		axios.get('http://localhost:3001/api/v1/skaters')
			// axios.get('https://localhost:3001/api/v1/skaters')
			// axios.get('https://sk8-api.herokuapp.com/api/v1/skaters')
			.then(data => console.log(data))
	}

	render() {
		return (
			<>
				<h1>Get/ Skaters</h1>
			</>
		)
	}
}