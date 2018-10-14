import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { totalFileCount } from './util';

class FileCount extends Component {
	render() {
		return (
			<p>
                File Count: {totalFileCount(this.props.folderStructure)}
			</p>
		);
	}
}

FileCount.propTypes = {
	folderStructure: PropTypes.arrayOf(
		PropTypes.shape({
			name: PropTypes.string.isRequired,
			size: PropTypes.number,
			children: PropTypes.array
		}).isRequired
	)
};

export default FileCount;
