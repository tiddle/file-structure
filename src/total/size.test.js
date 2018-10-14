import React from 'react';
import ReactDOM from 'react-dom';
import Size from './size';

it('renders without crashing', () => {
	const test = [
		{
			type: 'file',
			name: 'aa',
			size: 1
		}
	];
	const div = document.createElement('div');
	ReactDOM.render(<Size folderStructure={test} />, div);
	ReactDOM.unmountComponentAtNode(div);
});
