import React from 'react';
import ReactDOM from 'react-dom';
import GreetingsV1 from './GreetingsV1';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<GreetingsV1 />, div);
  ReactDOM.unmountComponentAtNode(div);
});
