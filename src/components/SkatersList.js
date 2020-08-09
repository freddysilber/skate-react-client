import React from 'react'

const SkatersList = props => {
	const listSkaters = () => {
		const skaters = props.skaters.data
		// if (props.skaters.data) {
		return skaters.map(skater => {
			console.log(skater)
			return <h1>{skater.id} - {skater.type} - {skater.attributes.first_name} {skater.attributes.last_name}</h1>
		})
		// } else {
		// 	return null
		// }
	}
	return listSkaters()
}

export default SkatersList