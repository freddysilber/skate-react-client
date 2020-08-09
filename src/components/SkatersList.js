import React from 'react'

const SkatersList = props => {
	const listSkaters = () => {
		return props.skaters.map(skater => {
			return <h1>{skater.id} - {skater.type} - {skater.attributes.first_name} {skater.attributes.last_name}</h1>
		})
	}
	return listSkaters()
}

export default SkatersList