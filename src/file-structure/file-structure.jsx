import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './file-structure.css';


class FileStructure extends Component {
	render() {
		return (
			<ul className="App">
                {this.props.folderStructure.reduce((acc, curr) => {


                }, [])}
			</ul>
		);
	}
}

FileStructure.propTypes = {
	folderStructure: PropTypes.array(
		PropTypes.shape({
			name: PropTypes.string.isRequired,
			size: PropTypes.number,
			content: PropTypes.array
		})
	)
};

export default FileStructure;
