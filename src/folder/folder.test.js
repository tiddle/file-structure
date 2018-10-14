import React from 'react';
import ReactDOM from 'react-dom';
import Folder from './folder';

const file = {
	name: 'a file.doc',
	size: 1024,

}

it('renders without crashing', () => {
	const div = document.createElement('div');
	ReactDOM.render(<Folder />, div);
	ReactDOM.unmountComponentAtNode(div);
});

it('renders a file', () => {
	const div = document.createElement('div');
	ReactDOM.render(<Folder folderStructure={[file]} />, div);
	ReactDOM.unmountComponentAtNode(div);
});
