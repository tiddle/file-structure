import React from 'react';
import { shallow } from 'enzyme';
import FolderButton from './folder-button';

it('renders without crashing', () => {
	const testProps = [{
		type: 'file',
		name: 'test'
	}]
	shallow(<FolderButton name="the name"/>);
});
