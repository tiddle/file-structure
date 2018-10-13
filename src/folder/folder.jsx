import React, { Component } from 'react';
import PropTypes from 'prop-types';
import File from '../file/file';
import './folder.css';

class Folder extends Component {
	constructor(props) {
		super(props);

		this.toggleFolder = this.toggleFolder.bind(this);
		this.state = {
			closed: this.props.closed
		};
	}

	toggleFolder() {
		console.log('in here');
		this.setState({
			closed: !this.state.closed
		});
	}

	render() {
		return (
			<ul
				className={
					`folder__container ` +
					(this.state.closed
						? 'folder__container--closed'
						: 'folder__container--open')
				}
				onClick={this.toggleFolder}
			>
				{this.props.folderStructure.reduce((acc, curr) => {
					if (!curr.content) {
						acc.push(<File {...curr} key={curr.name} />);
					} else {
						acc.push(
							<li><a href="/"><span>folder</span><span>{curr.name}</span></a>
							<Folder
								folderStructure={curr.content}
								key={curr.name}
							/></li>
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
			name: PropTypes.string.isRequired,
			size: PropTypes.number,
			content: PropTypes.array
		}).isRequired
	),
	closed: PropTypes.bool
};

Folder.defaultPropTypes = {
	closed: true
};

export default Folder;
