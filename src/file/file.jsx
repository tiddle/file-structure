import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './file.css';

class File extends Component {
	render() {
		return (
			<li>
				<a href='/'>
					<span className='file__name'>{this.props.name}</span>
					<span className='file__size'>{this.props.size}</span>
				</a>
			</li>
		);
	}
}

File.propTypes = {
	name: PropTypes.string.isRequired,
	size: PropTypes.number.isRequired
};

export default File;
