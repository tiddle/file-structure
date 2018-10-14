import React, { Component } from 'react';
import axios from 'axios';

import Folder from './folder/folder';
import Size from './total/size';
import FileCount from './total/file-count';
import './App.css';

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			folderStructure: []
		};
	}

	componentDidMount() {
		axios
			.get('https://chal-locdrmwqia.now.sh/')
			.then(response => {
				this.setState({
					folderStructure: response.data.data
				});
			})
			.catch(error => {
				this.setState({
					error: error
				});
			});
	}

	render() {
		return (
			<div className="App">
				{this.state.folderStructure.length > 0 && (
					<>
						<Folder
							folderStructure={this.state.folderStructure}
							closed={false}
						/>
						<Size folderStructure={this.state.folderStructure} />
						<FileCount
							folderStructure={this.state.folderStructure}
						/>
					</>
				)}
				{this.state.error && <pre>{this.state.error.message}</pre>}
				<p>
					Please note that there are sometimes errors in the console
					about duplicate keys. I'm ok with this error as the api
					spits out file names that are the same on the same level
					which isn't really possible in real life.
				</p>
			</div>
		);
	}
}

export default App;
