import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Filesize from 'filesize';

import { totalSizeCalculator } from './util';

class Size extends Component {
	render() {
		return (
			<p>
				Total size:{' '}
				{Filesize(totalSizeCalculator(this.props.folderStructure))}
			</p>
		);
	}
}

Size.propTypes = {
	folderStructure: PropTypes.arrayOf(
		PropTypes.shape({
			name: PropTypes.string.isRequired,
			size: PropTypes.number,
			children: PropTypes.array
		}).isRequired
	)
};

export default Size;
