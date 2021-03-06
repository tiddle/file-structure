import React, { Component } from 'react';
import PropTypes from 'prop-types';

import File from '../file/file';
import FolderButton from '../folder-button/folder-button';
import './folder.css';

class Folder extends Component {
	render() {
		return (
			<ul className={`folder ${this.props.className}`}>
				{this.props.folderStructure &&
					this.props.folderStructure.reduce((acc, curr) => {
						if (curr.type === 'file') {
							acc.push(
								<li className="folder__item" key={curr.name}>
									<File {...curr} key={curr.name} />
								</li>
							);
						} else {
							acc.push(
								<li className="folder__item" key={curr.name}>
									<FolderButton
										name={curr.name}
										children={curr.children}
									/>
								</li>
							);
						}
						return acc;
					}, [])}
			</ul>
		);
	}
}

Folder.propTypes = {
	folderStructure: PropTypes.arrayOf(
		PropTypes.shape({
            type: PropTypes.string.isRequired,
			name: PropTypes.string.isRequired,
			size: PropTypes.number,
			children: PropTypes.array
		}).isRequired
	),
	closed: PropTypes.bool,
	className: PropTypes.string
};

Folder.defaultPropTypes = {
	closed: true,
	className: 'folder__container'
};

export default Folder;
