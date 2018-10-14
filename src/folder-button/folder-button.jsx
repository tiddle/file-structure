import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
	FolderOpen,
	Folder as FolderClosed,
	ExpandLess,
	ExpandMore
} from '@material-ui/icons';

import './folder-button.css';
import Folder from '../folder/folder';

class FolderButton extends Component {
	constructor(props) {
		super(props);

		this.toggleFolder = this.toggleFolder.bind(this);
		this.state = {
			closed: this.props.closed
		};
	}

	toggleFolder(e) {
		e.preventDefault();

		this.setState({
			closed: !this.state.closed
		});
	}

	render() {
		return (
			<div className="folder-button">
				<button
					onClick={this.toggleFolder}
					className="folder-button__button"
				>
					<span className="folder-button__icon">
						{this.state.closed ? (
							<>
								<ExpandMore />
								<FolderClosed />
							</>
						) : (
							<>
								<ExpandLess />
								<FolderOpen />
							</>
						)}
					</span>
					<span className="folder-button__name">
						{this.props.name}
					</span>
				</button>
				<Folder
					folderStructure={this.props.children}
					className={
						`folder__container ` +
						(this.state.closed
							? 'folder__container--closed'
							: 'folder__container--open')
					}
				/>
			</div>
		);
	}
}

FolderButton.propTypes = {
	name: PropTypes.string,
	closed: PropTypes.bool
};

FolderButton.defaultPropTypes = {
	name: '',
	closed: true
};

export default FolderButton;
