import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ReactDOM from 'react-dom'
import Header from './views/Header'
import Content from './views/Content'

class Index extends Component {
	
	render () {
		return (
			<div>
				<Header />
				<Content />
			</div>
		)
	}
}

ReactDOM.render(
	<Index />,
	document.getElementById('root')
)