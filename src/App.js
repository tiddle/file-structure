import React, { Component } from 'react';
import Folder from './folder/folder';
import './App.css';

const folderStructure = [
	{
		type: 'file',
		name: 'assurance_interface_multi_tasking.gif',
		size: 9080
	},
	{
		type: 'folder',
		name: 'cross-platform',
		children: [
			{
				type: 'folder',
				name: 'bluetooth',
				children: [
					{
						type: 'folder',
						name: 'optical',
						children: [
							{
								type: 'folder',
								name: 'redundant',
								children: []
							},
							{
								type: 'file',
								name: 'checking_account.png',
								size: 78944
							}
						]
					},
					{
						type: 'folder',
						name: 'cross-platform',
						children: []
					},
					{
						type: 'folder',
						name: 'redundant',
						children: [
							{
								type: 'file',
								name: 'panel_e_commerce.mpeg',
								size: 1494
							},
							{
								type: 'folder',
								name: '1080p',
								children: []
							},
							{
								type: 'file',
								name: 'checking_account_representative.shtml',
								size: 4307
							},
							{
								type: 'file',
								name: 'ports_won_portals.mp4',
								size: 92027
							}
						]
					},
					{
						type: 'file',
						name: 'international.html',
						size: 6874
					}
				]
			},
			{
				type: 'file',
				name: 'optical.png',
				size: 23683
			}
		]
	},
	{
		type: 'file',
		name: 'embrace_deposit.png',
		size: 18499
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
