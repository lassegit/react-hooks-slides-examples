import React from 'react';
import ReactDOM from 'react-dom';
import GreetingsV4 from './GreetingsV4';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<GreetingsV4 />, div);
  ReactDOM.unmountComponentAtNode(div);
});
