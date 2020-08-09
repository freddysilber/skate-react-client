import React from 'react'

const SkatersList = props => {
	const listSkaters = () => {
		return props.skaters.map(skater => {
			return <p>{skater.id} - {skater.type} - {skater.attributes.first_name} {skater.attributes.last_name}</p>
		})
	}
	return (
		<>
			<h1>Skaters List</h1>
			{listSkaters()}
		</>
	)
}

export default SkatersList