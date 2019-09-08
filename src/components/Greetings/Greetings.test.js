import React from 'react';
import ReactDOM from 'react-dom';
import Greetings from './Greetings';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Greetings />, div);
  ReactDOM.unmountComponentAtNode(div);
});
