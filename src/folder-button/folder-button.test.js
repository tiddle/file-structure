import React from 'react';
import { shallow } from 'enzyme';
import FolderButton from './folder-button';

it('renders without crashing', () => {
	shallow(<FolderButton />);
});
