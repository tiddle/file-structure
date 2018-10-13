import React from 'react';
import ReactDOM from 'react-dom';
import File from './file';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<File />, div);
  ReactDOM.unmountComponentAtNode(div);
});
