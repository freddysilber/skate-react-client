import React from 'react'
import { SkatersList } from '../components'
import { connect } from 'react-redux'
import { fetchSkaters } from '../actions/skatersActions'

class SkatersContainer extends React.Component {

	componentDidMount() {
		this.props.fetchSkaters()
	}

	render() {
		return this.handleLoading()
	}

	handleLoading = () => {
		return this.props.loading ? <h1>LOADING</h1> : <SkatersList skaters={this.props.skaters} />
	}
}

const mapStateToProps = state => {
	return {
		skaters: state.skaters.skaters,
		loading: state.skaters.loading
	}
}

export default connect(mapStateToProps, { fetchSkaters })(SkatersContainer)