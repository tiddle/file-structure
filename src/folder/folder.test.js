import React from 'react';
import { shallow } from 'enzyme';
import Folder from './folder';

it('renders without crashing', () => {
	shallow(<Folder />);
});

it('should render a file', () => {
	const test = [
		{
			type: 'file',
			name: 'folder.css',
			size: 1
		}
	];

	expect(shallow(<Folder folderStructure={test} />).find('File').length).toBe(
		1
	);
});

it('should render a folder', () => {
	const test = [
		{
			type: 'folder',
			name: 'folder.css'
		}
	];

	expect(
		shallow(<Folder folderStructure={test} />).find('FolderButton').length
	).toBe(1);
});
