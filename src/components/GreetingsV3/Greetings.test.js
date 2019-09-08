import React from 'react';
import ReactDOM from 'react-dom';
import GreetingsV3 from './GreetingsV3';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<GreetingsV3 />, div);
  ReactDOM.unmountComponentAtNode(div);
});
