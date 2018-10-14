import React, { Component } from 'react';
import Description from '@material-ui/icons/Description';
import PropTypes from 'prop-types';
import './file.css';

class File extends Component {
	render() {
		return (
			<a href={this.props.name} className="file">
				<span className="file__icon"><Description /></span>
				<span className="file__name">{this.props.name}</span>
				<span className="file__size">{this.props.size}</span>
			</a>
		);
	}
}

File.propTypes = {
	name: PropTypes.string.isRequired,
	size: PropTypes.number.isRequired
};

export default File;
