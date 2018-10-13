import React, { Component } from 'react';
import Folder from './folder/folder';
import './App.css';

const folderStructure = [
	{
		type: 'folder',
		name: 'Folder 1',
		content: [
			{
				type: 'folder',
				name: 'Folder 2',
				content: [
					{
						type: 'file',
						name: 'Chapstick.doc',
						size: 1024
					},
					{
						type: 'file',
						name: 'Hello.jpg',
						size: 2024
					}
				]
			}
		]
	},
	{
		type: 'file',
		name: 'Not a folder',
		size: 3000
	}
];

class App extends Component {
	render() {
		return (
			<div className="App">
				<Folder folderStructure={folderStructure} closed={false} />
			</div>
		);
	}
}

export default App;
