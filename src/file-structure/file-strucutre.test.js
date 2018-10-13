import React from 'react';
import ReactDOM from 'react-dom';
import FileStructure from './file-structure';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<FileStructure />, div);
  ReactDOM.unmountComponentAtNode(div);
});
